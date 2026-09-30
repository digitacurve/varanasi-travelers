"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, MapPin, CheckCircle2, AlertTriangle, Building2, Car, Compass, CalendarRange, HelpCircle, PhoneCall, Star, ArrowRight } from "lucide-react";
import { ExtendedPackage } from "@/data/extendedPackages";
import { Button } from "./Button";

interface PackageDetailsModalProps {
  isOpen: boolean;
  pkg: ExtendedPackage | null;
  onClose: () => void;
  onSelectPackage: (pkgId: string) => void;
}

type TabType = "itinerary" | "inclusions" | "hotels-vehicle" | "faqs";

export const PackageDetailsModal: React.FC<PackageDetailsModalProps> = ({
  isOpen,
  pkg,
  onClose,
  onSelectPackage,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("itinerary");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !pkg) return null;

  const handleBookWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello Varanasi Travelers! I am interested in booking the "${pkg.name}" (${pkg.duration}). Let's discuss details.`
    );
    window.open(`https://wa.me/919288100260?text=${message}`, "_blank");
  };

  const handleGetQuote = () => {
    onSelectPackage(pkg.id);
    onClose();
    // Smooth scroll to form section
    setTimeout(() => {
      const formElement = document.getElementById("inquiry-form-section");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(pkg.startingPrice || 0);

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: "itinerary", label: "Itinerary", icon: <CalendarRange size={16} /> },
    { id: "inclusions", label: "Inclusions / Exclusions", icon: <CheckCircle2 size={16} /> },
    { id: "hotels-vehicle", label: "Stays & Transport", icon: <Building2 size={16} /> },
    { id: "faqs", label: "FAQs", icon: <HelpCircle size={16} /> },
  ];

  // We mount the modal portal to document.body
  const modalJSX = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto"
      >
        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-slate-950/95 backdrop-blur-3xl rounded-3xl max-w-4xl w-full text-white shadow-2xl relative border border-white/20 flex flex-col max-h-[90vh] my-auto overflow-hidden"
          style={{
            boxShadow: "0 36px 70px -12px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 122, 0, 0.15), inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.25)"
          }}
        >
          {/* Top Decorative Amber Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-accent-orange to-orange-600 shrink-0" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white transition-colors p-2 rounded-full z-50 focus:outline-none border border-white/20"
            aria-label="Close details"
          >
            <X size={18} />
          </button>

          {/* Body Content (Scrollable) */}
          <div className="overflow-y-auto flex-grow p-5 md:p-8 space-y-6">
            
            {/* Header Title Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Left Column: Image wrapper */}
              <div className="md:col-span-5 relative h-48 md:h-52 w-full rounded-2xl overflow-hidden bg-slate-900 shrink-0 border border-white/20 shadow-lg">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Duration Badge */}
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-xs font-semibold flex items-center gap-1.5 select-none border border-white/20">
                  <Clock size={12} className="text-amber-400" />
                  <span>{pkg.duration}</span>
                </div>
              </div>

              {/* Right Column: Title and Core specs */}
              <div className="md:col-span-7 space-y-3">
                {pkg.tag && (
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 bg-amber-500/10 border border-amber-400/30 px-3 py-1 rounded-lg inline-block">
                    {pkg.tag} Option
                  </span>
                )}
                <h2 className="text-2xl md:text-3xl font-display font-black text-white tracking-tight leading-tight">
                  {pkg.name}
                </h2>
                
                {/* Destinations */}
                <div className="flex flex-wrap gap-1.5 select-none">
                  {pkg.destinations.map((dest, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-slate-300 bg-white/10 border border-white/15 px-2.5 py-1 rounded-lg"
                    >
                      <MapPin size={11} className="text-amber-400" />
                      {dest}
                    </span>
                  ))}
                </div>

                {/* Rating indicator */}
                <div className="flex items-center gap-2 select-none">
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} size={14} fill="currentColor" className="stroke-none" />
                    ))}
                  </div>
                  <span className="text-sm font-extrabold text-white">{pkg.rating} Rating</span>
                  <span className="text-xs text-slate-400 font-semibold">({pkg.reviewsCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* Premium Tab Navigation row */}
            <div className="border-b border-white/10 flex flex-wrap gap-2 md:gap-4 shrink-0 overflow-x-auto select-none pt-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 font-display text-sm font-bold tracking-wide transition-all duration-300 ${
                    activeTab === tab.id
                      ? "border-amber-400 text-amber-400"
                      : "border-transparent text-slate-400 hover:text-white"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Active Tab Panel details */}
            <div className="py-2">
              
              {/* Tab 1: Day-wise Itinerary */}
              {activeTab === "itinerary" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-display font-black text-white mb-4 flex items-center gap-2">
                    <CalendarRange size={18} className="text-amber-400" />
                    Detailed Day-Wise Itinerary
                  </h3>
                  <div className="relative border-l border-white/15 ml-4 space-y-6">
                    {pkg.itinerary.map((day) => (
                      <div key={day.day} className="relative pl-6">
                        {/* Dot indicator */}
                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-accent-orange border-4 border-slate-900 shadow-sm flex items-center justify-center font-bold text-[8px] text-white" />
                        
                        <div className="bg-white/[0.07] backdrop-blur-2xl p-4 rounded-2xl border border-white/15 transition-all hover:border-amber-400/40">
                          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                            Day {day.day}
                          </span>
                          <h4 className="text-base font-display font-bold text-white mb-2">
                            {day.title}
                          </h4>
                          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                            {day.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Inclusions & Exclusions */}
              {activeTab === "inclusions" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Inclusions */}
                  <div className="bg-white/[0.07] backdrop-blur-2xl p-5 rounded-2xl border border-white/15">
                    <h3 className="text-base font-display font-black text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400" />
                      Services Included
                    </h3>
                    <ul className="space-y-2.5">
                      {pkg.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                          <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclusions */}
                  <div className="bg-white/[0.07] backdrop-blur-2xl p-5 rounded-2xl border border-white/15">
                    <h3 className="text-base font-display font-black text-white mb-4 flex items-center gap-2">
                      <AlertTriangle size={16} className="text-red-400" />
                      Services Excluded
                    </h3>
                    <ul className="space-y-2.5">
                      {pkg.exclusions.map((exc, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
                          <AlertTriangle size={14} className="text-red-400 shrink-0 mt-0.5" />
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab 3: Stays & Transport */}
              {activeTab === "hotels-vehicle" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Stays Info */}
                  <div className="bg-white/[0.07] backdrop-blur-2xl p-5 rounded-2xl border border-white/15 space-y-4">
                    <h3 className="text-base font-display font-black text-white flex items-center gap-2">
                      <Building2 size={16} className="text-amber-400" />
                      Handpicked Stay Partners
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      We partner with fully verified, clean properties offering Satvik food and close corridor access.
                    </p>
                    <div className="space-y-3.5">
                      {pkg.hotels.map((stay, idx) => (
                        <div key={idx} className="border-t border-white/10 pt-3">
                          <h4 className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
                            {stay.category}
                          </h4>
                          <div className="flex flex-wrap gap-1.5 mt-1.5">
                            {stay.options.map((opt, i) => (
                              <span key={i} className="text-xs font-semibold text-slate-200 bg-white/10 border border-white/15 px-2 py-1 rounded">
                                {opt}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vehicle Info */}
                  <div className="bg-white/[0.07] backdrop-blur-2xl p-5 rounded-2xl border border-white/15 space-y-4">
                    <h3 className="text-base font-display font-black text-white flex items-center gap-2">
                      <Car size={16} className="text-amber-400" />
                      Sanitized Cab Commute
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Chauffeur-driven air-conditioned cabs at your disposal for local and intercity transit.
                    </p>
                    <div className="border-t border-white/10 pt-3 space-y-2">
                      <h4 className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
                        Assigned Vehicle Type
                      </h4>
                      <p className="text-sm font-semibold text-white">
                        {pkg.vehicle}
                      </p>
                      <div className="bg-emerald-950/40 border border-emerald-500/30 p-3.5 rounded-xl text-[11px] text-emerald-300 font-semibold space-y-1">
                        <div>⚡ Experienced, highway-certified local driver.</div>
                        <div>⚡ Mineral water and sanitizer bottles provided.</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Package Specific FAQs */}
              {activeTab === "faqs" && (
                <div className="space-y-4">
                  <h3 className="text-base font-display font-black text-white flex items-center gap-2 mb-2">
                    <HelpCircle size={16} className="text-amber-400" />
                    Package-Specific Information
                  </h3>
                  {pkg.faq.map((q, idx) => (
                    <div key={idx} className="bg-white/[0.07] backdrop-blur-2xl p-4 rounded-xl border border-white/15">
                      <h4 className="text-xs md:text-sm font-bold text-white mb-1 flex items-center gap-1.5">
                        <span className="text-amber-400">Q:</span>
                        {q.question}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-300 leading-relaxed pl-4">
                        {q.answer}
                      </p>
                    </div>
                  ))}
                  {pkg.faq.length === 0 && (
                    <p className="text-xs text-slate-400">No package-specific FAQs added yet. Our coordinator will provide all details over the call.</p>
                  )}
                </div>
              )}

            </div>
          </div>

          {/* Sticky Bottom Actions Bar inside modal */}
          <div className="border-t border-white/15 bg-slate-950/90 backdrop-blur-2xl p-5 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider select-none">
                Total Starting Price
              </span>
              <span className="text-2xl font-display font-black text-amber-400">
                ₹{formattedPrice}
                <span className="text-xs text-slate-400 font-normal"> / person*</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                fullWidth
                onClick={handleGetQuote}
                className="py-3.5 px-6 font-bold hover:bg-white/20 text-white border border-white/30 transition-colors rounded-xl text-xs flex items-center justify-center gap-1.5"
              >
                <PhoneCall size={14} />
                Get Quote
              </Button>
              <Button
                variant="solid"
                fullWidth
                onClick={handleBookWhatsApp}
                className="py-3.5 px-6 font-bold bg-[#25D366] hover:bg-[#20ba56] text-white border-none flex items-center justify-center gap-1.5 shadow-md shadow-green-500/20 rounded-xl text-xs"
              >
                Book via WhatsApp
                <ArrowRight size={14} />
              </Button>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return mounted ? createPortal(modalJSX, document.body) : null;
};
