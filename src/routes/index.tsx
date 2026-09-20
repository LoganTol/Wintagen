import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Compass, Layers, Workflow, Code2, Globe } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import heroSkyline from "@/assets/wintagen-hero-skyline-dawn.jpg.asset.json";

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
      { property: "og:url", content: "/" },
      {
        property: "og:description",
        content:
          "Wintagen creates focused software products and provides practical technology services for businesses building what comes next.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: `https://wintagen-builder-spark.lovable.app${heroSkyline.url}`,
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: `https://wintagen-builder-spark.lovable.app${heroSkyline.url}`,
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
    title: "Web experiences",
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
        {/* Hero */}
        <section className="pt-16 md:pt-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.12em] text-brand uppercase">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-accent" />
                Products. Services. One standard.
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
                We build software—and the company behind it.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Wintagen creates focused digital products and provides technology services for
                businesses ready to build, improve, or move an idea forward.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/products" className="btn-primary">
                  Explore our products
                </Link>
                <Link to="/services" className="btn-secondary">
                  View our services
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="mt-12 md:mt-16">
            <figure className="w-full">
              <img
                src={heroSkyline.url}
                alt="A city skyline at dawn, with the first light catching the tops of the buildings"
                className="h-64 w-full object-cover sm:h-80 md:h-[26rem] lg:h-[30rem]"
                width={1400}
                height={861}
              />
            </figure>
          </Reveal>
        </section>

        {/* Company model */}
        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Two ways we create value.
            </h2>
            <span aria-hidden="true" className="mt-4 block h-1 w-12 rounded-full bg-brand-accent" />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="card-surface flex flex-col border-brand/25 bg-brand-soft p-8 transition-shadow hover:shadow-md">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-background">
                  <Boxes className="h-5 w-5 text-brand" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">Products</h3>
                <p className="mt-3 text-muted-foreground">
                  Focused software designed around clear, real-world needs.
                </p>
                <Link
                  to="/products"
                  className="group mt-8 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  Explore products
                  <ArrowRight className="h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:text-brand-accent" />
                </Link>
              </article>

              <article className="card-surface flex flex-col border-brand/25 bg-brand-soft p-8 transition-shadow hover:shadow-md">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-background">
                  <Layers className="h-5 w-5 text-brand" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">Services</h3>
                <p className="mt-3 text-muted-foreground">
                  Practical technology support for organizations building or improving digital
                  experiences.
                </p>
                <Link
                  to="/services"
                  className="group mt-8 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  Explore services
                  <ArrowRight className="h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:text-brand-accent" />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Products built with purpose.
          </h2>
          <span aria-hidden="true" className="mt-4 block h-1 w-12 rounded-full bg-brand-accent" />
          <Reveal className="mt-6">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              The Wintagen portfolio is a growing collection of products — each one built around a
              specific problem and a straightforward reason to exist.
            </p>
            <div className="mt-9">
              <Link to="/products" className="btn-primary">
                View the full portfolio
              </Link>
            </div>
          </Reveal>
        </section>

        {/* Services */}
        <section id="services" className="border-y border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Technology services, shaped around the work.
            </h2>
            <span aria-hidden="true" className="mt-4 block h-1 w-12 rounded-full bg-brand-accent" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map(({ icon: Icon, title, body, slug }) => (
                <Link
                  key={title}
                  to="/services"
                  hash={slug}
                  className="card-surface group flex flex-col p-6 transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  aria-label={`${title} — see details on our services page`}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft">
                    <Icon className="h-5 w-5 text-brand" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:text-brand-accent" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/services" className="btn-primary">
                Explore all services
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Built to create useful things.
              </h2>
              <span aria-hidden="true" className="mt-4 block h-1 w-12 rounded-full bg-brand-accent" />
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Wintagen is a software company built around a simple idea: good technology should
                have a clear purpose. We develop our own products and apply the same practical
                thinking to client work—combining thoughtful design, dependable execution, and room
                to grow.
              </p>
            </div>
            <ul className="grid gap-4 self-center">
              {[
                "Purpose first.",
                "Practical by default.",
                "Built to grow.",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 rounded-xl border border-border bg-surface px-5 py-4"
                >
                  <span aria-hidden="true" className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-sm bg-brand-accent" />
                  <span className="font-medium">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="border-t border-border bg-surface">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-28">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a product to explore or a project to discuss?
            </h2>
            <span aria-hidden="true" className="mx-auto mt-4 block h-1 w-12 rounded-full bg-brand-accent" />
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              See what we're building or start a conversation about what you need.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link to="/products" className="btn-primary">
                Explore products
              </Link>
              {/* Configure the real destination here (e.g. mailto: or a contact URL). */}
              <a href="mailto:hello@wintagen.com" className="btn-secondary">
                Contact Wintagen
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
