import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Connect GoHighLevel with the tools your business uses — native integrations, Zapier/Make, API and webhook configurations.",
  alternates: { canonical: `${site.url}/services/integrations` },
};

export default function IntegrationsPage() {
  return (
    <>
      <section className="pt-12 pb-10 md:pt-16 md:pb-14 bg-white border-b border-gray-100 text-center relative overflow-hidden">
        <div className="container-page">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="eyebrow mb-3 block w-fit">Integrations</span>
            <h1 className="text-display mb-5">Connect GoHighLevel with the rest of your stack.</h1>
            <p className="text-body-lg text-gray-500 max-w-2xl mb-8">
              Native integrations, Zapier and Make connections, API and webhook
              configurations — so GoHighLevel works as part of a connected system
              rather than an isolated tool.
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
          <h2 className="text-headline max-w-xl mb-8">Integration types we implement.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
            {[
              { title: "Native GHL Integrations", items: ["Email providers", "Payment processors", "Social platforms", "Google Business Profile", "Calendar platforms"] },
              { title: "Webhook & API", items: ["Inbound webhook configuration", "Outbound data push", "Custom API connections", "Third-party platform events", "Data synchronization"] },
              { title: "Automation Platforms", items: ["Zapier workflow setup", "Make (Integromat) scenarios", "n8n automation connections", "Multi-step automation flows"] },
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
          <p className="mt-4 text-caption text-gray-400">
            Feasibility of specific integrations depends on the tools involved — we assess during scoping.
          </p>
        </div>
      </section>

      <CtaSection heading="Connect GoHighLevel to your entire business stack." />
    </>
  );
}
