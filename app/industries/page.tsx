import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { industries } from "@/lib/content/industries";
import { CtaSection } from "@/components/sections/CtaSection";
import { AnimatedStagger, AnimatedItem } from "@/components/ui/AnimatedStagger";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
  description: "GoHighLevel implementation adapted to your industry: real estate, home services, agencies, coaching, healthcare, and professional services.",
  alternates: { canonical: `${site.url}/industries` },
};

function IndustriesShowcase() {
  return (
    <section className="section-md bg-surface">
      <div className="container-page">
        <AnimatedStagger className="flex flex-col gap-12 lg:gap-16">
          {industries.map((industry, index) => {
            const isEven = index % 2 === 0;
            return (
              <AnimatedItem key={industry.slug}>
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                  <div className={`grid lg:grid-cols-2 min-h-[400px]`}>
                    {/* Visual Area */}
                    <div className={`bg-gray-50 relative overflow-hidden flex items-center justify-center p-8 ${isEven ? 'lg:order-2 border-l border-gray-100' : 'border-r border-gray-100'}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-200/50 opacity-50" />
                      <span className="text-gray-400 font-medium relative z-10 flex flex-col items-center gap-2">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                        {industry.name} Visualization
                      </span>
                    </div>

                    {/* Content Area */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="w-10 h-10 rounded-full bg-surface border border-gray-100 flex items-center justify-center text-sm font-bold text-ink-900 tabular-nums">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/5 px-3 py-1 rounded-full">
                          Industry
                        </span>
                      </div>
                      
                      <h2 className="text-headline mb-4 group-hover:text-accent transition-colors">{industry.name}</h2>
                      <p className="text-body text-gray-500 mb-8">{industry.description}</p>
                      
                      <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Key Workflows</p>
                        <div className="flex flex-wrap gap-2">
                          {industry.workflows.map((wf) => (
                            <span key={wf} className="text-xs font-medium text-gray-600 bg-white border border-gray-200 px-2 py-1 rounded-md">
                              {wf}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <Link
                          href={`/industries/${industry.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-bold text-ink-900 hover:text-accent transition-colors group/btn"
                          aria-label={`Learn about ${industry.name}`}
                        >
                          View Implementation Details
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </AnimatedStagger>
      </div>
    </section>
  );
}

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-12 pb-10 md:pt-16 md:pb-14 bg-surface border-b border-gray-100 overflow-hidden relative text-center">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-white to-surface -z-10" />
        <div className="container-page">
          <AnimatedStagger className="max-w-3xl mx-auto flex flex-col items-center">
            <AnimatedItem>
              <span className="eyebrow mb-4 block w-fit">Industries</span>
            </AnimatedItem>
            <AnimatedItem>
              <h1 className="text-display mb-6">Configuration adapts to your industry.</h1>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-body-lg text-gray-500 max-w-2xl text-center">
                How a real estate team manages leads is fundamentally different
                from how an HVAC company or a coaching business operates. We
                configure GoHighLevel to reflect those differences — not a
                one-size template.
              </p>
            </AnimatedItem>
          </AnimatedStagger>
        </div>
      </section>

      <IndustriesShowcase />

      <CtaSection />
    </>
  );
}
