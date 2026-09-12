import Link from "next/link";
import { footerNav } from "@/lib/content/navigation";
import { site } from "@/lib/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer bg-[#0a0a0a] text-gray-400 border-t border-gray-800" role="contentinfo">
      <div className="container-page py-12 lg:py-16">
        {/* Main Grid: 6 columns total (Brand spans 2, 4 link columns span 1 each) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand & Mission Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col justify-between pr-0 lg:pr-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-bold text-xl text-white tracking-tight">
                  {site.name}
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-sm">
                Professional GoHighLevel implementation, CRM architecture, automated pipelines, and custom integrations engineered for growing businesses.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              {site.email && (
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="12" height="10" rx="2" />
                    <path d="M2 5l6 4 6-4" />
                  </svg>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
                  >
                    {site.email}
                  </a>
                </div>
              )}
              <div className="pt-2">
                <Link
                  href={site.cta.bookCall}
                  className="btn btn-sm btn-accent inline-flex items-center gap-2 w-fit"
                >
                  <span>Book Strategy Call</span>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 7h12M8 2l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerNav.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Industries
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerNav.industries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerNav.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Resources
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerNav.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {year} {site.name}. All rights reserved. GoHighLevel Implementation & Business Automation.
          </p>
          <div className="flex items-center gap-6">
            {footerNav.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-gray-400 hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
