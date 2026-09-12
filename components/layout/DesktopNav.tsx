"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  servicesDropdown,
  industriesDropdown,
  primaryNav,
} from "@/lib/content/navigation";

export function DesktopNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Close dropdown on route change — intentional: syncing UI state to routing state
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <nav
      aria-label="Main navigation"
      className="hidden lg:flex items-center gap-0"
    >
      {primaryNav.map((item) => {
        const hasDropdown =
          item.label === "Services" || item.label === "Industries";
        const isOpen = openDropdown === item.label;

        if (!hasDropdown) {
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href))
                  ? "text-ink-900 bg-gray-100"
                  : "text-ink-600 hover:text-ink-900 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          );
        }

        return (
          <div key={item.label} className="relative">
            <button
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={() =>
                setOpenDropdown(isOpen ? null : item.label)
              }
              onBlur={(e) => {
                if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                  setOpenDropdown(null);
                }
              }}
              className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                isOpen
                  ? "text-ink-900 bg-gray-100"
                  : "text-ink-600 hover:text-ink-900 hover:bg-gray-50"
              }`}
            >
              {item.label}
              <svg
                aria-hidden="true"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {isOpen && item.label === "Services" && (
              <div
                className="absolute top-full left-0 mt-1 w-[520px] bg-white border border-gray-200 rounded-lg shadow-lg p-4 grid grid-cols-2 gap-4"
                role="menu"
              >
                {servicesDropdown.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 px-2">
                      {group.label}
                    </p>
                    {group.items.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        role="menuitem"
                        className="block px-2 py-1.5 text-sm text-ink-600 rounded-md hover:text-ink-900 hover:bg-gray-50 transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <div className="col-span-2 border-t border-gray-100 pt-3 mt-1">
                  <Link
                    href="/services"
                    className="text-sm font-semibold text-accent hover:underline"
                    onClick={() => setOpenDropdown(null)}
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            )}

            {isOpen && item.label === "Industries" && (
              <div
                className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-3"
                role="menu"
              >
                {industriesDropdown.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    role="menuitem"
                    className="block px-2 py-1.5 text-sm text-ink-600 rounded-md hover:text-ink-900 hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
