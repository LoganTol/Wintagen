# Build the Wintagen product portfolio

## Goal
Replace the placeholder Products page with a polished portfolio presentation for Aether Tennis and QuickSite, while preserving Wintagen’s calm, established visual identity.

## Page structure
- Keep the existing Wintagen header, introductory heading, contact prompt, and footer.
- Replace the placeholder grid with two generous, full-width product showcases in a clear vertical sequence.
- Give each product equal visual weight, with a primary logo, concise description, grounded capability highlights, and a prominent link to its live website.
- Use alternating image/content alignment on wider screens and a simple top-to-bottom reading order on phones.

## Product content
### Aether Tennis
- Present it as a tool that turns a group of tennis players into an organized round-robin season.
- Highlight generated fixtures, rotating captains, shared standings, and season scheduling/reminders.
- Link to `aethertennis.com`.

### QuickSite
- Present it as a no-code tool for turning an outdated website into a modern, mobile-friendly experience.
- Highlight URL-based redesign, mobile optimization, no-code use, and rapid previews.
- Link to `get-quick-site.com`.

All wording will stay concise and avoid invented customers, results, metrics, or endorsements.

## Visual treatment
- Use each product’s official primary mark and visual character without letting either brand overpower Wintagen.
- Place logos in a stable, well-proportioned brand area with accessible names and links.
- Give Aether Tennis restrained sport-green cues and QuickSite restrained blue cues, contained within their showcases; Wintagen teal and orange remain the page-wide system.
- Store the approved logo files with the project rather than linking to external images at runtime.

## Glide and fold interaction
- Create a subtle “folded sheet” treatment: on pointer hover, one corner lifts and the front plane shifts slightly to reveal a narrow product-colored layer beneath.
- Add a gentle image/content glide and arrow movement, not a dramatic 3D flip.
- Keep text stable and fully readable while the effect runs.
- On touch devices, present the finished layered composition without requiring hover.
- Disable transforms and transition motion when reduced motion is requested.

## Technical details
- Keep product data in one editable array so future Wintagen products can be added without restructuring the page.
- Use semantic links, correct heading order, visible focus states, and external-link labeling.
- Update the Products page metadata to mention both real products.
- Verify desktop, tablet, and mobile layouts, keyboard navigation, both outbound links, motion fallback, and browser console health.
