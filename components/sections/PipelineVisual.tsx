"use client";

import { useState } from "react";

const STAGES = [
  {
    id: "new",
    name: "New Lead",
    color: "#1b6ef3",
    contacts: [
      { initials: "MR", name: "Marcus Reed", company: "Reed HVAC", value: "$4,200", date: "Today" },
      { initials: "JH", name: "Jennifer Hayes", company: "Hayes Realty", value: "$8,800", date: "Today" },
      { initials: "CP", name: "Chris Park", company: "Park Law Firm", value: "$3,400", date: "Yesterday" },
    ],
  },
  {
    id: "contacted",
    name: "Contacted",
    color: "#f59e0b",
    contacts: [
      { initials: "AL", name: "Amanda Liu", company: "Liu Consulting", value: "$6,100", date: "Mon" },
      { initials: "TM", name: "Tom Mitchell", company: "Mitchell Plumb.", value: "$2,900", date: "Mon" },
    ],
  },
  {
    id: "proposal",
    name: "Proposal",
    color: "#8b5cf6",
    contacts: [
      { initials: "RG", name: "Rachel Green", company: "Green Dental", value: "$12,500", date: "Fri" },
      { initials: "NK", name: "Noah Kim", company: "Kim Agency", value: "$9,200", date: "Fri" },
    ],
  },
  {
    id: "won",
    name: "Won",
    color: "#10b981",
    contacts: [
      { initials: "EW", name: "Emma Wilson", company: "Wilson Realty", value: "$14,800", date: "Jun 12" },
    ],
  },
];

export function PipelineVisual() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section
      className="section-md bg-surface border-b border-gray-100 overflow-hidden"
      aria-labelledby="pipeline-heading"
    >
      <div className="container-page">
        <div className="mb-8">
          <span className="eyebrow mb-3 block w-fit">CRM Pipeline</span>
          <h2 id="pipeline-heading" className="text-headline max-w-xl">
            A pipeline that maps to your actual sales process.
          </h2>
          <p className="text-body text-gray-500 mt-3 max-w-xl">
            Custom stages, opportunity values, lead sources, and activity
            tracking — configured to reflect how your business actually closes
            deals, not a default template.
          </p>
        </div>

        {/* Pipeline UI */}
        <div
          className="rounded-xl border border-gray-200 bg-white overflow-hidden"
          role="img"
          aria-label="Fictional CRM pipeline interface showing contact stages"
        >
          {/* Toolbar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-ink-900">Sales Pipeline</span>
              <span className="text-xs text-gray-400">|</span>
              <span className="text-xs text-gray-400">Q3 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">8 open opportunities</span>
              <span className="text-xs text-green-600 font-medium">
                $47,100 pipeline
              </span>
            </div>
          </div>

          {/* Kanban columns */}
          <div className="grid grid-cols-4 divide-x divide-gray-100 min-h-[280px] overflow-x-auto">
            {STAGES.map((stage) => (
              <div key={stage.id} className="p-3 flex flex-col gap-2 min-w-[160px]">
                {/* Stage header */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: stage.color }}
                      aria-hidden="true"
                    />
                    <span className="text-[11px] font-semibold text-ink-900">
                      {stage.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-400">
                    {stage.contacts.length}
                  </span>
                </div>

                {/* Cards */}
                {stage.contacts.map((contact) => {
                  const cardId = `${stage.id}-${contact.name}`;
                  const isActive = activeCard === cardId;
                  return (
                    <button
                      key={contact.name}
                      onClick={() => setActiveCard(isActive ? null : cardId)}
                      aria-pressed={isActive}
                      className={`text-left w-full rounded-md border p-2.5 transition-all cursor-pointer ${
                        isActive
                          ? "border-blue-300 bg-accent-muted shadow-sm"
                          : "border-gray-150 bg-white hover:border-gray-300"
                      }`}
                      style={{ borderColor: isActive ? stage.color : undefined }}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[9px] font-bold text-gray-500 shrink-0">
                          {contact.initials}
                        </span>
                        <span className="text-[11px] font-semibold text-ink-900 leading-tight truncate">
                          {contact.name}
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-400 truncate mb-1">
                        {contact.company}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-ink-900">
                          {contact.value}
                        </span>
                        <span className="text-[10px] text-gray-400">
                          {contact.date}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-3 text-caption text-center text-gray-400">
          Fictional demonstration — illustrative of a typical implementation
        </p>
      </div>
    </section>
  );
}
