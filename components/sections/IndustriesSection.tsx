"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// ─── Industry Items Data ──────────────────────────────────────────────────────

interface IndustryCardItem {
  slug: string;
  name: string;
  description: string;
  badgeBg: string;
  workflows: string[];
  icon: React.ReactNode;
}

const industryCards: IndustryCardItem[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    description:
      "Automated pipelines, lead generation, and booking for agents and brokerages.",
    badgeBg: "#60a5fa", // pastel sky blue
    workflows: ["Lead Intake", "Property Tours", "Contract Follow-up"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="#0f172a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    slug: "home-services",
    name: "Home Services",
    description:
      "Booking automation, review requests, and job tracking for service businesses.",
    badgeBg: "#fed7aa", // pastel peach / apricot
    workflows: ["Estimate Requests", "Job Dispatch", "Review Automation"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="#0f172a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    slug: "coaching-consulting",
    name: "Coaching and Consulting",
    description:
      "Course delivery, calendar booking, and nurture sequences that guide the client journey.",
    badgeBg: "#f472b6", // pastel pink / rose
    workflows: ["Discovery Calls", "Program Onboarding", "Client Nurture"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="#0f172a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    slug: "digital-agencies",
    name: "Digital Agencies",
    description:
      "White-label GHL systems your clients use under your brand, end to end.",
    badgeBg: "#60a5fa", // pastel sky blue
    workflows: ["White-Label Portals", "Snapshot Deploy", "Automated Reports"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="#0f172a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    slug: "healthcare",
    name: "Medical and Wellness",
    description:
      "Patient communication workflows and appointment automation with high delivery rates.",
    badgeBg: "#fed7aa", // pastel peach / apricot
    workflows: ["Patient Intake", "SMS Reminders", "Care Follow-ups"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="#0f172a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        <path d="M8 12h2l1-2 2 4 1-2h2" />
      </svg>
    ),
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    description:
      "Abandoned cart recovery, SMS follow-ups, and post-purchase customer retention.",
    badgeBg: "#f472b6", // pastel pink / rose
    workflows: ["Cart Recovery", "Post-Purchase SMS", "VIP Retention"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="#0f172a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function IndustriesSection() {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 border-b border-gray-200 overflow-hidden relative"
      style={{ backgroundColor: "#f5f4f0" }}
      aria-labelledby="industries-heading"
    >
      {/* Decorative ambient subtle accent dots from reference image */}
      <div
        className="absolute top-12 left-1/4 w-2 h-2 rounded-full bg-emerald-400/40 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-16 left-12 w-2.5 h-2.5 rounded-full bg-amber-400/50 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-8 w-2 h-2 rounded-full bg-pink-400/40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-page relative z-10">
        {/* ── Header ────────────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <span className="eyebrow text-neutral-500 mb-3 block">
              EVERY NICHE, EVERY MARKET
            </span>
            <h2
              id="industries-heading"
              className="text-headline text-neutral-900"
            >
              A GHL expert for your industry
            </h2>
          </div>

          {/* Top-Right CTA Pill */}
          <div className="relative inline-block self-start md:self-auto">
            <Link
              href="/book-a-call"
              className="btn btn-primary group text-sm"
            >
              <span>Don&apos;t see yours? Tell us</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* ── 3x2 Cards Grid ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {industryCards.map((card, index) => (
            <motion.div
              key={card.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link
                href={`/industries/${card.slug}`}
                className="group h-full bg-white rounded-[22px] sm:rounded-[24px] p-7 sm:p-8 border border-neutral-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              >
                <div>
                  {/* Top Row: Squircle Badge + Top-Right Arrow */}
                  <div className="flex items-start justify-between">
                    <div
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: card.badgeBg }}
                    >
                      {card.icon}
                    </div>

                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-title text-neutral-900 mt-6 mb-2.5">
                    {card.name}
                  </h3>

                  {/* Description */}
                  <p className="text-body-sm text-neutral-600 mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Subtle Workflow Tags (elevates UX without cluttering) */}
                <div className="pt-4 border-t border-neutral-100 flex flex-wrap gap-1.5">
                  {card.workflows.map((wf, wIdx) => (
                    <span
                      key={wIdx}
                      className="text-caption text-neutral-500 bg-neutral-100/80 px-2.5 py-1 rounded-md"
                    >
                      {wf}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
