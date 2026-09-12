import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { services } from "@/lib/content/services";
import { CtaSection } from "@/components/sections/CtaSection";
import { AnimatedStagger, AnimatedItem } from "@/components/ui/AnimatedStagger";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Services",
  description: `GoHighLevel setup, CRM implementation, workflow automation, funnel development, and integrations — professional implementation services by ${site.name}.`,
  alternates: { canonical: `${site.url}/services` },
};

function ServicesHero() {
  return (
    <section className="pt-12 pb-10 md:pt-16 md:pb-14 bg-surface border-b border-gray-100 overflow-hidden relative text-center">
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-white to-surface -z-10" />
      <div className="container-page">
        <AnimatedStagger className="max-w-3xl mx-auto flex flex-col items-center">
          <AnimatedItem>
            <span className="eyebrow mb-4 block w-fit">Services & Implementation</span>
          </AnimatedItem>
          <AnimatedItem>
            <h1 className="text-display mb-6">
              Engineering your revenue systems.
            </h1>
          </AnimatedItem>
          <AnimatedItem>
            <p className="text-body-lg text-gray-500 max-w-2xl text-center">
              We design, build, and deploy GoHighLevel environments tailored exactly to how you sell and deliver. No generic templates—just precise technical architecture.
            </p>
          </AnimatedItem>
        </AnimatedStagger>
      </div>
    </section>
  );
}

function ProblemFraming() {
  return (
    <section className="section-md bg-white border-b border-gray-100">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
           <AnimatedStagger className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-video border border-gray-200 bg-gray-50 shadow-sm flex items-center justify-center">
             <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">System Chaos Visual Placeholder</span>
           </AnimatedStagger>
           <AnimatedStagger className="order-1 lg:order-2">
             <AnimatedItem>
               <h2 className="text-headline mb-6">The problem with most GoHighLevel setups.</h2>
             </AnimatedItem>
             <AnimatedItem>
               <div className="prose prose-gray max-w-none text-body text-gray-600 space-y-4">
                 <p>GoHighLevel is arguably the most powerful marketing automation tool on the market. But power without structure leads to chaos.</p>
                 <p>Many businesses purchase GHL only to end up with a tangled mess of broken automations, disorganized pipelines, and a team that refuses to log in. They try to apply a &quot;$97 template&quot; to a complex B2B sales process, resulting in lost leads and operational friction.</p>
                 <p><strong>We solve the implementation gap.</strong> We act as your fractional systems engineering team, mapping the logic before we build the workflows.</p>
               </div>
             </AnimatedItem>
           </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}

function ServicesShowcase() {
  return (
    <section className="section-md bg-surface border-b border-gray-100" aria-labelledby="services-list-heading">
      <div className="container-page">
        <AnimatedStagger className="text-center mb-16 max-w-2xl mx-auto">
          <AnimatedItem>
            <span className="eyebrow mb-3 block w-fit mx-auto">Core Services</span>
            <h2 id="services-list-heading" className="text-headline mb-4">Our specialized implementation areas.</h2>
            <p className="text-body text-gray-500">Every service is delivered as a structured project with defined scopes, rigid testing protocols, and complete team handover.</p>
          </AnimatedItem>
        </AnimatedStagger>
        
        <AnimatedStagger className="flex flex-col gap-12 lg:gap-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <AnimatedItem key={service.slug}>
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
                        {service.title} Visualization
                      </span>
                    </div>

                    {/* Content Area */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="w-10 h-10 rounded-full bg-surface border border-gray-100 flex items-center justify-center text-sm font-bold text-ink-900 tabular-nums">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/5 px-3 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                      
                      <h3 className="text-title md:text-headline mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                      <p className="text-body-lg font-medium text-ink-900 mb-2">{service.tagline}</p>
                      <p className="text-body text-gray-500 mb-8">{service.description}</p>
                      
                      <div className="mt-auto">
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 text-sm font-bold text-ink-900 hover:text-accent transition-colors group/btn"
                          aria-label={`Learn about ${service.title}`}
                        >
                          Explore Implementation
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

function CapabilitiesAndIntegrations() {
  const capabilities = [
    "Advanced Pipeline Logic",
    "Multi-step Nurture Sequences",
    "Conditional Workflow Routing",
    "Custom Form & Calendar Builds",
    "Two-way SMS & Email Provisioning",
    "Lead Scoring Systems",
    "Payment Gateway Integrations",
    "Webhook & API Configurations"
  ];

  return (
    <section className="section-md bg-white border-b border-gray-100">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <AnimatedStagger>
            <AnimatedItem>
              <h2 className="text-headline mb-4">You can&apos;t run a business on a generic template.</h2>
              <p className="text-body text-gray-500">Most GoHighLevel implementations fail because they attempt to force a company&apos;s unique operations into a one-size-fits-all snapshot.</p>
            </AnimatedItem>
            <AnimatedItem className="grid sm:grid-cols-2 gap-4">
               {capabilities.map((cap) => (
                 <div key={cap} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-ink-900">{cap}</span>
                 </div>
               ))}
            </AnimatedItem>
          </AnimatedStagger>
          
          <AnimatedStagger className="bg-surface p-8 lg:p-12 rounded-2xl border border-gray-200 text-center flex flex-col justify-center items-center">
            <AnimatedItem>
              <span className="eyebrow mb-4 block mx-auto">Ecosystem</span>
              <h3 className="text-lg font-bold text-ink-900 mb-2">Integrations</h3>
              <p className="text-body text-gray-500">We don&apos;t just build inside GoHighLevel. We connect it to your broader ecosystem using webhooks, Make, Zapier, and native integrations.</p>
              
              <div className="flex flex-wrap justify-center gap-4 opacity-60 grayscale">
                 <div className="w-24 h-10 bg-gray-200 rounded animate-pulse" />
                 <div className="w-24 h-10 bg-gray-200 rounded animate-pulse" />
                 <div className="w-24 h-10 bg-gray-200 rounded animate-pulse" />
                 <div className="w-24 h-10 bg-gray-200 rounded animate-pulse" />
              </div>
            </AnimatedItem>
          </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}

function ServiceFaq() {
  const faqs = [
    {
      question: "Do you offer ongoing management after implementation?",
      answer: "Yes. While our primary focus is the initial build and handover, we offer ongoing optimization and support retainers for clients who want us to continue refining their systems."
    },
    {
      question: "Will you train my team to use the new system?",
      answer: "Absolutely. Every implementation project concludes with a comprehensive handover phase, which includes live training sessions and recorded video SOPs for your team to reference."
    },
    {
      question: "Can you fix a GoHighLevel account that someone else built poorly?",
      answer: "Yes, we offer audit and restructuring services. We will map the current broken logic, identify the bottlenecks, and rebuild the ecosystem correctly without losing your historical data."
    },
    {
      question: "Do I need to buy GoHighLevel before hiring you?",
      answer: "No, we can help you select the right GoHighLevel plan during our strategy call and guide you through the initial account creation before we begin the technical setup."
    }
  ];

  return (
    <section className="section-md bg-surface border-b border-gray-100">
      <div className="container-narrow">
        <AnimatedStagger className="text-center mb-12">
          <AnimatedItem>
            <span className="eyebrow mb-3 block w-fit mx-auto">FAQ</span>
            <h2 className="text-headline mb-4">Questions about our services.</h2>
          </AnimatedItem>
        </AnimatedStagger>
        <div className="w-full">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ProblemFraming />
      <ServicesShowcase />
      <CapabilitiesAndIntegrations />
      <ServiceFaq />
      <CtaSection 
        heading="Ready to rebuild your systems?" 
        subheading="Book a discovery call to map out exactly what your business needs." 
      />
    </>
  );
}
