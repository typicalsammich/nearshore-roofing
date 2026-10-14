# Mobile, content and transition refinements — October 14, 2026

- The full entrance plays automatically once per browser-tab visit using sessionStorage, with a session-cookie fallback when storage is unavailable. Returning to the homepage bypasses it; Replay entrance remains available. No persistent tracking identifier is created.
- The entrance landscape interpolates to the actual hero rectangle and image focal position before fading out. The weather treatment following the entrance now begins at zero opacity with restrained intensity and no abrupt camera reset.
- All mobile/tablet roof-process changes use direct stage buttons and Previous/Next controls. They do not depend on scroll timing. The gallery uses natural vertical scenes and a four-image jump index at the top on mobile/tablet.
- All published old-site/source-site references were removed from page text, FAQs, captions, metadata, alt text and gallery descriptions. Internal provenance documentation is retained outside the site.
- Eleven service pages each have additional service-specific explanations. Four service regions each have three distinct narrative sections covering different practical concerns. About content is expanded. No license number, warranty coverage, financing rate, project location or business history was invented.
- Page navigation uses a short fade-out/fade-in, with modifier clicks, downloads, external destinations and same-page links preserved. Reduced-motion users bypass it. Back/forward restoration clears the leaving state.
- Mobile call action is always visible with a high-contrast amber background, phone icon, two-line label, phone number and safe-area padding. It hides during modal/entrance interaction.
- Default SEO origin is the actual Vercel domain, with SITE_ORIGIN still available for a future custom domain.

Validation: 29-page build and 1,563 internal references passed. Every page has unique title/description, one H1, canonical URL and valid JSON-LD. Source JS syntax checks passed. Controller tests pass for the sunrise handoff and skip/reduced-motion cleanup. Refinement tests pass for first-visit vs return-visit/deep-link startup, mobile manual-mode policy, four distinct area narratives, eleven expanded services, and no editorial old-site references in public HTML.

Browser visual verification is still limited by the browser policy restriction recorded in QA-CINEMATIC.md. The user’s two ZIP screenshots were inspected directly to identify the lighting/framing handoff issue; the changes above received source, controller and static checks, not a new physical-iPhone visual pass. The CRM form integration remains unconfigured and is not represented as delivering online requests.
