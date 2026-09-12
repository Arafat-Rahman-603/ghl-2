import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Funnel Development",
  description: "Landing pages, opt-in funnels, sales pages, and booking funnels built inside GoHighLevel and connected to your CRM and automation workflows.",
  alternates: { canonical: `${site.url}/services/funnel-development` },
};

export default function FunnelDevelopmentPage() {
  return (
    <>
      <section className="pt-12 pb-10 md:pt-16 md:pb-14 bg-white border-b border-gray-100 text-center relative overflow-hidden">
        <div className="container-page">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="eyebrow mb-3 block w-fit">Funnel Development</span>
            <h1 className="text-display mb-5">Funnels built inside GHL — connected to your CRM from day one.</h1>
            <p className="text-body-lg text-gray-500 max-w-2xl mb-8">
              Landing pages, opt-in funnels, appointment booking pages, and sales
              pages built inside GoHighLevel and integrated with your pipeline,
              automation workflows, and communication systems.
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
          <h2 className="text-headline max-w-xl mb-8">What we build.</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Lead Capture Funnels", desc: "Opt-in pages connected directly to your CRM — every lead captured, tagged, and entered into your follow-up workflow immediately." },
              { title: "Appointment Booking Pages", desc: "Booking pages integrated with your calendar, confirmation workflow, and CRM pipeline — structured to reduce friction and increase conversions." },
              { title: "Sales & VSL Pages", desc: "Sales pages and video sales letter pages built to move prospects from awareness to action, connected to your fulfillment and CRM workflow." },
              { title: "Multi-step Funnels", desc: "Multi-page funnels with step-specific logic, conditional paths, and automation triggers at each stage of the process." },
            ].map((item) => (
              <div key={item.title} className="card card-padded">
                <h3 className="text-sm font-bold text-ink-900 mb-2">{item.title}</h3>
                <p className="text-body text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="Build funnels that connect to your entire system." />
    </>
  );
}
