import { useEffect, useRef, useState } from "react";

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  Code2,
  Compass,
  Gauge,
  Globe,
  LayoutTemplate,
  Link2,
  ListChecks,
  Map,
  PenTool,
  Plug,
  Search,
  Smartphone,
  Timer,
  Workflow,
  Wrench,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Wintagen" },
      {
        name: "description",
        content:
          "Software development, web experiences, product strategy, and automation and integrations — practical technology services from Wintagen.",
      },
      { property: "og:title", content: "Services | Wintagen" },
      {
        property: "og:description",
        content:
          "Software development, web experiences, product strategy, and automation and integrations — practical technology services from Wintagen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    slug: "software-development",
    name: "Software development",
    category: "Build",
    tagline: "Purpose-built web applications and digital tools.",
    description:
      "We design and build web applications around the way your work actually happens — starting from a clear problem, shipping something usable early, then refining it. Every build is written to be maintained: readable code, sensible structure, and room to grow as your needs change.",
    theme: "build" as const,
    capabilities: [
      { label: "Custom web applications", icon: Code2 },
      { label: "Internal tools and portals", icon: Wrench },
      { label: "Ongoing iteration", icon: Gauge },
      { label: "Maintainable foundations", icon: Boxes },
    ],
  },
  {
    slug: "web-experiences",
    name: "Web experiences",
    category: "Design and build",
    tagline: "Modern, responsive websites designed for clarity and conversion.",
    description:
      "Websites that say what you do in seconds and read well on every screen. We focus on clear structure, honest copy, quick load times, and accessible design — so visitors find what they came for and know what to do next.",
    theme: "web" as const,
    capabilities: [
      { label: "Marketing and brand sites", icon: Globe },
      { label: "Responsive layouts", icon: Smartphone },
      { label: "Design systems", icon: LayoutTemplate },
      { label: "Performance and accessibility", icon: Gauge },
    ],
  },
  {
    slug: "product-strategy",
    name: "Product strategy",
    category: "Plan",
    tagline: "Practical guidance to define, validate, and scope digital products.",
    description:
      "Before anything gets built, it helps to know what is worth building. We work through the problem, the people it affects, and the smallest version that proves the idea — then turn that into a scope you can budget, sequence, and act on.",
    theme: "strategy" as const,
    capabilities: [
      { label: "Discovery and framing", icon: Search },
      { label: "Scope and roadmapping", icon: Map },
      { label: "Prototypes and concepts", icon: PenTool },
      { label: "Prioritization", icon: ListChecks },
    ],
  },
  {
    slug: "automation-integrations",
    name: "Automation and integrations",
    category: "Connect",
    tagline: "Connected workflows that reduce repetitive work.",
    description:
      "Most teams lose hours moving the same information between tools. We connect the systems you already use, automate the steps that never needed a person, and keep the handoffs visible so you can trust what is running in the background.",
    theme: "automate" as const,
    capabilities: [
      { label: "Workflow automation", icon: Workflow },
      { label: "Third-party integrations", icon: Plug },
      { label: "Data syncing", icon: Link2 },
      { label: "Scheduled processes", icon: Timer },
    ],
  },
] as const;

type Service = (typeof SERVICES)[number];

function ServiceLayer({
  service,
  index,
  isOpen,
  isPointerOver,
  onHoverOpen,
  onLeave,
  onFocusOpen,
  onClose,
  onToggle,
}: {
  service: Service;
  index: number;
  isOpen: boolean;
  isPointerOver: (element: HTMLElement, point?: { x: number; y: number }) => boolean;
  onHoverOpen: () => void;
  onLeave: () => void;
  onFocusOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}) {
  const panelId = `service-panel-${index}`;
  const toggledOnPointerDown = useRef(false);
  const hoverSuppressed = useRef(false);
  const suppressFocusOpen = useRef(false);

  return (
    <article
      id={service.slug}
      data-index={index}
      className={`product-layer product-layer--${service.theme} scroll-mt-24 ${isOpen ? "is-open" : ""}`}
      style={{ zIndex: SERVICES.length - index }}
      onPointerEnter={(event) => {
        if (event.pointerType !== "mouse" || hoverSuppressed.current) return;
        onHoverOpen();
      }}
      onPointerLeave={(event) => {
        if (event.pointerType !== "mouse") return;
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
          if (toggledOnPointerDown.current) {
            toggledOnPointerDown.current = false;
            return;
          }
          if (isOpen) hoverSuppressed.current = true;
          onToggle();
        }}
      >
        <span className="text-center">
          <span className="block text-2xl font-semibold leading-tight sm:text-3xl">{service.name}</span>
          <span className="mt-2 block text-sm font-medium text-muted-foreground sm:text-base">
            {service.tagline}
          </span>
        </span>
      </Button>

      <div id={panelId} className="product-layer__panel" aria-hidden={!isOpen}>
        <div className="product-layer__panel-inner">
          <div className="mx-auto grid max-w-4xl gap-8 px-7 pb-10 pt-2 sm:px-12 sm:pb-12 md:grid-cols-[1.2fr_1fr] md:gap-12">
            <div>
              <p className="product-layer__category text-xs font-semibold uppercase tracking-[0.14em]">
                {service.category}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">{service.description}</p>
              <a
                href="mailto:hello@wintagen.com"
                tabIndex={isOpen ? 0 : -1}
                className="product-layer__link group mt-7 inline-flex items-center gap-2 rounded-md font-semibold focus-visible:outline-2 focus-visible:outline-offset-4"
                aria-label={`Discuss a ${service.name.toLowerCase()} project with Wintagen`}
              >
                Discuss a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <ul
              className="grid content-start gap-3 sm:grid-cols-2 md:grid-cols-1"
              aria-label={`${service.name} highlights`}
            >
              {service.capabilities.map(({ label, icon: Icon }) => (
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

function ServicesPage() {
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

  const isPointerOver = (element: HTMLElement, point?: { x: number; y: number }) => {
    const { x, y } = point ?? lastPointerRef.current;
    const hit = document.elementFromPoint(x, y);
    return hit !== null && element.contains(hit);
  };

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

  const scheduleReconcile = () => {
    clearTimer(reconcileTimer);
    reconcileTimer.current = window.setTimeout(() => {
      if (openedByRef.current !== "hover") return;
      const under = layerUnderPointer();
      if (under === activeRef.current) {
        reconcileDepth.current = 0;
        return;
      }
      if (reconcileDepth.current >= 3) return;
      reconcileDepth.current += 1;
      setActiveBoth(under);
      if (under !== null) scheduleReconcile();
    }, 750);
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const hashIndex = SERVICES.findIndex((s) => s.slug === hash);
    if (hashIndex >= 0) {
      openedByRef.current = "manual";
      setActiveBoth(hashIndex);
      window.setTimeout(() => {
        document.getElementById(SERVICES[hashIndex]!.slug)?.scrollIntoView({ block: "start" });
      }, 60);
    } else if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      setActiveBoth(0);
    }

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

  const cancelPending = (index: number) => {
    if (pendingIndexRef.current === index) {
      pendingIndexRef.current = null;
      clearTimer(openTimer);
    }
  };

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
              Services
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-normal sm:text-5xl">
              Technology services, shaped around the work.
            </h1>
            <span aria-hidden="true" className="mt-4 block h-1 w-12 rounded-full bg-brand-accent" />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Four ways we help organizations build, improve, and connect their digital work. Open
              any service below for the detail.
            </p>
          </Reveal>
        </section>

        <section className="border-y border-border" aria-label="Wintagen services">
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
                if (isPointerOver(event.currentTarget, { x: event.clientX, y: event.clientY })) {
                  return;
                }
                scheduleStackClose();
              }}
            >
              {SERVICES.map((service, index) => (
                <ServiceLayer
                  key={service.slug}
                  service={service}
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
              Have a project in mind?
            </h2>
            <span aria-hidden="true" className="mx-auto mt-4 block h-1 w-12 rounded-full bg-brand-accent" />
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Tell us what you are trying to build or improve, and we will take it from there.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="mailto:hello@wintagen.com" className="btn-primary">Contact Wintagen</a>
              <Link to="/products" className="btn-secondary group">
                Explore our products
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
