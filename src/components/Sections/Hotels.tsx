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
    <section id="hotels" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold text-accent-orange bg-orange-50 px-4 py-1.5 rounded-full inline-block mb-4 tracking-widest">
            Premium Accommodation
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-dark-slate tracking-tight uppercase">
            Our Trusted Hotel Partners
          </h2>
          <p className="text-sm md:text-base text-slate-500 mt-4 leading-relaxed max-w-2xl mx-auto">
            We partner with carefully selected hotels across Ayodhya, Varanasi, Prayagraj, and Ujjain to provide clean rooms, comfortable stays, vegetarian dining options, and convenient access to major temples. Hotel allocation depends on your selected package and availability.
          </p>
        </div>

        {/* Elegant Responsive Wordmarks Row */}
        <div className="border-y border-slate-100 py-14 md:py-16 mt-8 flex flex-wrap items-center justify-center gap-y-12 gap-x-16 md:gap-x-24 lg:gap-x-28">
          {partners.map((partner, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-500 ease-out hover:scale-[1.04]"
            >
              {/* Hotel Wordmark Logo */}
              <span
                style={{
                  color: hoveredIndex === index ? partner.color : "#94a3b8", // Slate-400 color
                }}
                className={`transition-colors duration-500 ease-in-out select-none ${partner.style}`}
              >
                {partner.name}
              </span>
              
              {/* Tagline */}
              <span
                style={{
                  color: hoveredIndex === index ? "#64748b" : "#cbd5e1", // Slate-500 vs Slate-300
                }}
                className="text-[9px] tracking-[0.25em] transition-colors duration-500 uppercase font-sans font-semibold mt-2.5"
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

