"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/content/site";

// ─── Animation ────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: "easeOut" as const },
  },
};

// ─── Trust indicators ─────────────────────────────────────────────────────────

const trustIndicators = [
  {
    label: "Official GoHighLevel partner",
    icon: (
      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <circle cx="8" cy="8" r="6" />
        <path d="M5 8l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Fixed scope, fixed price",
    icon: (
      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M8 1l2 4.5 5 .5-3.5 3.5 1 5L8 12 3.5 14.5l1-5L1 6l5-.5L8 1z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Live in 2–4 weeks",
    icon: (
      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M9.5 2L4 9h5.5L7 14l6-8H8L9.5 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function HomeHeroSection() {
  return (
    <section
      className="pt-12 pb-10 md:pt-16 md:pb-12 border-b border-gray-200 overflow-hidden"
      style={{ backgroundColor: "#f5f4f0" }}
      aria-labelledby="home-hero-heading"
    >
      <div className="container-page">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full"
              style={{
                backgroundColor: "#f0cdb7",
                color: "#7a3d12",
              }}
            >
              GoHighLevel Implementation and Automation
            </span>
          </motion.div>

          {/* Headline — large, heavy, centered with highlighted word */}
          <motion.h1
            variants={itemVariants}
            id="home-hero-heading"
            className="mb-4"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.035em",
              color: "#0a0a0a",
              maxWidth: "820px",
            }}
          >
            Hire GoHighLevel{" "}
            {/* Highlighted word — mint background, editorial treatment */}
            <span className="relative inline-block">
              <span
                aria-hidden="true"
                className="absolute rounded"
                style={{
                  inset: "4px -6px 0px -6px",
                  backgroundColor: "#22c55e",
                  opacity: 0.28,
                  borderRadius: "6px",
                  zIndex: 0,
                }}
              />
              <span className="relative" style={{ zIndex: 1 }}>experts</span>
            </span>{" "}
            who can turn{" "}
            <br className="hidden sm:block" />
            your CRM into booked calls
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.65,
              color: "#4b5563",
              maxWidth: "520px",
              marginBottom: "1.5rem",
            }}
          >
            We map your sales process first, then build the CRM, automations,
            and workflows around it — every system tested and operational before
            handover.
          </motion.p>

          {/* CTAs — pill-shaped buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <Link
              href={site.cta.bookCall}
              className="btn btn-primary btn-lg group"
            >
              <span>Book a Strategy Call</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/services"
              className="btn btn-outline btn-lg group"
            >
              <span>Explore Services</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          {/* Trust bar — horizontal with pipe separators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3"
          >
            {trustIndicators.map((item, i) => (
              <React.Fragment key={item.label}>
                <div className="flex items-center gap-2" style={{ color: "#4b5563", fontSize: "0.8125rem", fontWeight: 500 }}>
                  {item.icon}
                  {item.label}
                </div>
                {i < trustIndicators.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden sm:block"
                    style={{ color: "#d1d5db", userSelect: "none" }}
                  >
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
