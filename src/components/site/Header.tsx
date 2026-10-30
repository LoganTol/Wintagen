import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import wintagenLogo from "@/assets/Wintagen_Logo_Transparent.png.asset.json";

const NAV = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header
      className={
        "site-header fixed inset-x-0 top-0 z-50 transition-colors duration-300 " +
        (scrolled
          ? "border-b border-border/80 bg-background/85 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-background/95")
      }
    >
      <div className="site-container grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4">
        <Link
          to="/"
          hash="top"
          className="min-w-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          aria-label="Wintagen — back to top"
        >
          <img
            src={wintagenLogo.url}
            alt="Wintagen"
            className="h-13 w-auto max-w-[250px] object-contain sm:h-14 sm:max-w-[290px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              activeProps={{ className: "text-brand" }}
              className="rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild>
            <Link to="/get-started">
              Get Started <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </nav>

        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background px-5 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {[...NAV, { label: "Get Started", href: "/get-started" }].map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    item.label === "Get Started"
                      ? "btn-primary mt-2 w-full text-base"
                      : "block rounded-lg px-2 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
