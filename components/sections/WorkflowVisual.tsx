const WORKFLOW_STEPS = [
  {
    id: "trigger",
    label: "Trigger",
    title: "New Lead Submitted",
    detail: "Form, ad, or API",
    type: "trigger",
  },
  {
    id: "condition",
    label: "Condition",
    title: "Lead Source Check",
    detail: "Route by source type",
    type: "condition",
  },
  {
    id: "sms",
    label: "Action",
    title: "Send SMS — Instant",
    detail: "Personalized response within 60s",
    type: "action",
  },
  {
    id: "email",
    label: "Action",
    title: "Send Email — Follow-up",
    detail: "Next business day",
    type: "action",
  },
  {
    id: "wait",
    label: "Wait",
    title: "Wait 48h",
    detail: "If no reply",
    type: "wait",
  },
  {
    id: "booking",
    label: "Action",
    title: "Send Booking Link",
    detail: "Calendar invite prompt",
    type: "action",
  },
  {
    id: "end",
    label: "End / Branch",
    title: "Tag & Move Stage",
    detail: "Based on response",
    type: "end",
  },
];

const typeStyles: Record<string, string> = {
  trigger: "border-l-2 border-l-blue-400 bg-blue-50/60",
  condition: "border-l-2 border-l-amber-400 bg-amber-50/60",
  action: "border-l-2 border-l-ink-900 bg-white",
  wait: "border-l-2 border-l-gray-300 bg-gray-50",
  end: "border-l-2 border-l-green-400 bg-green-50/60",
};

const labelColors: Record<string, string> = {
  trigger: "text-blue-600",
  condition: "text-amber-600",
  action: "text-ink-900",
  wait: "text-gray-500",
  end: "text-green-600",
};

export function WorkflowVisual() {
  return (
    <section
      className="section-md bg-white border-b border-gray-100"
      aria-labelledby="workflow-heading"
    >
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: copy */}
          <div>
            <span className="eyebrow mb-3 block w-fit">Automation</span>
            <h2 id="workflow-heading" className="text-headline mb-4">
              Automation that runs your follow-up process reliably.
            </h2>
            <p className="text-body text-gray-500 mb-6">
              Every workflow is built around your specific lead flow — triggers,
              conditions, timing, and actions configured to match how your
              business handles new leads, appointments, and follow-up.
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                "Lead follow-up within minutes, not days",
                "Conditional routing based on source and response",
                "Multi-channel sequences across SMS and email",
                "Appointment booking integrated into the flow",
                "Stage updates and tagging automated",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-gray-500"
                >
                  <svg
                    aria-hidden="true"
                    className="w-3.5 h-3.5 mt-0.5 shrink-0 text-ink-900"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path
                      d="M1.75 7l4.5 4.5 6-8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: workflow diagram */}
          <div
            role="img"
            aria-label="Fictional automation workflow diagram showing lead follow-up steps"
            className="relative"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
              {/* Toolbar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-200 bg-white">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-xs font-semibold text-ink-900">
                  Lead Follow-up Workflow
                </span>
                <span className="ml-auto text-[10px] text-green-600 font-medium">
                  Active
                </span>
              </div>

              {/* Nodes */}
              <div className="p-4 flex flex-col gap-0">
                {WORKFLOW_STEPS.map((step, index) => (
                  <div key={step.id}>
                    {/* Node */}
                    <div
                      className={`rounded-md border border-gray-200 p-3 flex items-center gap-3 ${typeStyles[step.type]}`}
                    >
                      {/* Label badge */}
                      <span
                        className={`text-[9px] font-semibold uppercase tracking-wider shrink-0 ${labelColors[step.type]}`}
                      >
                        {step.label}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-ink-900 leading-tight">
                          {step.title}
                        </p>
                        <p className="text-[10px] text-gray-400 mt-0.5">
                          {step.detail}
                        </p>
                      </div>
                    </div>

                    {/* Connector */}
                    {index < WORKFLOW_STEPS.length - 1 && (
                      <div className="flex items-center justify-start ml-6 py-0.5">
                        <div className="w-px h-4 bg-gray-300" aria-hidden="true" />
                        <svg
                          aria-hidden="true"
                          className="text-gray-300 -ml-[4.5px] mt-auto"
                          width="9"
                          height="5"
                          viewBox="0 0 9 5"
                          fill="currentColor"
                        >
                          <path d="M4.5 5L0 0h9z" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-2 text-caption text-center text-gray-400">
              Fictional demonstration — illustrative of a typical workflow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
