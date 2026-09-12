import type { Metadata } from "next";
import { site } from "@/lib/content/site";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Process",
  description: `How ${site.name} implements GoHighLevel and automation systems — from discovery and scoping through implementation, testing, and post-launch support.`,
  alternates: { canonical: `${site.url}/process` },
};

const processSteps = [
  { num: "01", title: "Discovery", desc: "We map your business model, lead flow, sales process, communication requirements, and technical environment. This shapes everything that follows.", deliverable: "Business and workflow brief" },
  { num: "02", title: "Planning", desc: "Based on discovery, we define the exact scope of implementation — what gets built, what gets configured, what gets connected, and the timeline.", deliverable: "Implementation scope document" },
  { num: "03", title: "Configuration", desc: "We build your CRM structure, pipeline stages, contact fields, calendar and booking systems, and communication channels.", deliverable: "Working CRM and booking system" },
  { num: "04", title: "Automation", desc: "We build and configure your automation workflows — lead follow-up, appointment sequences, nurture, and review requests — all tested with real trigger conditions.", deliverable: "Active, tested workflows" },
  { num: "05", title: "Testing", desc: "End-to-end verification of every workflow, form, integration, and communication channel. We test what we build before we hand it over.", deliverable: "Verified, operational system" },
  { num: "06", title: "Launch", desc: "Structured go-live. We activate the system, verify everything is running correctly in production, and confirm all integrations are working.", deliverable: "Live operational system" },
  { num: "07", title: "Support", desc: "Post-launch support period for questions, adjustments, and refinements. We remain available as your team begins operating the system.", deliverable: "Ongoing support access" },
];

export default function ProcessPage() {
  return (
    <>
      <section className="pt-12 pb-10 md:pt-16 md:pb-14 bg-white border-b border-gray-100 text-center relative overflow-hidden">
        <div className="container-page">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="eyebrow mb-3 block w-fit">Our Process</span>
            <h1 className="text-display mb-4">A structured implementation methodology.</h1>
            <p className="text-body-lg text-gray-500 max-w-2xl">
              Every engagement follows the same disciplined process — adapted
              to your business specifics, but executed with consistent
              structure to ensure nothing is missed.
            </p>
          </div>
        </div>
      </section>

      <section className="section-md bg-surface border-b border-gray-100">
        <div className="container-page max-w-3xl">
          <div className="flex flex-col gap-0">
            {processSteps.map((step, index) => (
              <div
                key={step.num}
                className={`relative pl-12 pb-10 ${index < processSteps.length - 1 ? "border-l border-gray-200 ml-4" : ""}`}
              >
                {/* Dot */}
                <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
                  <span className="text-xs font-semibold tabular-nums text-ink-900">{step.num}</span>
                </div>

                <h2 className="text-sm font-bold text-ink-900 mb-2 mt-1">{step.title}</h2>
                <p className="text-body text-gray-500 mb-3">{step.desc}</p>
                <div className="inline-flex items-center gap-2 text-xs text-gray-500 bg-white border border-gray-200 rounded-md px-3 py-1.5">
                  <svg aria-hidden className="w-3 h-3 text-ink-900 shrink-0" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M1.5 6l4 4 5-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Deliverable: {step.deliverable}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="Ready to start the implementation process?" />
    </>
  );
}
