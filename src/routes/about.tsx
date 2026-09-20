import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Wintagen" },
      {
        name: "description",
        content:
          "Wintagen is an Atlanta-based software company building digital products and working with businesses to create custom software, applications, and websites.",
      },
      { property: "og:title", content: "About Us | Wintagen" },
      {
        property: "og:description",
        content:
          "Wintagen is an Atlanta-based software company building digital products and working with businesses to create custom software, applications, and websites.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AboutPage,
});

const PRINCIPLES = ["Purpose first.", "Practical by default.", "Built to grow."];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.12em] text-brand uppercase">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-accent" />
              About us
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Built to create useful things.
            </h1>
            <span aria-hidden="true" className="mt-6 block h-1 w-12 rounded-full bg-brand-accent" />
            <div className="mt-8 max-w-2xl space-y-5">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Wintagen is a software company based in Atlanta, Georgia, where we develop digital
                products and work with businesses to create custom software, applications, and
                websites. We bring creative ideas and practical development together to build
                technology around the people who use it.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Every project starts with a conversation. We take time to understand your business,
                the challenges you face, and what you want to accomplish. Whether you have a
                detailed plan or an idea you're still exploring, we work with you to turn that
                vision into a clear direction.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Customer involvement remains important throughout development. Through open
                communication, regular feedback, and shared decisions, we keep the work connected
                to your goals. Your knowledge of your business helps shape what we build, from the
                features that matter most to the experience your customers will have.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Building our own products also informs how we approach client projects. We consider
                how software will be used, maintained, and improved after launch, alongside the
                work needed to get it there.
              </p>
              <p className="font-medium leading-relaxed text-foreground">
                At Wintagen, we're creating a home for useful products, creative thinking, and
                lasting customer relationships. Our goal is to make thoughtful software that helps
                businesses move forward and makes everyday tasks easier.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-14 grid gap-4 sm:grid-cols-3">
              {PRINCIPLES.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 rounded-xl border border-border bg-surface px-5 py-4"
                >
                  <span aria-hidden="true" className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-sm bg-brand-accent" />
                  <span className="font-medium">{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-16 flex flex-wrap gap-3">
              <Link to="/services" className="btn-primary">
                Explore our services
              </Link>
              <Link to="/products" className="btn-secondary">
                View our products
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
