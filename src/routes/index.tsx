import { useEffect, useRef, useState } from "react";
import type React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Compass,
  Workflow,
  Code2,
  Globe,
  Package,
  Wrench,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { useHeroGlow } from "@/hooks/use-hero-glow";
import { AnimatedWintagenLogo } from "@/components/site/AnimatedWintagenLogo";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Wintagen | Software Products & Technology Services" },
      {
        name: "description",
        content:
          "Wintagen creates focused software products and provides practical technology services for businesses building what comes next.",
      },
      { property: "og:title", content: "Wintagen | Software Products & Technology Services" },
      { property: "og:url", content: "https://wintagen.com/" },
      {
        property: "og:description",
        content:
          "Wintagen creates focused software products and provides practical technology services for businesses building what comes next.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://wintagen.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Wintagen",
          legalName: "Wintagen",
          url: "https://wintagen.com",
          logo: "https://wintagen.com/favicon-96.png",
          description:
            "Wintagen is an Atlanta-based software company that develops focused digital products and provides practical technology services including custom software development, websites, product strategy, and workflow automations.",
          email: "contact@wintagen.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Atlanta",
            addressRegion: "GA",
            addressCountry: "US",
          },
          knowsAbout: [
            "Software Development",
            "Web Application Development",
            "Digital Product Strategy",
            "Workflow Automation & Integrations",
            "SaaS Products",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Technology Services & Digital Products",
            itemListElement: [
              ["Software Development", "Purpose-built web applications and digital tools."],
              ["Websites", "Modern, responsive websites designed for clarity and conversion."],
              [
                "Product Strategy",
                "Practical guidance to define, validate, and scope digital products.",
              ],
              ["Automation & Integrations", "Connected workflows that reduce repetitive work."],
            ].map(([name, description]) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name, description },
            })),
          },
        }),
      },
    ],
  }),
  component: Index,
});

const SERVICES = [
  {
    icon: Code2,
    title: "Software development",
    body: "Purpose-built web applications and digital tools.",
    slug: "software-development",
  },
  {
    icon: Globe,
    title: "Websites",
    body: "Modern, responsive websites designed for clarity and conversion.",
    slug: "web-experiences",
  },
  {
    icon: Compass,
    title: "Product strategy",
    body: "Practical guidance to define, validate, and scope digital products.",
    slug: "product-strategy",
  },
  {
    icon: Workflow,
    title: "Automation and integrations",
    body: "Connected workflows that reduce repetitive work.",
    slug: "automation-integrations",
  },
] as const;

function Index() {
  const glowRef = useHeroGlow();
  return (
    <div id="top" className="min-h-screen bg-background">
      <main>
        <section ref={glowRef} className="home-opening" aria-label="Wintagen introduction">
          <Header unified />
          <div className="home-hero">
          <div className="site-container">
            <Reveal className="home-hero__content">
              <h1 className="home-hero__title">
                Thoughtfully Built <span className="text-brand">Websites and Software</span>.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Wintagen develops its own portfolio of digital products alongside custom website
                and software solutions for businesses.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg">
                  <Link to="/products">
                    Explore our products <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/services" className="border border-brand">
                    View our services
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
          <AnimatedWintagenLogo />
          </div>
          <div className="hero-separator" aria-hidden="true" />
        </section>

        <section className="value-section border-b">
          <ValueRail />

        </section>

        <section id="services" className="border-y border-border bg-surface">
          <div className="site-container section-space">
            <Reveal>
              <p className="section-label">Our services</p>
              <h2 className="section-heading mt-5 max-w-3xl">
                Technology services, shaped around the work.
              </h2>
              <span aria-hidden="true" className="section-rule" />
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {SERVICES.map(({ icon: Icon, title, body, slug }, index) => (
                  <Link
                    key={title}
                    to="/services"
                    hash={slug}
                    className="service-card group flex flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    aria-label={`${title} — see details on our services page`}
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="h-8 w-8 text-brand" strokeWidth={1.5} aria-hidden="true" />
                      <span className="text-xs font-medium text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                    <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">{body}</p>
                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                      Learn more{" "}
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                ))}
              </div>
              <Button asChild className="mt-8">
                <Link to="/services">
                  Explore all services <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="bg-brand-soft">
          <Reveal className="site-container section-space text-center">
            <p className="section-label">Let's talk</p>
            <h2 className="section-heading mx-auto mt-5 max-w-3xl">
              Have a product to explore or a project to discuss?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              See what we're building or start a conversation about what you need.
            </p>
            <div className="mt-9 flex flex-col items-center gap-3">
              <Button asChild size="lg">
                <Link to="/get-started">
                  Get started <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild variant="outline">
                  <a href="mailto:contact@wintagen.com">Contact Wintagen</a>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/products">Explore products</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const VALUE_CARDS = [
  {
    to: "/products",
    icon: Package,
    title: "Products",
    text: "Focused software designed around clear, real-world needs.",
    action: "Explore products",
  },
  {
    to: "/services",
    icon: Wrench,
    title: "Services",
    text: "Practical technology support for organizations building or improving digital experiences.",
    action: "Explore services",
  },
] as const;

function wavePaths(seed: number) {
  // Vertical "mesh" lines whose tops trace layered sine waves, like a sound landscape.
  const lines: { x: number; top: number; o: number }[] = [];
  for (let i = 0; i <= 120; i++) {
    const x = (i / 120) * 640;
    const t = i / 120;
    const h =
      0.45 +
      0.25 * Math.sin(t * 9 + seed) +
      0.15 * Math.sin(t * 23 + seed * 2) +
      0.1 * Math.sin(t * 47 + seed * 3);
    lines.push({ x, top: 240 - Math.max(0.08, h) * 190, o: 0.25 + 0.6 * Math.max(0, h) });
  }
  return lines;
}

function ValueRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const update = () =>
      setEdge({
        start: rail.scrollLeft < 8,
        end: rail.scrollLeft + rail.clientWidth > rail.scrollWidth - 8,
      });
    update();
    rail.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // Mouse drag to scroll horizontally (touch uses native swipe).
    let startX = 0, startLeft = 0, down = false, moved = false;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      down = true; moved = false; startX = e.clientX; startLeft = rail.scrollLeft;
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 5) { moved = true; rail.classList.add("is-dragging"); }
      if (moved) rail.scrollLeft = startLeft - dx;
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      rail.classList.remove("is-dragging");
    };
    const onClick = (e: MouseEvent) => { if (moved) { e.preventDefault(); moved = false; } };
    rail.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    rail.addEventListener("click", onClick, true);
    return () => {
      rail.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      rail.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      rail.removeEventListener("click", onClick, true);
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const rail = railRef.current;
    const card = rail?.querySelector<HTMLElement>(".value-card");
    if (rail && card) rail.scrollBy({ left: dir * (card.offsetWidth + 24), behavior: "smooth" });
  };

  const shift = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const p = (e.clientX - r.left) / r.width - 0.5;
    e.currentTarget.style.setProperty("--wave-shift", `${(-p * 24).toFixed(1)}px`);
  };

  return (
    <>
      <div className="site-container pt-20 sm:pt-24">
        <Reveal className="value-rail-head">
          <div>
            <p className="section-label">Wintagen</p>
            <h2 className="section-heading mt-5">Two ways we create value.</h2>
            <span aria-hidden="true" className="section-rule" />
          </div>
          <div className="value-rail-nav">
            <button type="button" aria-label="Previous card" disabled={edge.start} onClick={() => step(-1)}>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" aria-label="Next card" disabled={edge.end} onClick={() => step(1)}>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
      <div ref={railRef} className="value-rail" aria-label="Products and services">
        {VALUE_CARDS.map(({ to, icon: Icon, title, text, action }, index) => (
          <Link
            key={title}
            to={to}
            className="value-card"
            draggable={false}
            onPointerMove={shift}
            onPointerLeave={(e) => e.currentTarget.style.setProperty("--wave-shift", "0px")}
          >
            <span className="value-card__art" aria-hidden="true">
              <span className="value-card__meta">
                <span>{title}</span>
                <span>//00{index + 1}</span>
              </span>
              <svg viewBox="0 0 640 240" preserveAspectRatio="none">
                {wavePaths(index * 2.3 + 1).map(({ x, top, o }, i) => (
                  <line
                    key={x}
                    x1={x}
                    x2={x}
                    y1={top}
                    y2={240}
                    stroke={i % 11 === 5 ? "var(--brand-accent)" : "var(--brand)"}
                    strokeOpacity={i % 11 === 5 ? Math.min(1, o + 0.2) : o}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeDasharray="3 3"
                  />
                ))}
              </svg>
            </span>
            <span className="value-card__body">
              <span className="value-card__title">
                <Icon strokeWidth={1.5} aria-hidden="true" />
                {title}
              </span>
              <span className="value-card__text">{text}</span>
              <span className="value-card__action">
                {action} <ArrowRight aria-hidden="true" />
              </span>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
