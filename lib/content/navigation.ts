import type { NavGroup, NavItem } from "./types";

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

export const servicesDropdown: NavGroup[] = [
  {
    label: "GoHighLevel",
    items: [
      { label: "GHL Setup", href: "/services/gohighlevel-setup" },
      { label: "GHL Automation", href: "/services/gohighlevel-automation" },
      { label: "CRM Setup", href: "/services/crm-setup" },
      { label: "Funnel Development", href: "/services/funnel-development" },
      { label: "Integrations", href: "/services/integrations" },
    ],
  },
  {
    label: "Automation",
    items: [
      { label: "Workflow Automation", href: "/services/gohighlevel-automation" },
      { label: "Lead Management", href: "/solutions" },
      { label: "Appointment Automation", href: "/solutions" },
    ],
  },
];

export const industriesDropdown: NavItem[] = [
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Home Services", href: "/industries/home-services" },
  { label: "Marketing Agencies", href: "/industries/marketing-agencies" },
  { label: "Coaching & Consulting", href: "/industries/coaching-consulting" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Professional Services", href: "/industries/professional-services" },
];

export const footerNav = {
  services: [
    { label: "GoHighLevel Setup", href: "/services/gohighlevel-setup" },
    { label: "CRM Implementation", href: "/services/crm-setup" },
    { label: "Workflow Automation", href: "/services/gohighlevel-automation" },
    { label: "Funnel Development", href: "/services/funnel-development" },
    { label: "Integrations", href: "/services/integrations" },
  ],
  industries: [
    { label: "Real Estate", href: "/industries/real-estate" },
    { label: "Home Services", href: "/industries/home-services" },
    { label: "Marketing Agencies", href: "/industries/marketing-agencies" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "All Industries", href: "/industries" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Implementation Process", href: "/process" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Book a Strategy Call", href: "/book-a-call" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Implementation FAQ", href: "/faq" },
    { label: "Blog & Guides", href: "/blog" },
    { label: "Solutions Overview", href: "/solutions" },
    { label: "All Services", href: "/services" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
