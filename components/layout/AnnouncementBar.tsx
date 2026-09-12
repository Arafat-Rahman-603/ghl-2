import Link from "next/link";
import { site } from "@/lib/content/site";

export function AnnouncementBar() {
  return (
    <div
      className="announcement-bar"
      role="banner"
      aria-label="Site announcement"
    >
      <p>
        Professional GoHighLevel implementation for businesses and agencies.{" "}
        <Link
          href={site.cta.bookCall}
          className="underline underline-offset-2 font-semibold"
        >
          Book a strategy call →
        </Link>
      </p>
    </div>
  );
}
