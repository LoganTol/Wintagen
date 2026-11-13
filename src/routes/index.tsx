import type React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
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
          <div className="site-container pt-20 sm:pt-24">
            <Reveal>
              <p className="section-label">Wintagen</p>
              <h2 className="section-heading mt-5">Two ways we create value.</h2>
              <span aria-hidden="true" className="section-rule" />
            </Reveal>
          </div>
          <ValueMarquee />

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

const WAVE = [0.3, 0.55, 0.8, 0.45, 0.95, 0.6, 0.35, 0.7, 1, 0.5, 0.75, 0.4, 0.85, 0.55, 0.3, 0.65, 0.9, 0.45, 0.7, 0.35, 0.6, 0.8, 0.4, 0.25];

function ValueMarquee() {
  // Cards repeat so the left-to-right drift loops seamlessly; copies are hidden from assistive tech.
  const sets = [0, 1, 2, 3];
  return (
    <div className="value-marquee">
      <div className="value-track">
        {sets.flatMap((set) =>
          VALUE_CARDS.map(({ to, icon: Icon, title, text, action }) => (
            <Link
              key={`${set}-${title}`}
              to={to}
              className="value-card"
              aria-hidden={set > 0 ? true : undefined}
              tabIndex={set > 0 ? -1 : undefined}
            >
              <span className="value-card__icon" aria-hidden="true">
                <Icon strokeWidth={1.5} />
              </span>
              <span className="value-wave" aria-hidden="true">
                {WAVE.map((h, i) => (
                  <span key={i} style={{ "--h": h, "--i": i } as React.CSSProperties} />
                ))}
              </span>
              <span className="value-card__title">{title}</span>
              <span className="value-card__text">{text}</span>
              <span className="value-card__action">
                {action} <ArrowRight aria-hidden="true" />
              </span>
            </Link>
          )),
        )}
      </div>
    </div>
  );
}
