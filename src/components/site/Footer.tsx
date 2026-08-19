import { Wordmark } from "./Logo";

const LINKS = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between md:px-8">
        <div className="max-w-sm">
          <Wordmark />
          <p className="mt-3 text-sm text-muted-foreground">
            Software products and technology services.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted-foreground md:px-8">
          © {new Date().getFullYear()} Wintagen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
