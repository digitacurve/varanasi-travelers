"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/data/content";

interface AccordionProps {
  items: FAQItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="max-w-3xl mx-auto space-y-3.5">
      {items.map((item) => (
        <details
          key={item.id}
          name="faq-accordion"
          className="group border border-white/15 bg-white/[0.07] backdrop-blur-3xl rounded-2xl transition-all duration-300 overflow-hidden [&_summary]:list-none [&_summary::-webkit-details-marker]:hidden open:border-amber-400/40 open:bg-white/[0.1]"
          style={{
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)"
          }}
        >
          <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer select-none font-display font-semibold text-white hover:text-amber-300 group-open:text-amber-400 transition-colors">
            <span className="text-sm md:text-base pr-4 leading-snug">{item.question}</span>
            <span className="shrink-0 bg-white/10 group-open:bg-gradient-to-r group-open:from-orange-600 group-open:to-amber-600 text-slate-300 group-open:text-white p-1.5 rounded-full transition-all duration-300 border border-white/20 shadow-sm">
              <ChevronDown
                size={17}
                className="transform transition-transform duration-300 group-open:rotate-180"
              />
            </span>
          </summary>
          <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 text-xs md:text-sm text-slate-200 leading-relaxed border-t border-white/10 bg-white/[0.03]">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
};
