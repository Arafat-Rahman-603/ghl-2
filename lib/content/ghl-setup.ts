import type {
  ProcessStep,
  ConfigCategory,
  FaqItem,
  Industry,
  ComparisonRow,
} from "./types";

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const ghlSetupHero = {
  eyebrow: "GoHighLevel Implementation",
  headline: "GoHighLevel, configured for the way your business actually works.",
  subheadline:
    "We handle the complete implementation — CRM pipelines, calendars, workflows, communications, and integrations — so you get a system your team can use from day one, not a platform you're still figuring out months later.",
  primaryCta: { label: "Book a Strategy Call", href: "/book-a-call" },
  secondaryCta: { label: "Explore What's Included", href: "#configuration" },
  trustIndicators: [
    "Implementation-focused",
    "Business-specific configuration",
    "Launch-ready systems",
    "Ongoing support",
  ],
};

// ─── Problem Section ──────────────────────────────────────────────────────────

export const ghlProblems = {
  heading: "Why GoHighLevel underdelivers for most businesses",
  intro:
    "GoHighLevel is a capable platform. The problem is almost never the software — it's the gap between purchasing a subscription and having a working system.",
  problems: [
    {
      label: "No clear implementation path",
      body: "The platform presents hundreds of features simultaneously. Without a structured implementation approach, businesses spend weeks navigating menus rather than building the workflows that matter.",
    },
    {
      label: "CRM that doesn't match the actual sales process",
      body: "Default pipelines and generic stages create data that doesn't reflect how leads actually move through your business. Teams stop using it because it doesn't make sense.",
    },
    {
      label: "Automation configured incorrectly",
      body: "Workflows built from tutorials often fire on the wrong triggers, use incorrect delays, or run for contacts they shouldn't. A misconfigured workflow is more damaging than no workflow.",
    },
    {
      label: "Communication systems disconnected",
      body: "Email domains unauthenticated. Phone numbers not provisioned correctly. SMS registration incomplete. Calendars not connected to confirmation messages. Each gap quietly costs you leads.",
    },
    {
      label: "Manual follow-up filling the gaps",
      body: "When automation doesn't work reliably, teams default to manual processes. The platform becomes an expensive contact list while follow-up runs on spreadsheets and personal texts.",
    },
    {
      label: "Incomplete setups that never get finished",
      body: "Most partial GHL implementations stay partial. The initial momentum fades, configuration stays incomplete, and the monthly subscription cost continues regardless.",
    },
  ],
};

// ─── Outcome Section ──────────────────────────────────────────────────────────

export const ghlOutcome = {
  heading: "From a blank account to an operational system.",
  before: [
    { label: "Scattered leads across inboxes and spreadsheets" },
    { label: "Manual follow-up dependent on individual effort" },
    { label: "Disconnected tools that don't communicate" },
    { label: "Pipeline stages that don't match the real process" },
    { label: "Inconsistent scheduling and booking experience" },
    { label: "No visibility into lead status or pipeline health" },
  ],
  after: [
    { label: "Organized CRM with structured lead tracking" },
    { label: "Automated follow-up sequences running reliably" },
    { label: "Centralized communication across SMS, email, and calls" },
    { label: "Pipeline configured to reflect your actual sales stages" },
    { label: "Structured booking with automated reminders" },
    { label: "Clear reporting on lead volume, pipeline, and conversions" },
  ],
};

// ─── Process ──────────────────────────────────────────────────────────────────

export const ghlProcess: ProcessStep[] = [
  {
    number: "01",
    title: "Business & Workflow Audit",
    description:
      "We map your lead sources, sales process, follow-up requirements, scheduling needs, and communication preferences before touching the platform.",
    outcome:
      "A clear implementation brief specific to your business — not a generic template.",
  },
  {
    number: "02",
    title: "Technical Foundation",
    description:
      "Domain configuration, DNS and SSL setup, email authentication, phone number provisioning, and communication channel verification.",
    outcome:
      "Every technical dependency confirmed and tested before CRM configuration begins.",
  },
  {
    number: "03",
    title: "CRM & Pipeline Configuration",
    description:
      "Custom pipeline stages, contact fields, lead source tracking, opportunity values, and task triggers built to match your actual business workflow.",
    outcome:
      "A CRM that makes sense to your team and reflects how you actually close business.",
  },
  {
    number: "04",
    title: "Automation & Scheduling",
    description:
      "Lead follow-up sequences, appointment confirmation and reminder workflows, calendar availability, booking pages, and post-service communication.",
    outcome:
      "Core automation running and tested — follow-up, booking, and communication no longer dependent on manual effort.",
  },
  {
    number: "05",
    title: "Testing, Launch & Handover",
    description:
      "End-to-end testing of every workflow, form, and communication channel. Documentation of what was built and how it works. Structured handover.",
    outcome:
      "A system your team can use from day one, with documentation to support ongoing operation.",
  },
];

// ─── Configuration Categories ─────────────────────────────────────────────────

export const ghlConfigCategories: ConfigCategory[] = [
  {
    title: "CRM & Pipeline",
    items: [
      "Custom opportunity pipeline stages",
      "Pipeline stage probability settings",
      "Contact custom fields",
      "Lead source tracking",
      "Opportunity value configuration",
      "Task and note triggers per stage",
    ],
  },
  {
    title: "Calendar & Booking",
    items: [
      "Availability and business hours",
      "Appointment type configuration",
      "Buffer time and booking rules",
      "Confirmation and reminder messages",
      "Public booking page setup",
      "Calendar integration",
    ],
  },
  {
    title: "Automation",
    items: [
      "Lead follow-up sequences",
      "Appointment confirmation workflow",
      "Pre-appointment reminder sequence",
      "Post-appointment follow-up",
      "Nurture sequences for unconverted leads",
      "Review request automation",
    ],
  },
  {
    title: "Communication",
    items: [
      "Email domain authentication (SPF, DKIM, DMARC)",
      "Phone number provisioning and testing",
      "SMS workflow integration",
      "Two-way communication configuration",
      "Communication channel routing",
    ],
  },
  {
    title: "Integrations",
    items: [
      "Domain and DNS configuration",
      "Email provider setup",
      "Phone/SMS provider integration",
      "Calendar integration",
      "Webhook configuration where applicable",
      "Third-party tool connections",
    ],
  },
  {
    title: "Reporting & Handover",
    items: [
      "End-to-end workflow testing",
      "Lead-to-close pipeline verification",
      "Setup documentation",
      "Team walkthrough session",
      "Post-launch support period",
    ],
  },
];

// ─── Industries ───────────────────────────────────────────────────────────────

export const ghlIndustries: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    description:
      "Pipeline configured around lead-to-showing-to-offer stages. Appointment booking for property tours. Automated follow-up for buyer and seller inquiries.",
    workflows: ["Lead qualification", "Showing scheduling", "Offer follow-up"],
  },
  {
    slug: "home-services",
    name: "Home Services",
    description:
      "Estimate request workflows, job scheduling automation, follow-up sequences for unconverted quotes. Review request automation post-service.",
    workflows: ["Estimate follow-up", "Job scheduling", "Review requests"],
  },
  {
    slug: "marketing-agencies",
    name: "Marketing Agencies",
    description:
      "Client onboarding workflows, project status pipelines, reporting automation. Sub-account management for agency-client relationships.",
    workflows: ["Client onboarding", "Project pipeline", "Monthly reporting"],
  },
  {
    slug: "coaching-consulting",
    name: "Coaching & Consulting",
    description:
      "Discovery call booking, program enrollment workflows, client check-in automation. Structured follow-up for prospective and active clients.",
    workflows: [
      "Discovery call booking",
      "Program enrollment",
      "Client nurture",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description:
      "Appointment booking with compliance-appropriate messaging, patient follow-up sequences, scheduling confirmation and reminder workflows.",
    workflows: [
      "Appointment scheduling",
      "Patient reminders",
      "Follow-up care",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    description:
      "Consultation booking, proposal follow-up workflows, client relationship management pipelines for law, accounting, finance, and similar firms.",
    workflows: [
      "Consultation scheduling",
      "Proposal follow-up",
      "Client pipeline",
    ],
  },
];

// ─── Comparison Table ─────────────────────────────────────────────────────────

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Setup approach",
    diy: "Self-directed",
    generic: "Template-based",
    professional: "Business-specific audit",
  },
  {
    feature: "Time to operational",
    diy: "Weeks to months",
    generic: "Days (generic)",
    professional: "Structured timeline",
  },
  {
    feature: "CRM configuration",
    diy: "Default stages",
    generic: "Generic pipeline",
    professional: "Matched to your sales process",
  },
  {
    feature: "Automation",
    diy: false,
    generic: "Basic",
    professional: "Business-specific workflows",
  },
  {
    feature: "Communication setup",
    diy: false,
    generic: "Partial",
    professional: "Fully configured and tested",
  },
  {
    feature: "End-to-end testing",
    diy: false,
    generic: false,
    professional: true,
  },
  {
    feature: "Documentation",
    diy: false,
    generic: false,
    professional: true,
  },
  {
    feature: "Post-launch support",
    diy: false,
    generic: false,
    professional: true,
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const ghlSetupFaq: FaqItem[] = [
  {
    question: "What does the GoHighLevel setup include?",
    answer:
      "The implementation covers CRM pipeline configuration, custom contact fields, calendar and booking setup, core automation workflows, email authentication, phone/SMS setup, and a structured handover with documentation. Everything is configured specifically for your business — not applied from a generic template.",
  },
  {
    question: "How long does the implementation take?",
    answer:
      "Timeline varies based on scope and complexity. A standard implementation includes a structured build phase followed by testing and handover. We'll scope the timeline during the initial strategy call based on your specific requirements.",
  },
  {
    question: "Can you work with an existing GoHighLevel account?",
    answer:
      "Yes. We regularly work with existing accounts — both fully unused and partially configured. We audit what's already in place, identify what needs to be corrected or rebuilt, and complete the implementation from that starting point.",
  },
  {
    question: "Can you fix a partial or incorrect setup?",
    answer:
      "Yes. Partial implementations are common. We'll assess what's configured, what's misconfigured, and what's missing — then build a clear plan to complete and correct the setup. We'll give you a clear assessment before any work begins.",
  },
  {
    question: "Do you work with agencies as well as direct businesses?",
    answer:
      "Both. For agencies, we can configure account settings, default structures, and sub-account templates to support efficient client onboarding. For direct businesses, we configure GHL for your specific operational workflow. We scope the right approach during the strategy call.",
  },
  {
    question: "What information is needed to get started?",
    answer:
      "Access to your GoHighLevel account, an understanding of your lead flow and sales process, and any third-party tools or integrations you need connected. We provide a structured intake process — most clients have everything ready within a short onboarding session.",
  },
  {
    question: "Can you integrate GoHighLevel with third-party tools?",
    answer:
      "We configure native integrations and set up webhooks and API connections where applicable. The scope of third-party integrations depends on the specific tools involved — we'll assess feasibility during scoping.",
  },
  {
    question: "What happens after the implementation is complete?",
    answer:
      "We provide structured documentation of everything configured, a walkthrough session so your team understands the system, and a support period for questions and adjustments. Ongoing support arrangements can be discussed based on your needs.",
  },
];

// ─── Why Us ───────────────────────────────────────────────────────────────────

export const ghlWhyUs = [
  {
    title: "Business-first configuration",
    description:
      "Every pipeline, workflow, and automation is configured around your actual business model — not applied from a default template.",
  },
  {
    title: "Clean, maintainable architecture",
    description:
      "Workflows and pipelines are built to be understood and maintained by your team, not complex systems that require ongoing external support to operate.",
  },
  {
    title: "End-to-end tested",
    description:
      "Every workflow, form submission, communication channel, and integration is tested before handover. We don't hand over a system we haven't confirmed works.",
  },
  {
    title: "Technical depth",
    description:
      "DNS configuration, email authentication, communication channel setup, API connections — we handle the technical infrastructure, not just the platform UI.",
  },
  {
    title: "Documentation included",
    description:
      "Every implementation includes documentation of what was built, how it works, and how to use it. Your team isn't left relying on institutional memory.",
  },
  {
    title: "Post-launch support",
    description:
      "We don't disappear at handover. Post-launch support gives your team a resource for questions, adjustments, and refinements as you begin using the system.",
  },
];
