import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description: `Schedule a strategy call with ${site.name}. We'll review your GoHighLevel setup needs and outline a clear implementation plan.`,
  alternates: { canonical: `${site.url}/book-a-call` },
};

const whatToExpect = [
  { title: "Business overview", desc: "We'll map your lead flow, sales process, and current operational setup." },
  { title: "Implementation scope", desc: "Define what needs to be built, configured, or fixed — and in what priority." },
  { title: "Technical requirements", desc: "Identify integrations, communication channels, and platform dependencies." },
  { title: "Clear next steps", desc: "You'll leave with a clear understanding of what implementation looks like for your business." },
];

export default function BookACallPage() {
  return (
    <div className="pt-12 pb-10 md:pt-16 md:pb-14 bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <span className="eyebrow mb-4 block w-fit">Strategy Call</span>
            <h1 className="text-display mb-5">Book a strategy call.</h1>
            <p className="text-body-lg text-gray-500 mb-8">
              A focused call to understand your business, identify what needs
              to be implemented, and outline a clear plan. No commitment
              required.
            </p>

            <div className="flex flex-col gap-5">
              <h2 className="text-title">What we cover on the call.</h2>
              {whatToExpect.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-ink-900" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink-900">{item.title}</h3>
                    <p className="text-body text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: booking area */}
          <div>
            <div className="card card-padded">
              <h2 className="text-title mb-3">Schedule your call.</h2>
              <p className="text-body text-gray-500 mb-6">
                Select a time below to book directly into our calendar, or
                contact us by email if you have questions first.
              </p>

              {/* LeadConnector Booking Integration */}
              <div className="w-full overflow-hidden mb-6 rounded-lg">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/DbOkfvXLIusWWUTgIxMK"
                  style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "650px" }}
                  scrolling="no"
                  id="DbOkfvXLIusWWUTgIxMK_1788670427688"
                />
                <Script
                  src="https://api.leadconnectorhq.com/js/form_embed.js"
                  strategy="lazyOnload"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Link href={site.cta.contact} className="btn btn-outline w-full justify-center">
                  Contact by email instead
                </Link>
                {site.email && (
                  <p className="text-center text-caption text-gray-400">
                    Or email us directly at{" "}
                    <a href={`mailto:${site.email}`} className="text-ink-900 underline underline-offset-2">
                      {site.email}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
