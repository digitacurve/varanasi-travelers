"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingCTAProps {
  packageId?: string;
  packageName?: string;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ 
  packageId = "general", 
  packageName = "General" 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show buttons after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleCall = () => {
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "Phone Click",
        packageId,
        packageName
      });
    }
    window.location.href = "tel:+919288100260";
  };

  const handleWhatsApp = () => {
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "WhatsApp Click",
        packageId,
        packageName
      });
    }
    const message = encodeURIComponent(
      `Hello! I am planning a pilgrimage tour (${packageName}). Please share customized package details.`
    );
    window.open(`https://wa.me/919288100260?text=${message}`, "_blank");
  };

  const handleScrollToForm = () => {
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "Package CTA Click",
        packageId,
        packageName,
        ctaType: "Get Quote"
      });
    }
    const formElement = document.getElementById("inquiry-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={handleWhatsApp}
            className="fixed bottom-8 right-8 z-40 hidden md:flex items-center gap-2 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] transition-all duration-300 group cursor-pointer font-semibold text-sm"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={20} className="fill-white" />
            <span>Chat on WhatsApp</span>
            <span className="w-2 h-2 rounded-full bg-white animate-ping absolute top-0 right-0" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Desktop Floating Get Quote Button (Left Side) */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={handleScrollToForm}
            className="fixed bottom-8 left-8 z-40 hidden md:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-accent-orange text-white px-5 py-3.5 rounded-full shadow-[0_4px_24px_rgba(249,115,22,0.3)] hover:shadow-[0_8px_30px_rgba(249,115,22,0.5)] transition-all duration-300 group cursor-pointer font-semibold text-sm"
            aria-label="Get Free Quote"
          >
            <Calendar size={18} />
            <span>Get Free Quote</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bottom Bar (Sleek, slim & compact) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/90 backdrop-blur-lg border-t border-slate-200/60 shadow-[0_-2px_12px_rgba(15,23,42,0.06)] px-2.5 py-1.5 flex gap-1.5 items-center">
        <button
          onClick={handleCall}
          className="flex-1 flex items-center justify-center gap-1 bg-slate-900 text-white py-2 px-1 rounded-lg font-display font-bold text-[11px] shadow-sm active:scale-[0.97] transition-transform"
        >
          <Phone size={12} className="shrink-0" />
          <span>Call Now</span>
        </button>
        
        <button
          onClick={handleWhatsApp}
          className="flex-1 flex items-center justify-center gap-1 bg-[#25D366] text-white py-2 px-1 rounded-lg font-display font-bold text-[11px] shadow-sm active:scale-[0.97] transition-transform"
        >
          <MessageCircle size={12} className="fill-white shrink-0" />
          <span>WhatsApp</span>
        </button>

        <button
          onClick={handleScrollToForm}
          className="flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-amber-500 to-accent-orange text-white py-2 px-1 rounded-lg font-display font-bold text-[11px] shadow-sm active:scale-[0.97] transition-transform"
        >
          <Calendar size={12} className="shrink-0" />
          <span>Get Quote</span>
        </button>
      </div>
    </>
  );
};
