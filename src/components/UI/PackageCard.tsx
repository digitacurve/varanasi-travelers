"use client";

import React from "react";
import Image from "next/image";
import { Clock, MapPin, Building2, Car, Compass, Headphones, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";
import { ExtendedPackage } from "@/data/extendedPackages";

interface PackageCardProps {
  pkg: ExtendedPackage;
  onSelect: (pkgId: string) => void;
  onViewDetails: (pkg: ExtendedPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, onSelect, onViewDetails }) => {
  const formattedPrice = pkg.startingPrice
    ? new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(pkg.startingPrice)
    : "";

  const handleGetQuote = () => {
    if (pkg.isComingSoon) return;
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "Package CTA Click",
        packageId: pkg.id,
        packageName: pkg.name,
        ctaType: "Get Full Itinerary"
      });
    }
    window.location.href = `/packages/${pkg.id.replace("-tour-package", "")}`;
  };

  // Define tag styling map
  const tagStyles = {
    "Best Seller": "from-red-500 via-accent-orange to-orange-600 shadow-red-500/20",
    "Most Popular": "from-amber-400 via-amber-500 to-orange-500 shadow-amber-500/20",
    "Premium": "from-amber-600 via-yellow-600 to-amber-800 shadow-yellow-600/20",
    "Family Favourite": "from-teal-500 via-emerald-500 to-green-600 shadow-teal-500/20",
    "New": "from-blue-500 via-indigo-500 to-violet-600 shadow-indigo-500/20"
  };

  const tagEmoji = {
    "Best Seller": "🔥",
    "Most Popular": "⭐",
    "Premium": "💎",
    "Family Favourite": "👨👩👧",
    "New": "✨"
  };

  return (
    <div className="group bg-[#FFFDF9] rounded-[2.5rem] overflow-hidden border border-orange-100/50 shadow-[0_8px_30px_rgba(249,115,22,0.02)] hover:shadow-[0_24px_50px_rgba(249,115,22,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative">
      {/* Image Container with Hover Zoom */}
      <div className="relative h-56 md:h-60 w-full overflow-hidden bg-orange-50">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

        {/* Floating Custom Badge */}
        {pkg.tag && (
          <span className={`absolute top-5 left-5 bg-gradient-to-r ${tagStyles[pkg.tag] || "from-amber-500 to-orange-500"} text-white text-[10px] md:text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 select-none tracking-wider uppercase`}>
            <span>{tagEmoji[pkg.tag]}</span>
            <span>{pkg.tag}</span>
          </span>
        )}

        {/* Floating Duration Indicator */}
        <div className="absolute bottom-5 right-5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-white text-xs font-semibold flex items-center gap-1.5 select-none shadow-sm">
          <Clock size={13} className="text-amber-400" />
          <span>{pkg.duration}</span>
        </div>
      </div>

      {/* Card Content body */}
      <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
        
        {/* Destination tags */}
        <div className="flex flex-wrap gap-1.5 mb-3 select-none">
          {pkg.destinations.map((dest, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 text-[9px] md:text-[10px] uppercase font-black tracking-widest text-slate-600 bg-orange-50 border border-orange-100/50 px-2.5 py-0.5 rounded-md"
            >
              <MapPin size={10} className="text-accent-orange" />
              {dest}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-display font-black text-slate-900 group-hover:text-accent-orange transition-colors duration-300 line-clamp-1 mb-1 tracking-tight">
          {pkg.name}
        </h3>

        {/* One-Line Subtitle */}
        <p className="text-xs text-slate-500 font-semibold italic mb-5 line-clamp-1">
          {pkg.subtitle}
        </p>

        {/* Four Quick Service Icons */}
        <div className="grid grid-cols-2 gap-3 mb-5 border-y border-orange-100/30 py-3.5 bg-orange-50/20 rounded-2xl px-4 select-none">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <Car size={14} className="text-accent-orange shrink-0" />
            <span className="truncate">AC Transfer</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <Building2 size={14} className="text-accent-orange shrink-0" />
            <span className="truncate">Best Hotel</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <Compass size={14} className="text-accent-orange shrink-0" />
            <span className="truncate">Sightseeing</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <Headphones size={14} className="text-accent-orange shrink-0" />
            <span className="truncate">24x7 Support</span>
          </div>
        </div>

        {/* Lock Price Box */}
        {!pkg.isComingSoon && pkg.lockPrice && (
          <div className="border border-dashed border-orange-300 bg-orange-50/50 px-4 py-2.5 rounded-xl text-center text-[9px] font-black text-slate-800 tracking-wide mb-5 flex items-center justify-center gap-1.5 select-none">
            <span>🔒</span>
            <span>LOCK PRICE FOR ₹{pkg.lockPrice}</span>
          </div>
        )}
        {pkg.isComingSoon && (
          <div className="border border-dashed border-slate-200 bg-slate-50 px-4 py-2.5 rounded-xl text-center text-[9px] font-black text-slate-400 tracking-wide mb-5 flex items-center justify-center gap-1.5 select-none">
            <span>📅</span>
            <span>LAUNCH RATES RELEASING SOON</span>
          </div>
        )}

        {/* Pricing Segment */}
        <div className="mb-5 select-none">
          <div className="flex flex-col text-left">
            {pkg.isComingSoon ? (
              <div className="py-2.5">
                <span className="text-xl font-display font-black text-slate-400 uppercase tracking-wide">
                  Coming Soon
                </span>
                <span className="text-[9px] text-slate-400 mt-1 font-bold block">
                  Launch rates and details are currently in compilation.
                </span>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 line-through font-semibold">
                    ₹{new Intl.NumberFormat("en-IN").format(pkg.originalPrice || 0)}
                  </span>
                  <span className="text-[9px] font-black text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md uppercase tracking-wider">
                    Save {Math.round((1 - (pkg.startingPrice || 0)/(pkg.originalPrice || 1))*100)}%
                  </span>
                </div>
                <span className="text-3xl font-display font-black text-slate-900 tracking-tight mt-0.5">
                  ₹{formattedPrice}
                  <span className="text-xs text-slate-400 font-bold ml-1 uppercase">/ person</span>
                </span>
                <span className="text-[9px] text-slate-400 mt-1.5 font-bold block leading-relaxed">
                  *Excluding GST (5%) & monument entries.
                </span>
              </>
            )}
          </div>
        </div>

        {/* Included highlights list */}
        <div className="mb-6 flex-grow text-left">
          <ul className="space-y-2 text-xs text-slate-600 font-bold select-none">
            {pkg.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button and view details triggers */}
        <div className="space-y-2.5">
          {pkg.isComingSoon ? (
            <Button
              variant="outline"
              fullWidth
              disabled
              className="border border-slate-200 text-slate-400 bg-slate-50 font-extrabold py-4 rounded-xl select-none cursor-not-allowed text-xs flex items-center justify-center"
            >
              Coming Soon
            </Button>
          ) : (
            <Button
              variant="solid"
              fullWidth
              onClick={handleGetQuote}
              className="bg-gradient-to-r from-amber-500 via-accent-orange to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold shadow-[0_4px_14px_rgba(249,115,22,0.2)] hover:shadow-[0_8px_20px_rgba(249,115,22,0.35)] py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.01] text-xs flex items-center justify-center"
            >
              Get Full Itinerary
            </Button>
          )}
          
          {!pkg.isComingSoon && (
            <button
              onClick={handleGetQuote}
              className="w-full text-center text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors py-1 hover:underline cursor-pointer select-none"
            >
              View Full Itinerary & Details
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
