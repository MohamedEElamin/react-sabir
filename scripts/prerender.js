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
const englishWarehousePath =
  "/services/warehouse-factory-workshop-modification-drawings-sharjah";
const arabicWarehousePath =
  "/ar/warehouse-factory-workshop-modification-drawings-sharjah";

function getLocalizedPath(routePath, language) {
  if (routePath === englishWarehousePath && language === "ar") {
    return arabicWarehousePath;
  }
  if (routePath === arabicWarehousePath && language === "en") {
    return englishWarehousePath;
  }

  const englishPath =
    routePath === "/ar" ? "/" : routePath.replace(/^\/ar(?=\/|$)/, "");
  if (language === "en") return englishPath || "/";
  return englishPath === "/" ? "/ar" : `/ar${englishPath}`;
}

function getAttributes(tag) {
  return Object.fromEntries(
    Array.from(tag.matchAll(/([A-Za-z:][A-Za-z0-9:_-]*)="([^"]*)"/g), (match) => [
      match[1],
      match[2],
    ]),
  );
}

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
    const entries = Array.from(sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g), (match) => {
      const location = match[1].match(/<loc>(.*?)<\/loc>/)?.[1]?.trim();
      if (!location) throw new Error("A sitemap URL is missing its <loc> value.");
      const alternates = Object.fromEntries(
        Array.from(
          match[1].matchAll(/<xhtml:link\b([^>]*)\/>/g),
          (alternate) => {
            const attributes = getAttributes(alternate[1]);
            return [attributes.hreflang, attributes.href];
          },
        ),
      );
      return { location, alternates };
    });
    if (!entries.length) throw new Error("The XML sitemap has no <url> entries.");

    const routes = entries.map(({ location, alternates }) => {
      const parsedUrl = new URL(location);
      if (parsedUrl.origin !== siteOrigin || parsedUrl.search || parsedUrl.hash) {
        throw new Error(`Unexpected sitemap URL: ${location}`);
      }
      const expectedAlternates = {
        en: `${siteOrigin}${getLocalizedPath(parsedUrl.pathname, "en")}`,
        ar: `${siteOrigin}${getLocalizedPath(parsedUrl.pathname, "ar")}`,
        "x-default": `${siteOrigin}${getLocalizedPath(parsedUrl.pathname, "en")}`,
      };
      for (const [language, expectedUrl] of Object.entries(expectedAlternates)) {
        if (alternates[language] !== expectedUrl) {
          throw new Error(
            `Invalid ${language} sitemap alternate for ${parsedUrl.pathname}: ` +
              `${alternates[language] || "missing"}`,
          );
        }
      }
      return parsedUrl.pathname;
    });

    if (new Set(routes).size !== routes.length) {
      throw new Error("The XML sitemap contains duplicate routes.");
    }
    const routeSet = new Set(routes);
    for (const routePath of routes) {
      for (const language of ["en", "ar"]) {
        const localizedPath = getLocalizedPath(routePath, language);
        if (!routeSet.has(localizedPath)) {
          throw new Error(
            `The sitemap is missing the ${language} alternate route ` +
              `${localizedPath} for ${routePath}.`,
          );
        }
      }
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

async function verifyPage(page, origin, routePath, routes) {
  const url = new URL(routePath, origin).href;
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.locator("#root h1").first().waitFor({ timeout: 30000 });

  const metadata = await page.evaluate(async () => {
    const titles = document.head.querySelectorAll("title");
    const descriptions = document.head.querySelectorAll(
      'meta[name="description"]',
    );
    const canonicals = document.head.querySelectorAll('link[rel="canonical"]');
    const images = Array.from(document.images);
    const imageDecodeErrors = await Promise.all(
      images.map(async (image) => {
        const originalLoading = image.getAttribute("loading");
        image.loading = "eager";
        try {
          await image.decode();
          return null;
        } catch (error) {
          return error.message;
        } finally {
          if (originalLoading === null) image.removeAttribute("loading");
          else image.setAttribute("loading", originalLoading);
        }
      }),
    );
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
      direction: document.documentElement.dir,
      headingCount: document.querySelectorAll("h1").length,
      htmlLanguage: document.documentElement.lang,
      alternateLinkTags: Array.from(
        document.querySelectorAll('link[rel="alternate"]'),
        (link) => link.outerHTML,
      ),
      images: images.map((image, index) => ({
        alt: image.getAttribute("alt"),
        decodeError: imageDecodeErrors[index],
        height: Number(image.getAttribute("height")),
        naturalHeight: image.naturalHeight,
        naturalWidth: image.naturalWidth,
        src: image.currentSrc || image.src,
        width: Number(image.getAttribute("width")),
      })),
      languageAlternates: Object.fromEntries(
        Array.from(
          document.querySelectorAll('link[rel="alternate"][hreflang]'),
          (link) => [link.getAttribute("hreflang"), link.href],
        ),
      ),
      ogDescription: document.querySelector('meta[property="og:description"]')
        ?.content,
      ogImage: document.querySelector('meta[property="og:image"]')?.content,
      ogTitle: document.querySelector('meta[property="og:title"]')?.content,
      ogUrl: document.querySelector('meta[property="og:url"]')?.content,
      robots: document.querySelector('meta[name="robots"]')?.content,
      structuredDataCount: document.querySelectorAll(
        'script[type="application/ld+json"]',
      ).length,
      structuredDataErrors,
      title: titles[0]?.textContent,
      titleCount: titles.length,
      twitterDescription: document.querySelector('meta[name="twitter:description"]')
        ?.content,
      twitterImage: document.querySelector('meta[name="twitter:image"]')?.content,
      twitterTitle: document.querySelector('meta[name="twitter:title"]')?.content,
      twitterCard: document.querySelector('meta[name="twitter:card"]')?.content,
      internalLinks: Array.from(document.querySelectorAll("a[href]"), (link) => {
        const href = link.getAttribute("href");
        if (!href || href.startsWith("#")) return null;
        const target = new URL(href, window.location.href);
        if (target.origin !== window.location.origin) return null;
        return target.pathname.replace(/\/+$/, "") || "/";
      }).filter(Boolean),
    };
  });
  const expectedCanonical = `${siteOrigin}${routePath}`;
  const language = routePath === "/ar" || routePath.startsWith("/ar/")
    ? "ar"
    : "en";
  const expectedAlternates = {
    en: `${siteOrigin}${getLocalizedPath(routePath, "en")}`,
    ar: `${siteOrigin}${getLocalizedPath(routePath, "ar")}`,
    "x-default": `${siteOrigin}${getLocalizedPath(routePath, "en")}`,
  };

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
  if (
    metadata.htmlLanguage !== language ||
    metadata.direction !== (language === "ar" ? "rtl" : "ltr")
  ) {
    throw new Error(
      `Incorrect document language or direction on ${routePath}: ` +
        `${metadata.htmlLanguage}/${metadata.direction}`,
    );
  }
  if (metadata.headingCount !== 1) {
    throw new Error(
      `Expected one H1 on ${routePath}, found ${metadata.headingCount}`,
    );
  }
  if (metadata.robots !== "index, follow") {
    throw new Error(
      `Unexpected robots directive on ${routePath}: ${metadata.robots}`,
    );
  }
  for (const [locale, expectedUrl] of Object.entries(expectedAlternates)) {
    if (metadata.languageAlternates[locale] !== expectedUrl) {
      throw new Error(
        `Invalid ${locale} hreflang link on ${routePath}: ` +
          `${metadata.languageAlternates[locale] || "missing"} ` +
          `(${metadata.alternateLinkTags.join("; ")})`,
      );
    }
  }
  if (
    metadata.ogUrl !== expectedCanonical ||
    !metadata.ogTitle ||
    !metadata.ogDescription ||
    !metadata.ogImage ||
    !metadata.twitterCard ||
    !metadata.twitterTitle ||
    !metadata.twitterDescription ||
    !metadata.twitterImage
  ) {
    throw new Error(`Missing or inconsistent social metadata on ${routePath}`);
  }
  const imageErrors = metadata.images.filter(
    (image) =>
      image.alt === null ||
      image.decodeError ||
      image.naturalWidth <= 0 ||
      image.naturalHeight <= 0 ||
      !Number.isFinite(image.width) ||
      !Number.isFinite(image.height) ||
      image.width <= 0 ||
      image.height <= 0 ||
      Math.abs(
        image.width / image.height -
          image.naturalWidth / image.naturalHeight,
      ) > 0.02,
  );
  if (imageErrors.length) {
    throw new Error(
      `Invalid or inaccessible images on ${routePath}: ` +
        imageErrors
          .map(
            (image) =>
              `${image.src} (alt=${image.alt === null ? "missing" : "present"}, ` +
              `dimensions=${image.width}x${image.height}, ` +
              `decoded=${!image.decodeError})`,
          )
          .join("; "),
    );
  }
  const invalidInternalLinks = metadata.internalLinks.filter(
    (link) => !routes.has(link),
  );
  if (invalidInternalLinks.length) {
    throw new Error(
      `Internal links on ${routePath} target routes missing from the sitemap: ` +
        invalidInternalLinks.join(", "),
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
    const routeSet = new Set(routes);

    for (const routePath of routes) {
      const { page, pageErrors, hydrationErrors, consoleErrors } = await createPage(
        browser,
        origin,
      );
      routeMetadata.push({
        routePath,
        ...(await verifyPage(page, origin, routePath, routeSet)),
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
      await verifyPage(page, origin, routePath, routeSet);
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
