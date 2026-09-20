import { Reveal } from "@/components/site/Reveal";

export type LegalBlock =
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string };

export interface LegalSection {
  number: string;
  title: string;
  blocks: LegalBlock[];
}

export function LegalPage({
  eyebrow,
  title,
  effectiveDate,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main id="main" className="pb-20 pt-28 md:pt-36">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
            {eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Effective date: {effectiveDate}</p>
          <p className="mt-6 leading-relaxed text-muted-foreground">{intro}</p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section
              key={section.number}
              aria-labelledby={`legal-${section.number}`}
              className="border-t border-border pt-8"
            >
              <h2
                id={`legal-${section.number}`}
                className="text-lg font-semibold tracking-tight text-foreground"
              >
                <span className="mr-2 text-brand">{section.number}</span>
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.blocks.map((block, i) =>
                  block.type === "subheading" ? (
                    <h3
                      key={i}
                      className="pt-2 text-sm font-semibold uppercase tracking-wide text-foreground"
                    >
                      {block.text}
                    </h3>
                  ) : (
                    <p key={i} className="leading-relaxed text-muted-foreground">
                      {block.text}
                    </p>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
