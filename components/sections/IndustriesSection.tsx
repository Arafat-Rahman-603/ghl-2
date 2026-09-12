"use client";

import { ghlIndustries } from "@/lib/content/ghl-setup";
import { IndustryCarousel } from "@/components/ui/IndustryCarousel";
import { motion } from "framer-motion";

export function IndustriesSection() {
  return (
    <section
      className="section-md bg-surface border-b border-gray-100 overflow-hidden"
      aria-labelledby="industries-heading"
    >
      <div className="container-page">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center max-w-2xl mx-auto"
        >
          <span className="eyebrow mb-3 block w-fit mx-auto">Industries</span>
          <h2 id="industries-heading" className="text-headline">
            Configuration changes based on how your industry works.
          </h2>
          <p className="text-body text-gray-500 mt-3 mx-auto">
            GoHighLevel implementation for a real estate team looks different
            from an HVAC company or a coaching business. We configure the
            system around your specific workflows.
          </p>
        </motion.div>

        <div className="mx-auto max-w-[100vw] sm:max-w-none -mx-4 sm:mx-0 px-4 sm:px-0">
          <IndustryCarousel industries={ghlIndustries} basePath="/industries" />
        </div>
      </div>
    </section>
  );
}
