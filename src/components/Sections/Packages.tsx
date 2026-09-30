"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PackageCard } from "../UI/PackageCard";
import { PackageDetailsModal } from "../UI/PackageDetailsModal";
import { extendedPackages, ExtendedPackage } from "@/data/extendedPackages";

interface PackagesProps {
  onSelectPackage: (pkgId: string) => void;
  noPadding?: boolean;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage, noPadding = false }) => {
  const [selectedPkgForModal, setSelectedPkgForModal] = useState<ExtendedPackage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "Varanasi", "Ayodhya", "Prayagraj", "Ujjain", "Gaya"];

  const filteredPackages = extendedPackages.filter((pkg) => {
    if (activeCategory === "All") return true;
    return pkg.destinations.some((d) =>
      d.toLowerCase().includes(activeCategory.toLowerCase())
    );
  });

  useEffect(() => {
    setMounted(true);
    const handleFilterEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        handleCategoryChange(customEvent.detail);
      }
    };
    window.addEventListener("filter-package-category", handleFilterEvent);
    return () => window.removeEventListener("filter-package-category", handleFilterEvent);
  }, []);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setScrollProgress(0);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        const progress = Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100));
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    }
  };

  return (
    <section id="packages" className={`${noPadding ? "py-12 md:py-16" : "py-20 md:py-28"} bg-transparent relative overflow-hidden`}>
      
      {/* Background Saffron/Amber glow blur */}
      {mounted && (
        <>
          <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full filter blur-[120px] pointer-events-none z-0" />
          <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent-orange/10 rounded-full filter blur-[120px] pointer-events-none z-0" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <span className="text-xs uppercase font-extrabold text-amber-400 bg-amber-500/10 backdrop-blur-xl border border-amber-400/30 px-4 py-1.5 rounded-full inline-block mb-3.5 tracking-wider select-none shadow-[0_0_12px_rgba(245,158,11,0.2)]">
            ✨ SACRED EXPERIENCES
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight leading-tight">
            Explore Our Most Popular Spiritual Tour Packages
          </h2>
          <p className="text-sm md:text-base text-slate-300 mt-4 leading-relaxed max-w-3xl mx-auto">
            Choose from carefully designed pilgrimage tours covering India's holiest destinations with hotels, private transport, sightseeing, and expert assistance.
          </p>
        </div>

        {/* Destination Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2 rounded-full font-display text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white border border-amber-300/40 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "bg-white/[0.07] backdrop-blur-2xl text-slate-300 border border-white/15 hover:bg-white/[0.12] hover:text-white"
              }`}
              style={{
                boxShadow: activeCategory === cat 
                  ? "0 4px 14px -2px rgba(234, 88, 12, 0.4), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)"
                  : "0 4px 16px rgba(0,0,0,0.2), inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tour Packages Carousel on Mobile / Grid on Desktop */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto pb-4 pt-2 -mx-4 px-4 snap-x snap-mandatory gap-3.5 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 md:gap-8 no-scrollbar"
        >
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="w-[74vw] max-w-[295px] shrink-0 snap-start sm:w-auto sm:max-w-none sm:shrink">
              <PackageCard 
                pkg={pkg} 
                onSelect={onSelectPackage} 
                onViewDetails={(p) => setSelectedPkgForModal(p)} 
              />
            </div>
          ))}
        </div>

        {/* Mobile Interactive Sliding Bar */}
        {filteredPackages.length > 1 && (
          <div className="flex sm:hidden justify-center items-center mt-3">
            <div className="w-36 h-1.5 bg-slate-200/90 rounded-full overflow-hidden relative">
              <div 
                className="h-full bg-gradient-to-r from-accent-orange to-amber-500 rounded-full transition-all duration-150 ease-out"
                style={{ 
                  width: "35%", 
                  transform: `translateX(${(scrollProgress / 100) * 185}%)` 
                }}
              />
            </div>
          </div>
        )}

        {/* Pricing Footnote */}
        <p className="text-[10px] md:text-xs text-slate-400 text-center mt-8 md:mt-12 leading-relaxed select-none">
          *Prices shown are starting rates per person. Stated price may vary depending on hotel availability, season, and group sizes. GST (5%) & monument entry tickets are extra.
        </p>

      </div>

      {/* React Portal Package Details Modal Overlay */}
      <PackageDetailsModal
        isOpen={selectedPkgForModal !== null}
        pkg={selectedPkgForModal}
        onClose={() => setSelectedPkgForModal(null)}
        onSelectPackage={onSelectPackage}
      />

    </section>
  );
};
