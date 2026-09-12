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
  heading = "Not sure where to start?",
  subheading = "Book a free 30-minute call. We'll audit your setup, find the gaps, and map exactly what to build. No pitch, no pressure.",
  primaryLabel = "Book a Call",
  primaryHref,
  secondaryLabel = "Chat on WhatsApp",
  secondaryHref = "/contact",
}: CtaSectionProps) {
  const finalPrimaryHref = primaryHref ?? site.cta.bookCall;

  const renderHeading = () => {
    if (heading === "Not sure where to start?") {
      return (
        <>
          Not sure where to{" "}
          <span className="relative inline-block px-1">
            <span
              className="absolute inset-0 bg-[#a7f3d0] rounded-sm transform -rotate-1"
              style={{ zIndex: 0 }}
            />
            <span className="relative z-10">start?</span>
          </span>
        </>
      );
    }
    return heading;
  };

  return (
    <section
      className="py-16 md:py-24 border-t border-gray-200"
      style={{ backgroundColor: "#f5f4f0" }}
      aria-labelledby="cta-heading"
    >
      <div className="container-page">
        <div className="bg-white rounded-[32px] border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-6 py-16 sm:px-12 sm:py-24 max-w-[940px] mx-auto text-center relative">
          
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-neutral-500 mb-6 block">
            Free Strategy Call
          </span>
          
          <h2
            id="cta-heading"
            className="font-serif font-bold text-4xl sm:text-5xl md:text-[56px] text-neutral-900 leading-[1.1] tracking-[-0.02em] mb-6"
          >
            {renderHeading()}
          </h2>
          
          <p className="text-[15px] sm:text-base text-neutral-600 mb-10 max-w-xl mx-auto leading-[1.65]">
            {subheading}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10">
            <Link
              href={finalPrimaryHref}
              className="btn btn-primary group"
            >
              <span>{primaryLabel}</span>
            </Link>
          </div>
          
          <p className="text-[13px] text-neutral-400 font-medium">
            Average delivery — 5 business days · 24/7 support included
          </p>
          
        </div>
      </div>
    </section>
  );
}
