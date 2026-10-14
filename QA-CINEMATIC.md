# Cinematic update verification — October 14, 2026

## Passed

- `node build.mjs`: 29 static pages generated.
- `node check.mjs`: 1,443 local link/asset references, unique metadata, one H1 per page, canonical links and valid JSON-LD passed.
- `node --check dist/experiences.js` and `node --check dist/app.js`: passed.
- Desktop 1440 × 960: roof process inspected visually; selecting Protect updated the caption to `03 / PROTECTIVE LAYERS`. No horizontal overflow.
- Gallery desktop: original shingle photograph and editorial treatment inspected; Next selected `02`, direct selection reached `04`, Previous returned to `03`.
- Project detail: opened selected original metal photograph; Next selected the low-slope photograph; closing the dialog removed scroll lock and returned focus to the triggering detail button. The initial shared-image transition temporarily delayed interaction, so focus is now explicitly restored after its completion as well.
- Mobile 390 × 844: all four gallery scenes were visible; no broken images or horizontal overflow were reported. The roof frame and caption positions were inspected. Stage controls were moved upward to avoid the sticky mobile call bar. Short screens now use manual stages and natural page flow instead of a pinned section.
- Browser logs during the completed checks reported no errors or warnings.

## Verification limits

The browser security policy blocked the final mobile stage-button click and prohibited further interaction with that page. The later mobile spacing/focus adjustments received syntax/build checks, but were not rechecked visually after that block. Reduced-motion behavior and optional audio are implemented; OS-level reduced-motion and physical touch/swipe testing were not performed. No measured 60 FPS or field Core Web Vitals claim is made.

No hosted deployment occurred. The existing local preview receives the updated files. The previous publishing-helper input restriction remains unresolved; this update does not alter the real business domain.

## Authenticity and visual limits

The four gallery images remain unchanged at their existing paths. The roofing process is a labeled AI visualization. The opening uses a generated weather plate over original photography, with layered effects; it is not continuous filmed footage. The low-resolution membrane photo is intentionally shown in a contained frame. Inspect mode magnifies the available pixels and does not invent details or additional photographs.
