import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  DraftingCompass,
  ExternalLink,
  LayoutTemplate,
  Repeat2,
  ScrollText,
  Smartphone,
  Sparkles,
  Store,
  Trophy,
  UsersRound,
  WandSparkles,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | Wintagen" },
      {
        name: "description",
        content: "Explore Aether Tennis, QuickSite, and ProPlans — focused digital products in the Wintagen portfolio.",
      },
      { property: "og:title", content: "Products | Wintagen" },
      {
        property: "og:description",
        content: "Explore Aether Tennis, QuickSite, and ProPlans — focused digital products in the Wintagen portfolio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProductsPage,
});

const PRODUCTS = [
  {
    name: "Aether Tennis",
    category: "Season management",
    tagline: "Tennis seasons made simple.",
    description:
      "Aether Tennis turns a group of players into an organized round-robin season, coordinating fixtures, scheduling responsibilities, scores, and standings in one shared place.",
    url: "https://aethertennis.com/",
    domain: "aethertennis.com",
    theme: "aether" as const,
    capabilities: [
      { label: "Generated fixtures", icon: CalendarDays },
      { label: "Rotating captains", icon: Repeat2 },
      { label: "Shared standings", icon: Trophy },
      { label: "Group seasons", icon: UsersRound },
    ],
  },
  {
    name: "QuickSite",
    category: "Website modernization",
    tagline: "A modern website, in seconds.",
    description:
      "QuickSite transforms an existing website into a modern, mobile-friendly experience. Enter a URL to generate a redesigned preview without writing code.",
    url: "https://www.get-quick-site.com/",
    domain: "get-quick-site.com",
    theme: "quicksite" as const,
    capabilities: [
      { label: "URL-based redesign", icon: WandSparkles },
      { label: "Mobile-first layouts", icon: Smartphone },
      { label: "No-code workflow", icon: LayoutTemplate },
      { label: "Rapid previews", icon: Sparkles },
    ],
  },
  {
    name: "ProPlans",
    category: "Blueprint marketplace",
    tagline: "Plans from the pros, for your next project.",
    description:
      "ProPlans is a peer-to-peer marketplace for home improvement, woodworking, and construction project plans — connecting creators who sell detailed blueprints with builders ready to get to work.",
    url: "https://logantol.github.io/DIY-Market/",
    domain: "logantol.github.io/DIY-Market",
    theme: "proplans" as const,
    capabilities: [
      { label: "Curated project plans", icon: ScrollText },
      { label: "Sell your blueprints", icon: Store },
      { label: "Custom plan requests", icon: DraftingCompass },
      { label: "Maker community", icon: UsersRound },
    ],
  },
] as const;

type Product = (typeof PRODUCTS)[number];

function ProductLayer({
  product,
  index,
  isOpen,
  onHoverOpen,
  onFocusOpen,
  onClose,
  onToggle,
}: {
  product: Product;
  index: number;
  isOpen: boolean;
  onHoverOpen: () => void;
  onFocusOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}) {
  const panelId = `product-panel-${index}`;
  const toggledOnPointerDown = useRef(false);
  // After a mouse user clicks a band closed, don't let the still-hovering
  // pointer immediately reopen it — hover re-arms once the pointer leaves.
  const hoverSuppressed = useRef(false);
  // A mouse press focuses the trigger; that focus must not also open the
  // band, or it would fight the click toggle (focus opens, click closes).
  const suppressFocusOpen = useRef(false);

  return (
    <article
      className={`product-layer product-layer--${product.theme} ${isOpen ? "is-open" : ""}`}
      style={{ zIndex: PRODUCTS.length - index }}
      onPointerEnter={(event) => {
        if (event.pointerType !== "mouse" || hoverSuppressed.current) return;
        onHoverOpen();
      }}
      onPointerLeave={(event) => {
        if (event.pointerType !== "mouse") return;
        hoverSuppressed.current = false;
      }}
      onFocus={() => {
        if (suppressFocusOpen.current) {
          suppressFocusOpen.current = false;
          return;
        }
        onFocusOpen();
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          onClose();
        }
      }}
    >
      <Button
        type="button"
        variant="ghost"
        className="product-layer__trigger h-auto w-full whitespace-normal rounded-none px-6 py-7 hover:bg-transparent sm:px-10 sm:py-9"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onPointerDown={(event) => {
          toggledOnPointerDown.current = false;
          if (event.pointerType !== "mouse") {
            event.preventDefault();
            toggledOnPointerDown.current = true;
            onToggle();
          }
        }}
        onClick={() => {
          // Touch already toggled on pointerdown; mouse and keyboard toggle here.
          if (toggledOnPointerDown.current) {
            toggledOnPointerDown.current = false;
            return;
          }
          if (isOpen) hoverSuppressed.current = true;
          onToggle();
        }}
      >
        <span className="text-center">
          <span className="block text-2xl font-semibold leading-tight sm:text-3xl">{product.name}</span>
          <span className="mt-2 block text-sm font-medium text-muted-foreground sm:text-base">
            {product.tagline}
          </span>
        </span>
      </Button>

      <div id={panelId} className="product-layer__panel" aria-hidden={!isOpen}>
        <div className="product-layer__panel-inner">
          <div className="mx-auto grid max-w-4xl gap-8 px-7 pb-10 pt-2 sm:px-12 sm:pb-12 md:grid-cols-[1.2fr_1fr] md:gap-12">
            <div>
              <p className="product-layer__category text-xs font-semibold uppercase tracking-[0.14em]">
                {product.category}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{product.description}</p>
              <a
                href={product.url}
                target="_blank"
                rel="noreferrer"
                tabIndex={isOpen ? 0 : -1}
                className="product-layer__link group mt-7 inline-flex items-center gap-2 rounded-md font-semibold focus-visible:outline-2 focus-visible:outline-offset-4"
                aria-label={`Visit ${product.name} at ${product.domain} (opens in a new tab)`}
              >
                Visit {product.domain}
                <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
            <ul className="grid content-start gap-3 sm:grid-cols-2 md:grid-cols-1" aria-label={`${product.name} features`}>
              {product.capabilities.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <span className="product-layer__feature-icon" aria-hidden="true">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProductsPage() {
  const [openProduct, setOpenProduct] = useState<number | null>(null);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  const clearTimer = (ref: React.MutableRefObject<number | null>) => {
    if (ref.current !== null) {
      window.clearTimeout(ref.current);
      ref.current = null;
    }
  };

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) setOpenProduct(0);
    return () => {
      clearTimer(openTimer);
      clearTimer(closeTimer);
    };
  }, []);

  // Hover intent: a band opens after a short dwell, and a band only closes
  // when the pointer leaves the whole stack or settles on another band —
  // so layout shifts while panels glide never drop the open state.
  const requestOpen = (index: number) => {
    clearTimer(closeTimer);
    clearTimer(openTimer);
    openTimer.current = window.setTimeout(() => setOpenProduct(index), 180);
  };
  const openNow = (index: number) => {
    clearTimer(closeTimer);
    clearTimer(openTimer);
    setOpenProduct(index);
  };
  const scheduleStackClose = () => {
    clearTimer(openTimer);
    clearTimer(closeTimer);
    closeTimer.current = window.setTimeout(() => setOpenProduct(null), 250);
  };
  const cancelStackClose = () => clearTimer(closeTimer);

  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-md text-sm font-semibold text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Back to Wintagen
            </Link>
            <p className="mt-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-brand">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-accent" />
              Products
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-normal sm:text-5xl">
              Products built with purpose.
            </h1>
            <span aria-hidden="true" className="mt-4 block h-1 w-12 rounded-full bg-brand-accent" />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Each Wintagen product starts with a specific problem and a straightforward reason to
              exist. Meet the first three brands in our growing portfolio.
            </p>
          </Reveal>
        </section>

        <section className="border-y border-border" aria-label="Wintagen product portfolio">
          <Reveal>
            <div
              className="product-stack"
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") cancelStackClose();
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === "mouse") scheduleStackClose();
              }}
            >
              {PRODUCTS.map((product, index) => (
                <ProductLayer
                  key={product.name}
                  product={product}
                  index={index}
                  isOpen={openProduct === index}
                  onHoverOpen={() => requestOpen(index)}
                  onFocusOpen={() => openNow(index)}
                  onClose={() => setOpenProduct((current) => (current === index ? null : current))}
                  onToggle={() => {
                    clearTimer(openTimer);
                    clearTimer(closeTimer);
                    setOpenProduct((current) => (current === index ? null : index));
                  }}
                />
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-28">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
              Interested in what we're building?
            </h2>
            <span aria-hidden="true" className="mx-auto mt-4 block h-1 w-12 rounded-full bg-brand-accent" />
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Start a conversation about our products or what you need.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="mailto:hello@wintagen.com" className="btn-primary">Contact Wintagen</a>
              <Link to="/" hash="services" className="btn-secondary group">
                View our services
                <ArrowRight className="ml-1 inline h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:text-brand-accent" />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}