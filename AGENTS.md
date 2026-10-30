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
- Keep TanStack Start routes and existing client-only contact/booking flows; reference repositories supply visual patterns only, so their auth, schema and runtime are not imported.
- Define shared presentation roles and page-layout selectors in src/styles.css and use the existing Button component for controls; this keeps navigation, forms and secondary pages consistent without duplicating a theme.
- Define the default appearance explicitly in shared root/dark tokens and separate brand fills from readable highlight/focus roles; reference theme naming must not determine appearance or contrast.
- Use the shared light-wordmark asset in dark navigation/footer, preserving the original symbol pixels; whole-logo inversion changes brand colors.
- Keep BorderBeam as a masked CSS offset-path perimeter effect with separate sharp/glow layers outside image clipping; this adapts the reference without its framework or animation dependencies.
