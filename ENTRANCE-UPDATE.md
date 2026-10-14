# Sunrise entrance — October 14, 2026

The homepage now begins with a dedicated full-screen sunrise sequence before revealing the site. The original company logo rises behind the roofline as a glowing sun. Dawn lighting transitions to daylight, the entrance title appears, and the logo travels into the measured position of the real header logo. The existing smaller hero-background weather animation starts after the handoff and remains available independently.

The entrance lasts about 7.1 seconds. Skip and Escape reveal the site immediately. Reduced-motion users bypass it. Direct section links such as `/#journey` also bypass it to preserve the requested destination. Visit `/` without a hash to see it automatically, or use **Replay entrance** in the hero controls.

This is layered photographic animation with a generated dawn plate, native Web Animations, a foreground mask, light and cloud layers, and a measured logo transition. It is not filmed sunrise footage. The original gallery images and original logo remain intact. A safety timeout prevents a failed introduction from leaving the site hidden.

## New asset and prompt

`dist/assets/sunrise-dawn.jpg` was created with built-in Imagegen, using `source-4.jpeg` as the reference. The original generated PNG remains in the generation Library. Prompt:

Use this house photo as exact architectural and framing reference. Create a cinematic blue-hour to sunrise architectural photograph of this EXACT same house, same camera position, identical roofline, panel seams, doors, window positions and trees. Early dawn before sunrise, deep natural navy sky fading to muted warm amber at the horizon behind the center of the roof. Gentle atmospheric coastal haze, subtle illuminated clouds, realistic dim roof and house, no artificial light beams. No visible sun disk (website will composite its actual company logo as the sun rising behind the roof). Preserve exact 4:3 framing and all roof edges to align with the original photo for a dawn-to-day dissolve. Photorealistic high-end architectural cinematography. No text, logos, people, destruction, added buildings, or camera angle changes.

## Validation

- Build and all-page internal-reference/metadata checks pass.
- JavaScript syntax checks pass.
- A deterministic animation-controller test verifies full-screen activation, logo rise, docking to the measured header rectangle, site reveal, hero handoff, skip cleanup, and reduced-motion bypass. Run `node test-entrance.mjs`.
- Browser visual verification remains unavailable after the browser security block recorded in the preceding update. Docking/framing on physical devices has not been visually verified. Tests use mocked element geometry and do not establish visual quality or real browser timing.

The local preview is updated. No deployment or real-domain change is implied.
