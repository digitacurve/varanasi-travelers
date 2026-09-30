"use client";

import React from "react";
import Image from "next/image";
import { Users, Briefcase, Snowflake, CheckCircle } from "lucide-react";
import { Button } from "../UI/Button";
import { vehicles } from "@/data/content";

export const Transport: React.FC = () => {
  const handleVehicleSelect = (vehicleName: string) => {
    const formElement = document.getElementById("inquiry-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="transport" className="py-6 md:py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
          <span className="text-[10px] sm:text-xs uppercase font-bold text-accent-orange bg-orange-50 px-3.5 py-1 rounded-full inline-block mb-2 tracking-widest border border-orange-100/60 shadow-sm">
            Chauffeur-Driven Fleet
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-dark-slate tracking-tight">
            Premium AC Vehicle Fleet
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-500 mt-2 md:mt-4 leading-relaxed">
            Travel smoothly between spiritual corridors. We maintain a private fleet of pristine, fully air-conditioned executive vehicles for safe highway and city travel.
          </p>
        </div>

        {/* Vehicles Grid / Mobile Swipeable Carousel */}
        <div className="flex overflow-x-auto pb-4 pt-1 -mx-4 px-4 snap-x snap-mandatory gap-3 sm:gap-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-8" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="w-[82vw] max-w-[320px] shrink-0 snap-center lg:w-auto lg:max-w-none lg:shrink bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.02)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Image & Capacity Metrics */}
              <div className="relative h-44 sm:h-50 md:h-56 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Float Badge: AC standard */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-[#1e293b]/70 backdrop-blur-md text-white text-[9px] md:text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 md:px-3 md:py-1.5 rounded-full flex items-center gap-1 shadow-md">
                  <Snowflake size={10} className="text-cyan-400 animate-spin-slow" />
                  <span>Dual AC Zone</span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-1">
                {/* Vehicle specifications */}
                <div className="flex gap-3 md:gap-4 text-[11px] md:text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2 md:mb-3">
                  <span className="flex items-center gap-1">
                    <Users size={13} className="text-accent-orange" />
                    <span>{vehicle.capacity}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase size={13} className="text-accent-orange" />
                    <span>Luggage Carrier</span>
                  </span>
                </div>

                {/* Vehicle Name */}
                <h4 className="text-base sm:text-lg md:text-xl font-display font-bold text-dark-slate mb-0.5 md:mb-1">
                  {vehicle.name}
                </h4>
                <span className="text-[11px] md:text-xs text-slate-400 font-medium italic mb-2.5 md:mb-4 block">
                  {vehicle.type}
                </span>

                {/* Description */}
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-4 md:mb-6 flex-1 line-clamp-3 md:line-clamp-none">
                  {vehicle.description}
                </p>

                {/* Key features checklist */}
                <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6 pt-3 md:pt-4 border-t border-slate-50">
                  {vehicle.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] md:text-xs text-slate-600 font-medium">
                      <CheckCircle size={11} className="text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action button */}
                <Button
                  variant="outline"
                  fullWidth
                  size="sm"
                  onClick={() => handleVehicleSelect(vehicle.name)}
                >
                  Select vehicle class
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
