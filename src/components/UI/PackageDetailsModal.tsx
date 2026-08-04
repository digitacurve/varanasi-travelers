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
        className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      >
        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-[#FFFDF9] rounded-3xl max-w-4xl w-full text-slate-800 shadow-2xl relative border border-orange-100/50 flex flex-col max-h-[90vh] my-auto overflow-hidden"
        >
          {/* Top Decorative Gold Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-accent-orange to-orange-600 shrink-0" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors p-2 rounded-full z-50 focus:outline-none"
            aria-label="Close details"
          >
            <X size={18} />
          </button>

          {/* Body Content (Scrollable) */}
          <div className="overflow-y-auto flex-grow p-5 md:p-8 space-y-6">
            
            {/* Header Title Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Left Column: Image wrapper */}
              <div className="md:col-span-5 relative h-48 md:h-52 w-full rounded-2xl overflow-hidden bg-orange-50 shrink-0 shadow-sm border border-orange-100/30">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                
                {/* Duration Badge */}
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-xs font-semibold flex items-center gap-1.5 select-none">
                  <Clock size={12} className="text-amber-400" />
                  <span>{pkg.duration}</span>
                </div>
              </div>

              {/* Right Column: Title and Core specs */}
              <div className="md:col-span-7 space-y-3">
                {pkg.tag && (
                  <span className="text-[10px] uppercase font-bold tracking-wider text-accent-orange bg-orange-50 border border-orange-100 px-3 py-1 rounded-lg inline-block">
                    {pkg.tag} Option
                  </span>
                )}
                <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight leading-tight">
                  {pkg.name}
                </h2>
                
                {/* Destinations */}
                <div className="flex flex-wrap gap-1.5 select-none">
                  {pkg.destinations.map((dest, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-slate-600 bg-orange-50 border border-orange-100/40 px-2.5 py-1 rounded-lg"
                    >
                      <MapPin size={11} className="text-accent-orange" />
                      {dest}
                    </span>
                  ))}
                </div>

                {/* Rating indicator */}
                <div className="flex items-center gap-2 select-none">
                  <div className="flex text-amber-500">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} size={14} fill="currentColor" className="stroke-none" />
                    ))}
                  </div>
                  <span className="text-sm font-extrabold text-slate-800">{pkg.rating} Rating</span>
                  <span className="text-xs text-slate-400 font-semibold">({pkg.reviewsCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* Premium Tab Navigation row */}
            <div className="border-b border-orange-100/50 flex flex-wrap gap-2 md:gap-4 shrink-0 overflow-x-auto select-none pt-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 font-display text-sm font-bold tracking-wide transition-all duration-300 ${
                    activeTab === tab.id
                      ? "border-accent-orange text-accent-orange"
                      : "border-transparent text-slate-500 hover:text-slate-800"
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
                  <h3 className="text-lg font-display font-black text-slate-900 mb-4 flex items-center gap-2">
                    <CalendarRange size={18} className="text-accent-orange" />
                    Detailed Day-Wise Itinerary
                  </h3>
                  <div className="relative border-l border-orange-100 ml-4 space-y-6">
                    {pkg.itinerary.map((day) => (
                      <div key={day.day} className="relative pl-6">
                        {/* Dot indicator */}
                        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-accent-orange border-4 border-white shadow-sm flex items-center justify-center font-bold text-[8px] text-white" />
                        
                        <div className="bg-white p-4 rounded-2xl border border-orange-100/40 shadow-[0_2px_12px_rgba(249,115,22,0.01)] hover:shadow-md transition-shadow">
                          <span className="text-xs font-bold text-accent-orange uppercase tracking-widest block mb-1">
                            Day {day.day}
                          </span>
                          <h4 className="text-base font-display font-bold text-slate-800 mb-2">
                            {day.title}
                          </h4>
                          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
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
                  <div className="bg-white p-5 rounded-2xl border border-orange-100/30">
                    <h3 className="text-base font-display font-black text-slate-900 mb-4 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      Services Included
                    </h3>
                    <ul className="space-y-2.5">
                      {pkg.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclusions */}
                  <div className="bg-white p-5 rounded-2xl border border-orange-100/30">
                    <h3 className="text-base font-display font-black text-slate-900 mb-4 flex items-center gap-2">
                      <AlertTriangle size={16} className="text-red-500" />
                      Services Excluded
                    </h3>
                    <ul className="space-y-2.5">
                      {pkg.exclusions.map((exc, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                          <AlertTriangle size={14} className="text-red-500 shrink-0 mt-0.5" />
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
                  <div className="bg-white p-5 rounded-2xl border border-orange-100/30 space-y-4">
                    <h3 className="text-base font-display font-black text-slate-900 flex items-center gap-2">
                      <Building2 size={16} className="text-accent-orange" />
                      Handpicked Stay Partners
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      We partner with fully verified, clean properties offering Satvik food and close corridor access.
                    </p>
                    <div className="space-y-3.5">
                      {pkg.hotels.map((stay, idx) => (
                        <div key={idx} className="border-t border-orange-100/30 pt-3">
                          <h4 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider">
                            {stay.category}
                          </h4>
                          <div className="flex flex-wrap gap-1.5 mt-1.5">
                            {stay.options.map((opt, i) => (
                              <span key={i} className="text-xs font-semibold text-slate-700 bg-orange-50/50 border border-orange-100/20 px-2 py-1 rounded">
                                {opt}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vehicle Info */}
                  <div className="bg-white p-5 rounded-2xl border border-orange-100/30 space-y-4">
                    <h3 className="text-base font-display font-black text-slate-900 flex items-center gap-2">
                      <Car size={16} className="text-accent-orange" />
                      Sanitized Cab Commute
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Chauffeur-driven air-conditioned cabs at your disposal for local and intercity transit.
                    </p>
                    <div className="border-t border-orange-100/30 pt-3 space-y-2">
                      <h4 className="text-xs uppercase font-extrabold text-slate-500 tracking-wider">
                        Assigned Vehicle Type
                      </h4>
                      <p className="text-sm font-semibold text-slate-800">
                        {pkg.vehicle}
                      </p>
                      <div className="bg-emerald-50/50 border border-emerald-100 p-3.5 rounded-xl text-[11px] text-emerald-700 font-semibold space-y-1">
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
                  <h3 className="text-base font-display font-black text-slate-900 flex items-center gap-2 mb-2">
                    <HelpCircle size={16} className="text-accent-orange" />
                    Package-Specific Information
                  </h3>
                  {pkg.faq.map((q, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-orange-100/30">
                      <h4 className="text-xs md:text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                        <span className="text-accent-orange">Q:</span>
                        {q.question}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-4">
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
          <div className="border-t border-orange-100/50 bg-[#FCF9F5] p-5 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider select-none">
                Total Starting Price
              </span>
              <span className="text-2xl font-display font-black text-slate-900">
                ₹{formattedPrice}
                <span className="text-xs text-slate-400 font-normal"> / person*</span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                fullWidth
                onClick={handleGetQuote}
                className="py-3.5 px-6 font-bold hover:bg-slate-900 hover:text-white border border-slate-300 hover:border-slate-900 transition-colors rounded-xl text-xs flex items-center justify-center gap-1.5"
              >
                <PhoneCall size={14} />
                Get Quote
              </Button>
              <Button
                variant="solid"
                fullWidth
                onClick={handleBookWhatsApp}
                className="py-3.5 px-6 font-bold bg-[#25D366] hover:bg-[#20ba56] text-white border-none flex items-center justify-center gap-1.5 shadow-md shadow-green-500/10 rounded-xl text-xs"
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
