"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/content/types";

interface AccordionProps {
  items: FaqItem[];
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={className} role="list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const id = `accordion-${index}`;
        const panelId = `${id}-panel`;

        return (
          <div key={id} className="accordion-item" role="listitem">
            <h3>
              <button
                id={id}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="accordion-trigger"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <svg
                  aria-hidden="true"
                  className={`accordion-icon ${isOpen ? "open" : ""}`}
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path
                    d="M10 4v12M4 10h12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={id}
              hidden={!isOpen}
              className="accordion-content"
            >
              <div className="accordion-body">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
