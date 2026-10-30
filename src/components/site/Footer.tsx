import { Link } from "@tanstack/react-router";
import wintagenLogo from "@/assets/Wintagen_Logo_Transparent.png.asset.json";

const LINKS = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Get Started", href: "/get-started" },
  { label: "Contact", href: "mailto:contact@wintagen.com" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="site-footer border-t border-border bg-background">
      <div className="site-container flex flex-col gap-10 py-16 md:flex-row md:items-start md:justify-between md:py-20">
        <div className="max-w-sm">
          <Link
            to="/"
            hash="top"
            aria-label="Wintagen — back to top"
            className="inline-block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <img
              src={wintagenLogo.url}
              alt="Wintagen"
              className="h-12 w-auto max-w-[230px] object-contain"
            />
          </Link>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
            Software products and technology services.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.href.endsWith(".pdf") ? { target: "_blank", rel: "noreferrer" } : {})}
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
        <p className="site-container pb-24 pt-6 text-xs text-muted-foreground md:pb-10">
          © {new Date().getFullYear()} Wintagen. All rights reserved. Atlanta, GA.
        </p>
      </div>
    </footer>
  );
}
