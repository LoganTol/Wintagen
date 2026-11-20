import { createFileRoute } from "@tanstack/react-router";
import {
  Boxes,
  Code2,
  Compass,
  Gauge,
  Globe,
  LayoutTemplate,
  Link2,
  ListChecks,
  Map,
  PenTool,
  Plug,
  Search,
  Smartphone,
  Timer,
  Workflow,
  Wrench,
} from "lucide-react";
import { DrawerPage } from "@/components/site/DrawerPage";

export const Route = createFileRoute("/services")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Services | Wintagen" },
      {
        name: "description",
        content:
          "Software development, websites, product strategy, and automation and integrations — practical technology services from Wintagen.",
      },
      { property: "og:title", content: "Services | Wintagen" },
      {
        property: "og:description",
        content:
          "Software development, websites, product strategy, and automation and integrations — practical technology services from Wintagen.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wintagen.com/services" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://wintagen.com/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    slug: "software-development",
    name: "Software Development",
    category: "Build",
    tagline: "Purpose-Built Web Applications And Digital Tools.",
    description:
      "We design and build web applications around the way your work actually happens — starting from a clear problem, shipping something usable early, then refining it. Every build is written to be maintained: readable code, sensible structure, and room to grow as your needs change.",
    theme: "build" as const,
    capabilities: [
      { label: "Custom Web Applications", icon: Code2 },
      { label: "Internal Tools And Portals", icon: Wrench },
      { label: "Ongoing Iteration", icon: Gauge },
      { label: "Maintainable Foundations", icon: Boxes },
    ],
  },
  {
    slug: "web-experiences",
    name: "Websites",
    category: "Design And Build",
    tagline: "Modern, Responsive Websites Designed For Clarity And Conversion.",
    description:
      "Websites that say what you do in seconds and read well on every screen. We focus on clear structure, honest copy, quick load times, and accessible design — so visitors find what they came for and know what to do next.",
    theme: "web" as const,
    capabilities: [
      { label: "Marketing And Brand Sites", icon: Globe },
      { label: "Responsive Layouts", icon: Smartphone },
      { label: "Design Systems", icon: LayoutTemplate },
      { label: "Performance And Accessibility", icon: Gauge },
    ],
  },
  {
    slug: "product-strategy",
    name: "Product Strategy",
    category: "Plan",
    tagline: "Practical Guidance To Define, Validate, And Scope Digital Products.",
    description:
      "Before anything gets built, it helps to know what is worth building. We work through the problem, the people it affects, and the smallest version that proves the idea — then turn that into a scope you can budget, sequence, and act on.",
    theme: "strategy" as const,
    capabilities: [
      { label: "Discovery And Framing", icon: Search },
      { label: "Scope And Roadmapping", icon: Map },
      { label: "Prototypes And Concepts", icon: PenTool },
      { label: "Prioritization", icon: ListChecks },
    ],
  },
  {
    slug: "automation-integrations",
    name: "Automation And Integrations",
    category: "Connect",
    tagline: "Connected Workflows That Reduce Repetitive Work.",
    description:
      "Most teams lose hours moving the same information between tools. We connect the systems you already use, automate the steps that never needed a person, and keep the handoffs visible so you can trust what is running in the background.",
    theme: "automate" as const,
    capabilities: [
      { label: "Workflow Automation", icon: Workflow },
      { label: "Third-Party Integrations", icon: Plug },
      { label: "Data Syncing", icon: Link2 },
      { label: "Scheduled Processes", icon: Timer },
    ],
  },
] as const;

function ServicesPage() {
  return <DrawerPage entries={SERVICES} eyebrow="Services" title="Technology Services, Shaped Around The Work." description="Four ways we help organizations build, improve, and connect their digital work." label="Wintagen services" />;
}
