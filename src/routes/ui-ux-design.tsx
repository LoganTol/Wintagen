import { createFileRoute } from "@tanstack/react-router";
import { Accessibility, Compass, LayoutTemplate, ListChecks, MousePointer2, Navigation, PenTool, RefreshCw, Search, Smartphone, Tablet, Type, Users, Workflow, ZoomIn } from "lucide-react";
import { DrawerPage, type DrawerEntry } from "@/components/site/DrawerPage";

const description = "UI/UX design from Wintagen: clear user journeys, redesigns for existing websites, mobile-first experiences, and accessible, usable interfaces.";

export const Route = createFileRoute("/ui-ux-design")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "UI/UX Design | Wintagen" },
      { name: "description", content: description },
      { property: "og:title", content: "UI/UX Design | Wintagen" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://wintagen.com/ui-ux-design" }],
  }),
  component: DesignPage,
});

const DESIGN_DRAWERS: readonly DrawerEntry[] = [
  {
    slug: "ui-ux-overview",
    name: "UI/UX Design",
    category: "Understand And Design",
    tagline: "Clear Interfaces. Thoughtful User Journeys.",
    description: "User interface design shapes what people see and interact with; user experience design shapes how easily they reach their goals. We bring the two together, working through your audience, content, and key tasks to create clear layouts, intuitive navigation, and consistent interactions. Wireframes and prototypes turn those ideas into something you can review before development begins.",
    theme: "build",
    capabilities: [
      { label: "Audience And User Journeys", icon: Users },
      { label: "Wireframes And Prototypes", icon: PenTool },
      { label: "Visual Hierarchy", icon: LayoutTemplate },
      { label: "Consistent Interactions", icon: MousePointer2 },
    ],
  },
  {
    slug: "ui-ux-remodels",
    name: "UI/UX Remodels",
    category: "Refresh And Refine",
    tagline: "A Better Experience For The Website You Already Have.",
    description: "An existing website can reflect your company more clearly without losing what already works. We review its structure, navigation, and important journeys to identify confusing layouts, dated interfaces, and unnecessary steps. Then we reshape the experience around your current brand and business needs, preserving familiar strengths while making it easier for visitors to find information, get in touch, or complete a task.",
    theme: "web",
    capabilities: [
      { label: "Existing Experience Reviews", icon: Search },
      { label: "Brand-Aligned Interface Refreshes", icon: RefreshCw },
      { label: "Clearer Navigation And Content", icon: Navigation },
      { label: "Simpler Customer Journeys", icon: Workflow },
    ],
  },
  {
    slug: "mobile-first-design",
    name: "Mobile-First Design",
    category: "Start With The Small Screen",
    tagline: "Built For The Way People Browse Today.",
    description: "People often encounter a business on their phone, whether they are searching on the go, following a shared link, or comparing options. Mobile-first web design is crucial because the smallest screen cannot be an afterthought: key information, navigation, and actions need to work comfortably from the start. We prioritize readable content, touch-friendly controls, simple forms, and focused layouts on mobile, then expand the experience thoughtfully for tablets and desktops.",
    theme: "strategy",
    capabilities: [
      { label: "Mobile-First Layouts", icon: Smartphone },
      { label: "Touch-Friendly Controls", icon: MousePointer2 },
      { label: "Readable Content And Simple Forms", icon: Type },
      { label: "Adaptable Tablet And Desktop Views", icon: Tablet },
    ],
  },
  {
    slug: "accessibility-usability",
    name: "Accessibility And Usability",
    category: "Make The Experience Inclusive",
    tagline: "Fewer Barriers. More Confidence.",
    description: "A useful design should welcome people with different abilities, devices, and levels of digital confidence. We consider contrast, readable type, keyboard navigation, clear labels, and understandable feedback as part of the design—not as finishing touches. Reviewing everyday tasks helps uncover friction and refine the details, so people can move through your website with less confusion and greater independence.",
    theme: "automate",
    capabilities: [
      { label: "Accessible Interface Patterns", icon: Accessibility },
      { label: "Keyboard And Focus Journeys", icon: Compass },
      { label: "Contrast And Readability", icon: ZoomIn },
      { label: "Task-Based Usability Reviews", icon: ListChecks },
    ],
  },
];

function DesignPage() {
  return <DrawerPage entries={DESIGN_DRAWERS} eyebrow="Design" title="UI/UX Design" description="Thoughtful digital experiences, from a fresh interface to a more usable version of the website you already have." label="Wintagen UI/UX design" />;
}