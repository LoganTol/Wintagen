// Shared entities use stable IDs so every page describes the same business and site.
export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://wintagen.com/#organization",
      name: "Wintagen",
      legalName: "Wintagen",
      url: "https://wintagen.com",
      logo: "https://wintagen.com/favicon-96.png",
      description:
        "Wintagen is an Atlanta-based software company that develops focused digital products and provides practical technology services including custom software development, websites, product strategy, and workflow automations.",
      email: "contact@wintagen.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "GA",
        addressCountry: "US",
      },
      knowsAbout: [
        "Software Development",
        "Web Application Development",
        "Digital Product Strategy",
        "Workflow Automation & Integrations",
        "SaaS Products",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Technology Services & Digital Products",
        itemListElement: [
          ["Software Development", "Purpose-built web applications and digital tools."],
          ["Websites", "Modern, responsive websites designed for clarity and conversion."],
          ["Product Strategy", "Practical guidance to define, validate, and scope digital products."],
          ["Automation & Integrations", "Connected workflows that reduce repetitive work."],
        ].map(([name, description]) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, description },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://wintagen.com/#website",
      url: "https://wintagen.com/",
      name: "Wintagen",
      description:
        "Wintagen creates focused software products and provides practical technology services for businesses building what comes next.",
      inLanguage: "en",
      publisher: { "@id": "https://wintagen.com/#organization" },
    },
  ],
};