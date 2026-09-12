import { comparisonRows } from "@/lib/content/ghl-setup";

function CheckYes() {
  return (
    <span className="check-yes" aria-label="Yes">
      <svg viewBox="0 0 10 8" fill="none" className="w-2.5 h-2 text-white" stroke="currentColor" strokeWidth="2">
        <path d="M1 4l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function CheckNo() {
  return (
    <span className="check-no" aria-label="No">
      <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="1.75">
        <path d="M3 11L11 3M3 3l8 8" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <CheckYes />;
  if (value === false) return <CheckNo />;
  return <span className="text-xs text-gray-500">{value}</span>;
}

export function ComparisonSection() {
  return (
    <section
      className="section-md bg-white border-b border-gray-100"
      aria-labelledby="comparison-heading"
    >
      <div className="container-page">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="eyebrow mb-3 block w-fit mx-auto">Comparison</span>
          <h2 id="comparison-heading" className="text-headline">
            DIY vs. generic setup vs. professional implementation.
          </h2>
          <p className="text-body text-gray-500 mt-3 mx-auto">
            Every setup approach produces a different outcome. Here&apos;s how they
            compare across the dimensions that matter for business operations.
          </p>
        </div>

        {/* Responsive table wrapper */}
        <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
          <table className="comparison-table" aria-label="Implementation approach comparison">
            <thead>
              <tr>
                <th scope="col" className="w-1/3 sm:w-auto">
                  Feature
                </th>
                <th scope="col">DIY</th>
                <th scope="col">Generic Setup</th>
                <th scope="col" className="col-highlight">
                  Professional Implementation
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature}>
                  <th scope="row" className="text-sm font-medium text-ink-900 text-left">
                    {row.feature}
                  </th>
                  <td>
                    <CellValue value={row.diy} />
                  </td>
                  <td>
                    <CellValue value={row.generic} />
                  </td>
                  <td className="col-highlight">
                    <CellValue value={row.professional} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
