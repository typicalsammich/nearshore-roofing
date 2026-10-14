# Near Shore Roofing — cinematic update

Run `npm run dev` to serve the built site at http://127.0.0.1:4173. Run `npm run build` after changing source content, then `npm run check`. Node 20+ is sufficient; no dependency installation is needed.

The update retains the original pages and business content while replacing the roof illustration and gallery, adding a layered cinematic opening, and styling native scrollbar and cursor controls.

- `experiences.mjs`: reusable server-rendered markup for opening, process, gallery and detail viewer.
- `dist/experiences.css`: responsive presentation, material reveals, cursor, scrollbar and reduced-motion styles.
- `dist/experiences.js`: reversible scroll timelines, project navigation, modal focus, image inspection, native-touch handling and optional audio.
- `VISUAL-ASSETS.md`: asset provenance, exact Imagegen prompts and implementation limits.
- `QA-CINEMATIC.md`: current validation and remaining test limits.

The cinematic opening runs for 4.8 seconds without blocking navigation, offers skip/replay, and plays no sound until explicitly enabled. It is a layered weather visualization rather than continuous video footage.

The roof process is generated architectural imagery and is labeled accordingly. The gallery preserves the four original source photographs. Each entry uses a single image, with collection navigation rather than invented extra views.

Existing production requirements remain: verify real social profile links, connect the CRM/form endpoint before online submission, approve the privacy notice, and configure the final public domain for SEO. The real company website is unchanged; this delivery is the local site and source archive.
