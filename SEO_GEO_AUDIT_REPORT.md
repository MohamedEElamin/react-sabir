# SEO/GEO Audit Report

**Audit date:** 2026-11-23  
**Scope:** Sabir Elsir Engineering Consultants React site  
**Status:** Implemented and locally verified; external search-engine validation remains pending.

## Executive summary

The site now exposes 20 English route pairs and 20 Arabic route pairs, with URL-driven language selection, localized internal navigation, self-referencing canonicals, reciprocal `hreflang` tags, and a 40-URL XML sitemap. Route-level checks cover metadata, schema syntax, headings, language direction, rendered images, internal links, and hydration.

The audit does not claim live indexing, rich-result eligibility, or Core Web Vitals improvements. Those require a deployed site and external search or performance tools.

## Scorecard

| Area | Result | Evidence / limitation |
|---|---|---|
| Bilingual URLs and navigation | Pass | 40 sitemap routes; locale-aware links and language switching |
| Canonical and `hreflang` | Pass | Every route has its own canonical and `en`, `ar`, and `x-default` alternates |
| Titles and descriptions | Pass with note | 40 unique titles and descriptions; all titles are at most 60 characters. The two founder descriptions exceed 160 characters to preserve the explicitly requested copy. |
| Structured data | Pass for syntax | JSON-LD parses on every route; page-specific schemas are retained alongside `WebPage` data. No external rich-results validation was run. |
| Internal links | Pass | Rendered same-origin links resolve to sitemap routes |
| Images and basic accessibility | Pass for rendered images | Images decode, have an `alt` attribute and explicit dimensions, and preserve aspect ratio. Alt text was localized on the main carousel and service cards. This is not a full WCAG audit. |
| Image payload | Improved | 12 referenced large photographs were converted to WebP; originals remain available. Approximate aggregate reduction is from 11.8 MB to 2.8 MB (~76%). |
| Crawler directives | Pass | `robots.txt` is present and points to the XML sitemap; existing training-crawler blocks were preserved. |
| Performance field data | Not measured | No Lighthouse/PageSpeed or real-user Core Web Vitals data was available. |
| Search-engine indexing | Not measured | Search Console and Bing Webmaster access and production deployment were unavailable. |

## Local verification

- `npm run build` — compiled successfully and prerendered all 40 routes.
- Prerender validation — hydration-checked all routes; checked title/description uniqueness, canonical URLs, language and direction, one H1, robots directives, reciprocal alternates, social metadata, JSON-LD parsing, image loading/alt/dimensions, and internal route links.
- `CI=true npm test -- --watchAll=false --runInBand --silent` — 12 suites and 19 tests passed.
- XML parser — `public/sitemap.xml` parsed successfully with 40 URL entries.
- Generated route metadata — 40 unique titles and descriptions; maximum title length is 60 characters. The two long founder descriptions match the requested biography copy.

## Implemented changes

- Paired English and Arabic routes; locale-aware links retain the active language, and the language control switches to the corresponding URL.
- URL-driven initial locale, avoiding browser-language selection overriding `/ar` routes.
- Per-page canonical, `hreflang` (`en`, `ar`, `x-default`), Open Graph, and Twitter metadata.
- Organization/service and page-level JSON-LD, with service, FAQ, breadcrumb, and collection schemas where applicable. Public contact fields in the organization data match the site's contact page; they have not been independently verified.
- XML and text sitemaps listing the 40 localized routes.
- WebP source references for the large photos used by the carousel and service/project cards. Smaller card imagery and the company logo remain in their existing formats.
- Localized descriptive alternatives for prominent images, corrected source dimensions, and app manifest icons.
- More specific, concise search descriptions where they can be separated from the visible page copy. The longer requested Founder copy remains unchanged.
- Expanded browser-based prerender validation in `scripts/prerender.js`.

## Route inventory

| English route | Arabic route |
|---|---|
| `/` | `/ar` |
| `/about` | `/ar/about` |
| `/founder-profile` | `/ar/founder-profile` |
| `/services` | `/ar/services` |
| `/services/architectural-engineering-consultancy` | `/ar/services/architectural-engineering-consultancy` |
| `/services/civil-engineering-consultancy` | `/ar/services/civil-engineering-consultancy` |
| `/services/interior-design-consultancy` | `/ar/services/interior-design-consultancy` |
| `/services/engineering-project-management` | `/ar/services/engineering-project-management` |
| `/services/general-building-engineering-consultancy` | `/ar/services/general-building-engineering-consultancy` |
| `/services/warehouse-factory-workshop-modification-drawings-sharjah` | `/ar/warehouse-factory-workshop-modification-drawings-sharjah` |
| `/contact` | `/ar/contact` |
| `/faq` | `/ar/faq` |
| `/areas` | `/ar/areas` |
| `/areas/sharjah` | `/ar/areas/sharjah` |
| `/areas/ajman` | `/ar/areas/ajman` |
| `/areas/khartoum` | `/ar/areas/khartoum` |
| `/blog` | `/ar/blog` |
| `/blog/building-approval-stages-sharjah-ajman` | `/ar/blog/building-approval-stages-sharjah-ajman` |
| `/blog/structural-rehabilitation-assessment-khartoum` | `/ar/blog/structural-rehabilitation-assessment-khartoum` |
| `/blog/seismic-environmental-structural-design-middle-east-east-africa` | `/ar/blog/seismic-environmental-structural-design-middle-east-east-africa` |

## Crawler policy

`public/robots.txt` allows general crawling and explicitly allows `OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, and `PerplexityBot`. Existing blocks for `GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`, and `__usage_ai-training` remain in place. These directives were preserved rather than changed as part of the audit.

## Content and GEO notes

- Location pages cover Sharjah, Ajman, and Khartoum; site-level service areas include the UAE and Sudan.
- The FAQ covers architectural and interior design, 3D visualization, MEP, Sharjah Municipality, SEWA, Civil Defense, consultation, supervision, fees, and service availability in the UAE and Sudan.
- Approval language is conditional on the project's scope and the relevant authority; the copy does not promise approvals or fixed timelines.
- Company history, qualifications, credentials, approvals, and contact details remain claims from the site's supplied content. This audit did not independently verify them with regulators or other primary sources.

## Recommended post-deployment checks

1. In Google Search Console, verify the production property, submit `https://www.sabirelsir.ae/sitemap.xml`, and inspect representative English and Arabic URLs for crawlability, selected canonical, and indexing status.
2. In Bing Webmaster Tools, verify the property and submit the same sitemap.
3. Run Google's Rich Results Test and Schema Markup Validator against representative home, FAQ, service, and area pages. JSON-LD parsing in the build is not a substitute for these checks.
4. Run PageSpeed Insights or Lighthouse on representative mobile and desktop pages and monitor field Core Web Vitals after deployment.
5. Confirm the contact details and professional/authority claims with the business before relying on them as external trust signals.
