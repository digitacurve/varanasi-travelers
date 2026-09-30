"use client";

import React from "react";
import { Phone, Mail, MapPin, ShieldCheck, Heart } from "lucide-react";
import Image from "next/image";
import { tourPackages } from "@/data/content";

export const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0B1120] text-slate-400 pt-8 pb-20 md:pt-14 md:pb-16 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Brand Header Bar - Centered without white background */}
        <div className="flex flex-col items-center text-center gap-2 pb-5 mb-6 border-b border-slate-800/80">
          <div className="flex flex-col items-center gap-1">
            <div className="relative w-36 h-16 sm:w-40 sm:h-18 md:w-48 md:h-20">
              <Image
                src="/images/logo_hd.png"
                alt="Varanasi Travelers Logo"
                fill
                sizes="(max-width: 768px) 160px, 192px"
                className="object-contain"
                priority
              />
            </div>
            <p className="text-[11px] font-medium text-slate-400">
              (A unit of <span className="text-amber-200 font-semibold">Baba Vishwanath Traders</span>)
            </p>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-amber-400 text-[10.5px] sm:text-xs font-semibold bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-amber-500/20 shadow-xs w-fit mt-1">
            <ShieldCheck size={14} className="shrink-0 text-amber-400" />
            <span>Approved by Ministry of Tourism</span>
          </div>
        </div>

        {/* 2-Column Split: Left = Our Packages, Right = Quick Navigation */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-6">
          
          {/* LEFT: Our Packages */}
          <div className="col-span-1">
            <h4 className="text-xs sm:text-sm font-display font-bold text-white uppercase tracking-wider mb-2.5">
              Our Packages
            </h4>
            <ul className="space-y-1.5 text-[11px] sm:text-xs">
              {tourPackages.map((pkg) => (
                <li key={pkg.id}>
                  <a
                    href="#packages"
                    onClick={(e) => handleLinkClick(e, "#packages")}
                    className="hover:text-amber-400 transition-colors block truncate text-slate-400 hover:text-white"
                  >
                    {pkg.name.split(":")[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Quick Navigation */}
          <div className="col-span-1 pl-2 sm:pl-0">
            <h4 className="text-xs sm:text-sm font-display font-bold text-white uppercase tracking-wider mb-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-[11px] sm:text-xs">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, "#home")}
                  className="hover:text-amber-400 transition-colors block text-slate-400 hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  onClick={(e) => handleLinkClick(e, "#why-choose-us")}
                  className="hover:text-amber-400 transition-colors block text-slate-400 hover:text-white"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  onClick={(e) => handleLinkClick(e, "#packages")}
                  className="hover:text-amber-400 transition-colors block text-slate-400 hover:text-white"
                >
                  Tour Packages
                </a>
              </li>
              <li>
                <a
                  href="#hotels"
                  onClick={(e) => handleLinkClick(e, "#hotels")}
                  className="hover:text-amber-400 transition-colors block text-slate-400 hover:text-white"
                >
                  Luxury Hotels
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleLinkClick(e, "#gallery")}
                  className="hover:text-amber-400 transition-colors block text-slate-400 hover:text-white"
                >
                  Photo Gallery
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleLinkClick(e, "#faq")}
                  className="hover:text-amber-400 transition-colors block text-slate-400 hover:text-white"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM: Contact Details Box */}
        <div 
          className="bg-slate-900/80 backdrop-blur-xl p-3.5 sm:p-5 rounded-2xl border border-amber-900/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)] mb-6"
          style={{
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)"
          }}
        >
          <h4 className="text-xs sm:text-sm font-display font-bold text-white uppercase tracking-wider mb-2.5">
            Contact Details
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-[11px] sm:text-xs">
            {/* Address */}
            <div className="flex gap-2 items-start">
              <MapPin size={14} className="text-amber-400 shrink-0 mt-0.5" />
              <span className="leading-snug text-slate-300">
                Arazi No. 153 Barema, Rameshwar, Varanasi, UP – 221405
              </span>
            </div>

            {/* Phone */}
            <div className="flex gap-2 items-center">
              <Phone size={13} className="text-amber-400 shrink-0" />
              <a href="tel:+919288100260" className="hover:text-amber-400 font-semibold text-slate-200 transition-colors">
                +91 92881 00260
              </a>
            </div>

            {/* GST */}
            <div className="flex gap-2 items-start text-slate-400">
              <ShieldCheck size={14} className="text-amber-400 shrink-0 mt-0.5" />
              <div className="leading-tight">
                <span className="text-slate-200 font-medium block">Baba Vishwanath Traders</span>
                <span className="text-[10px] text-slate-400">GSTIN: 09CVOPS2321B3ZK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Links */}
        <div className="pt-4 border-t border-slate-800 text-[10.5px] sm:text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-2.5 text-center md:text-left">
          <div>
            <span>
              © {new Date().getFullYear()} Varanasi Travelers (A unit of Baba Vishwanath Traders). All rights reserved.
            </span>
          </div>

          <div className="flex gap-3 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Cancellation</a>
          </div>

          <div className="flex items-center justify-center gap-1">
            <span>Made with</span>
            <Heart size={10} className="fill-amber-400 stroke-none" />
            <span>for spiritual seekers.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
