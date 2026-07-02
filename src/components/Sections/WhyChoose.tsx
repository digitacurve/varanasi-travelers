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
    <section id="why-choose-us" className="py-20 md:py-28 bg-slate-50/50 relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent-orange/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-50/50 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase font-bold text-accent-orange bg-orange-50 px-4 py-1.5 rounded-full inline-block mb-3 tracking-widest">
            The Divine Standard
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-dark-slate tracking-tight">
            Why Pilgrims Choose Divine Journeys
          </h2>
          <p className="text-sm md:text-base text-slate-500 mt-4 leading-relaxed">
            We do not just organize tours; we curate sacred milestones. Every detail of your journey is handled with devotion, security, and absolute transparency.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {whyChooseItems.map((item) => {
            // Dynamically resolve icon from lucide-react
            const IconComponent = (Icons as any)[item.iconName] || Icons.Compass;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-50 group-hover:bg-accent-orange text-accent-orange group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
                  <IconComponent size={24} className="stroke-[2]" />
                </div>
                <h3 className="text-base md:text-lg font-display font-bold text-dark-slate mb-3 group-hover:text-accent-orange transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
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
