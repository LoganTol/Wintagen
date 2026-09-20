# Stacked Product Accordion

## Goal
Replace the two large product showcases with a compact, layered product stack. Each closed layer centers only the product name and tagline; moving over a layer glides it open to reveal the full description, capabilities, and product link, then closes it when the pointer leaves.

## Changes
- Remove product logos and the split logo/content layouts.
- Present Aether Tennis and QuickSite as overlapping horizontal layers with equal visual weight.
- Keep every collapsed layer concise: centered product name and tagline only.
- Expand the active layer with a smooth accordion glide, revealing its description, key capabilities, and external link.
- Keep each product’s restrained green or blue identity while preserving Wintagen’s page-wide teal and orange accents.
- Make the interaction keyboard-accessible: focus opens a layer, and Enter/Space can toggle it.
- On touch devices, tap a layer to open it; keep one layer open by default so details remain discoverable.
- Respect reduced-motion preferences by switching instantly without glide animation.
- Preserve the existing page introduction, contact section, outbound destinations, editable product data, and metadata.

## Validation
Check desktop hover open/close behavior, keyboard controls, tablet and phone tap behavior, reduced-motion behavior, text fit, outbound links, and browser errors.
