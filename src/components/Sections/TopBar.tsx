"use client";

import React from "react";
import { Phone, MessageCircle, ShieldCheck, Clock } from "lucide-react";

export const TopBar: React.FC = () => {
  return (
    <div className="bg-dark-slate text-slate-300 border-b border-slate-800 text-xs py-2 px-4 md:px-8 hidden sm:block">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
        {/* Left Side: Trust badges */}
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5 text-accent-orange font-semibold">
            <ShieldCheck size={14} className="stroke-[2.5]" />
            <span>Govt Approved & GST Registered • Baba Vishwanath Traders</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <Clock size={14} />
            <span>24x7 On-Trip Support</span>
          </span>
        </div>

        {/* Right Side: Direct Contacts */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+919288100260"
            className="flex items-center gap-1.5 hover:text-accent-orange transition-colors duration-300"
          >
            <Phone size={14} className="text-accent-orange" />
            <span className="font-semibold text-white">+91 92881 00260</span>
          </a>
          <a
            href="https://wa.me/919288100260"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors duration-300"
          >
            <MessageCircle size={14} className="text-[#25D366] fill-[#25D366]/10" />
            <span className="font-semibold text-white">Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
