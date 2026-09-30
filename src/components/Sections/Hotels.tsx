"use client";
import React, { useState } from "react";

interface HotelPartner {
  name: string;
  tagline: string;
  style: string;
  color: string;
}

export const Hotels: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const partners: HotelPartner[] = [
    {
      name: "BrijRama",
      tagline: "Heritage Palace • Varanasi",
      style: "font-serif tracking-[0.22em] text-xl md:text-2xl font-light italic",
      color: "#C5A059", // Luxury Muted Gold
    },
    {
      name: "TAJ GANGES",
      tagline: "Varanasi",
      style: "font-serif tracking-[0.18em] text-lg md:text-xl font-semibold",
      color: "#8C7853", // Rich Bronze Gold
    },
    {
      name: "RAMADA",
      tagline: "by wyndham",
      style: "font-sans tracking-[0.15em] text-xl md:text-2xl font-black uppercase",
      color: "#DA291C", // Ramada Corporate Red
    },
    {
      name: "park inn",
      tagline: "by radisson",
      style: "font-sans tracking-wide text-lg md:text-xl font-bold lowercase",
      color: "#005A9C", // Park Inn Blue
    },
    {
      name: "THE RAMAYANA",
      tagline: "Hotel • Ayodhya",
      style: "font-serif tracking-[0.2em] text-base md:text-lg font-medium",
      color: "#FF6F06", // Brand Accent Orange (#FF6F06 is standard Orange)
    },
  ];

  return (
    <section id="hotels" className="py-8 md:py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
          <span className="text-[10px] sm:text-xs uppercase font-bold text-amber-400 bg-amber-500/10 backdrop-blur-md px-3.5 py-1 rounded-full inline-block mb-2 md:mb-4 tracking-widest border border-amber-400/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
            Premium Accommodation
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
            Our Trusted Hotel Partners
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mt-2 md:mt-4 leading-relaxed max-w-2xl mx-auto">
            We partner with carefully selected hotels across Ayodhya, Varanasi, Prayagraj, and Ujjain to provide clean rooms, comfortable stays, vegetarian dining options, and convenient access to major temples. Hotel allocation depends on your selected package and availability.
          </p>
        </div>

        {/* Elegant Responsive Wordmarks Row in Frosted Glass Panel */}
        <div 
          className="bg-white/[0.07] backdrop-blur-3xl border border-white/15 rounded-3xl py-8 md:py-12 px-6 md:px-12 mt-4 md:mt-8 flex flex-wrap items-center justify-center gap-y-8 md:gap-y-12 gap-x-10 sm:gap-x-16 md:gap-x-24 lg:gap-x-28"
          style={{
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 1px 0 rgba(255, 255, 255, 0.25)"
          }}
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-300 ease-out"
            >
              {/* Hotel Wordmark Logo */}
              <span
                style={{
                  color: hoveredIndex === index ? partner.color : "#cbd5e1",
                }}
                className={`transition-colors duration-300 ease-in-out select-none ${partner.style}`}
              >
                {partner.name}
              </span>
              
              {/* Tagline */}
              <span
                style={{
                  color: hoveredIndex === index ? "#f8fafc" : "#94a3b8",
                }}
                className="text-[8px] sm:text-[9px] tracking-[0.25em] transition-colors duration-300 uppercase font-sans font-semibold mt-1.5 md:mt-2.5"
              >
                {partner.tagline}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

