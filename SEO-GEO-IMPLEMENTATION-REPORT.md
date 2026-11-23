# SEO and GEO Implementation Report

## Implemented

- Added a reusable `SEO` component for localized titles and descriptions, canonical URLs, robots directives, Open Graph, Twitter/X cards, and optional page JSON-LD. It applies the document language and direction and commits metadata immediately instead of deferring it to an animation frame.
- Added a Playwright post-build prerender step. It reads the sitemap routes, renders each route in a browser, writes static route HTML, and checks canonical/title/description output and React hydration. The React 18 entry point now hydrates generated markup and still uses `createRoot` when the root is empty.
- Applied the shared metadata component across all indexable route pages. Corrected the homepage host and image, localized homepage/contact/services metadata, removed duplicate descriptions and titles, and removed the FAQ page's invalid same-URL language alternates.
- Updated the base HTML with a consistent `.ae` title, description, canonical, favicon, Open Graph and Twitter defaults. Removed duplicate CDN Bootstrap and Font Awesome stylesheet requests while retaining the existing analytics and site resources.
- Added site-level `Organization` and `WebSite` JSON-LD with stable IDs, the provided founding year, existing logo, and stated service areas. Deliberately omitted office addresses, contact data, certifications, social profiles, ratings, and other unverified claims.
- Connected area, article, and founder structured data to the stable Organization ID.
- Added `/founder-profile` with English and Arabic content limited to the founder facts provided for this task. No unverified career timeline, publications, institution names, or photograph were added.
- Added an in-app not-found page with `noindex, nofollow`; it is not included in the sitemap.
- Added an XML sitemap listing the public routes. Kept the prior text sitemap and synchronized it for compatibility. No `lastmod` values were invented. The Modern Villa video route has since been removed from both sitemaps.
- Updated `robots.txt`: Google/Bing and selected AI search crawlers can crawl; GPTBot, ClaudeBot, Google-Extended, CCBot, and the cross-vendor `__usage_ai-training` preference token are disallowed. `OAI-SearchBot`, `Claude-SearchBot`, and `PerplexityBot` are explicitly allowed.
- Updated Arabic language handling to recognize `ar` regional language tags.
- Added focused assertions for the shared video-page metadata and founder route links.
- Subsequently removed the Modern Villa video promo and route, including the dedicated page, `VideoObject` data, its test and styles, and an unused video embed component.
- Added bilingual architectural, civil engineering, interior design, engineering project management, and general building service pages with localized metadata, `Service` and `BreadcrumbList` JSON-LD, and internal links from the Services page. Each page includes visible FAQs and matching `FAQPage` JSON-LD.
- Added an accessible, responsive service/description table to the engineering project management page.
- Added a seven-row accessible service/description table to the general building page.
- Added an Arabic-only warehouse, factory, and workshop modification drawings page at `/ar/warehouse-factory-workshop-modification-drawings-sharjah`, including service facts, FAQs, and an accessible summary table.
- Added a bilingual asset valuation section to the Khartoum area page, linked to the Central Bank of Sudan's official 2026 listing and supported by Organization, ProfessionalService, and Service structured data.

## Files changed

- `public/index.html`, `public/robots.txt`, `public/sitemap.xml`, and `public/sitemap.txt`
- `package.json`, `package-lock.json`, `README.md`, and `scripts/prerender.js`
- `src/index.js`
- `src/components/SEO.js`
- `src/App.js`, `src/locales/i18n.js`, `src/components/Home.js`, `About.js`, `Contact.js`, `OurServices.js`, `ArchitecturalServicePage.js`, `CivilEngineeringServicePage.js`, `InteriorDesignServicePage.js`, `EngineeringProjectManagementPage.js`, `GeneralBuildingEngineeringPage.js`, `WarehouseModificationDrawingsPage.js`, `AreasIndex.js`, `AreaPage.js`, `AreaPage.test.js`, `FAQ.js`, `BlogIndex.js`, `BlogArticle.js`, `KhartoumRehabilitationArticle.js`, and `ClimateDesignArticle.js`
- `src/components/FounderProfile.js` and `NotFound.js`
- `src/components/NavBar.js` and `Footer.js`
- `src/components/CanonicalLinks.test.js`
- `src/components/ArchitecturalServicePage.test.js`, `CivilEngineeringServicePage.test.js`, `InteriorDesignServicePage.test.js`, `EngineeringProjectManagementPage.test.js`, `GeneralBuildingEngineeringPage.test.js`, `WarehouseModificationDrawingsPage.test.js`, and `src/styles/ServiceDetail.css`

## Deliberately not implemented

- No server-side rendering or framework migration was introduced. The app remains a Create React App SPA with build-time static snapshots; interactive behavior hydrates in the browser. The snapshots use the English browser locale because English and Arabic currently share the same URLs. Separate Arabic HTML and `hreflang` need locale-specific routes.
- Deployment hosting is not configured in the repository. Confirm that the production host serves each generated nested `index.html` for direct route requests and that Chromium installation is available in its build environment.
- Added one Arabic-only modification drawings route; other English and Arabic pages continue to share URLs. No reciprocal `hreflang` pair was declared because an equivalent English route is not available.
- The architectural, civil, interior design, project management, general building, and modification drawings pages are focused service-specific landing pages; any additional pages should use distinct, accurate content rather than duplicate the service index.
- No new local addresses, LocalBusiness entities, authority approval claims, client reviews, or project descriptions were created.
- Existing images were not recompressed or converted to WebP/AVIF. Several are large and need image-processing plus visual QA; page speed/Core Web Vitals were not measured.
- Existing article statements about authority processes, fees/timelines, office locations, licenses, and credentials were not treated as independently verified. Review them with the company and relevant authorities before relying on them.

## Human and deployment follow-up

- Confirm the canonical host redirects (`https`, `www`) and that direct requests for every React route are served correctly by the production host.
- Verify public office addresses, exact map pins, authority affiliations, founder credentials/membership wording, and regulatory details.
- Add a real founder photograph or verified professional profile links only if supplied and approved.
- Submit `sitemap.xml` in Search Console and inspect live route rendering after deployment.

No ranking, indexing, rich-result, AI-citation, or Core Web Vitals outcome is guaranteed by these source changes.

The `__usage_ai-training` token follows a current IETF Internet-Draft and provider support may vary. The named crawler groups remain the explicit policy; robots.txt preferences are not a technical access control.
