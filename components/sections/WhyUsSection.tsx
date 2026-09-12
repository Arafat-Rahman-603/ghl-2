import { ghlWhyUs } from "@/lib/content/ghl-setup";

export function WhyUsSection() {
  return (
    <section
      className="section-md bg-surface border-b border-gray-100"
      aria-labelledby="why-us-heading"
    >
      <div className="container-page">
        <div className="grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-16 items-start">
          {/* Left: heading */}
          <div>
            <span className="eyebrow mb-3 block w-fit">Why Work With Us</span>
            <h2 id="why-us-heading" className="text-headline mb-4">
              Implementation quality that your business can depend on.
            </h2>
            <p className="text-body text-gray-500">
              We don&apos;t configure GoHighLevel to make it look configured. We
              build systems that work reliably from day one and can be understood
              and operated by your team.
            </p>
          </div>

          {/* Right: feature grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {ghlWhyUs.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <div
                  className="w-8 h-8 rounded-md border border-gray-200 bg-white flex items-center justify-center mb-1"
                  aria-hidden="true"
                >
                  <svg
                    className="w-4 h-4 text-ink-900"
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
                </div>
                <h3 className="text-sm font-bold text-ink-900">{item.title}</h3>
                <p className="text-body text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
