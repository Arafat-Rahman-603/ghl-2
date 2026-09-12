import type { Metadata } from "next";
import { site } from "@/lib/content/site";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}. Tell us about your GoHighLevel implementation or automation project.`,
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  return (
    <section className="pt-12 pb-10 md:pt-16 md:pb-14 bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <span className="eyebrow mb-4 block w-fit">Contact</span>
            <h1 className="text-display mb-5">Get in touch.</h1>
            <p className="text-body-lg text-gray-500 mb-8">
              Tell us about your business and what you&apos;re trying to
              implement. We&apos;ll review your inquiry and follow up with next
              steps.
            </p>

            <div className="flex flex-col gap-6">
              {site.email && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm font-medium text-ink-900 hover:text-accent transition-colors"
                  >
                    {site.email}
                  </a>
                </div>
              )}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Prefer to schedule?</p>
                <a
                  href={site.cta.bookCall}
                  className="text-sm font-medium text-accent hover:underline"
                >
                  Book a strategy call →
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
