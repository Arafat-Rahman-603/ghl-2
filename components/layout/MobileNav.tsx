"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  primaryNav,
  servicesDropdown,
  industriesDropdown,
} from "@/lib/content/navigation";
import { site } from "@/lib/content/site";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Close nav on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
      setExpandedSection(null);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Prevent background scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Trigger */}
      <button
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
      >
        <span
          className={`block w-5 h-[1.75px] bg-ink-900 rounded-full transition-all duration-200 ${
            isOpen ? "rotate-45 translate-y-[6.75px]" : ""
          }`}
        />
        <span
          className={`block w-5 h-[1.75px] bg-ink-900 rounded-full transition-all duration-200 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-5 h-[1.75px] bg-ink-900 rounded-full transition-all duration-200 ${
            isOpen ? "-rotate-45 -translate-y-[6.75px]" : ""
          }`}
        />
      </button>

      {/* Portal Container */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Backdrop Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
                  aria-hidden="true"
                  onClick={() => setIsOpen(false)}
                />

                {/* Slide-over Drawer */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  ref={drawerRef}
                  id="mobile-nav-drawer"
                  className="fixed top-0 right-0 bottom-0 w-[min(340px,85vw)] h-[100dvh] bg-white z-[101] overflow-y-auto border-l border-gray-100 flex flex-col shadow-[-6px_0_28px_rgba(0,0,0,0.12)]"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Mobile navigation"
                >
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between px-5 h-14 border-b border-gray-100 bg-white shrink-0">
                    <Link
                      href="/"
                      className="font-bold text-lg text-ink-900 tracking-tight"
                      onClick={() => setIsOpen(false)}
                    >
                      {site.name}
                    </Link>
                    <button
                      aria-label="Close navigation"
                      onClick={() => setIsOpen(false)}
                      className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-500 hover:text-ink-900 transition-colors cursor-pointer"
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                          d="M3 3l12 12M15 3L3 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile navigation links">
                    <div className="flex flex-col divide-y divide-gray-100">
                      {primaryNav.map((item) => {
                        const hasDropdown =
                          item.label === "Services" || item.label === "Industries";
                        const isExpanded = expandedSection === item.label;

                        if (!hasDropdown) {
                          return (
                            <div key={item.label} className="py-1">
                              <Link
                                href={item.href}
                                className="flex items-center justify-between py-3 text-base font-medium text-ink-900 hover:text-accent transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.label}
                              </Link>
                            </div>
                          );
                        }

                        return (
                          <div key={item.label} className="py-1">
                            <button
                              aria-expanded={isExpanded}
                              onClick={() =>
                                setExpandedSection(isExpanded ? null : item.label)
                              }
                              className="flex w-full items-center justify-between py-3 text-base font-medium text-ink-900 hover:text-accent transition-colors cursor-pointer"
                            >
                              <span>{item.label}</span>
                              <svg
                                aria-hidden="true"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                className={`text-gray-400 transition-transform duration-200 ${
                                  isExpanded ? "rotate-180 text-ink-900" : ""
                                }`}
                              >
                                <path
                                  d="M4 6l4 4 4-4"
                                  stroke="currentColor"
                                  strokeWidth="1.75"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>

                            {/* Dropdown Submenu */}
                            <AnimatePresence>
                              {isExpanded && item.label === "Services" && (
                                <motion.div 
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pb-3 pl-3 pr-1 pt-1 flex flex-col gap-3 bg-gray-50/70 rounded-lg mb-2 p-3 border border-gray-100">
                                    {servicesDropdown.map((group) => (
                                      <div key={group.label}>
                                        <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                                          {group.label}
                                        </p>
                                        <div className="flex flex-col gap-1">
                                          {group.items.map((link) => (
                                            <Link
                                              key={link.label}
                                              href={link.href}
                                              className="py-1 text-sm text-ink-700 hover:text-accent transition-colors"
                                              onClick={() => setIsOpen(false)}
                                            >
                                              {link.label}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}

                              {isExpanded && item.label === "Industries" && (
                                <motion.div 
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pb-3 pl-3 pr-1 pt-1 flex flex-col gap-1.5 bg-gray-50/70 rounded-lg mb-2 p-3 border border-gray-100">
                                    {industriesDropdown.map((link) => (
                                      <Link
                                        key={link.label}
                                        href={link.href}
                                        className="py-1 text-sm text-ink-700 hover:text-accent transition-colors"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {link.label}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </nav>

                  {/* Drawer Footer Actions */}
                  <div className="p-5 border-t border-gray-100 bg-gray-50/50 shrink-0 flex flex-col gap-2.5">
                    <Link
                      href={site.cta.bookCall}
                      className="btn btn-primary w-full justify-center py-2.5"
                      onClick={() => setIsOpen(false)}
                    >
                      Book a Strategy Call
                    </Link>
                    <Link
                      href="/contact"
                      className="btn btn-outline w-full justify-center py-2.5 bg-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact Us
                    </Link>
                    {site.email && (
                      <p className="text-center text-xs text-gray-400 mt-1">
                        Direct inquiries:{" "}
                        <a href={`mailto:${site.email}`} className="text-ink-900 underline">
                          {site.email}
                        </a>
                      </p>
                    )}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
