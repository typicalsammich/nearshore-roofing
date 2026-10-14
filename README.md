# Near Shore Roofing LLC

Static, multipage roofing website. Run `npm run build`, `npm run check`, and `npm run dev` (Node 20+). No dependency installation is needed. Deploy the `dist` directory to static hosting. For Vercel, use build command `node build.mjs` and output directory `dist`. Set SITE_ORIGIN to the final origin before building for a custom domain; this updates all canonical, Open Graph, schema and sitemap URLs. This delivery does not modify the existing business domain.

## Content and authenticity

29 indexable HTML pages include 11 service pages, 4 verified coverage pages, 5 original homeowner articles, FAQs, testimonials, contact, gallery, and overview pages. Source content is in `content.mjs` and `articles.mjs`. Photographs and the original logo are local. `assets-inventory.json` records original asset URLs. Photographs are identified as original-website photography, not independently verified customer case studies. No invented project dates, addresses, review ratings, license number, financing rates or warranty terms are used.

Research on October 14, 2026: https://nearshoreroofingfl.com/ and its navigation. Navigation links resolve to sections of the same homepage rather than distinct service pages. Existing social links are the generic https://facebook.com and https://instagram.com; searches did not establish official accounts, and the user confirmed the same issue. No social profiles or sameAs schema were invented. Add verified profiles to the header/footer and business schema when supplied.

## Production requirements and current limits

- **Form integration:** no CRM credentials or recipient email were verified. The contact page offers click-to-call and a clearly labeled local summary generator. It does not transmit personal data or claim successful submission. Before enabling web submission, implement a server endpoint using environment variables QUOTE_WEBHOOK_URL and QUOTE_WEBHOOK_TOKEN. Validate and length-limit all fields server-side, rate-limit requests, add honeypot/anti-spam protection, protect the token from client code, and confirm delivery before showing success. Optional uploads require private storage, file type/size checks and retention rules. Do not send data to an unverified recipient. Approve a business privacy notice before collecting online leads.
- **Cinematic intro:** a non-blocking 4.8-second layered weather sequence combines an AI weather treatment, original photography, camera framing, rain, roofline tracing and sunlight. Skip/replay, reduced-motion handling and opt-in synthesized atmospheric audio are included. This is a 2.5D visualization, not continuous filmed footage.
- **Roof journey:** realistic generated same-house imagery replaces the original vector diagram. Five construction stages react reversibly to scroll and support stage buttons. The page labels it as AI architectural visualization. Reduced-motion and short-screen users have direct step controls.
- **Gallery:** four unchanged original photographs form a continuous desktop presentation with material-specific masks, per-image framing and project navigation. Mobile uses natural vertical scenes. A single-photo editorial detail viewer supports collection navigation, image inspection, Escape and focus restoration. No fake extra views or project metadata are supplied.
- Only Vero Beach, Sebastian, St. Lucie County and Brevard County are separately published. Additional named towns require confirmation before dedicated pages.
- No legitimate privacy/terms text, official social accounts, verified email or Google review URL was available. Those links are omitted.
- Warranties and financing were mentioned on the source website, but its answers were unfinished. Ask the company for written terms. Source price and timing ranges are explicitly identified as general published guidance, not current guarantees.

## SEO and validation

Static HTML, unique titles and descriptions, canonicals, Open Graph, RoofingContractor, Service, BlogPosting and BreadcrumbList JSON-LD, sitemap, robots, internal links, descriptive alt text, semantic headings and local assets. Published articles include further-reading links when drawing on NWS or DOE guidance. No guarantee of search ranking or rich results. Private preview access prevents public indexing; confirm final custom domain and public launch settings before requesting search indexing.

Automated checking: `node check.mjs` validates every generated page and local link/asset path, metadata uniqueness, H1 counts, and JSON-LD parsing. Current cinematic verification is in QA-CINEMATIC.md; QA.md records the earlier version. See DELIVERY.md and VISUAL-ASSETS.md for implementation and asset provenance. Field Core Web Vitals require real-user measurement after launch; local observations do not establish field compliance.

An optional Vercel endpoint is included at api/quote.js. It returns 503 until QUOTE_WEBHOOK_URL and QUOTE_WEBHOOK_TOKEN are configured. Connect the form to POST JSON to /api/quote only after adding a privacy notice and deployment-level rate limiting or bot protection. It validates field lengths and required fields, checks a honeypot, uses HTTPS, and reports success only after the upstream endpoint accepts delivery. Static Sites hosting does not execute this Vercel endpoint.
