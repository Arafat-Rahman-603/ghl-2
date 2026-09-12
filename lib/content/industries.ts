import type { Industry } from "./types";

export const industries: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    description:
      "CRM pipelines structured around lead-to-signed stages. Appointment automation for buyer consultations and property tours. Automated follow-up for buyer and seller inquiries with smart re-engagement sequences.",
    workflows: [
      "Lead intake and qualification",
      "Property tour scheduling",
      "Offer and contract follow-up",
      "Review and referral requests",
    ],
  },
  {
    slug: "home-services",
    name: "Home Services",
    description:
      "Estimate request handling, job scheduling workflows, automated follow-up for unconverted quotes. Review request sequences post-completion to build local reputation.",
    workflows: [
      "Estimate request automation",
      "Job scheduling and dispatch",
      "Quote follow-up sequences",
      "Post-service review requests",
    ],
  },
  {
    slug: "marketing-agencies",
    name: "Marketing Agencies",
    description:
      "Client onboarding workflows, project pipeline management, reporting automation. Sub-account structures for agencies managing GoHighLevel on behalf of clients.",
    workflows: [
      "New client onboarding",
      "Project milestone pipeline",
      "Client communication workflows",
      "Monthly reporting automation",
    ],
  },
  {
    slug: "coaching-consulting",
    name: "Coaching & Consulting",
    description:
      "Discovery call booking automation, program enrollment workflows, ongoing client check-in sequences. Structured follow-up for prospective and enrolled clients.",
    workflows: [
      "Discovery call scheduling",
      "Program enrollment workflow",
      "Client check-in automation",
      "Re-engagement sequences",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description:
      "Appointment booking with compliance-appropriate messaging, patient confirmation and reminder sequences, follow-up care communication workflows.",
    workflows: [
      "Appointment scheduling and confirmation",
      "Pre-appointment reminders",
      "Post-visit follow-up",
      "Re-booking automation",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    description:
      "Consultation booking, proposal follow-up workflows, structured client relationship pipelines for legal, accounting, financial, and advisory firms.",
    workflows: [
      "Consultation booking",
      "Proposal and engagement follow-up",
      "Client onboarding workflow",
      "Retention and referral automation",
    ],
  },
];
