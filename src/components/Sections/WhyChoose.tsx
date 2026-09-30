"use client";

import React from "react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { whyChooseItems } from "@/data/content";

export const WhyChoose: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  } as const;

  return (
    <section id="why-choose-us" className="py-6 md:py-20 bg-transparent relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent-orange/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-50/50 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
          <span className="text-[10px] sm:text-xs uppercase font-bold text-amber-300 bg-white/8 backdrop-blur-xl border border-white/20 px-4 py-1.5 rounded-full inline-block mb-2 tracking-widest shadow-xs">
            The Divine Standard
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            Why Pilgrims Choose Divine Journeys
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mt-2 md:mt-4 leading-relaxed">
            We do not just organize tours; we curate sacred milestones. Every detail of your journey is handled with devotion, security, and absolute transparency.
          </p>
        </div>

        {/* Feature Cards Grid - 2x2 on Mobile, 4 columns on Desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-8"
        >
          {whyChooseItems.map((item, index) => {
            const isLast = index === whyChooseItems.length - 1;
            const isOdd = whyChooseItems.length % 2 !== 0;
            // Dynamically resolve icon from lucide-react
            const IconComponent = (Icons as any)[item.iconName] || Icons.Compass;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className={`bg-white/[0.07] backdrop-blur-3xl p-3 sm:p-5 md:p-8 rounded-xl md:rounded-3xl border border-white/15 hover:border-white/30 hover:bg-white/[0.12] transition-all duration-300 group flex flex-col justify-start ${
                  isLast && isOdd
                    ? "col-span-2 sm:col-span-1 justify-self-center w-full max-w-[calc(50%-6px)] sm:max-w-none lg:col-span-1"
                    : ""
                }`}
                style={{
                  boxShadow: "0 20px 48px -10px rgba(0, 0, 0, 0.6), inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.25)"
                }}
              >
                <div className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg md:rounded-2xl bg-white/10 border border-white/20 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-500 text-amber-400 group-hover:text-white flex items-center justify-center mb-2 sm:mb-4 md:mb-6 transition-all duration-300 shrink-0 shadow-xs">
                  <IconComponent size={15} className="sm:w-5 sm:h-5 md:w-6 md:h-6 stroke-[2]" />
                </div>
                <h3 className="text-[11px] sm:text-sm md:text-lg font-display font-bold text-white mb-1 sm:mb-1.5 md:mb-3 group-hover:text-amber-300 transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[9.5px] sm:text-xs md:text-sm text-slate-300 leading-tight sm:leading-snug md:leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
