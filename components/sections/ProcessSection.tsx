import { ghlProcess } from "@/lib/content/ghl-setup";

export function ProcessSection() {
  return (
    <section
      className="py-20 md:py-32"
      style={{ backgroundColor: "#f5f4f0" }}
      aria-labelledby="process-heading"
      id="process"
    >
      <div className="container-page max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-6 block">
            Our Process
          </span>
          <h2
            id="process-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 tracking-tight"
          >
            How we work with you
          </h2>
        </div>

        {/* Process List */}
        <div className="border-t border-gray-200">
          {ghlProcess.map((step) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row py-10 md:py-12 border-b border-gray-200"
            >
              {/* Number */}
              <div className="w-24 shrink-0 mb-4 md:mb-0">
                <span className="text-2xl md:text-3xl font-bold text-ink-900">
                  {step.number}
                </span>
              </div>
              
              {/* Title */}
              <div className="w-full md:w-1/3 shrink-0 mb-4 md:mb-0 pr-6">
                <h3 className="text-lg md:text-xl font-bold text-ink-900">
                  {step.title}
                </h3>
              </div>
              
              {/* Description */}
              <div className="w-full md:flex-1">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
