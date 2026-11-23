# SEO and GEO Validation Report

## Audit summary

The local production build now serves browser-rendered HTML for every sitemap route, with canonical metadata and valid JSON-LD. This is static prerendering followed by React hydration, not React server-side rendering. An independent check of the public deployment found it still serves an older SPA shell, and its sitemap endpoint returns HTML rather than XML; the audited local build is not yet reflected on the live site.

## Issues discovered and fixed

- Corrected case-sensitive `/Services` internal links to `/services`.
- Made the mobile navigation control a semantic button with an accessible label, controlled-menu relationship, and `aria-expanded` state. The document language now reflects the resolved page language.
- Corrected relative image URLs and invalid loading values, added intrinsic image dimensions and lazy loading for below-the-fold content, and fixed an inaccurate promotional image description.
- Fixed oversized service-card images by explicitly allowing CSS sizing to override their intrinsic HTML heights and applying a 16:9 crop. The promotional image retains its intrinsic aspect ratio so it fills the card width without cropping the graphic.
- Shortened overly long page titles and descriptions and removed unverified licensing/location claims from metadata.
- Removed `areaServed` from `BlogPosting` JSON-LD, where it is not an applicable property.
- Removed unused Bootstrap JavaScript and Ionicons external requests from the HTML shell.
- Added build-time checks for route metadata uniqueness, JSON-LD validity, duplicate titles/descriptions, hydration failures, and the generated noindex 404 page.
- Added `404.html` generation and documented the host requirement to return it with HTTP 404.
- Updated the stale app smoke test and added the `matchMedia` test-environment mock required by `react-slick`.
- Updated the homepage Arabic metadata, H1, and four recommended H2 headings, and added the requested bilingual company facts.
- Replaced the English homepage hero copy with the requested consultancy, design, and project-management heading and description; retained the Arabic hero content.
- Removed the Modern Villa video promo and route, its page/player structured data and styles, and an unused video embed component. Kept the unrelated YouTube social link and map embeds.
- Added the architectural engineering consultancy landing page with localized metadata, Service/BreadcrumbList/FAQPage structured data, and a link from the Services index.
- Added the civil engineering consultancy landing page with localized metadata, six visible FAQs in English and Arabic, matching FAQPage structured data, and a link from the Services index.
- Added the interior design consultancy landing page with localized metadata, six visible FAQs in English and Arabic, Service/BreadcrumbList/FAQPage structured data linked to the site Organization, and a link from the Services index.
- Added the engineering project management landing page with localized metadata, six visible FAQs in English and Arabic, Service/BreadcrumbList/FAQPage structured data linked to the site Organization, and a link from the Services index.
- Added the general building engineering consultancy landing page with localized metadata, seven service-description rows, six visible FAQs in English and Arabic, Service/BreadcrumbList/FAQPage structured data, and a link from the Services index.
- Added an Arabic warehouse/factory/workshop modification drawings page with localized metadata, a seven-row service facts table, seven visible FAQs, Service/BreadcrumbList/FAQPage structured data, and a Services index link.
- Added an asset valuation section to the Khartoum area page and linked it to the Central Bank of Sudan's official 2026 list; the official entry confirms registration number 14, valuation disciplines, phone, and full-time manager.
- Added Organization/ProfessionalService and asset valuation Service structured data for Khartoum. The address uses the already-stated city and country only; no street address was provided.
- Fixed JSX whitespace in the new listing/contact labels that caused a production prerender hydration mismatch.
- Added a responsive, accessible project management service-description table; removed UAE-wide wording from visible page copy while retaining the specified SEO description.

## Findings and remaining issues

- **Live deployment is stale:** the public homepage and `/services` were observed returning the older app shell with an empty `#root`; `/sitemap.xml` returned HTML instead of XML. The public robots file also differs from the local crawler policy. Deploy the audited build and verify live route, sitemap, and robots responses.
- **Not true SSR:** route snapshots expose meaningful HTML to crawlers when the host serves generated route files directly. The root CRA fallback remains an empty React root before JavaScript executes; verify the deployment does not rewrite these routes to that fallback.
- **AI crawler policy:** the local robots policy allows search/discovery crawlers and blocks selected training crawlers. Its effective live behavior is unverified and currently does not match the deployed robots file.
- **Arabic/English:** the site has one Arabic-only modification drawings route and the Khartoum area page shares its URL between English and Arabic. No reciprocal `hreflang` links are added because equivalent locale-specific pages are not yet available for the Arabic-only route.
- **Business claims need owner verification:** the Central Bank of Sudan's public 2026 listing was checked for the Khartoum asset valuation section. Other authority/approval claims (including municipality, SEWA, and Civil Defence references), street addresses, credentials, and founder details require owner verification.
- **Content quality:** some landing-page/service text remains repetitive and keyword-heavy. Review it for accuracy, usefulness, and natural language rather than adding further keyword targeting.
- **Structured data:** local JSON-LD parses and avoids the known invalid `BlogPosting.areaServed` property. Search-engine rich-result eligibility and all business facts still require external/owner validation. Article publication dates and representative images were not added because verified values were unavailable.
- **Images and performance:** the local pages have no `<img>` elements missing an `alt` attribute in the sampled mobile home render. Intrinsic dimensions and loading behavior are improved, but large source image files remain and no field or lab Core Web Vitals measurement has been completed.
- **Mobile:** the home page was checked at a narrow viewport; the menu opened and exposed `aria-expanded="true"`, and no horizontal document overflow was measured. This was a spot check, not a full device/browser matrix.
- **Links:** the audited uppercase service-link defect was fixed. External destination availability and every link's live HTTP status were not comprehensively verified.
- **Deployment 404 behavior:** the prerender build validates an unknown path as noindex and HTTP 404 through its local test server. Production host behavior is still unverified.

## Tests and checks

### Passed

- `npm run build` — optimized CRA build passed; all 20 sitemap routes were prerendered and hydration-checked, and `404.html` was generated.
- Local prerender checks — all routes have one title, description, and canonical; titles and descriptions are unique; JSON-LD parses; unknown routes return 404 and are marked `noindex, nofollow`.
- Sitemap source check — `public/sitemap.xml` parses as XML and contains 20 unique public routes; the not-found page is excluded.
- Robots source check — expected crawler directives and sitemap declaration are present.
- Mobile spot check — at a narrow browser viewport, the home page had no measured horizontal overflow; navigation toggle changed `aria-expanded` to `true`; no missing image `alt` attributes were found in that render.
- Production-page image check — five service-card photos render at 16:9; the promotional graphic fills its card width at its natural aspect ratio, without cropping.
- Homepage language check — English and Arabic hero content, metadata, H1, and recommended section headings are tested; the company facts render in both Arabic/RTL and English/LTR.
- Civil, interior design, project management, and general building service FAQ tests — all six English FAQs on each page render and match their `FAQPage` structured-data entries; Arabic translations are included.
- General building service content test — the service table's designated rows render and metadata matches the recommended title, description, and canonical route.
- Arabic modification drawings page test — validates Arabic metadata and canonical URL, the service facts table, seven FAQs, and linked Organization schema.
- Khartoum asset valuation test — checks Arabic SEO metadata, the official external link, phone/email actions, and Organization/ProfessionalService/Service JSON-LD.
- Project management content test — the service table's key rows render, and visible English copy omits the UAE-wide phrase.
- `CI=true npm test -- --watchAll=false --runInBand --silent` — passed (9 suites, 10 tests).
- `git diff --check` — passed.

### Failed or warning-only

- The initial full test run failed because `react-slick` requires `window.matchMedia`, and the app smoke test asserted the removed Create React App starter link. The test setup and assertion were corrected, and the complete suite now passes.
- Initial production prerender attempts caught a whitespace-related hydration mismatch in the new Khartoum section; the markup was corrected, and the final build hydration-checks all routes successfully.
- React Testing Library still emits an `act` deprecation warning and React Router emits v7 future-flag warnings; these are warnings, not test failures.

## External validation required

1. Deploy the current build and verify live route HTML, HTTP status, canonical tags, `robots.txt`, and XML `sitemap.xml`.
2. Verify Googlebot, Bingbot, and intended AI crawlers can fetch the live route snapshots; confirm the robots policy matches the desired search-versus-training policy.
3. Use Google Search Console/Bing Webmaster Tools, Rich Results Test, and Schema Markup Validator on deployed URLs.
4. Verify business identity, addresses, authority approvals, credentials, and founder facts with the business owner.
5. Run PageSpeed Insights/Lighthouse and field Core Web Vitals; test mobile layouts on representative devices and browsers.
6. Crawl all internal and external links and validate destination status codes after deployment.
