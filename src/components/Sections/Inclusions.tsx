"use client";

import React from "react";
import { Hotel, Utensils, Compass, Car, Users, PlaneTakeoff, HeartHandshake, CheckCircle } from "lucide-react";

interface InclusionItem {
  icon: React.ReactNode;
  title: string;
  includedDesc: string;
  premiumDesc: string;
}

export const Inclusions: React.FC = () => {
  const inclusions: InclusionItem[] = [
    {
      icon: <Hotel size={24} />,
      title: "Hotels & Stays",
      includedDesc: "Hygienic 3-Star or 4-Star deluxe rooms situated near the temple corridors.",
      premiumDesc: "5-Star heritage palaces and ghat-facing premium boutique hotel suites.",
    },
    {
      icon: <Utensils size={24} />,
      title: "Meals & Dining",
      includedDesc: "Freshly prepared daily vegetarian breakfast served at hotel restaurants.",
      premiumDesc: "All-inclusive organic Satvik meals, local delicacies, and dining options.",
    },
    {
      icon: <Compass size={24} />,
      title: "Sightseeing Tours",
      includedDesc: "Private local excursions with verified regional temple guides.",
      premiumDesc: "VIP private boat cruise, Vedic scholar guides, and customized schedules.",
    },
    {
      icon: <Car size={24} />,
      title: "Private AC Cabs",
      includedDesc: "Dedicated Sanitized Sedan or SUV at your disposal for local commutes.",
      premiumDesc: "Toyota Innova Crysta or luxury tempo traveller with reclining seats.",
    },
    {
      icon: <Users size={24} />,
      title: "Professional Drivers",
      includedDesc: "Licensed local chauffeurs experienced in tourist corridor transits.",
      premiumDesc: "Highly experienced, bilingual executive drivers with uniform.",
    },
    {
      icon: <PlaneTakeoff size={24} />,
      title: "Airport Transfers",
      includedDesc: "Convenient airport/railway station pickups and drops in Varanasi/Ayodhya.",
      premiumDesc: "Direct executive runway pickup coordination and baggage assistance.",
    },
    {
      icon: <HeartHandshake size={24} />,
      title: "VIP Darshan Assistance",
      includedDesc: "Scheduled entry guides for Kashi Vishwanath and Ram Mandir.",
      premiumDesc: "Skip-the-line ticket arrangements and dedicated escort priests for rituals.",
    },
  ];

  return (
    <section id="inclusions" className="py-20 md:py-28 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold text-accent-orange bg-orange-50 px-4 py-1.5 rounded-full inline-block mb-3 tracking-widest">
            Standard vs Premium
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-dark-slate tracking-tight">
            Pilgrimage Service Inclusions
          </h2>
          <p className="text-sm md:text-base text-slate-500 mt-4 leading-relaxed">
            We provide everything required for a comfortable, stress-free holy darshan. Check out the high-quality services included standard in all itineraries.
          </p>
        </div>

        {/* Inclusions Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Standard Package Details */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.02)]">
            <div className="mb-8">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Plan A</span>
              <h3 className="text-xl md:text-2xl font-display font-bold text-dark-slate mt-1">
                Standard & Deluxe Inclusions
              </h3>
              <p className="text-xs md:text-sm text-slate-500 mt-2">
                Ideal for families and senior citizens seeking comfortable, worry-free travels.
              </p>
            </div>

            <div className="space-y-6">
              {inclusions.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-500 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-display font-bold text-dark-slate flex items-center gap-2">
                      {item.title}
                      <CheckCircle size={14} className="text-green-500 stroke-[2.5]" />
                    </h4>
                    <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                      {item.includedDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium/Luxury Upgrades */}
          <div className="bg-dark-slate text-white p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Background Orange Blur */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-orange/15 rounded-full filter blur-[50px] pointer-events-none" />

            <div className="mb-8">
              <span className="text-xs uppercase font-bold text-accent-orange tracking-wider">Plan B</span>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mt-1">
                Exclusive Heritage Luxury Upgrades
              </h3>
              <p className="text-xs md:text-sm text-slate-400 mt-2">
                For travellers seeking ultimate VIP luxury, historic palaces, and bespoke spiritual rituals.
              </p>
            </div>

            <div className="space-y-6">
              {inclusions.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-accent-orange flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-display font-bold text-white flex items-center gap-2">
                      {item.title}
                      <span className="text-[10px] uppercase bg-accent-orange/20 text-accent-orange font-bold px-2 py-0.5 rounded">
                        Upgrade
                      </span>
                    </h4>
                    <p className="text-xs md:text-sm text-slate-300 mt-1 leading-relaxed">
                      {item.premiumDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
