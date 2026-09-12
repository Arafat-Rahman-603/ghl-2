import Link from "next/link";
import { ghlSetupHero } from "@/lib/content/ghl-setup";

// Fictional CRM UI Composition — not the actual GoHighLevel interface
function CrmDashboardVisual() {
  const pipelineStages = [
    { name: "New Lead", count: 8, value: "$24,400" },
    { name: "Contacted", count: 5, value: "$18,200" },
    { name: "Proposal Sent", count: 3, value: "$31,500" },
    { name: "Closed Won", count: 2, value: "$14,800" },
  ];

  const recentContacts = [
    { initials: "MR", name: "Marcus Reed", stage: "New Lead", time: "2m ago", status: "new" },
    { initials: "SL", name: "Sarah Liu", stage: "Proposal Sent", time: "14m ago", status: "active" },
    { initials: "DK", name: "Daniel Kim", stage: "Contacted", time: "1h ago", status: "active" },
    { initials: "AP", name: "Alicia Park", stage: "Closed Won", time: "3h ago", status: "won" },
  ];

  return (
    <div
      className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden"
      aria-label="Fictional CRM interface demonstration"
      role="img"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-gray-200 bg-gray-50">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        <div className="flex-1 mx-4 bg-white border border-gray-200 rounded-md px-2 py-0.5 text-xs text-gray-400 font-mono">
          crm.example.com/pipeline
        </div>
      </div>

      {/* Topbar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-ink-900">Sales Pipeline</span>
          <span className="text-xs text-[#6B7280] font-medium">
            Q3 Active
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">18 contacts</span>
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-xs text-green-600 font-medium">Live</span>
        </div>
      </div>

      {/* Pipeline stages */}
      <div className="grid grid-cols-4 divide-x divide-gray-100">
        {pipelineStages.map((stage) => (
          <div key={stage.name} className="p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1">
              {stage.name}
            </p>
            <p className="text-lg font-bold text-ink-900 leading-none mb-0.5">
              {stage.count}
            </p>
            <p className="text-[11px] text-gray-400">{stage.value}</p>
          </div>
        ))}
      </div>

      {/* Contact list */}
      <div className="border-t border-gray-100">
        <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
            Recent activity
          </span>
        </div>
        {recentContacts.map((contact, i) => (
          <div
            key={contact.name}
            className={`flex items-center gap-3 px-4 py-2.5 ${i < recentContacts.length - 1 ? "border-b border-gray-50" : ""}`}
          >
            <div
              className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500 shrink-0"
              aria-hidden="true"
            >
              {contact.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-ink-900 truncate">
                {contact.name}
              </p>
              <p className="text-[10px] text-gray-400">{contact.stage}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  contact.status === "won"
                    ? "bg-green-400"
                    : contact.status === "new"
                    ? "bg-blue-400"
                    : "bg-amber-400"
                }`}
              />
              <span className="text-[10px] text-gray-400">{contact.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer status */}
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex items-center gap-2">
        <svg className="w-3 h-3 text-green-500" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
          <circle cx="6" cy="6" r="6" />
        </svg>
        <span className="text-[10px] text-gray-500">
          3 automations running · Last synced 47s ago
        </span>
      </div>
    </div>
  );
}

export function GhlHero() {
  const { eyebrow, headline, subheadline, primaryCta, secondaryCta, trustIndicators } = ghlSetupHero;

  return (
    <section
      className="pt-12 pb-12 md:pt-16 md:pb-16 bg-white border-b border-gray-100"
      aria-labelledby="hero-heading"
    >
      <div className="container-page">
        <div className="grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px] gap-12 xl:gap-16 items-start">
          {/* Left: copy */}
          <div className="max-w-xl">
            <span className="eyebrow mb-5 block w-fit">{eyebrow}</span>
            <h1
              id="hero-heading"
              className="text-display mb-5"
            >
              {headline}
            </h1>
            <p className="text-body-lg mb-8 text-gray-500">
              {subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href={primaryCta.href} className="btn btn-primary btn-lg">
                {primaryCta.label}
              </Link>
              <Link href={secondaryCta.href} className="btn btn-outline btn-lg">
                {secondaryCta.label}
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {trustIndicators.map((indicator) => (
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
            </div>
          </div>

          {/* Right: product visual */}
          <div className="lg:pt-2">
            <CrmDashboardVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
