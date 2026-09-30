"use client";

import React from "react";
import { Accordion } from "../UI/Accordion";
import { faqs } from "@/data/content";

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-8 md:py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-14">
          <span className="text-[10px] sm:text-xs uppercase font-bold text-amber-400 bg-amber-500/10 backdrop-blur-md px-3.5 py-1 rounded-full inline-block mb-2 tracking-widest border border-amber-400/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mt-2 md:mt-4 leading-relaxed">
            Have questions about temple timings, ritual assistance, custom bookings, or payment methods? Find quick answers compiled from our past pilgrim experiences.
          </p>
        </div>

        {/* Collapsible Accordion Grid */}
        <div className="max-w-4xl mx-auto">
          <Accordion items={faqs} />
        </div>

        {/* Contact Help footer */}
        <div className="text-center mt-6 md:mt-12 text-xs md:text-sm text-slate-300">
          Have more specific questions? Chat directly with an expert advisor.{" "}
          <a
            href="https://wa.me/919288100260"
            className="text-amber-400 hover:text-amber-300 font-bold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>{" "}
          or call{" "}
          <a href="tel:+919288100260" className="text-amber-400 hover:text-amber-300 font-bold hover:underline">
            +91 92881 00260
          </a>
        </div>

      </div>
    </section>
  );
};
