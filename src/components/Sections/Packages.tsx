"use client";

import React, { useState, useEffect } from "react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="packages" className={`${noPadding ? "py-12 md:py-16" : "py-20 md:py-28"} ${noPadding ? "" : "bg-gradient-to-b from-white via-orange-50/10 to-white"} relative overflow-hidden`}>
      
      {/* Background Saffron/Amber glow blur */}
      {mounted && (
        <>
          <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full filter blur-[120px] pointer-events-none z-0" />
          <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent-orange/5 rounded-full filter blur-[120px] pointer-events-none z-0" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold text-accent-orange bg-orange-50 border border-orange-100/50 px-4 py-1.5 rounded-full inline-block mb-3.5 tracking-wider select-none shadow-sm">
            ✨ SACRED EXPERIENCES
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
            Explore Our Most Popular Spiritual Tour Packages
          </h2>
          <p className="text-sm md:text-base text-slate-500 mt-4 leading-relaxed max-w-3xl mx-auto">
            Choose from carefully designed pilgrimage tours covering India's holiest destinations with hotels, private transport, sightseeing, and expert assistance.
          </p>
        </div>

        {/* Brand-New Tour Packages Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {extendedPackages.map((pkg) => (
            <div key={pkg.id} className="w-full max-w-md">
              <PackageCard 
                pkg={pkg} 
                onSelect={onSelectPackage} 
                onViewDetails={(p) => setSelectedPkgForModal(p)} 
              />
            </div>
          ))}
        </div>

        {/* Pricing Footnote */}
        <p className="text-[10px] md:text-xs text-slate-400 text-center mt-12 leading-relaxed select-none">
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
