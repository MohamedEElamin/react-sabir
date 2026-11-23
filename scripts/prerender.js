const fs = require("node:fs/promises");
const http = require("node:http");
const path = require("node:path");
const { chromium } = require("playwright");

const buildDirectory = path.resolve(__dirname, "..", "build");
const siteOrigin = "https://www.sabirelsir.ae";
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

async function findStaticFile(pathname) {
  const decodedPath = decodeURIComponent(pathname);
  const candidate = path.resolve(buildDirectory, `.${decodedPath}`);
  if (
    candidate !== buildDirectory &&
    !candidate.startsWith(`${buildDirectory}${path.sep}`)
  ) {
    return null;
  }

  for (const filePath of [
    candidate,
    path.join(candidate, "index.html"),
  ]) {
    try {
      if ((await fs.stat(filePath)).isFile()) return filePath;
    } catch (error) {
      if (error.code !== "ENOENT" && error.code !== "ENOTDIR") throw error;
    }
  }
  return null;
}

async function startStaticServer() {
  const fallbackHtml = await fs.readFile(
    path.join(buildDirectory, "index.html"),
  );
  const server = http.createServer(async (request, response) => {
    if (request.method !== "GET" && request.method !== "HEAD") {
      response.writeHead(405).end();
      return;
    }

    try {
      const requestUrl = new URL(request.url, "http://localhost");
      let filePath = await findStaticFile(requestUrl.pathname);
      if (!filePath && path.extname(requestUrl.pathname)) {
        response.writeHead(404).end();
        return;
      }
      if (!filePath) {
        let body = fallbackHtml;
        let statusCode = 200;
        try {
          body = await fs.readFile(path.join(buildDirectory, "404.html"));
          statusCode = 404;
        } catch (error) {
          if (error.code !== "ENOENT") throw error;
        }
        response.writeHead(statusCode, {
          "Content-Type": contentTypes[".html"],
        });
        if (request.method === "HEAD") response.end();
        else response.end(body);
        return;
      }

      const body = await fs.readFile(filePath);
      response.writeHead(200, {
        "Content-Type":
          contentTypes[path.extname(filePath)] || "application/octet-stream",
      });
      if (request.method === "HEAD") response.end();
      else response.end(body);
    } catch (error) {
      response.writeHead(500).end();
      console.error(`Failed to serve ${request.url}:`, error);
    }
  });

  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });

  const address = server.address();
  return {
    origin: `http://127.0.0.1:${address.port}`,
    server,
  };
}

function getRoutesFromSitemap() {
  const sitemapPath = path.join(buildDirectory, "sitemap.xml");
  return fs.readFile(sitemapPath, "utf8").then((sitemap) => {
    const urls = Array.from(sitemap.matchAll(/<loc>(.*?)<\/loc>/g), (match) =>
      match[1].trim(),
    );
    if (!urls.length) throw new Error("The XML sitemap has no <loc> entries.");

    const routes = urls.map((url) => {
      const parsedUrl = new URL(url);
      if (parsedUrl.origin !== siteOrigin || parsedUrl.search || parsedUrl.hash) {
        throw new Error(`Unexpected sitemap URL: ${url}`);
      }
      return parsedUrl.pathname;
    });

    if (new Set(routes).size !== routes.length) {
      throw new Error("The XML sitemap contains duplicate routes.");
    }
    return routes;
  });
}

async function createPage(browser, origin) {
  const page = await browser.newPage({
    locale: "en-US",
    serviceWorkers: "block",
    viewport: { width: 1365, height: 900 },
  });
  const pageErrors = [];
  const hydrationErrors = [];
  const consoleErrors = [];

  page.on("pageerror", (error) => pageErrors.push(error));
  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
      if (/hydration|server html|did not match/i.test(message.text())) {
        hydrationErrors.push(message.text());
      }
    }
  });
  await page.route("**/*", async (route) => {
    if (new URL(route.request().url()).origin !== origin) {
      await route.abort();
      return;
    }
    await route.continue();
  });

  return { consoleErrors, hydrationErrors, page, pageErrors };
}

async function verifyPage(page, origin, routePath) {
  const url = new URL(routePath, origin).href;
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.locator("#root h1").first().waitFor({ timeout: 30000 });

  const metadata = await page.evaluate(() => {
    const titles = document.head.querySelectorAll("title");
    const descriptions = document.head.querySelectorAll(
      'meta[name="description"]',
    );
    const canonicals = document.head.querySelectorAll('link[rel="canonical"]');
    const structuredDataErrors = Array.from(
      document.querySelectorAll('script[type="application/ld+json"]'),
      (script) => {
        try {
          JSON.parse(script.textContent);
          return null;
        } catch (error) {
          return error.message;
        }
      },
    ).filter(Boolean);

    return {
      canonical: canonicals[0]?.href,
      canonicalCount: canonicals.length,
      description: descriptions[0]?.content,
      descriptionCount: descriptions.length,
      structuredDataCount: document.querySelectorAll(
        'script[type="application/ld+json"]',
      ).length,
      structuredDataErrors,
      title: titles[0]?.textContent,
      titleCount: titles.length,
    };
  });
  const expectedCanonical = `${siteOrigin}${routePath}`;

  if (
    metadata.titleCount !== 1 ||
    metadata.descriptionCount !== 1 ||
    !metadata.title ||
    !metadata.description
  ) {
    throw new Error(`Missing or duplicate title or description on ${routePath}`);
  }
  if (metadata.canonicalCount !== 1) {
    throw new Error(
      `Expected one canonical link on ${routePath}, found ${metadata.canonicalCount}`,
    );
  }
  if (metadata.canonical !== expectedCanonical) {
    throw new Error(
      `Unexpected canonical on ${routePath}: ${metadata.canonical}`,
    );
  }
  if (!metadata.structuredDataCount || metadata.structuredDataErrors.length) {
    throw new Error(
      `Invalid JSON-LD on ${routePath}: ` +
        `${metadata.structuredDataErrors.join("; ") || "no JSON-LD found"}`,
    );
  }
  return metadata;
}

async function prerenderNotFoundPage(browser, origin) {
  const { page, pageErrors, hydrationErrors } = await createPage(browser, origin);
  try {
    await page.goto(new URL("/__seo_not_found__", origin).href, {
      waitUntil: "domcontentloaded",
      timeout: 45000,
    });
    await page.locator("#root h1").first().waitFor({ timeout: 30000 });

    const metadata = await page.evaluate(() => ({
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      heading: document.querySelector("#root h1")?.textContent,
      robots: document.querySelector('meta[name="robots"]')?.content,
      title: document.title,
    }));
    if (
      !metadata.title ||
      !metadata.heading ||
      metadata.canonical ||
      metadata.robots !== "noindex, nofollow"
    ) {
      throw new Error("The generated not-found page has invalid metadata.");
    }
    if (pageErrors.length || hydrationErrors.length) {
      throw new Error(
        `Browser error on the not-found page: ` +
          `${pageErrors[0]?.message || "none"}. ` +
          `Hydration warning: ${hydrationErrors[0] || "none"}.`,
      );
    }

    await fs.writeFile(
      path.join(buildDirectory, "404.html"),
      await page.content(),
    );
    console.log("Prerendered /404.html");
  } finally {
    await page.close();
  }
}

async function prerender() {
  const routes = await getRoutesFromSitemap();
  const { origin, server } = await startStaticServer();
  let browser;

  try {
    browser = await chromium.launch({ headless: true });
    const routeMetadata = [];

    for (const routePath of routes) {
      const { page, pageErrors, hydrationErrors, consoleErrors } = await createPage(
        browser,
        origin,
      );
      routeMetadata.push({
        routePath,
        ...(await verifyPage(page, origin, routePath)),
      });
      if (pageErrors.length || hydrationErrors.length) {
        throw new Error(
          `Browser error on ${routePath}: ` +
            `${pageErrors[0]?.message || "none"}. ` +
          `Hydration warning: ${hydrationErrors[0] || "none"}. ` +
          `Console error: ${consoleErrors[0] || "none"}`,
        );
      }

      const html = await page.content();
      const outputDirectory =
        routePath === "/"
          ? buildDirectory
          : path.join(buildDirectory, ...routePath.split("/").filter(Boolean));
      await fs.mkdir(outputDirectory, { recursive: true });
      await fs.writeFile(path.join(outputDirectory, "index.html"), html);
      await page.close();
      console.log(`Prerendered ${routePath}`);
    }

    await prerenderNotFoundPage(browser, origin);

    for (const field of ["title", "description"]) {
      const routesByValue = new Map();
      for (const metadata of routeMetadata) {
        const matchingRoutes = routesByValue.get(metadata[field]) || [];
        matchingRoutes.push(metadata.routePath);
        routesByValue.set(metadata[field], matchingRoutes);
      }

      const duplicate = Array.from(routesByValue.entries()).find(
        ([, matchingRoutes]) => matchingRoutes.length > 1,
      );
      if (duplicate) {
        throw new Error(
          `Duplicate ${field} on routes: ${duplicate[1].join(", ")}`,
        );
      }
    }

    for (const routePath of routes) {
      const { page, pageErrors, hydrationErrors, consoleErrors } = await createPage(
        browser,
        origin,
      );
      await verifyPage(page, origin, routePath);
      if (pageErrors.length || hydrationErrors.length) {
        throw new Error(
          `Hydration failed on ${routePath}. ` +
            `Browser error: ${pageErrors[0]?.message || "none"}. ` +
          `Console warning: ${hydrationErrors[0] || "none"}. ` +
          `Console error: ${consoleErrors[0] || "none"}`,
        );
      }
      await page.close();
    }

    const notFound = await createPage(browser, origin);
    try {
      const response = await notFound.page.goto(
        new URL("/__seo_not_found__", origin).href,
        { waitUntil: "domcontentloaded", timeout: 45000 },
      );
      await notFound.page.locator("#root h1").first().waitFor({ timeout: 30000 });
      if (response?.status() !== 404) {
        throw new Error(
          `Expected a 404 status for an unknown route, got ${response?.status()}.`,
        );
      }
      const robots = await notFound.page
        .locator('meta[name="robots"]')
        .getAttribute("content");
      if (robots !== "noindex, nofollow") {
        throw new Error("The not-found route is not marked noindex, nofollow.");
      }
      if (notFound.pageErrors.length || notFound.hydrationErrors.length) {
        throw new Error("The generated not-found page failed hydration.");
      }
    } finally {
      await notFound.page.close();
    }

    console.log(`Hydration-checked ${routes.length} prerendered routes.`);
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
}

prerender().catch((error) => {
  console.error("Static prerendering failed:", error);
  process.exitCode = 1;
});
