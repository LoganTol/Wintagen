import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Boxes, Compass, Layers, Workflow, Code2, Globe } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LogoMark } from "@/components/site/Logo";
import { Reveal } from "@/components/site/Reveal";

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
      {
        property: "og:description",
        content:
          "Wintagen creates focused software products and provides practical technology services for businesses building what comes next.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
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
  },
  {
    icon: Globe,
    title: "Web experiences",
    body: "Modern, responsive websites designed for clarity and conversion.",
  },
  {
    icon: Compass,
    title: "Product strategy",
    body: "Practical guidance to define, validate, and scope digital products.",
  },
  {
    icon: Workflow,
    title: "Automation and integrations",
    body: "Connected workflows that reduce repetitive work.",
  },
];

const PRODUCTS = [
  {
    label: "Wintagen Portfolio",
    title: "Product announcements coming soon.",
    description:
      "We're preparing the first products in the Wintagen portfolio. More details will be shared here as they become available.",
    status: "In development",
  },
];

function ProductCard({ item }: { item: (typeof PRODUCTS)[number] }) {
  return (
    <Reveal>
      <article className="card-surface flex h-full flex-col gap-4 p-7 sm:p-9">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
          {item.label}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-brand-soft px-3 py-1 text-xs font-medium text-foreground">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
          {item.status}
        </span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{item.title}</h3>
        <p className="max-w-2xl text-muted-foreground">{item.description}</p>
      </article>
    </Reveal>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.12em] text-brand uppercase">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-accent" />
                Products. Services. One standard.
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
                We build software—and the company behind it.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Wintagen creates focused digital products and provides technology services for
                businesses ready to build, improve, or move an idea forward.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#products" className="btn-primary">
                  Explore our products
                </a>
                <a href="#services" className="btn-secondary">
                  View our services
                </a>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div aria-hidden="true" className="card-surface grid gap-4 p-6 sm:p-8">
                <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4">
                  <LogoMark className="h-6 w-6 shrink-0" />
                  <div className="h-2 w-28 rounded-full bg-brand/70" />
                  <div className="ml-auto h-2 w-10 rounded-full bg-brand-accent" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-background p-4">
                    <div className="h-8 w-8 rounded-lg bg-brand" />
                    <div className="mt-4 h-2 w-3/4 rounded-full bg-border" />
                    <div className="mt-2 h-2 w-1/2 rounded-full bg-border" />
                  </div>
                  <div className="rounded-xl border border-border bg-brand-soft p-4">
                    <div className="h-8 w-8 rounded-full bg-brand/60" />
                    <div className="mt-4 h-2 w-2/3 rounded-full bg-border" />
                    <div className="mt-2 h-2 w-1/2 rounded-full bg-border" />
                  </div>
                  <div className="col-span-2 rounded-xl border border-border bg-background p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 flex-1 rounded-full bg-brand/50" />
                      <div className="h-2 w-12 rounded-full bg-border" />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="h-12 rounded-lg border border-border bg-surface" />
                      <div className="h-12 rounded-lg border border-border bg-surface" />
                      <div className="h-12 rounded-lg border border-brand/30 bg-brand-soft" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Company model */}
        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Two ways we create value.
            </h2>
            <span aria-hidden="true" className="mt-4 block h-1 w-12 rounded-full bg-brand-accent" />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="card-surface flex flex-col p-8 transition-shadow hover:shadow-md">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft">
                  <Boxes className="h-5 w-5 text-brand" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">Products</h3>
                <p className="mt-3 text-muted-foreground">
                  Focused software designed around clear, real-world needs.
                </p>
                <a
                  href="#products"
                  className="group mt-8 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  Explore products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
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
                <a
                  href="#services"
                  className="group mt-8 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                  Explore services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
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
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Our portfolio is designed to grow. Each product starts with a specific problem and a
            straightforward reason to exist.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.title} item={p} />
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-y border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Technology services, shaped around the work.
            </h2>
            <span aria-hidden="true" className="mt-4 block h-1 w-12 rounded-full bg-brand-accent" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map(({ icon: Icon, title, body }) => (
                <article
                  key={title}
                  className="card-surface flex flex-col p-6 transition-shadow hover:shadow-md"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft">
                    <Icon className="h-5 w-5 text-brand" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
            <div className="mt-10">
              <a href="#contact" className="btn-primary">
                Discuss a project
              </a>
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
              {["Clarity before complexity", "Useful over impressive", "Built for the next stage"].map(
                (p) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-sm bg-brand-accent" />
                    <span className="font-medium">{p}</span>
                  </li>
                ),
              )}
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
              <a href="#products" className="btn-primary">
                Explore products
              </a>
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
