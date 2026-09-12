import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <section className="pt-12 pb-10 md:pt-16 md:pb-14 flex items-center bg-white min-h-[50vh]">
      <div className="container-narrow text-center">
        <p className="text-label mb-3">404</p>
        <h1 className="text-headline mb-4">Page not found.</h1>
        <p className="text-body text-gray-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="btn btn-primary">
          Go home
        </Link>
      </div>
    </section>
  );
}
