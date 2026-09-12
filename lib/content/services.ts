import type { ServiceCard } from "./types";

export const services: ServiceCard[] = [
  {
    slug: "gohighlevel-setup",
    title: "GoHighLevel Setup",
    tagline: "Complete GHL implementation from blank account to operational system.",
    description:
      "CRM configuration, pipeline setup, calendar and booking, automation workflows, communication systems, and integrations — built for your specific business.",
    href: "/services/gohighlevel-setup",
    category: "GoHighLevel",
  },
  {
    slug: "gohighlevel-automation",
    title: "GoHighLevel Automation",
    tagline: "Workflow automation that runs your lead and client processes reliably.",
    description:
      "Lead follow-up sequences, appointment automation, nurture workflows, review requests — built and tested for your specific pipeline and lead flow.",
    href: "/services/gohighlevel-automation",
    category: "GoHighLevel",
  },
  {
    slug: "crm-setup",
    title: "CRM Setup & Configuration",
    tagline: "A CRM that actually reflects how your business works.",
    description:
      "Custom pipelines, contact fields, lead tracking, and opportunity management configured around your real sales process — not default settings.",
    href: "/services/crm-setup",
    category: "CRM",
  },
  {
    slug: "funnel-development",
    title: "Funnel Development",
    tagline: "High-converting funnels built and integrated within GoHighLevel.",
    description:
      "Landing pages, opt-in funnels, sales pages, and booking funnels built inside GHL and connected to your CRM and automation workflows.",
    href: "/services/funnel-development",
    category: "Funnels",
  },
  {
    slug: "integrations",
    title: "Integrations",
    tagline: "Connect GoHighLevel with the tools your business already uses.",
    description:
      "Native integrations, Zapier/Make connections, API and webhook configurations — so your stack works as a connected system rather than isolated tools.",
    href: "/services/integrations",
    category: "Integrations",
  },
];
