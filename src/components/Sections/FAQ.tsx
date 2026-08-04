"use client";

import React from "react";
import { Accordion } from "../UI/Accordion";
import { faqs } from "@/data/content";

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-14 md:py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold text-accent-orange bg-orange-50 px-4 py-1.5 rounded-full inline-block mb-3 tracking-widest">
            Common Inquiries
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-dark-slate tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-slate-500 mt-4 leading-relaxed">
            Have questions about temple timings, ritual assistance, custom bookings, or payment methods? Find quick answers compiled from our past pilgrim experiences.
          </p>
        </div>

        {/* Collapsible Accordion Grid */}
        <div className="max-w-4xl mx-auto">
          <Accordion items={faqs} />
        </div>

        {/* Contact Help footer */}
        <div className="text-center mt-12 text-xs md:text-sm text-slate-500">
          Have more specific questions? Chat directly with an expert advisor.{" "}
          <a
            href="https://wa.me/919288100260"
            className="text-accent-orange font-bold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>{" "}
          or call{" "}
          <a href="tel:+919288100260" className="text-accent-orange font-bold hover:underline">
            +91 92881 00260
          </a>
        </div>

      </div>
    </section>
  );
};
