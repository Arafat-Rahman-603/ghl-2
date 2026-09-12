import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { faqData } from "@/lib/content/solutions";
import { Accordion } from "@/components/ui/Accordion";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Common questions about GoHighLevel implementation, automation, integrations, and working with ${site.name}.`,
  alternates: { canonical: `${site.url}/faq` },
};

export default function FaqPage() {
  return (
    <>
      <section className="pt-12 pb-10 md:pt-16 md:pb-14 bg-white border-b border-gray-100 text-center relative overflow-hidden">
        <div className="container-page">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="eyebrow mb-3 block w-fit">FAQ</span>
            <h1 className="text-display mb-4">Frequently asked questions.</h1>
            <p className="text-body-lg text-gray-500 max-w-2xl">
              Common questions about our services, process, and how GoHighLevel
              implementation works. If your question isn&apos;t here,{" "}
              <Link href="/contact" className="text-accent underline underline-offset-2">
                get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section-md bg-surface">
        <div className="container-page">
          <div className="max-w-3xl mx-auto flex flex-col gap-12">
            {faqData.map((group) => (
              <div key={group.category}>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4 pb-3 border-b border-gray-200">
                  {group.category}
                </h2>
                <Accordion items={group.questions} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="Still have questions?" subheading="Book a strategy call and we'll answer everything specific to your situation." />
    </>
  );
}
