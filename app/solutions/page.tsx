import type { Metadata } from "next";
import { site } from "@/lib/content/site";
import { solutions } from "@/lib/content/solutions";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Business automation solutions: lead capture, sales process automation, appointment booking, and client follow-up — powered by GoHighLevel.",
  alternates: { canonical: `${site.url}/solutions` },
};

export default function SolutionsPage() {
  return (
    <>
      <section className="pt-12 pb-10 md:pt-16 md:pb-14 bg-surface border-b border-gray-100 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-white to-surface -z-10" />
        <div className="container-page">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="eyebrow mb-4 block w-fit">Solutions</span>
            <h1 className="text-display mb-4">Business outcomes, not just technical features.</h1>
            <p className="text-body-lg text-gray-500 max-w-2xl text-center">
              Each solution addresses a specific operational challenge — lead
              management, sales automation, appointment booking, or client
              retention — using GoHighLevel as the implementation platform.
            </p>
          </div>
        </div>
      </section>

      <section className="section-md bg-surface">
        <div className="container-page">
          <div className="flex flex-col gap-4">
            {solutions.map((sol, index) => (
              <div
                key={sol.slug}
                className="card grid lg:grid-cols-[48px_1fr_320px] gap-6 p-6 lg:p-8 items-start"
              >
                <span className="text-2xl font-medium tabular-nums text-gray-400 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-sm font-bold text-ink-900 mb-2">{sol.title}</h2>
                  <p className="text-body text-gray-500">{sol.description}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Outcomes</p>
                  <ul className="flex flex-col gap-1.5">
                    {sol.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-sm text-gray-500">
                        <svg aria-hidden className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gray-400" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M1.75 7l4.5 4.5 6-8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
