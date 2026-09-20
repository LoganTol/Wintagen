import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PRIVACY_INTRO, PRIVACY_SECTIONS } from "@/content/privacy";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Wintagen" },
      {
        name: "description",
        content:
          "How Wintagen collects, uses, discloses, and protects personal information across its website and client services.",
      },
      { property: "og:title", content: "Privacy Policy | Wintagen" },
      {
        property: "og:description",
        content:
          "How Wintagen collects, uses, discloses, and protects personal information across its website and client services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      effectiveDate="September 20, 2026"
      intro={PRIVACY_INTRO}
      sections={PRIVACY_SECTIONS}
    />
  );
}
