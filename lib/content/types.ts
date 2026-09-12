// ─── Core Content Types ──────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export interface NavSection {
  primary: NavItem[];
  dropdowns: {
    services: NavGroup[];
    industries: NavItem[];
  };
  cta: NavItem[];
}

export interface ServiceCard {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  category: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  outcome: string;
}

export interface ConfigCategory {
  title: string;
  items: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Industry {
  slug: string;
  name: string;
  description: string;
  workflows: string[];
}

export interface ComparisonRow {
  feature: string;
  diy: string | boolean;
  generic: string | boolean;
  professional: string | boolean;
}

export interface SolutionItem {
  slug: string;
  title: string;
  description: string;
  outcomes: string[];
  href: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  challenge: string;
  approach: string;
  result: string;
  href: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phone: string | null;
  address: string | null;
  social: {
    twitter: string | null;
    linkedin: string | null;
    youtube: string | null;
  };
  cta: {
    bookCall: string;
    contact: string;
  };
  ogImage: string;
}
