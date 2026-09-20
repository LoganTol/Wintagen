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
  isPointerOver,
  onHoverOpen,
  onLeave,
  onFocusOpen,
  onClose,
  onToggle,
}: {
  product: Product;
  index: number;
  isOpen: boolean;
  isPointerOver: (element: HTMLElement) => boolean;
  onHoverOpen: () => void;
  onLeave: () => void;
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
      data-index={index}
      className={`product-layer product-layer--${product.theme} ${isOpen ? "is-open" : ""}`}
      style={{ zIndex: PRODUCTS.length - index }}
      onPointerEnter={(event) => {
        if (event.pointerType !== "mouse" || hoverSuppressed.current) return;
        onHoverOpen();
      }}
      onPointerLeave={(event) => {
        if (event.pointerType !== "mouse") return;
        // Panels gliding open or closed shift the layout; the browser reads
        // that as the pointer leaving even though it never moved. Ignore
        // those phantom leaves and only trust ones where the pointer truly
        // sits outside the band (checked with the event's own coordinates).
        if (isPointerOver(event.currentTarget, { x: event.clientX, y: event.clientY })) return;
        hoverSuppressed.current = false;
        onLeave();
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
          suppressFocusOpen.current = event.pointerType === "mouse";
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
  // One band open at a time. Panels gliding open or closed shift the layout,
  // which makes the browser fire phantom enter/leave events for a pointer
  // that never moved — so every boundary event is cross-checked against the
  // pointer's real position, and after each hover-open finishes animating the
  // open state is reconciled with whatever band the pointer is actually over.
  const [active, setActive] = useState<number | null>(null);
  const activeRef = useRef<number | null>(null);
  const openedByRef = useRef<"hover" | "manual">("manual");
  const pendingIndexRef = useRef<number | null>(null);
  const lastPointerRef = useRef({ x: 0, y: 0 });
  const stackRef = useRef<HTMLDivElement | null>(null);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);
  const reconcileTimer = useRef<number | null>(null);
  const reconcileDepth = useRef(0);

  // True when the pointer is still inside the element, regardless of what
  // boundary events layout shifts have fired. Prefer the event's own
  // coordinates (they are current even when the pointermove that updates
  // lastPointerRef hasn't been dispatched yet); fall back to tracking.
  const isPointerOver = (element: HTMLElement, point?: { x: number; y: number }) => {
    const { x, y } = point ?? lastPointerRef.current;
    const hit = document.elementFromPoint(x, y);
    return hit !== null && element.contains(hit);
  };

  // Which band currently sits under the pointer (null when outside the stack).
  const layerUnderPointer = () => {
    const { x, y } = lastPointerRef.current;
    const hit = document.elementFromPoint(x, y);
    const layer = hit?.closest?.("article.product-layer");
    if (!(layer instanceof HTMLElement)) return null;
    if (!stackRef.current?.contains(layer)) return null;
    const index = Number(layer.dataset["index"]);
    return Number.isInteger(index) ? index : null;
  };

  const clearTimer = (ref: React.MutableRefObject<number | null>) => {
    if (ref.current !== null) {
      window.clearTimeout(ref.current);
      ref.current = null;
    }
  };

  const setActiveBoth = (value: number | null) => {
    activeRef.current = value;
    setActive(value);
  };

  // After the glide settles, make the open state match the pointer's real
  // position — hover-opened bands only; click/keyboard choices are sticky.
  const scheduleReconcile = () => {
    clearTimer(reconcileTimer);
    reconcileTimer.current = window.setTimeout(() => {
      if (openedByRef.current !== "hover") return;
      const under = layerUnderPointer();
      if (under === activeRef.current) {
        reconcileDepth.current = 0;
        return;
      }
      if (reconcileDepth.current >= 3) return; // converge, never loop
      reconcileDepth.current += 1;
      setActiveBoth(under);
      if (under !== null) scheduleReconcile();
    }, 750);
  };

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) setActiveBoth(0);
    const trackPointer = (event: PointerEvent) => {
      lastPointerRef.current = { x: event.clientX, y: event.clientY };
    };
    window.addEventListener("pointermove", trackPointer, { passive: true });
    return () => {
      window.removeEventListener("pointermove", trackPointer);
      clearTimer(openTimer);
      clearTimer(closeTimer);
      clearTimer(reconcileTimer);
    };
  }, []);

  // Hover intent: a band opens after a short dwell, then reconciles with the
  // pointer's real position once the glide has settled.
  const requestOpen = (index: number) => {
    clearTimer(closeTimer);
    clearTimer(openTimer);
    pendingIndexRef.current = index;
    reconcileDepth.current = 0;
    openTimer.current = window.setTimeout(() => {
      pendingIndexRef.current = null;
      openedByRef.current = "hover";
      setActiveBoth(index);
      scheduleReconcile();
    }, 180);
  };

  // A genuine pointer leave cancels a pending open for that band, so a quick
  // sweep across bands never opens the ones passed along the way.
  const cancelPending = (index: number) => {
    if (pendingIndexRef.current === index) {
      pendingIndexRef.current = null;
      clearTimer(openTimer);
    }
  };

  // Deliberate opens (click, tap, keyboard focus) swap instantly.
  const openNow = (index: number) => {
    clearTimer(openTimer);
    clearTimer(closeTimer);
    openedByRef.current = "manual";
    setActiveBoth(index);
  };

  const toggleBand = (index: number) => {
    clearTimer(openTimer);
    clearTimer(closeTimer);
    openedByRef.current = "manual";
    setActiveBoth(activeRef.current === index ? null : index);
  };

  // Only hover-opened bands auto-close when the pointer leaves the stack;
  // bands opened by click or keyboard stay until dismissed.
  const scheduleStackClose = () => {
    if (openedByRef.current !== "hover") return;
    clearTimer(closeTimer);
    closeTimer.current = window.setTimeout(() => setActiveBoth(null), 250);
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
              ref={stackRef}
              className="product-stack"
              onPointerMove={(event) => {
                lastPointerRef.current = { x: event.clientX, y: event.clientY };
              }}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") cancelStackClose();
              }}
              onPointerLeave={(event) => {
                if (event.pointerType !== "mouse") return;
                // Ignore phantom leaves caused by panels shifting the layout.
                if (isPointerOver(event.currentTarget, { x: event.clientX, y: event.clientY })) {
                  return;
                }
                scheduleStackClose();
              }}
            >
              {PRODUCTS.map((product, index) => (
                <ProductLayer
                  key={product.name}
                  product={product}
                  index={index}
                  isOpen={active === index}
                  isPointerOver={isPointerOver}
                  onHoverOpen={() => requestOpen(index)}
                  onLeave={() => cancelPending(index)}
                  onFocusOpen={() => openNow(index)}
                  onClose={() => {
                    if (activeRef.current === index) setActiveBoth(null);
                  }}
                  onToggle={() => toggleBand(index)}
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