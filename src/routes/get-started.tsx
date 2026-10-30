import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { GetStartedForm } from "@/components/site/GetStartedForm";

export const Route = createFileRoute("/get-started")({
  head: () => ({
    meta: [
      { title: "Get Started | Wintagen" },
      {
        name: "description",
        content:
          "Tell Wintagen what you need, the features you have in mind, and how you'd like to talk. A short interest form to start the conversation.",
      },
      { property: "og:title", content: "Get Started | Wintagen" },
      {
        property: "og:description",
        content:
          "Tell Wintagen what you need, the features you have in mind, and how you'd like to talk. A short interest form to start the conversation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: GetStartedPage,
});

function GetStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.12em] text-brand uppercase">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-accent" />
              Get started
            </p>
            <h1 className="page-title mt-5">Tell us what you're working on.</h1>
            <span aria-hidden="true" className="mt-6 block h-1 w-12 rounded-full bg-brand-accent" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Three short steps. No pressure, no commitment — just enough for us to pick up the
              conversation where you left off.
            </p>
          </Reveal>

          <div className="mt-14">
            <GetStartedForm idPrefix="page" />
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <Link to="/services" className="btn-secondary">
              Browse our services first
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
