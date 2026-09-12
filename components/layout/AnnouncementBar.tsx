import Link from "next/link";
import { site } from "@/lib/content/site";

export function AnnouncementBar() {
  return (
    <div
      className="bg-[#86efac] text-neutral-900 py-1.5 px-4 text-center border-b-2 border-neutral-900 font-semibold text-[13px] z-[60] relative"
      role="banner"
      aria-label="Site announcement"
    >
      <p className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
        <span>Professional GoHighLevel implementation for businesses and agencies.</span>
        <Link
          href={site.cta.bookCall}
          className="font-bold underline underline-offset-4 decoration-2 hover:text-neutral-700 transition-colors"
        >
          Book a strategy call →
        </Link>
      </p>
    </div>
  );
}
