"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/content/site";

// A high-quality placeholder video URL. Can be replaced with a client-specific video later.
const HERO_VIDEO_URL = "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  },
};

export function HomeHeroSection() {
  return (
    <section className="pt-10 pb-12 md:pt-14 md:pb-16 lg:pt-16 lg:pb-16 border-b border-gray-100 overflow-hidden" aria-labelledby="home-hero-heading">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          
          {/* Left: Copy & CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-2xl"
          >
            <motion.span variants={itemVariants} className="eyebrow mb-5 block w-fit">
              GoHighLevel Implementation & Automation
            </motion.span>
            
            <motion.h1 variants={itemVariants} id="home-hero-heading" className="text-display mb-5">
              Business automation that{" "}
              <span className="text-gray-400">actually works</span> — not just a
              platform you pay for.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-body-lg text-gray-500 mb-8 max-w-xl">
              We implement GoHighLevel and related automation systems so your CRM,
              workflows, and communication channels work as a connected,
              operational system from day one.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
              <Link href={site.cta.bookCall} className="btn btn-primary btn-lg">
                Book a Strategy Call
              </Link>
              <Link href="/services" className="btn btn-outline btn-lg">
                Explore Services
              </Link>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-x-6 gap-y-2">
              {["Verified Partners", "End-to-End Setup", "Custom Workflows"].map((indicator) => (
                <div
                  key={indicator}
                  className="flex items-center gap-2 text-caption font-medium text-gray-500"
                >
                  <svg
                    aria-hidden="true"
                    className="w-3.5 h-3.5 text-ink-900 shrink-0"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M2 7l4 4 6-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {indicator}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Video Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-[4/3] lg:aspect-square relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 shadow-2xl lg:mt-0 mt-4"
          >
            <video
              src={HERO_VIDEO_URL}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              poster="/globe.svg" // Placeholder poster from public dir
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
