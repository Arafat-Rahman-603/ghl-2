"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeft, ArrowRight, Settings, Zap, Users, Filter, Link2 } from "lucide-react";

const SERVICE_ITEMS = [
  {
    slug: "gohighlevel-setup",
    num: "01",
    title: "GoHighLevel Setup and Configuration",
    description:
      "Full GoHighLevel account setup. Pipelines, calendars, forms, triggers, and integrations built from day one to match your exact sales process.",
    features: ["Pipeline and stage configuration.", "Calendar and booking setup.", "Trigger and workflow automation."],
    iconKey: "setup",
    gradientFrom: "#3b82f6",
    gradientTo: "#1d4ed8",
  },
  {
    slug: "gohighlevel-automation",
    num: "02",
    title: "Marketing Automation",
    description:
      "Automated email, SMS, and voicemail sequences that nurture leads and convert on autopilot. Flows that keep working long after setup is done.",
    features: ["Email and SMS drip campaigns.", "Lead nurturing sequences.", "Abandoned lead recovery."],
    iconKey: "automation",
    gradientFrom: "#f59e0b",
    gradientTo: "#d97706",
  },
  {
    slug: "crm-setup",
    num: "03",
    title: "CRM Setup and Configuration",
    description:
      "Custom pipelines, contact fields, lead tracking, and opportunity management — configured around your real sales process, not default settings.",
    features: ["Custom pipeline stages.", "Contact field mapping.", "Lead source and status tracking."],
    iconKey: "crm",
    gradientFrom: "#10b981",
    gradientTo: "#059669",
  },
  {
    slug: "funnel-development",
    num: "04",
    title: "Funnel Development",
    description:
      "Landing pages, opt-in funnels, sales pages, and booking funnels built inside GHL and connected to your CRM and automation workflows.",
    features: ["Landing pages and opt-in funnels.", "Sales and booking pages.", "CRM-connected forms."],
    iconKey: "funnel",
    gradientFrom: "#8b5cf6",
    gradientTo: "#6d28d9",
  },
  {
    slug: "integrations",
    num: "05",
    title: "Integrations",
    description:
      "Native integrations, Zapier/Make connections, API and webhook configurations — so your full stack works as one connected system.",
    features: ["Native app integrations.", "Zapier and Make workflows.", "API and webhook configuration."],
    iconKey: "integrations",
    gradientFrom: "#ec4899",
    gradientTo: "#db2777",
  },
];

const ICONS = {
  setup: Settings,
  automation: Zap,
  crm: Users,
  funnel: Filter,
  integrations: Link2,
};

function ServiceIcon({ iconKey, from, to }: { iconKey: keyof typeof ICONS; from: string; to: string }) {
  const Icon = ICONS[iconKey];
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        background: `linear-gradient(135deg, ${from}, ${to})`,
      }}
      aria-hidden="true"
    >
      <Icon style={{ width: 20, height: 20, color: "#fff" }} />
    </div>
  );
}

function ServiceCard({ item, isActive }: { item: typeof SERVICE_ITEMS[0]; isActive: boolean }) {
  return (
    <a
      href={`#${item.slug}`}
      aria-label={`${item.title} — learn more`}
      className="block relative w-full md:w-[340px]"
      style={{
        outline: "none",
        textDecoration: "none",
        color: "inherit",
      }}
      onClick={(e) => e.preventDefault()}
    >
      <div
        className="relative bg-white flex flex-col gap-5"
        style={{
          borderRadius: 16,
          border: `1px solid ${isActive ? "#d1d5db" : "#e5e7eb"}`,
          padding: 28,
          minHeight: 340,
          boxShadow: isActive
            ? "0 18px 45px -12px rgba(0,0,0,0.18)"
            : "0 1px 3px rgba(0,0,0,0.06)",
          transition: "box-shadow 300ms ease, border-color 300ms ease",
        }}
      >
        {["tl", "tr", "bl", "br"].map((c) => (
          <span
            key={c}
            aria-hidden="true"
            style={{
              position: "absolute",
              width: 6,
              height: 6,
              borderRadius: 9999,
              backgroundColor: isActive ? "#d1d5db" : "#e5e7eb",
              top: c.startsWith("t") ? 10 : "auto",
              bottom: c.startsWith("b") ? 10 : "auto",
              left: c.endsWith("l") ? 10 : "auto",
              right: c.endsWith("r") ? 10 : "auto",
            }}
          />
        ))}

        <div className="flex items-start justify-between">
          <span style={{ fontSize: 11, fontWeight: 700, color: "#d1d5db" }}>{item.num}</span>
          <ServiceIcon iconKey={item.iconKey as keyof typeof ICONS} from={item.gradientFrom} to={item.gradientTo} />
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0a0a0a", lineHeight: 1.35 }}>{item.title}</h3>
          <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{item.description}</p>
        </div>

        <ul
          className="flex flex-col gap-2"
          style={{ paddingTop: 16, borderTop: "1px solid #f3f4f6", margin: 0, listStyle: "none", paddingLeft: 0 }}
        >
          {item.features.map((f: string) => (
            <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "#374151" }}>
              <svg
                aria-hidden="true"
                viewBox="0 0 10 8"
                fill="none"
                style={{ width: 12, height: 12, flexShrink: 0, marginTop: 3, color: item.gradientFrom }}
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 4l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = SERVICE_ITEMS.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (i: number) => setActiveIdx(((i % count) + count) % count),
    [count]
  );
  const next = useCallback(() => goTo(activeIdx + 1), [activeIdx, goTo]);
  const prev = useCallback(() => goTo(activeIdx - 1), [activeIdx, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActiveIdx((i) => (i + 1) % count);
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, count]);

  // shortest signed distance around the circle, e.g. for 5 items: -2..2
  function signedDistance(i: number) {
    let d = i - activeIdx;
    if (d > count / 2) d -= count;
    if (d < -count / 2) d += count;
    return d;
  }

  return (
    <section style={{ backgroundColor: "#f5f4f0", padding: "56px 0" }} aria-labelledby="services-heading">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div
          className="grid md:grid-cols-2 gap-8 items-end"
          style={{ marginBottom: 36 }}
        >
          <div>
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#1b6ef3",
                display: "block",
                marginBottom: 12,
              }}
            >
              Our Services
            </span>
            <h2
              id="services-heading"
              style={{
                fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#0a0a0a",
                margin: 0,
              }}
            >
              Everything you need to grow with GoHighLevel.
            </h2>
          </div>
          <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 480, margin: 0, lineHeight: 1.6 }}>
            One team across the whole stack — CRM, automations, funnels, and integrations —
            so nothing lands in the gap between two freelancers. Every workflow is tested
            against your real sales process.
          </p>
        </div>
      </div>

      {/* Mobile Swipe Slider */}
      <div 
        className="flex md:hidden overflow-x-auto snap-x snap-mandatory pb-8 pt-4 w-full" 
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {SERVICE_ITEMS.map((item) => (
          <div key={item.slug} className="snap-center shrink-0 w-full px-6 flex justify-center">
            <div className="w-full max-w-[340px]">
              <ServiceCard item={item} isActive={true} />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop 3D Carousel */}
      <div
        className="hidden md:block"
        style={{ position: "relative", height: 460, perspective: 1400 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transformStyle: "preserve-3d",
          }}
        >
          {SERVICE_ITEMS.map((item, i) => {
            const d = signedDistance(i);
            const abs = Math.abs(d);
            const isActive = d === 0;
            const translateX = d * 230;
            const scale = Math.max(1 - abs * 0.14, 0.6);
            const rotateY = d * -28;
            const opacity = abs > 2 ? 0 : 1 - abs * 0.18;
            const zIndex = 100 - abs;

            return (
              <div
                key={item.slug}
                style={{
                  position: "absolute",
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  opacity,
                  zIndex,
                  transition: "transform 500ms cubic-bezier(0.22,1,0.36,1), opacity 500ms ease",
                  pointerEvents: abs > 2 ? "none" : "auto",
                }}
              >
                <ServiceCard item={item} isActive={isActive} />
              </div>
            );
          })}
        </div>

        <button
          onClick={prev}
          aria-label="Previous service"
          style={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 200,
            width: 40,
            height: 40,
            borderRadius: 9999,
            background: "#fff",
            border: "1px solid #e5e7eb",
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <ArrowLeft style={{ width: 16, height: 16, color: "#374151" }} />
        </button>
        <button
          onClick={next}
          aria-label="Next service"
          style={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 200,
            width: 40,
            height: 40,
            borderRadius: 9999,
            background: "#fff",
            border: "1px solid #e5e7eb",
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <ArrowRight style={{ width: 16, height: 16, color: "#374151" }} />
        </button>
      </div>

      <div className="hidden md:flex" style={{ justifyContent: "center", gap: 8, paddingTop: 8 }}>
        {SERVICE_ITEMS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to service ${i + 1}`}
            style={{
              width: activeIdx === i ? 20 : 6,
              height: 6,
              borderRadius: 3,
              backgroundColor: activeIdx === i ? "#1b6ef3" : "#d1d5db",
              border: "none",
              cursor: "pointer",
              transition: "width 200ms ease, background-color 200ms ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}