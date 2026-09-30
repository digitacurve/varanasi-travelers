"use client";

import React from "react";
import { Star, ExternalLink, MessageSquarePlus, Building2 } from "lucide-react";

export const GoogleReviewCTA: React.FC = () => {
  return (
    <section id="google-review" className="py-8 md:py-14 bg-transparent relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <div 
          className="bg-white/80 backdrop-blur-2xl rounded-3xl border border-white/90 p-6 md:p-10 text-center transition-all duration-300"
          style={{
            boxShadow: "0 20px 50px -10px rgba(234, 88, 12, 0.08), 0 4px 20px -2px rgba(15, 23, 42, 0.04), inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 1), inset 0 -1px 1px 0 rgba(255, 255, 255, 0.5)"
          }}
        >
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-amber-50/90 backdrop-blur-md border border-amber-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-800 mb-5 shadow-xs">
            <span className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} className="fill-amber-400 text-amber-400 drop-shadow-xs" />
              ))}
            </span>
            <span>Google Business Profile</span>
          </div>

          {/* Section Heading */}
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
            Share Your Experience on Google
          </h2>

          {/* Supporting Text */}
          <p className="text-sm md:text-base text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            Have you travelled with Varanasi Travelers? Share your experience with our team on Google. Your feedback helps other travellers understand our tour and travel services.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJUyzcz14xjjkR-lXVYrGuIfw"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full px-7 py-3.5 text-sm md:text-base bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 text-white shadow-[0_6px_20px_rgba(234,88,12,0.35)] hover:shadow-[0_8px_25px_rgba(234,88,12,0.5)] transition-all duration-300 active:scale-[0.98] border border-amber-300/40"
              style={{
                boxShadow: "0 6px 20px rgba(234, 88, 12, 0.35), inset 0 1px 1px 0 rgba(255, 255, 255, 0.4)"
              }}
            >
              <MessageSquarePlus size={18} />
              <span>Write a Google Review</span>
              <ExternalLink size={15} className="opacity-80" />
            </a>

            <a
              href="https://www.google.com/search?q=baba+vishwanath+traders+varanasi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full px-7 py-3.5 text-sm md:text-base bg-[#0F172A] text-white shadow-[0_4px_16px_rgba(15,23,42,0.2)] hover:bg-slate-800 transition-all duration-300 active:scale-[0.98] border border-slate-700/60"
              style={{
                boxShadow: "0 4px 16px rgba(15, 23, 42, 0.2), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)"
              }}
            >
              <Building2 size={18} />
              <span>View Business Profile</span>
              <ExternalLink size={15} className="opacity-80" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
