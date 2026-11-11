<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Presentation architecture
- Derive sitemap URLs from required route-level staticData.sitemap decisions via src/lib/sitemap.ts; this automatically tracks public routes while excluding noindex pages and avoids invented lastmod timestamps.
- Keep TanStack Start routes and existing client-only contact/booking flows; reference repositories supply visual patterns only, so their auth, schema and runtime are not imported.
- Define shared presentation roles and page-layout selectors in src/styles.css and use the existing Button component for controls; this keeps navigation, forms and secondary pages consistent without duplicating a theme.
- Define the default appearance explicitly in shared root/dark tokens and separate brand fills from readable highlight/focus roles; reference theme naming must not determine appearance or contrast.
- Use the shared light-wordmark asset in dark navigation/footer, preserving the original symbol pixels; whole-logo inversion changes brand colors.
- Keep the homepage opening glow scoped to its shared header/hero section, updating CSS coordinates with time-based requestAnimationFrame interpolation; this avoids content rerenders and child-hover resets while leaving the boundary separator stationary. Touch and reduced-motion modes remain static.
- Keep the homepage opening free of a stacking context, with its background below the hero and the fixed header in the page-level navigation layer; this prevents later sections from painting over the menu during scrolling.
- Render the hero logo as independent vector paths with fill-box origins and a once-only CSS assembly triggered by the first downward page scroll after the shared popup reports minimized state; reserved space and immediate reduced-motion rendering prevent shifts and interference with the cursor glow.

## Visitor analytics
- Load Contentsquare once from the shared root in a browser-only effect and send pathname-only pageviews on resolved navigation; this avoids duplicate tags, query-string personal data, and SSR browser dependencies. Never send contact-form values or identify visitors through custom tracking commands.
