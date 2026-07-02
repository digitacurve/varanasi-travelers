"use client";

import React from "react";
import Image from "next/image";
import { Clock, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { Package } from "@/data/content";

interface PackageCardProps {
  pkg: Package;
  onSelect: (pkgId: string) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, onSelect }) => {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(pkg.startingPrice);

  const handleGetQuote = () => {
    onSelect(pkg.id);
    const formElement = document.getElementById("inquiry-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookNow = () => {
    const message = encodeURIComponent(
      `Hello! I would like to book the "${pkg.name}" (${pkg.duration}). Please send me the itinerary.`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] transition-all duration-500 flex flex-col h-full transform hover:-translate-y-2">
      {/* Image and Tag */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-100">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        
        {pkg.tag && (
          <span className="absolute top-4 left-4 bg-accent-orange text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md font-display uppercase tracking-wider">
            {pkg.tag}
          </span>
        )}

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-1 bg-slate-950/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium">
            <Clock size={12} className="text-accent-orange" />
            <span>{pkg.duration}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        {/* Destination Badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {pkg.destinations.map((dest, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 text-[10px] uppercase font-semibold tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded"
            >
              <MapPin size={10} className="text-accent-orange" />
              {dest}
            </span>
          ))}
        </div>

        {/* Package Title */}
        <h4 className="text-lg md:text-xl font-display font-bold text-dark-slate mb-3 group-hover:text-accent-orange transition-colors line-clamp-2">
          {pkg.name}
        </h4>

        {/* Short description */}
        <p className="text-xs md:text-sm text-slate-500 mb-5 leading-relaxed line-clamp-3">
          {pkg.description}
        </p>

        {/* Highlights */}
        <div className="space-y-2 mb-6 flex-1">
          <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-2">
            Tour Highlights:
          </span>
          <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
            {pkg.highlights.slice(0, 4).map((high, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-orange shrink-0 mt-1.5" />
                <span className="line-clamp-2 leading-relaxed">{high}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price & Actions */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4 mt-auto">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">
              Starting From
            </span>
            <span className="text-2xl font-display font-extrabold text-dark-slate">
              ₹{formattedPrice}
              <span className="text-xs text-slate-400 font-normal ml-0.5">*pp</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleGetQuote}
              className="text-xs"
            >
              Get Quote
            </Button>
            <Button
              variant="solid"
              size="sm"
              onClick={handleBookNow}
              className="text-xs"
              icon={<ArrowRight size={12} />}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
