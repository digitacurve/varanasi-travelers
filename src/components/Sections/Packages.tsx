"use client";

import React, { useState } from "react";
import { PackageCard } from "../UI/PackageCard";
import { tourPackages } from "@/data/content";

interface PackagesProps {
  onSelectPackage: (pkgId: string) => void;
}

type FilterType = "All" | "Varanasi" | "Ayodhya" | "Prayagraj" | "Ujjain";

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filterTabs: FilterType[] = ["All", "Varanasi", "Ayodhya", "Prayagraj", "Ujjain"];

  const filteredPackages = tourPackages.filter((pkg) => {
    if (activeFilter === "All") return true;
    return pkg.destinations.includes(activeFilter);
  });

  return (
    <section id="packages" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold text-accent-orange bg-orange-50 px-4 py-1.5 rounded-full inline-block mb-3 tracking-widest">
            Spiritual Circuits
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-dark-slate tracking-tight">
            Curated Pilgrimage Package Experiences
          </h2>
          <p className="text-sm md:text-base text-slate-500 mt-4 leading-relaxed">
            Choose from our pre-planned premium itineraries covering Varanasi, Ayodhya, Prayagraj, and Ujjain. Every tour is fully customizable to your specific requirements.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 md:mb-16">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-6 py-2.5 rounded-full font-display text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeFilter === tab
                  ? "bg-accent-orange text-white shadow-md shadow-orange-500/25"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-dark-slate border border-slate-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} onSelect={onSelectPackage} />
          ))}
        </div>

        {/* Indicative Pricing Note */}
        <p className="text-[10px] md:text-xs text-slate-400 text-center mt-12 leading-relaxed">
          *Indicative pricing per person based on double occupancy. Actual prices may vary depending on travel season, hotel category selected, and total group size. GST and monument fees extra.
        </p>

      </div>
    </section>
  );
};
