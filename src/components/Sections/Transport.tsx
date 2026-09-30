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
          <span className="text-[10px] sm:text-xs uppercase font-bold text-amber-300 bg-white/8 backdrop-blur-xl border border-white/20 px-4 py-1.5 rounded-full inline-block mb-2 tracking-widest shadow-xs">
            Chauffeur-Driven Fleet
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            Premium AC Vehicle Fleet
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mt-2 md:mt-4 leading-relaxed">
            Travel smoothly between spiritual corridors. We maintain a private fleet of pristine, fully air-conditioned executive vehicles for safe highway and city travel.
          </p>
        </div>

        {/* Vehicles Grid / Mobile Swipeable Carousel */}
        <div className="flex overflow-x-auto pb-4 pt-1 -mx-4 px-4 snap-x snap-mandatory gap-3 sm:gap-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-8" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="w-[82vw] max-w-[320px] shrink-0 snap-center lg:w-auto lg:max-w-none lg:shrink bg-white/[0.07] backdrop-blur-3xl rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 hover:border-white/30 transition-all duration-300 flex flex-col h-full group"
              style={{
                boxShadow: "0 24px 50px -10px rgba(0, 0, 0, 0.6), inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.25)"
              }}
            >
              {/* Image & Capacity Metrics */}
              <div className="relative h-44 sm:h-50 md:h-56 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Float Badge: AC standard */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-black/60 backdrop-blur-md text-white text-[9px] md:text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 md:px-3 md:py-1.5 rounded-full flex items-center gap-1 shadow-md border border-white/10">
                  <Snowflake size={10} className="text-cyan-400 animate-spin-slow" />
                  <span>Dual AC Zone</span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-1">
                {/* Vehicle specifications */}
                <div className="flex gap-3 md:gap-4 text-[11px] md:text-xs font-semibold text-slate-300 uppercase tracking-wide mb-2 md:mb-3">
                  <span className="flex items-center gap-1">
                    <Users size={13} className="text-amber-400" />
                    <span>{vehicle.capacity}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase size={13} className="text-amber-400" />
                    <span>Luggage Carrier</span>
                  </span>
                </div>

                {/* Vehicle Name */}
                <h4 className="text-base sm:text-lg md:text-xl font-display font-bold text-white mb-0.5 md:mb-1">
                  {vehicle.name}
                </h4>
                <span className="text-[11px] md:text-xs text-slate-400 font-medium italic mb-2.5 md:mb-4 block">
                  {vehicle.type}
                </span>

                {/* Description */}
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-4 md:mb-6 flex-1 line-clamp-3 md:line-clamp-none">
                  {vehicle.description}
                </p>

                {/* Key features checklist */}
                <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6 pt-3 md:pt-4 border-t border-white/10">
                  {vehicle.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] md:text-xs text-slate-300 font-medium">
                      <CheckCircle size={11} className="text-emerald-400 shrink-0" />
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
                  className="!border-white/20 !text-white hover:!bg-white/10 hover:!border-white/40"
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
