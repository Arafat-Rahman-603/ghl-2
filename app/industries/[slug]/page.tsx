import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { industries } from "@/lib/content/industries";
import { CtaSection } from "@/components/sections/CtaSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: `GoHighLevel for ${industry.name}`,
    description: industry.description,
    alternates: { canonical: `${site.url}/industries/${slug}` },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  return (
    <>
      <div className="container-page pt-5">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]} />
      </div>

      <section className="pt-12 pb-10 md:pt-16 md:pb-14 bg-white border-b border-gray-100 text-center relative overflow-hidden">
        <div className="container-page">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <span className="eyebrow mb-3 block w-fit">{industry.name}</span>
            <h1 className="text-display mb-4">
              GoHighLevel implementation for {industry.name}.
            </h1>
            <p className="text-body-lg text-gray-500 max-w-2xl mb-8">{industry.description}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href={site.cta.bookCall} className="btn btn-primary btn-lg">Book a Strategy Call</Link>
              <Link href="/services/gohighlevel-setup" className="btn btn-outline btn-lg">GHL Setup Service</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-md bg-surface border-b border-gray-100">
        <div className="container-page">
          <h2 className="text-headline max-w-xl mb-6">Common workflows we configure.</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {industry.workflows.map((wf) => (
              <div key={wf} className="card card-padded flex items-start gap-3">
                <svg aria-hidden className="w-4 h-4 mt-0.5 shrink-0 text-ink-900" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M2 8l5 5 7-9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-sm text-ink-900 font-medium">{wf}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading={`Ready to implement GoHighLevel for your ${industry.name.toLowerCase()} business?`} />
    </>
  );
}
