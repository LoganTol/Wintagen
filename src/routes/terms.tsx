import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { TERMS_INTRO, TERMS_SECTIONS } from "@/content/terms";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Wintagen" },
      {
        name: "description",
        content:
          "The terms governing the Wintagen website and its software and web development services.",
      },
      { property: "og:title", content: "Terms of Service | Wintagen" },
      {
        property: "og:description",
        content:
          "The terms governing the Wintagen website and its software and web development services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      effectiveDate="September 20, 2026"
      intro={TERMS_INTRO}
      sections={TERMS_SECTIONS}
    />
  );
}
