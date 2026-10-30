import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Compass, Layers, Workflow, Code2, Globe } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import heroSkyline from "@/assets/wintagen-hero-atlanta-skyline.jpg.asset.json";

export const Route = createFileRoute("/")({
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
      {
        property: "og:image",
        content: `https://wintagen.com${heroSkyline.url}`,
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: `https://wintagen.com${heroSkyline.url}`,
      },
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
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="home-hero">
          <div className="site-container">
            <Reveal className="home-hero__content">
              <p className="section-label rounded-full border border-border bg-brand-soft px-4 py-2">
                Products. Services. One standard.
              </p>
              <h1 className="home-hero__title">
                We build <span className="text-brand">software</span>—and the company behind it.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Wintagen creates focused digital products and provides technology services for
                businesses ready to build, improve, or move an idea forward.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg">
                  <Link to="/products">
                    Explore our products <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/services">View our services</Link>
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="home-hero__photo">
            <figure>
              <img
                src={heroSkyline.url}
                alt="The Atlanta skyline at sunset, including the full spire of Bank of America Plaza"
                width={1920}
                height={1280}
              />
            </figure>
          </Reveal>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="site-container section-space">
            <Reveal>
              <p className="section-label">Wintagen</p>
              <h2 className="section-heading mt-5">Two ways we create value.</h2>
              <span aria-hidden="true" className="section-rule" />
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <article className="value-card flex flex-col">
                  <Boxes className="h-8 w-8 text-brand" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-8 text-2xl font-semibold">Products</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                    Focused software designed around clear, real-world needs.
                  </p>
                  <Button asChild variant="link" className="mt-6 self-start px-0">
                    <Link to="/products">
                      Explore products <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </article>
                <article className="value-card flex flex-col">
                  <Layers className="h-8 w-8 text-brand" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-8 text-2xl font-semibold">Services</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                    Practical technology support for organizations building or improving digital
                    experiences.
                  </p>
                  <Button asChild variant="link" className="mt-6 self-start px-0">
                    <Link to="/services">
                      Explore services <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </article>
              </div>
            </Reveal>
          </div>
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
