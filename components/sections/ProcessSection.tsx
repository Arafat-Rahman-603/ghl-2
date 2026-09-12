import { ghlProcess } from "@/lib/content/ghl-setup";

export function ProcessSection() {
  return (
    <section
      className="section-md bg-surface border-b border-gray-100"
      aria-labelledby="process-heading"
      id="process"
    >
      <div className="container-page">
        <div className="grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-16">
          {/* Left: heading sticky on scroll (lg) */}
          <div className="lg:sticky lg:top-20 lg:self-start">
            <span className="eyebrow mb-3 block">Implementation Method</span>
            <h2 id="process-heading" className="text-headline mb-4">
              A structured path from setup to launch.
            </h2>
            <p className="text-body text-gray-500">
              Every implementation follows the same disciplined process — scoped
              to your business specifics, executed systematically, and
              tested before handover.
            </p>
          </div>

          {/* Right: steps */}
          <div className="flex flex-col gap-0">
            {ghlProcess.map((step, index) => (
              <div
                key={step.number}
                className={`relative pl-10 pb-10 ${
                  index < ghlProcess.length - 1
                    ? "border-l border-gray-200 ml-3"
                    : ""
                }`}
              >
                {/* Step dot */}
                <div
                  className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="w-2 h-2 rounded-full bg-ink-900" />
                </div>

                {/* Step number */}
                <p className="text-xs font-medium tabular-nums text-gray-400 mb-2 select-none">
                  {step.number}
                </p>

                {/* Step content */}
                <h3 className="text-sm font-bold text-ink-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-body text-gray-500 mb-3">
                  {step.description}
                </p>

                {/* Outcome */}
                <div className="inline-flex items-start gap-2 text-xs text-gray-500 bg-white border border-gray-200 rounded-md px-3 py-2">
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
                  <span>{step.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
