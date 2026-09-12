import type { SolutionItem } from "./types";

export const solutions: SolutionItem[] = [
  {
    slug: "lead-generation",
    title: "Lead Capture & Management",
    description:
      "Structure your CRM and automation so every inbound lead is captured, categorized, and followed up with consistently — without manual intervention.",
    outcomes: [
      "Every lead captured in a structured CRM",
      "Automated initial follow-up within minutes",
      "Clear lead status and pipeline visibility",
      "No leads falling through the cracks",
    ],
    href: "/solutions",
  },
  {
    slug: "sales-automation",
    title: "Sales Process Automation",
    description:
      "Build repeatable sales workflows that move prospects through your pipeline with consistent communication, follow-up, and next steps.",
    outcomes: [
      "Pipeline stages that match your actual sales process",
      "Automated touchpoints at each stage",
      "Clear visibility into opportunity status",
      "Consistent follow-up regardless of team capacity",
    ],
    href: "/solutions",
  },
  {
    slug: "appointment-booking",
    title: "Appointment Booking & Scheduling",
    description:
      "Replace back-and-forth scheduling with structured booking systems that confirm, remind, and follow up automatically.",
    outcomes: [
      "Self-service booking integrated with your calendar",
      "Automated confirmation and reminder sequences",
      "Reduced no-shows through systematic reminders",
      "Post-appointment follow-up workflows",
    ],
    href: "/solutions",
  },
  {
    slug: "customer-followup",
    title: "Client Follow-up & Retention",
    description:
      "Keep existing clients engaged and informed through structured post-service communication, review requests, and re-engagement sequences.",
    outcomes: [
      "Automated post-service follow-up",
      "Review request sequences",
      "Re-engagement campaigns for inactive clients",
      "Structured communication cadence",
    ],
    href: "/solutions",
  },
];

export const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What does your company do?",
        answer:
          "We implement GoHighLevel and related business automation systems for companies that want to move beyond manual processes. Our work covers CRM configuration, workflow automation, funnel development, integrations, and ongoing optimization.",
      },
      {
        question: "Who do you work with?",
        answer:
          "We work with small to mid-sized businesses and agencies across a range of industries. Our clients typically have a working business model and are looking to systematize their lead management, follow-up, and client operations.",
      },
      {
        question: "What does working with you look like?",
        answer:
          "It starts with a strategy call to understand your business, lead flow, and operational goals. From there, we scope the implementation, execute the configuration, test thoroughly, and hand over with documentation and support.",
      },
    ],
  },
  {
    category: "GoHighLevel",
    questions: [
      {
        question: "Do I need to already have GoHighLevel?",
        answer:
          "Not necessarily. We can help you set up a new account or work with an existing subscription. If you don't have GHL yet, we'll help you get set up correctly from the start.",
      },
      {
        question: "Can you work with a partially configured account?",
        answer:
          "Yes. We regularly audit and complete partial implementations. We'll assess what's already in place, identify what needs to be corrected, and build a plan to complete the setup.",
      },
      {
        question: "Do you support agencies using GoHighLevel for clients?",
        answer:
          "Yes. For agencies, we can configure account structures, default snapshots, and sub-account templates to support efficient client onboarding and delivery.",
      },
    ],
  },
  {
    category: "Implementation",
    questions: [
      {
        question: "How long does implementation typically take?",
        answer:
          "Timeline depends on scope. We'll define a clear timeline during the strategy call based on your requirements. Most implementations follow a structured build, test, and handover process.",
      },
      {
        question: "What do I need to provide to get started?",
        answer:
          "Access to your GoHighLevel account, clarity on your lead flow and sales process, and information about any third-party tools you need connected. We provide a structured intake process to gather everything needed.",
      },
    ],
  },
  {
    category: "Support",
    questions: [
      {
        question: "What support is included after launch?",
        answer:
          "Every implementation includes a post-launch support period for questions, adjustments, and refinements. Ongoing support arrangements can be discussed based on your needs.",
      },
      {
        question: "Can I request changes after the implementation is complete?",
        answer:
          "Yes. We offer ongoing support and optimization engagements for clients who want continued access to our team after the initial implementation.",
      },
    ],
  },
];
