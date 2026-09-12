import { ghlConfigCategories } from "@/lib/content/ghl-setup";

export function ConfigSection() {
  return (
    <section
      className="section-md bg-white border-b border-gray-100"
      aria-labelledby="config-heading"
      id="configuration"
    >
      <div className="container-page">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="eyebrow mb-3 block w-fit mx-auto">What Gets Built</span>
          <h2 id="config-heading" className="text-headline">
            Every system configured, tested, and documented.
          </h2>
          <p className="text-body text-gray-500 mt-3 mx-auto">
            The implementation covers all core GoHighLevel systems — not
            surface-level settings, but the full technical and operational
            configuration your business needs to run.
          </p>
        </div>

        {/* Dense grid of categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
          {ghlConfigCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white p-6"
            >
              <h3 className="text-sm font-bold text-ink-900 mb-4 pb-3 border-b border-gray-100">
                {category.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-gray-500"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gray-400"
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
          ))}
        </div>
      </div>
    </section>
  );
}
