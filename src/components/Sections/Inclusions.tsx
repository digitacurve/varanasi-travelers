"use client";

import React, { useRef, useState } from "react";
import { Hotel, Utensils, Compass, Car, Users, PlaneTakeoff, HeartHandshake, CheckCircle2, Sparkles, ChevronRight, ChevronLeft } from "lucide-react";

interface InclusionItem {
  icon: React.ReactNode;
  title: string;
  includedDesc: string;
  premiumDesc: string;
}

export const Inclusions: React.FC = () => {
  const [activePlan, setActivePlan] = useState<"a" | "b">("a");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const inclusions: InclusionItem[] = [
    {
      icon: <Hotel className="w-4 h-4 md:w-5 md:h-5" />,
      title: "Hotels & Stays",
      includedDesc: "Hygienic 3-Star or 4-Star deluxe rooms near temple corridors.",
      premiumDesc: "5-Star heritage palaces & ghat-facing boutique suites.",
    },
    {
      icon: <Utensils className="w-4 h-4 md:w-5 md:h-5" />,
      title: "Meals & Dining",
      includedDesc: "Fresh daily vegetarian breakfast at hotel restaurants.",
      premiumDesc: "All-inclusive organic Satvik meals & local culinary treats.",
    },
    {
      icon: <Compass className="w-4 h-4 md:w-5 md:h-5" />,
      title: "Sightseeing Tours",
      includedDesc: "Private local excursions with verified regional guides.",
      premiumDesc: "VIP private boat cruise & Vedic scholar temple guides.",
    },
    {
      icon: <Car className="w-4 h-4 md:w-5 md:h-5" />,
      title: "Private AC Cabs",
      includedDesc: "Dedicated sanitized Sedan/SUV at your disposal.",
      premiumDesc: "Toyota Innova Crysta or luxury recliner tempo traveller.",
    },
    {
      icon: <Users className="w-4 h-4 md:w-5 md:h-5" />,
      title: "Professional Drivers",
      includedDesc: "Licensed local chauffeurs experienced in pilgrimage routes.",
      premiumDesc: "Bilingual, uniformed executive senior chauffeurs.",
    },
    {
      icon: <PlaneTakeoff className="w-4 h-4 md:w-5 md:h-5" />,
      title: "Airport Transfers",
      includedDesc: "Convenient pickups & drops at Varanasi / Ayodhya airport/rail.",
      premiumDesc: "Direct executive pickup coordination & baggage escort.",
    },
    {
      icon: <HeartHandshake className="w-4 h-4 md:w-5 md:h-5" />,
      title: "VIP Darshan Care",
      includedDesc: "Scheduled entry assistance for Vishwanath & Ram Mandir.",
      premiumDesc: "Skip-the-line darshan priority & dedicated escort priests.",
    },
  ];

  const scrollToCard = (plan: "a" | "b") => {
    setActivePlan(plan);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const targetScroll = plan === "a" ? 0 : container.scrollWidth / 2;
      container.scrollTo({ left: targetScroll, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      if (scrollLeft > (scrollWidth - clientWidth) / 3) {
        setActivePlan("b");
      } else {
        setActivePlan("a");
      }
    }
  };

  return (
    <section id="inclusions" className="py-10 md:py-20 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-14">
          <span className="text-[10px] sm:text-xs uppercase font-bold text-amber-300 bg-white/8 backdrop-blur-xl border border-white/20 px-4 py-1.5 rounded-full inline-block mb-2.5 tracking-widest shadow-xs">
            Standard vs Premium
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            Pilgrimage Service Inclusions
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mt-2 md:mt-3 leading-relaxed max-w-xl mx-auto">
            We provide everything required for a comfortable, stress-free holy darshan. Compare our standard and luxury inclusions below.
          </p>

          {/* Mobile Quick Plan Switcher */}
          <div className="flex lg:hidden items-center justify-center gap-2 mt-4">
            <button
              onClick={() => scrollToCard("a")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activePlan === "a"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20"
                  : "bg-white/10 text-slate-300 border border-white/15"
              }`}
            >
              Plan A: Standard
            </button>
            <button
              onClick={() => scrollToCard("b")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activePlan === "b"
                  ? "bg-white/20 text-amber-300 border border-amber-400/40 shadow-md shadow-amber-500/20"
                  : "bg-white/10 text-slate-300 border border-white/15"
              }`}
            >
              Plan B: Luxury ✨
            </button>
          </div>
        </div>

        {/* Inclusions Comparison Layout - Mobile Swipeable with Peek, 2-Cols on Desktop */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-2 overflow-x-auto lg:overflow-visible snap-x snap-mandatory gap-3.5 sm:gap-6 md:gap-8 max-w-6xl mx-auto pb-4 pt-1 px-1 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar"
        >
          {/* Left Column: Standard Package Details */}
          <div 
            className="w-[76vw] max-w-[310px] sm:w-[400px] lg:w-full shrink-0 snap-start bg-white/[0.07] backdrop-blur-3xl p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/15 flex flex-col justify-between"
            style={{
              boxShadow: "0 24px 50px -10px rgba(0, 0, 0, 0.6), inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.25)"
            }}
          >
            <div>
              <div className="mb-4 sm:mb-6 border-b border-white/10 pb-3 sm:pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs uppercase font-extrabold text-orange-400 bg-orange-500/15 border border-orange-400/30 px-2.5 py-0.5 rounded-md tracking-wider">
                    Plan A
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">Included in all packages</span>
                </div>
                <h3 className="text-base sm:text-lg md:text-2xl font-display font-bold text-white mt-1.5">
                  Standard & Deluxe Inclusions
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-1">
                  Ideal for families seeking comfortable, worry-free sacred travels.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {inclusions.map((item, index) => (
                  <div key={index} className="flex gap-2.5 sm:gap-3.5 items-start">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg sm:rounded-xl bg-white/10 border border-white/15 text-orange-400 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-display font-bold text-white flex items-center gap-1.5">
                        {item.title}
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      </h4>
                      <p className="text-[10.5px] sm:text-xs text-slate-300 mt-0.5 leading-snug">
                        {item.includedDesc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 lg:hidden">
              <span>Swipe for Plan B Luxury</span>
              <span className="text-orange-400 font-bold flex items-center gap-0.5">Plan B <ChevronRight size={13} /></span>
            </div>
          </div>

          {/* Right Column: Premium/Luxury Upgrades */}
          <div 
            className="w-[76vw] max-w-[310px] sm:w-[400px] lg:w-full shrink-0 snap-start bg-gradient-to-br from-amber-950/30 via-white/[0.08] to-black/60 backdrop-blur-3xl text-white p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-amber-400/40 relative overflow-hidden flex flex-col justify-between"
            style={{
              boxShadow: "0 24px 50px -10px rgba(245, 158, 11, 0.15), 0 12px 32px rgba(0,0,0,0.6), inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.3)"
            }}
          >
            {/* Background Orange Blur */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-amber-500/20 rounded-full filter blur-[40px] pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-4 sm:mb-6 border-b border-white/10 pb-3 sm:pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs uppercase font-extrabold text-amber-300 bg-amber-500/20 border border-amber-400/40 px-2.5 py-0.5 rounded-md tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-300" /> Plan B
                  </span>
                  <span className="text-[10px] text-amber-300/90 font-semibold">Premium Upgrade</span>
                </div>
                <h3 className="text-base sm:text-lg md:text-2xl font-display font-bold text-white mt-1.5">
                  Exclusive Heritage Luxury
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1">
                  For travellers seeking ultimate VIP luxury, palaces, & bespoke rituals.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {inclusions.map((item, index) => (
                  <div key={index} className="flex gap-2.5 sm:gap-3.5 items-start">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg sm:rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-display font-bold text-white flex items-center gap-1.5">
                        {item.title}
                        <span className="text-[8.5px] uppercase bg-amber-400/30 text-amber-200 font-bold px-1.5 py-0.2 rounded border border-amber-400/30">
                          VIP
                        </span>
                      </h4>
                      <p className="text-[10.5px] sm:text-xs text-slate-300 mt-0.5 leading-snug">
                        {item.premiumDesc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 lg:hidden relative z-10">
              <span className="text-amber-400 font-bold flex items-center gap-0.5"><ChevronLeft size={13} /> Plan A</span>
              <span>Exclusive Upgrades</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

