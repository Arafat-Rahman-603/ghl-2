import { Accordion } from "@/components/ui/Accordion";
import { ghlSetupFaq } from "@/lib/content/ghl-setup";

export function FaqSection() {
  return (
    <section
      className="section-md bg-white border-b border-gray-100"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-page">
        <div className="grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="eyebrow mb-3 block w-fit">FAQ</span>
            <h2 id="faq-heading" className="text-headline mb-4">
              Common questions about the implementation.
            </h2>
            <p className="text-body text-gray-500">
              If your question isn&apos;t covered here, get in touch and we&apos;ll give
              you a direct answer.
            </p>
          </div>

          {/* Right: accordion */}
          <Accordion items={ghlSetupFaq} />
        </div>
      </div>
    </section>
  );
}
