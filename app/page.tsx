import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { services } from "@/lib/content/services";
import { industries } from "@/lib/content/industries";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaSection } from "@/components/sections/CtaSection";
import { Accordion } from "@/components/ui/Accordion";

import { HomeHeroSection } from "@/components/sections/HomeHeroSection";
import { ServiceCarousel } from "@/components/ui/ServiceCarousel";
import { IndustryCarousel } from "@/components/ui/IndustryCarousel";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { AnimatedStagger, AnimatedItem } from "@/components/ui/AnimatedStagger";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: site.url },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
};

// ─── Homepage sections ────────────────────────────────────────────────────────

function HomeHero() {
  return <HomeHeroSection />;
}

function ServicesOverview() {
  return (
    <section className="pt-12 pb-10 md:pt-16 md:pb-12 bg-surface border-b border-gray-100 overflow-hidden" aria-labelledby="services-overview-heading">
      <div className="container-page">
        <div className="mb-6 md:mb-10 flex flex-col items-center">
          <SectionHeading
            eyebrow="Services"
            heading="What we build and implement."
            subheading="From CRM configuration and workflow automation to funnels and integrations — configured for your specific business."
            align="center"
            className="mb-0"
          />
        </div>
        <div className="w-full">
          <ServiceCarousel services={services} />
        </div>
      </div>
    </section>
  );
}

function GhlCapabilitySection() {
  const capabilities = [
    {
      title: "CRM & Pipeline",
      description:
        "Custom pipeline stages, contact fields, lead source tracking, and opportunity management configured to match your real sales process.",
    },
    {
      title: "Workflow Automation",
      description:
        "Lead follow-up sequences, appointment confirmation, reminders, and post-service workflows — tested and operational at handover.",
    },
    {
      title: "Calendar & Booking",
      description:
        "Structured booking with configured availability, appointment types, confirmation and reminder sequences.",
    },
    {
      title: "Communication Systems",
      description:
        "Email authentication, phone/SMS setup, and two-way communication channels — fully configured and deliverability-tested.",
    },
    {
      title: "Integrations",
      description:
        "Native connections, webhooks, and API integrations to connect your GoHighLevel account with the tools your business uses.",
    },
    {
      title: "Funnels & Pages",
      description:
        "Landing pages, opt-in funnels, and booking pages built inside GHL and connected to your CRM and automation workflows.",
    },
  ];

  return (
    <section className="section-md bg-white border-b border-gray-100" aria-labelledby="ghl-cap-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="GoHighLevel"
          heading="The complete GoHighLevel implementation."
          subheading="GoHighLevel works best when every system is configured correctly and connected. We implement the platform end-to-end — not feature by feature in isolation."
          align="center"
          className="mb-12"
        />
        <AnimatedStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {capabilities.map((cap) => (
            <AnimatedItem key={cap.title} className="h-full">
              <div className="bg-surface border border-gray-100 p-6 rounded-xl h-full transition-colors hover:border-gray-200">
                <h3 className="text-sm font-bold text-ink-900 mb-2">{cap.title}</h3>
                <p className="text-body text-gray-500">{cap.description}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
        <div className="mt-12 text-center">
          <Link href="/services/gohighlevel-setup" className="btn btn-primary">
            GoHighLevel Setup Details
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomeProcess() {
  const steps = [
    { num: "01", title: "Strategy call", desc: "Map your business workflow, goals, and technical requirements." },
    { num: "02", title: "Scoping", desc: "Define what gets built, the timeline, and what's needed to start." },
    { num: "03", title: "Implementation", desc: "Configure, build, and integrate every system for your business." },
    { num: "04", title: "Testing", desc: "End-to-end verification of every workflow, channel, and connection." },
    { num: "05", title: "Handover & support", desc: "Documentation, walkthrough, and post-launch support." },
  ];

  return (
    <section className="section-md bg-surface border-b border-gray-100" aria-labelledby="home-process-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="How We Work"
          heading="A structured implementation process."
          subheading="Every engagement follows the same disciplined method — scoped to your business, executed systematically."
          align="center"
          className="mb-10 lg:text-center"
        />
        <AnimatedStagger className="grid sm:grid-cols-5 gap-0 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden sm:block absolute top-5 left-[10%] right-[10%] h-px bg-gray-200" aria-hidden="true" />

          {steps.map((step) => (
            <AnimatedItem key={step.num} className="relative flex flex-col items-start sm:items-center gap-3 pb-8 sm:pb-0 pl-8 sm:pl-0 border-l sm:border-l-0 border-gray-200">
              {/* Dot (sm) */}
              <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shrink-0 relative z-10">
                <span className="text-xs font-semibold tabular-nums text-ink-900">{step.num}</span>
              </div>
              <div className="sm:text-center">
                <h3 className="text-sm font-bold text-ink-900 mb-1">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}

function HomeIndustries() {
  return (
    <section className="section-md bg-white border-b border-gray-100 overflow-hidden" aria-labelledby="home-industries-heading">
      <div className="container-page">
        <div className="mb-8 md:mb-12 flex flex-col items-center">
          <SectionHeading
            eyebrow="Industries"
            heading="Configured for your business type."
            subheading="Implementation approach adapts to how your industry handles leads, scheduling, and client relationships."
            align="center"
            className="mb-0"
          />
        </div>
        <div className="w-full">
          <IndustryCarousel industries={industries.slice(0, 6)} basePath="/industries" />
        </div>
      </div>
    </section>
  );
}

function HomePricingSection() {
  const packages = [
    {
      name: "Starter",
      description: "For businesses that need the essential GoHighLevel setup.",
      price: "$1,500",
      features: [
        "CRM & pipeline setup",
        "Calendar & booking configuration",
        "Basic email/SMS templates",
        "Domain & email authentication",
        "1-hour team onboarding",
      ],
      href: site.cta.bookCall,
      highlighted: false,
    },
    {
      name: "Growth",
      description: "For businesses that need a complete CRM, automation, and funnel system.",
      price: "$3,000",
      features: [
        "Everything in Starter",
        "Automated lead follow-up sequences",
        "Appointment reminder workflows",
        "Custom landing page & funnel",
        "Basic third-party integrations",
        "30 days post-launch support",
      ],
      href: site.cta.bookCall,
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Scale",
      description: "For businesses that need advanced automation and a fully customized ecosystem.",
      price: "$5,500+",
      features: [
        "Everything in Growth",
        "Advanced multi-step automations",
        "Custom webhook & API integrations",
        "Complex data migration",
        "Custom reporting dashboards",
        "90 days dedicated support",
      ],
      href: site.cta.bookCall,
      highlighted: false,
    }
  ];

  return (
    <section className="section-md bg-surface border-b border-gray-100" aria-labelledby="pricing-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pricing"
          heading="Transparent pricing for professional implementation."
          subheading="Choose the level of implementation that matches your business complexity. No hidden fees or ongoing retainers required."
          align="center"
          className="mb-10 lg:text-center"
        />
        <AnimatedStagger className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <AnimatedItem key={pkg.name} className="h-full">
              <div
                className={`card card-padded flex flex-col gap-6 relative transition-all duration-200 h-full ${
                  pkg.highlighted 
                    ? "border-ink-900 ring-1 ring-ink-900 shadow-md md:-translate-y-2" 
                    : "hover:border-gray-300"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-ink-900 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      {pkg.badge}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-title mb-2">{pkg.name}</h3>
                  <p className="text-body text-gray-500 min-h-[3rem]">{pkg.description}</p>
                </div>
                <div className="text-display font-number">
                  {pkg.price}
                </div>
                <ul className="flex flex-col gap-3 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-body text-gray-600">
                      <svg viewBox="0 0 10 8" fill="none" className="w-3 h-3 text-accent shrink-0 mt-1.5" stroke="currentColor" strokeWidth="2">
                        <path d="M1 4l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={pkg.href}
                  className={`btn w-full ${pkg.highlighted ? "btn-primary" : "btn-outline"}`}
                >
                  Get Started
                </Link>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}

function HomeFaqSection() {
  const faqs = [
    {
      question: "What is GoHighLevel and how can it help my business?",
      answer: "GoHighLevel is a comprehensive all-in-one marketing and sales platform. It helps businesses consolidate their software stack by combining CRM, email marketing, SMS, calendar scheduling, funnels, and automation into a single system, streamlining operations and improving lead conversion."
    },
    {
      question: "What does your GHL setup service include?",
      answer: "Our service includes complete configuration of your GoHighLevel account. This covers CRM pipeline setup, domain and email authentication, calendar booking systems, core automation workflows, SMS/phone provisioning, and a structured handover so your team can use the system immediately."
    },
    {
      question: "How long does a typical GHL setup take?",
      answer: "A standard implementation typically takes 2 to 4 weeks depending on the complexity of your requirements. We start with a strategy call to map out your workflows, followed by the build phase, rigorous testing, and a final handover."
    },
    {
      question: "Do you build funnels and websites inside GoHighLevel?",
      answer: "Yes, depending on the package you choose, we can design and build custom landing pages, opt-in funnels, and full websites directly within GoHighLevel, fully integrated with your CRM and automated follow-up sequences."
    },
    {
      question: "Can you create automated workflows and follow-up sequences?",
      answer: "Absolutely. We specialize in building reliable automation workflows, including immediate lead follow-ups, appointment reminders, nurture sequences, and post-service review requests to ensure no opportunity falls through the cracks."
    },
    {
      question: "Can you migrate my existing CRM or customer data?",
      answer: "Yes, we can handle data migration from your existing CRM or spreadsheets. We ensure your contacts, tags, and basic histories are properly formatted and securely imported into your new GoHighLevel pipelines."
    },
    {
      question: "Will you provide support after the setup is complete?",
      answer: "Yes. Every setup includes a post-launch support period (ranging from 30 to 90 days depending on your package) to help answer questions, make minor adjustments, and ensure your team is confident using the platform."
    },
    {
      question: "Can you customize the setup for my specific business?",
      answer: "100%. We do not use generic, one-size-fits-all templates. Every pipeline, custom field, and automation is mapped and configured to match your actual business model and sales process."
    }
  ];

  return (
    <section className="section-md bg-white border-b border-gray-100" aria-labelledby="home-faq-heading">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="FAQ"
          heading="Common questions about our setup service."
          subheading="If your question isn't covered here, book a strategy call and we'll be happy to answer it directly."
          align="center"
          className="mb-10 lg:text-center"
        />
        <div className="w-full mt-8">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}

function HomeTestimonials() {
  const testimonials = [
    {
      id: "t1",
      quote: "The CRM configuration completely transformed how we handle inbound leads. We're closing 30% more deals simply because no one falls through the cracks anymore.",
      author: "Sarah Jenkins",
      role: "Operations Director",
      company: "Elevate Real Estate",
    },
    {
      id: "t2",
      quote: "We needed a system that actually matched our complex sales process. They mapped it out perfectly and delivered a GoHighLevel setup that our team adopted immediately.",
      author: "Michael Chen",
      role: "CEO",
      company: "Apex Consulting Group",
    },
    {
      id: "t3",
      quote: "Their workflow automations save us at least 15 hours a week in manual follow-ups. The handover process was incredibly thorough.",
      author: "David Ross",
      role: "Founder",
      company: "Ross & Partners",
    },
    {
      id: "t4",
      quote: "Unlike other agencies, they didn't just sell us a template. They built a custom integration ecosystem that connects our existing tools directly into GHL.",
      author: "Elena Rodriguez",
      role: "Marketing Head",
      company: "Nexus Tech Solutions",
    },
  ];

  return (
    <section className="section-md bg-white border-b border-gray-100 overflow-hidden" aria-labelledby="home-testimonials-heading">
      <div className="container-page">
        <div className="mb-6 md:mb-10 flex flex-col items-center">
          <SectionHeading
            eyebrow="Client Success"
            heading="Systems that drive real business results."
            subheading="Don't just take our word for it. Here's what business leaders say about our implementation process."
            align="center"
            className="mb-0"
          />
        </div>
        <div className="w-full">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <HomeHero />
      <ServicesOverview />
      <GhlCapabilitySection />
      <HomeProcess />
      <HomeIndustries />
      <HomeTestimonials />
      <HomePricingSection />
      <HomeFaqSection />
      <CtaSection
        heading="Start with a strategy call."
        subheading="Tell us about your business and what you're trying to build. We'll outline a clear implementation plan."
      />
    </>
  );
}
