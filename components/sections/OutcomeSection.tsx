import { ghlOutcome } from "@/lib/content/ghl-setup";

export function OutcomeSection() {
  const { heading, before, after } = ghlOutcome;

  return (
    <section
      className="section-md bg-white border-b border-gray-100"
      aria-labelledby="outcome-heading"
    >
      <div className="container-page">
        <div className="mb-10 text-center">
          <span className="eyebrow mb-3 block w-fit mx-auto">The Transformation</span>
          <h2 id="outcome-heading" className="text-headline max-w-xl mx-auto">
            {heading}
          </h2>
        </div>

        {/* Before / After comparison */}
        <div className="grid md:grid-cols-2 gap-0 border border-gray-200 rounded-xl overflow-hidden">
          {/* Before */}
          <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50">
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border-2 border-gray-300 shrink-0">
                <span className="w-2 h-2 rounded-full bg-gray-300" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Before implementation
              </span>
            </div>
            <ul className="flex flex-col gap-3">
              {before.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3 text-sm text-gray-500"
                >
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 mt-0.5 shrink-0 text-gray-300"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path
                      d="M4 12L12 4M4 4l8 8"
                      strokeLinecap="round"
                    />
                  </svg>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="p-6 md:p-8 bg-ink-900">
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-white"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M1 6l4 4 6-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                After implementation
              </span>
            </div>
            <ul className="flex flex-col gap-3">
              {after.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3 text-sm text-white/80"
                >
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 mt-0.5 shrink-0 text-white/50"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                  >
                    <path
                      d="M2 8l5 5 7-9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
