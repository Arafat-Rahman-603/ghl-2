"use client";

import React from "react";
import { motion } from "framer-motion";

const PARTNERS = [
  { name: "Acme Corp", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z"/></svg> },
  { name: "GlobalTech", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg> },
  { name: "Nexus", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg> },
  { name: "Vertex", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg> },
  { name: "Nova Media", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14v3H5zM5 6h14v8H5z"/></svg> },
  { name: "Zenith", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2zm0 3.83L19.17 19H4.83L12 5.83z"/></svg> },
];

export function HomeTrustedBySection() {
  return (
    <section className="py-10 border-b border-gray-100 bg-white overflow-hidden relative">
      <div className="container-page mb-6">
        <p className="text-center text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400">
          Trusted by growing agencies and businesses
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full flex overflow-hidden mask-linear-fade">
        <motion.div
          className="flex whitespace-nowrap items-center gap-12 sm:gap-24 pl-12 sm:pl-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {/* Double the array for seamless loop */}
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default"
            >
              <div className="text-neutral-900">{partner.icon}</div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .mask-linear-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}
