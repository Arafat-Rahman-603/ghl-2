"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Data and Layout Constants ──────────────────────────────────────────────────

// The SVG coordinate space
const VIEW_W = 1000;
const VIEW_H = 600;

const CENTER = { x: VIEW_W / 2, y: VIEW_H / 2 }; // 500, 300

// We want 6 nodes distributed around the center.
// For a nice editorial layout, let's put 3 on the left, 3 on the right.
const SATELLITES = [
  { id: "funnels", label: "Funnels and Sites", iconText: "F", cx: 200, cy: 150, color: "#f97316", lineCol: "#3b82f6" },
  { id: "ai", label: "AI Chatbots", iconText: "AI", cx: 160, cy: 300, color: "#3b82f6", lineCol: "#3b82f6" },
  { id: "crm", label: "CRM and Pipelines", iconText: "CRM", cx: 200, cy: 450, color: "#3b82f6", lineCol: "#3b82f6" },
  
  { id: "booking", label: "Booking and Calendars", iconText: "B", cx: 800, cy: 150, color: "#ec4899", lineCol: "#ec4899" },
  { id: "sms", label: "SMS Automation", iconText: "SMS", cx: 840, cy: 300, color: "#ec4899", lineCol: "#ec4899" },
  { id: "email", label: "Email Marketing", iconText: "E", cx: 800, cy: 450, color: "#f59e0b", lineCol: "#3b82f6" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function GhlCommandCentreSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px" });

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-20 border-b border-gray-200 overflow-hidden relative"
      style={{ backgroundColor: "#f5f4f0" }}
      aria-labelledby="command-centre-heading"
    >
      <div className="container-page relative z-10">
        
        {/* Header Badges */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <h2
            id="command-centre-heading"
            className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500"
          >
            Your GoHighLevel Command Centre
          </h2>
          <div className="flex items-center gap-2.5 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
              Automations live
            </span>
          </div>
        </div>

        {/* SVG Diagram Area */}
        <div className="relative w-full max-w-[1000px] mx-auto aspect-[5/3] sm:aspect-[5/3] lg:aspect-[10/6]">
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            className="w-full h-full overflow-visible"
            aria-hidden="true"
          >
            {/* ── 1. Spoke Lines (Bezier) ── */}
            {SATELLITES.map((sat, i) => {
              // Path goes from center node edge outwards horizontally, then curves to satellite edge
              const isLeft = sat.cx < CENTER.x;
              const startX = isLeft ? CENTER.x - 90 : CENTER.x + 90;
              const endX = isLeft ? sat.cx + 120 : sat.cx - 90;
              
              // Control points for nice smooth S-curve horizontally
              const cp1x = startX + (isLeft ? -100 : 100);
              const cp1y = CENTER.y;
              const cp2x = endX + (isLeft ? 100 : -100);
              const cp2y = sat.cy;
              
              const pathD = `M ${startX} ${CENTER.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${sat.cy}`;
              
              return (
                <g key={`path-${sat.id}`}>
                  {/* Faint background path */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={sat.lineCol}
                    strokeWidth="2"
                    strokeOpacity="0.15"
                  />
                  {/* Animated foreground path */}
                  <motion.path
                    d={pathD}
                    fill="none"
                    stroke={sat.lineCol}
                    strokeWidth="2"
                    strokeOpacity="0.6"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 + i * 0.1 }}
                  />
                  
                  {/* Connector dots near center */}
                  <motion.circle
                    cx={startX + (isLeft ? -15 : 15)}
                    cy={CENTER.y}
                    r="3"
                    fill="#111827"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                  />
                  <motion.circle
                    cx={startX + (isLeft ? -30 : 30)}
                    cy={CENTER.y}
                    r="2.5"
                    fill="#111827"
                    fillOpacity="0.6"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.85 + i * 0.1 }}
                  />
                  <motion.circle
                    cx={startX + (isLeft ? -45 : 45)}
                    cy={CENTER.y}
                    r="2"
                    fill="#111827"
                    fillOpacity="0.3"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                  />
                </g>
              );
            })}

            {/* ── 2. Satellite Nodes ── */}
            {SATELLITES.map((sat, i) => {
              return (
                <motion.g
                  key={sat.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                >
                  {/* Pill Background */}
                  <rect
                    x={sat.cx - 90}
                    y={sat.cy - 24}
                    width="210"
                    height="48"
                    rx="24"
                    fill="#ffffff"
                    stroke="#e5e7eb"
                    strokeWidth="1.5"
                    filter="drop-shadow(0 4px 6px rgba(0,0,0,0.04))"
                  />
                  {/* Colored Icon Circle */}
                  <circle
                    cx={sat.cx - 62}
                    cy={sat.cy}
                    r="16"
                    fill={sat.color}
                  />
                  <text
                    x={sat.cx - 62}
                    y={sat.cy + 4}
                    fill="#ffffff"
                    fontSize="12"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    {sat.iconText}
                  </text>
                  {/* Label */}
                  <text
                    x={sat.cx - 36}
                    y={sat.cy + 4.5}
                    fill="#374151"
                    fontSize="13"
                    fontWeight="600"
                  >
                    {sat.label}
                  </text>
                </motion.g>
              );
            })}

            {/* ── 3. Center Node (GoHighLevel) ── */}
            <motion.g
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
            >
              {/* Outer glow/border */}
              <rect
                x={CENTER.x - 100}
                y={CENTER.y - 44}
                width="200"
                height="88"
                rx="28"
                fill="none"
                stroke="#f472b6"
                strokeWidth="2"
                strokeOpacity="0.2"
              />
              {/* Main Pill */}
              <rect
                x={CENTER.x - 90}
                y={CENTER.y - 36}
                width="180"
                height="72"
                rx="24"
                fill="#f472b6"
                filter="drop-shadow(0 10px 25px rgba(244,114,182,0.3))"
              />
              <text
                x={CENTER.x}
                y={CENTER.y - 2}
                fill="#ffffff"
                fontSize="22"
                fontWeight="800"
                fontStyle="italic"
                textAnchor="middle"
                letterSpacing="-0.02em"
              >
                GoHighLevel
              </text>
              <text
                x={CENTER.x}
                y={CENTER.y + 18}
                fill="#fce7f3"
                fontSize="12"
                fontWeight="600"
                textAnchor="middle"
                letterSpacing="0.05em"
                opacity="0.9"
              >
                CORE CRM
              </text>
            </motion.g>

          </svg>
        </div>
        
      </div>

      {/* ── Live Metrics Bar ─────────────────────────────────────────────── */}
      <div className="container-page mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {/* Metric 1 — Pipeline */}
          <div className="bg-white rounded-xl border border-gray-200 px-6 py-5">
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-1">
              Pipeline · MTD
            </p>
            <p className="text-3xl font-bold font-number tracking-tight text-ink-900 mb-4">
              $148.2k
            </p>
            {/* Inline sparkline SVG */}
            <svg viewBox="0 0 160 32" className="w-full h-8" aria-hidden="true" preserveAspectRatio="none">
              <polyline
                points="0,28 20,24 40,26 60,18 80,20 100,14 120,16 140,8 160,10"
                fill="none"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Metric 2 — New Leads */}
          <div className="bg-white rounded-xl border border-gray-200 px-6 py-5">
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-1">
              New Leads
            </p>
            <p className="text-3xl font-bold font-number tracking-tight text-ink-900 mb-4">
              312
            </p>
            {/* Progress bar — blue */}
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-blue-400"
                initial={{ width: 0 }}
                animate={isInView ? { width: "68%" } : { width: 0 }}
                transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Metric 3 — Calls Booked */}
          <div className="bg-white rounded-xl border border-gray-200 px-6 py-5">
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-1">
              Calls Booked
            </p>
            <p className="text-3xl font-bold font-number tracking-tight text-ink-900 mb-4">
              128
            </p>
            {/* Progress bar — pink */}
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-pink-400"
                initial={{ width: 0 }}
                animate={isInView ? { width: "41%" } : { width: 0 }}
                transition={{ duration: 1.2, delay: 1.6, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
