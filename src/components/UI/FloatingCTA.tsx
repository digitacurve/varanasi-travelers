"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingCTA: React.FC = () => {
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
    window.location.href = "tel:+919876543210";
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello! I am planning a pilgrimage tour to Varanasi, Ayodhya & Prayagraj. Please share customized package details."
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
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

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-[0_-4px_20px_rgba(15,23,42,0.05)] px-4 py-3 flex gap-3">
        <button
          onClick={handleCall}
          className="flex-1 flex items-center justify-center gap-2 bg-dark-slate text-white py-3.5 rounded-2xl font-display font-semibold text-sm shadow-[0_4px_12px_rgba(15,23,42,0.15)] active:scale-[0.98] transition-transform"
        >
          <Phone size={16} />
          <span>Call Now</span>
        </button>
        <button
          onClick={handleWhatsApp}
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-2xl font-display font-semibold text-sm shadow-[0_4px_12px_rgba(37,211,102,0.2)] active:scale-[0.98] transition-transform"
        >
          <MessageCircle size={16} className="fill-white" />
          <span>WhatsApp</span>
        </button>
      </div>
    </>
  );
};
