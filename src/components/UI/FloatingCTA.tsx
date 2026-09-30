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
            className="fixed bottom-8 right-8 z-40 hidden md:flex items-center gap-2 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] transition-all duration-300 group cursor-pointer font-semibold text-sm border border-emerald-400/40"
            style={{
              boxShadow: "0 4px 24px rgba(37, 211, 102, 0.35), inset 0 1px 1px 0 rgba(255, 255, 255, 0.4)"
            }}
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
            className="fixed bottom-8 left-8 z-40 hidden md:flex items-center gap-2 bg-gradient-to-r from-amber-500 via-orange-600 to-amber-600 text-white px-5 py-3.5 rounded-full shadow-[0_4px_24px_rgba(234,88,12,0.35)] hover:shadow-[0_8px_30px_rgba(234,88,12,0.5)] transition-all duration-300 group cursor-pointer font-semibold text-sm border border-amber-300/40"
            style={{
              boxShadow: "0 4px 24px rgba(234, 88, 12, 0.35), inset 0 1px 1px 0 rgba(255, 255, 255, 0.4)"
            }}
            aria-label="Get Free Quote"
          >
            <Calendar size={18} />
            <span>Get Free Quote</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bottom Bar (Sleek, frosted glass luxury treatment) */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/85 backdrop-blur-2xl border-t border-white/15 px-2.5 py-2 flex gap-2 items-center"
        style={{
          boxShadow: "0 -8px 24px rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)"
        }}
      >
        <button
          onClick={handleCall}
          className="flex-1 flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/15 text-white py-2 px-1 rounded-xl font-display font-bold text-[11px] active:scale-[0.97] transition-all border border-white/20"
          style={{
            boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.25)"
          }}
        >
          <Phone size={12} className="shrink-0 text-amber-400" />
          <span>Call Now</span>
        </button>
        
        <button
          onClick={handleWhatsApp}
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366]/90 hover:bg-[#25D366] text-white py-2 px-1 rounded-xl font-display font-bold text-[11px] active:scale-[0.97] transition-all border border-emerald-400/40"
          style={{
            boxShadow: "0 0 12px rgba(37, 211, 102, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)"
          }}
        >
          <MessageCircle size={12} className="fill-white shrink-0" />
          <span>WhatsApp</span>
        </button>

        <button
          onClick={handleScrollToForm}
          className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white py-2 px-1 rounded-xl font-display font-bold text-[11px] active:scale-[0.97] transition-all border border-amber-300/40"
          style={{
            boxShadow: "0 0 12px rgba(245, 158, 11, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35)"
          }}
        >
          <Calendar size={12} className="shrink-0" />
          <span>Get Quote</span>
        </button>
      </div>
    </>
  );
};
