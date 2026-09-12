import type { Metadata } from "next";
import { site } from "@/lib/content/site";
import { ghlSetupFaq } from "@/lib/content/ghl-setup";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GhlHero } from "@/components/sections/GhlHero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { OutcomeSection } from "@/components/sections/OutcomeSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ConfigSection } from "@/components/sections/ConfigSection";
import { PipelineVisual } from "@/components/sections/PipelineVisual";
import { WorkflowVisual } from "@/components/sections/WorkflowVisual";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

const PAGE_URL = `${site.url}/services/gohighlevel-setup`;
const PAGE_TITLE = "GoHighLevel Setup & Implementation";
const PAGE_DESC =
  "Professional GoHighLevel implementation: CRM pipelines, workflows, calendars, communication systems, and integrations — configured for your specific business and tested before handover.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
  },
};

// JSON-LD structured data
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GoHighLevel Setup & Implementation",
  description: PAGE_DESC,
  url: PAGE_URL,
  provider: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
  serviceType: "GoHighLevel Implementation",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
    { "@type": "ListItem", position: 3, name: "GoHighLevel Setup", item: PAGE_URL },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ghlSetupFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function GhlSetupPage() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumb navigation */}
      <div className="container-page pt-5">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "GoHighLevel Setup" },
          ]}
        />
      </div>

      {/* Page sections */}
      <GhlHero />
      <ProblemSection />
      <OutcomeSection />
      <ProcessSection />
      <ConfigSection />
      <PipelineVisual />
      <WorkflowVisual />
      <WhyUsSection />
      <ComparisonSection />
      <IndustriesSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
