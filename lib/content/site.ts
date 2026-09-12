import type { SiteConfig } from "./types";

// ─── Company Configuration ────────────────────────────────────────────────────
// Replace placeholder values with real company information before launch.

export const site: SiteConfig = {
  name: "Operiq",
  tagline: "GoHighLevel Implementation & Business Automation",
  description:
    "Professional GoHighLevel setup, CRM implementation, workflow automation, and funnel development for growing businesses and agencies.",
  url: "https://operiq.com",
  email: "hello@operiq.com",
  phone: null, // e.g. "+1 (555) 000-0000"
  address: null, // e.g. "123 Main St, Suite 100, Austin TX 78701"
  social: {
    twitter: null,   // e.g. "https://twitter.com/operiq"
    linkedin: null,  // e.g. "https://linkedin.com/company/operiq"
    youtube: null,   // e.g. "https://youtube.com/@operiq"
  },
  cta: {
    bookCall: "/book-a-call",
    contact: "/contact",
  },
  ogImage: "/og-default.png",
};
