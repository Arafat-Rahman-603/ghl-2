import Link from "next/link";
import { site } from "@/lib/content/site";

interface CtaSectionProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaSection({
  heading = "Ready to turn GoHighLevel into a system your team can actually use?",
  subheading = "Book a strategy call. We'll walk through your current setup, identify what needs to be built, and outline a clear implementation plan.",
  primaryLabel = "Book a Strategy Call",
  primaryHref,
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
}: CtaSectionProps) {
  const finalPrimaryHref = primaryHref ?? site.cta.bookCall;

  return (
    <section
      className="section-md bg-ink-900 border-t border-gray-800"
      aria-labelledby="cta-heading"
    >
      <div className="container-narrow text-center">
        <h2
          id="cta-heading"
          className="text-headline text-white mb-5 max-w-2xl mx-auto"
        >
          {heading}
        </h2>
        <p className="text-body-lg text-gray-300 mb-8 max-w-xl mx-auto">
          {subheading}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href={finalPrimaryHref}
            className="btn btn-accent btn-lg"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="btn btn-lg text-white border-gray-600 bg-transparent hover:bg-white/10 hover:border-gray-400 border-1.5"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
