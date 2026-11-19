import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

/**
 * Homepage FAQ entries.
 * Edit `question` and `answer` freely — the list is rendered in order and the
 * first entry starts open. Keep answers to things Wintagen actually does.
 */
const FAQ_ENTRIES = [
  {
    question: "What does Wintagen do?",
    answer:
      "Wintagen develops its own portfolio of digital products and builds custom websites and software for businesses. Product thinking, design, and development happen together, so the thing you end up with is coherent from the first screen to the last.",
  },
  {
    question: "What kinds of projects do you take on?",
    answer:
      "Our services cover software development, websites, product strategy, and automation and integrations. Most engagements start with a specific outcome in mind — a tool that needs building, a site that needs to perform, or a process that needs to stop being manual.",
  },
  {
    question: "Can you improve something we already have?",
    answer:
      "Yes. Alongside new builds, we take on remodels of existing websites and products. That usually means reviewing what is there today, then tightening layout, content, and the mobile experience before anything is rebuilt from scratch.",
  },
  {
    question: "How do we get started?",
    answer:
      "Use the Get Started form — three short steps covering what you need, the features you have in mind, and how you would like us to reach you. Prefer email? Write to contact@wintagen.com and it lands in the same place.",
  },
  {
    question: "Where is Wintagen based?",
    answer:
      "Wintagen is based in Atlanta, Georgia. You can reach the team at contact@wintagen.com or through the Get Started form.",
  },
];

/** The first entry starts open; the empty fallback only matters if the list is emptied. */
const FIRST_FAQ_QUESTION = FAQ_ENTRIES[0]?.question ?? "";

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-border bg-background">
      <div className="site-container section-space grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <Reveal>
          <p className="section-label">FAQ</p>
          <h2 className="section-heading mt-5 max-w-md">Questions, answered.</h2>
          <span aria-hidden="true" className="section-rule" />
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted-foreground">
            The things people usually ask before reaching out. If yours isn't here, we're happy
            to answer it directly.
          </p>
          <Button asChild variant="outline" className="mt-7">
            <a href="mailto:contact@wintagen.com">Ask a question</a>
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <Accordion
            type="single"
            collapsible
            defaultValue={FIRST_FAQ_QUESTION}
            className="faq-list"
          >
            {FAQ_ENTRIES.map(({ question, answer }) => (
              <AccordionItem key={question} value={question} className="faq-item">
                <AccordionTrigger className="faq-item__trigger">{question}</AccordionTrigger>
                <AccordionContent className="faq-item__panel">
                  <p className="faq-item__answer">{answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
