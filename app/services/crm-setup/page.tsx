import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "CRM Setup & Configuration",
  description: "CRM setup inside GoHighLevel: custom pipeline stages, contact fields, lead tracking, and opportunity management configured to match your real sales process.",
  alternates: { canonical: `${site.url}/services/crm-setup` },
};

export default function CrmSetupPage() {
  return (
    <>
      <section className="pt-12 pb-10 md:pt-16 md:pb-14 bg-white border-b border-gray-100 text-center relative overflow-hidden">
        <div className="container-page">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="eyebrow mb-3 block w-fit">CRM Setup</span>
            <h1 className="text-display mb-5">Configuration matched to your exact sales process.</h1>
            <p className="text-body-lg text-gray-500 max-w-2xl mb-8">
              Pipeline stages, custom fields, smart lists, and opportunity routing
              built to reflect how your team actually works, rather than forcing
              your team into a generic template.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href={site.cta.bookCall} className="btn btn-primary btn-lg">Book a Strategy Call</Link>
              <Link href="/services" className="btn btn-outline btn-lg">All Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-md bg-surface border-b border-gray-100">
        <div className="container-page">
          <h2 className="text-headline max-w-xl mb-8">What gets configured.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
            {[
              { title: "Pipeline Stages", items: ["Custom stage names and order", "Stage probability settings", "Automated task triggers per stage", "Stage-based workflow triggers"] },
              { title: "Contact Fields", items: ["Custom field configuration", "Required field validation", "Field group organization", "Lead source tracking fields"] },
              { title: "Opportunity Management", items: ["Opportunity value configuration", "Close date tracking", "Win/loss tracking", "Pipeline value reporting"] },
              { title: "Lead Tracking", items: ["Source attribution setup", "UTM parameter capture", "Form-to-CRM connection", "Lead routing logic"] },
              { title: "Views & Filtering", items: ["Custom list views", "Pipeline filters", "Team member assignment", "Contact segmentation"] },
              { title: "Documentation", items: ["Pipeline structure documentation", "Field reference guide", "Team walkthrough", "Post-launch support"] },
            ].map((cat) => (
              <div key={cat.title} className="bg-white p-6">
                <h3 className="text-sm font-bold text-ink-900 mb-3 pb-3 border-b border-gray-100">{cat.title}</h3>
                <ul className="flex flex-col gap-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                      <svg aria-hidden className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gray-400" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M1.75 7l4.5 4.5 6-8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="Build a CRM your team will actually use." />
    </>
  );
}
