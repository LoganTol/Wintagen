import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | Wintagen" },
      {
        name: "description",
        content:
          "The Wintagen portfolio: focused software products and brands, each built around a specific problem and a straightforward reason to exist.",
      },
      { property: "og:title", content: "Products | Wintagen" },
      {
        property: "og:description",
        content:
          "The Wintagen portfolio: focused software products and brands, each built around a specific problem and a straightforward reason to exist.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProductsPage,
});

/**
 * The Wintagen portfolio. Add new products or brands by appending entries here —
 * the grid reflows automatically. Editable starter content, not permanent claims.
 */
const PRODUCTS: Array<{
  label: string;
  title: string;
  description: string;
  status: string;
}> = [
  {
    label: "Wintagen Portfolio",
    title: "Product announcements coming soon.",
    description:
      "We're preparing the first products in the Wintagen portfolio. More details will be shared here as they become available.",
    status: "In development",
  },
];

function PortfolioCard({ item }: { item: (typeof PRODUCTS)[number] }) {
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
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{item.title}</h2>
        <p className="max-w-2xl text-muted-foreground">{item.description}</p>
      </article>
    </Reveal>
  );
}

function ProductsPage() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Page header */}
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
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Products built with purpose.
            </h1>
            <span aria-hidden="true" className="mt-4 block h-1 w-12 rounded-full bg-brand-accent" />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Our portfolio is designed to grow. Each product starts with a specific problem and a
              straightforward reason to exist.
            </p>
          </Reveal>
        </section>

        {/* Portfolio grid */}
        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <div className="grid gap-6 lg:grid-cols-2">
              {PRODUCTS.map((p) => (
                <PortfolioCard key={p.title} item={p} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-28">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Interested in what we're building?
            </h2>
            <span
              aria-hidden="true"
              className="mx-auto mt-4 block h-1 w-12 rounded-full bg-brand-accent"
            />
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Start a conversation about our products or what you need.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="mailto:hello@wintagen.com" className="btn-primary">
                Contact Wintagen
              </a>
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
