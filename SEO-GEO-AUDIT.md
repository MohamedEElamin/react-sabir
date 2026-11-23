# SEO and GEO Audit

## Scope and method

This audit records the initial state of the repository before SEO implementation changes. It is based on the React source, `package.json`, `public/`, and existing tests. The production domain is treated as `https://www.sabirelsir.ae/`, which is the domain used by the majority of the canonical URLs and the existing sitemap.

## Architecture

- React 18.3.1 with Create React App (`react-scripts` 5.0.1) and React Router 6.30.0.
- Client-side rendering only: `src/index.js` mounts the app with `ReactDOM.createRoot`; there is no SSR or static prerendering configuration.
- The app has 14 explicit routes: home, about, services, contact, FAQ, areas index, three area pages, three articles and a blog index, and one video page.
- `i18next` switches English and Arabic content in place without language-specific route URLs. Arabic direction is applied in the app, but there are no separate English and Arabic URLs to support reciprocal `hreflang`.
- `react-helmet-async` is installed and used by most pages; the home page uses the separate `react-helmet` package. Some page metadata is assembled directly through DOM effects.
- No Cloudflare, hosting, redirect, SSR, prerender, or deployment configuration was found in the repository. Production redirect and fallback behavior cannot be confirmed from source.

## Initial SEO implementation

- Several route components define titles, descriptions, canonicals, Open Graph tags, and JSON-LD.
- The areas pages and articles contain structured data; the FAQ page includes FAQPage data; the video page updates metadata and VideoObject data in an effect.
- `public/robots.txt` allows all user agents and points to `sitemap.txt`.
- `public/sitemap.txt` lists all 14 explicit routes using the `.ae` host.
- The initial HTML has a generic Arabic title, a description, and verification tokens, but no canonical, Open Graph or Twitter/X card fallback. Its favicon references both `sabirelsir.com` and a relative image path.

## Findings and risks

### Metadata and canonicals

- Home metadata combines the translated word for “Home” with an Arabic title, uses misspelled alternate hosts (`saberelsir.ae` and `sabirelsir.com`) for Open Graph URL/image, and has no English-specific description. This conflicts with its `.ae` canonical.
- The contact page emits several description and keywords tags, including mixed contact details in a description, and does not localize its title or description coherently.
- The services page emits multiple titles and descriptions; the final title can be the generic translation of “Services”.
- Other page components generally define route-specific titles and descriptions, but Open Graph and Twitter coverage is inconsistent.
- The content is client-rendered. On an unexecuted initial HTML response, route content and page-specific metadata are absent; reliable social previews and indexing of every deep link depend on JavaScript rendering and hosting fallback behavior.
- Language switching changes page content at the same URL. The FAQ page's `en`, `ar`, and `x-default` alternates all point to that same URL, so these are not valid distinct language alternates.
- No explicit not-found route was found. The host's handling of unknown deep links and HTTP status codes is unknown.

### Crawl access and sitemap

- The wildcard robots rule does not block ordinary crawlers, but it does not express a choice for AI search versus model-training crawlers.
- The sitemap is a plain-text URL list rather than XML. It has no `lastmod` values (none should be fabricated), and it is not generated from the route table.
- The repository does not establish whether HTTPS, www/non-www normalization, or route rewrites are configured at the production host.

### Structured data and GEO

- Page-specific structured data exists, but there is no shared `Organization`/`WebSite` entity graph or consistent stable `@id` references.
- Some article and service claims (for example licensing, authority approval, exact timelines, office locations, and credentials) need business or subject-matter verification before being treated as verified facts.
- There is no founder profile page or service-specific landing-page route; the site has a general services page and location pages.
- No distinct bilingual URL pairs exist. Do not publish `hreflang` pairs until language-specific URLs and reciprocal content are implemented.
- No project portfolio route was found in the router. Existing image content should not be converted into project claims without verified project descriptions.

### Rendering, performance, and images

- React Router routes render in the browser. No SSR, prerender, or static export is configured.
- The public image directory includes several large JPEGs, including files over 1 MB and one over 4 MB. This is a risk for LCP and transfer size; compression and responsive delivery need measurement and an image-processing workflow.
- Many image elements do not declare both intrinsic dimensions; image alt text quality is inconsistent. Some images are eagerly loaded without a clearly verified LCP role.
- The HTML loads external CSS/JS and font resources, including duplicate Font Awesome stylesheets and an external Bootstrap stylesheet while Bootstrap is also imported by the application. This increases third-party and render-blocking risk.
- No Lighthouse, Web Vitals field data, production response checks, or browser-based mobile tests were available during the source audit.

## Initial recommended actions

1. Normalize the public metadata fallback and the homepage domain references.
2. Replace duplicate contact and services metadata with one accurate localized set per page.
3. Use a valid XML sitemap and publish explicit AI crawler rules consistent with the company's search/training preference.
4. Add stable site-level Organization and WebSite structured data while avoiding unverifiable details.
5. Remove invalid same-URL `hreflang` tags; add them only after separate language URLs exist.
6. Document client-rendering limitations and confirm static hosting rewrites, canonical host redirects, and HTTP behavior with the deployment owner.
7. Validate all source claims about credentials, authority approvals, office addresses, and approval timing before publication.
8. Measure image delivery, Core Web Vitals, and mobile behavior in a production browser before claiming performance results.
