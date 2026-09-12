import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { CtaSection } from "@/components/sections/CtaSection";
import { AnimatedStagger, AnimatedItem } from "@/components/ui/AnimatedStagger";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description: `Implementation case studies from ${site.name} — GoHighLevel setup, CRM configuration, and automation for businesses across industries.`,
  alternates: { canonical: `${site.url}/case-studies` },
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "cs-1",
      title: "Scaling Lead Volume with Automated Triage",
      client: "Apex Real Estate Group",
      industry: "Real Estate",
      metric: "40% Increase in Lead Conversion",
      challenge: "Handling 500+ monthly inbound leads manually. Sales team was overwhelmed, leads were falling through the cracks, and response times averaged 4 hours.",
      solution: "A multi-stage pipeline with an automated SMS triage system that instantly engages leads and categorizes them based on their initial reply.",
      implementation: [
        "Connected Facebook Lead Ads directly to GHL.",
        "Built a 5-minute automated SMS & Email outreach sequence.",
        "Created conditional logic to route hot leads directly to agents."
      ],
      outcome: "Response time dropped to 5 minutes. 40% more leads entered the qualification stage without any manual effort.",
      tags: ["Workflow Automation", "Pipeline CRM", "SMS Integration"],
      href: "/contact",
    },
    {
      id: "cs-2",
      title: "Eliminating No-Shows for Premium Consultations",
      client: "Elevate Legal Partners",
      industry: "Professional Services",
      metric: "95% Show Rate",
      challenge: "Clients were booking high-ticket consultations but failing to show up or complete necessary pre-meeting documentation.",
      solution: "A complete overhaul of their booking and calendar system, integrated directly into their CRM with multi-channel reminders and document collection.",
      implementation: [
        "Replaced Calendly with GHL native calendars.",
        "Built a mandatory pre-consultation form flow.",
        "Configured a 3-day WhatsApp and Email reminder sequence."
      ],
      outcome: "No-shows dropped from 25% to 5%. The firm saved hours of wasted preparation time per week.",
      tags: ["Calendar & Booking", "Email Sequences", "Forms"],
      href: "/contact",
    },
    {
      id: "cs-3",
      title: "Consolidating 5 Software Subscriptions into One",
      client: "Nexus Home Services",
      industry: "Home Services",
      metric: "$8,500/yr Saved",
      challenge: "Paying for Mailchimp, Calendly, PipeDrive, and Zapier. Data was scattered, and zaps were constantly breaking.",
      solution: "Migrated the entire tech stack into a single, cohesive GoHighLevel ecosystem configured specifically for home services dispatch.",
      implementation: [
        "Exported and cleaned 10,000+ contacts from Pipedrive.",
        "Rebuilt email templates and campaigns natively in GHL.",
        "Set up a unified inbox for technicians and dispatchers."
      ],
      outcome: "Saved $8,500 annually in software costs and eliminated data silos. The entire team now works from one dashboard.",
      tags: ["Migration", "System Consolidation", "Integrations"],
      href: "/contact",
    }
  ];

  return (
    <>
      <section className="pt-12 pb-10 md:pt-16 md:pb-14 bg-white border-b border-gray-100 overflow-hidden relative text-center">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-surface to-white -z-10" />
        <div className="container-page">
          <AnimatedStagger className="max-w-3xl mx-auto flex flex-col items-center">
            <AnimatedItem>
              <span className="eyebrow mb-4 block w-fit">Case Studies</span>
            </AnimatedItem>
            <AnimatedItem>
              <h1 className="text-display mb-6">Implementation in practice.</h1>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-body-lg text-gray-500">
                Sample implementations demonstrating how we scope, architect, and build technical GoHighLevel ecosystems to solve real operational bottlenecks.
              </p>
            </AnimatedItem>
          </AnimatedStagger>
        </div>
      </section>

      <section className="section-md bg-surface border-b border-gray-100">
        <div className="container-page">
          <AnimatedStagger className="grid gap-16 lg:gap-24">
            {caseStudies.map((cs) => (
              <AnimatedItem key={cs.id}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex flex-col">
                  {/* Top Bar / Visual Area */}
                  <div className="bg-gray-100 border-b border-gray-200 p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
                     <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                     <div className="relative z-10">
                        <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full mb-4 inline-block">Demo Case Study</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-ink-900 mb-2">{cs.title}</h2>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                           <span className="font-semibold text-ink-900">{cs.client}</span>
                           <span className="w-1 h-1 rounded-full bg-gray-300" />
                           <span>{cs.industry}</span>
                        </div>
                     </div>
                     <div className="relative z-10 shrink-0 bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center min-w-[200px]">
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Key Outcome</span>
                        <span className="block text-2xl font-black text-accent">{cs.metric}</span>
                     </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid lg:grid-cols-2 gap-px bg-gray-100">
                    {/* Left Column */}
                    <div className="bg-white p-8 md:p-12">
                      <div className="mb-10">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">The Challenge</h3>
                        <p className="text-body text-gray-600">{cs.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">The Solution</h3>
                        <p className="text-body text-gray-600">{cs.solution}</p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="bg-white p-8 md:p-12 flex flex-col h-full">
                      <div className="mb-10">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Implementation Details</h3>
                        <ul className="flex flex-col gap-3">
                          {cs.implementation.map((item, i) => (
                             <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5 opacity-80" />
                                <span className="text-body text-gray-600">{item}</span>
                             </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div className="flex flex-wrap gap-2">
                          {cs.tags.map(tag => (
                            <span key={tag} className="text-xs font-semibold text-gray-500 bg-surface border border-gray-200 px-2 py-1 rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link 
                          href={cs.href}
                          className="inline-flex items-center gap-2 text-sm font-bold text-ink-900 hover:text-accent transition-colors shrink-0 group/btn"
                        >
                          Discuss a similar setup
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
