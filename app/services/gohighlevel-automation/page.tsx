import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "GoHighLevel Automation",
  description: "Workflow automation inside GoHighLevel: lead follow-up sequences, appointment workflows, nurture sequences, and review request automation — tested and operational.",
  alternates: { canonical: `${site.url}/services/gohighlevel-automation` },
};

const automationCapabilities = [
  {
    category: "Lead Workflows",
    items: [
      "Instant lead follow-up on form submission",
      "Multi-step follow-up sequences (SMS + email)",
      "Lead scoring and conditional routing",
      "Re-engagement sequences for cold leads",
    ],
  },
  {
    category: "Appointment Automation",
    items: [
      "Booking confirmation messages",
      "Pre-appointment reminder sequences",
      "No-show follow-up workflows",
      "Post-appointment check-in sequences",
    ],
  },
  {
    category: "Client Communication",
    items: [
      "Onboarding automation sequences",
      "Milestone and status update workflows",
      "Review request sequences post-service",
      "Re-activation campaigns for inactive clients",
    ],
  },
];

export default function GhlAutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-14 bg-white border-b border-gray-100 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-surface to-white -z-10" />
        <div className="container-page">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="eyebrow mb-4 block w-fit">GoHighLevel Automation</span>
            <h1 className="text-display mb-5">
              Workflow automation that runs your business processes reliably.
            </h1>
            <p className="text-body-lg text-gray-500 mb-8 max-w-2xl text-center">
              Lead follow-up, appointment confirmation, nurture sequences, and
              review requests — built, tested, and configured for your specific
              pipeline and workflow logic.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href={site.cta.bookCall} className="btn btn-primary">
                Book a Strategy Call
              </Link>
              <Link href="/services/gohighlevel-setup" className="btn btn-outline">
                Full GHL Setup
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="section-md bg-surface border-b border-gray-100">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="text-headline mb-4">
                The gap between GHL and working automation.
              </h2>
              <p className="text-body text-gray-500 mb-4">
                GoHighLevel has powerful automation capabilities. But workflows
                configured from tutorials often have incorrect trigger conditions,
                missing steps, or fire on the wrong contacts — producing outcomes
                that are worse than no automation at all.
              </p>
              <p className="text-body text-gray-500">
                Effective automation is built around your specific lead flow,
                business logic, and sales process — not a generic sequence copied
                from someone else&apos;s industry.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                "Workflows configured to your specific business logic",
                "Trigger conditions tested before activation",
                "Correct timing and delay configuration",
                "Multi-channel sequences (SMS and email)",
                "End-to-end testing with real test contacts",
                "Documentation of every workflow",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <svg aria-hidden className="w-4 h-4 mt-0.5 shrink-0 text-ink-900" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M2 8l5 5 7-9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-md bg-white border-b border-gray-100">
        <div className="container-page">
          <div className="mb-10 text-center">
            <h2 className="text-headline mx-auto">Automation workflows we build.</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
            {automationCapabilities.map((cap) => (
              <div key={cap.category} className="bg-white p-6">
                <h3 className="text-sm font-bold text-ink-900 mb-4 pb-3 border-b border-gray-100">
                  {cap.category}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                      <svg aria-hidden className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gray-400" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75">
                        <path d="M1.75 7l4.5 4.5 6-8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CtaSection heading="Ready to get automation that actually works?" />
    </>
  );
}
