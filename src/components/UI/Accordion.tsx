"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/data/content";

interface AccordionProps {
  items: FAQItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item) => (
        <details
          key={item.id}
          name="faq-accordion"
          className="group border border-slate-100 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden [&_summary]:list-none [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex items-center justify-between p-6 cursor-pointer select-none font-display font-semibold text-dark-slate hover:text-accent-orange transition-colors">
            <span className="text-sm md:text-base pr-4">{item.question}</span>
            <span className="shrink-0 bg-slate-50 group-open:bg-orange-50 text-slate-400 group-open:text-accent-orange p-1.5 rounded-full transition-colors duration-300">
              <ChevronDown
                size={18}
                className="transform transition-transform duration-300 group-open:rotate-180"
              />
            </span>
          </summary>
          <div className="px-6 pb-6 pt-0 text-xs md:text-sm text-slate-500 leading-relaxed border-t border-slate-50 bg-slate-50/20">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
};
