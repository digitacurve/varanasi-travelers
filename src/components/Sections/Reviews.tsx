"use client";

import React from "react";
import Image from "next/image";
import { Star, CheckCircle, ShieldAlert } from "lucide-react";
import { reviews } from "@/data/content";

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-14 md:py-20 bg-transparent relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-orange/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-50 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold text-accent-orange bg-orange-50 px-4 py-1.5 rounded-full inline-block mb-3 tracking-widest">
            Pilgrim Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-dark-slate tracking-tight">
            Loved by Thousands of Families
          </h2>
          <p className="text-sm md:text-base text-slate-500 mt-4 leading-relaxed">
            Read stories of devotion and satisfaction from families who experienced their pilgrimage with our high-end assistance and sanitized private transit plans.
          </p>

          {/* Google aggregate score mock */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 mt-8 bg-white border border-slate-100 px-6 py-3 rounded-full shadow-sm text-sm">
            <span className="font-bold text-dark-slate flex items-center gap-1.5">
              Google Rating
            </span>
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-current" />
              ))}
            </div>
            <span className="text-dark-slate font-extrabold">4.9 / 5.0</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500">1,248 verified reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.02)] flex flex-col justify-between"
            >
              <div>
                {/* Stars and Verification */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                    <CheckCircle size={10} className="fill-green-600/10" />
                    Verified Pilgrim
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={rev.avatar}
                    alt={rev.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-display font-bold text-dark-slate leading-none">
                    {rev.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 block mt-1">
                    {rev.location} • {rev.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
