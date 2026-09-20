import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ExternalLink,
  LayoutTemplate,
  Repeat2,
  Smartphone,
  Sparkles,
  Trophy,
  UsersRound,
  WandSparkles,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import aetherLogo from "@/assets/aether-tennis-logo.png.asset.json";
import quickSiteLogo from "@/assets/quicksite-logo.png.asset.json";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | Wintagen" },
      {
        name: "description",
        content: "Explore Aether Tennis and QuickSite, two focused digital products in the Wintagen portfolio.",
      },
      { property: "og:title", content: "Products | Wintagen" },
      {
        property: "og:description",
        content: "Explore Aether Tennis and QuickSite, two focused digital products in the Wintagen portfolio.",
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
    logo: aetherLogo.url,
    logoClassName: "max-h-24 max-w-[15rem]",
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
    logo: quickSiteLogo.url,
    logoClassName: "max-h-28 max-w-28",
    theme: "quicksite" as const,
    capabilities: [
      { label: "URL-based redesign", icon: WandSparkles },
      { label: "Mobile-first layouts", icon: Smartphone },
      { label: "No-code workflow", icon: LayoutTemplate },
      { label: "Rapid previews", icon: Sparkles },
    ],
  },
] as const;

type Product = (typeof PRODUCTS)[number];

function ProductShowcase({ product, index }: { product: Product; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <Reveal>
      <article className={`product-fold product-fold--${product.theme}`}>
        <div className="product-fold__underlay" aria-hidden="true" />
        <div className="product-fold__sheet">
          <div
            className={`grid items-stretch lg:grid-cols-[0.86fr_1.14fr] ${
              isReversed ? "lg:grid-cols-[1.14fr_0.86fr]" : ""
            }`}
          >
            <div
              className={`product-fold__visual flex min-h-72 items-center justify-center px-8 py-14 sm:min-h-80 sm:px-12 ${
                isReversed ? "lg:order-2" : ""
              }`}
            >
              <div className="product-fold__logo-stage">
                <img
                  src={product.logo}
                  alt={`${product.name} logo`}
                  className={`h-auto w-auto object-contain ${product.logoClassName}`}
                />
              </div>
            </div>

            <div
              className={`flex flex-col justify-center px-7 py-10 sm:px-12 sm:py-14 lg:px-16 ${
                isReversed ? "lg:order-1" : ""
              }`}
            >
              <p className="product-fold__category text-xs font-semibold uppercase tracking-[0.14em]">
                {product.category}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
                {product.name}
              </h2>
              <p className="mt-2 text-lg font-semibold text-foreground">{product.tagline}</p>
              <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{product.description}</p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2" aria-label={`${product.name} features`}>
                {product.capabilities.map(({ label, icon: Icon }) => (
                  <li key={label} className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <span className="product-fold__feature-icon" aria-hidden="true">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>

              <a
                href={product.url}
                target="_blank"
                rel="noreferrer"
                className="product-fold__link group mt-9 inline-flex w-fit items-center gap-2 rounded-md font-semibold focus-visible:outline-2 focus-visible:outline-offset-4"
                aria-label={`Visit ${product.name} at ${product.domain} (opens in a new tab)`}
              >
                Visit {product.domain}
                <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
          <span className="product-fold__corner" aria-hidden="true" />
        </div>
      </article>
    </Reveal>
  );
}

function ProductsPage() {
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
              exist. Meet the first two brands in our growing portfolio.
            </p>
          </Reveal>
        </section>

        <section className="border-y border-border bg-surface" aria-label="Wintagen product portfolio">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <div className="space-y-8 md:space-y-12">
              {PRODUCTS.map((product, index) => (
                <ProductShowcase key={product.name} product={product} index={index} />
              ))}
            </div>
          </div>
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