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
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Agency Brand */}
          <div className="space-y-4">
            <div className="bg-white px-3 py-2 rounded-xl inline-block w-fit">
              <div className="relative w-32 h-10">
                <Image
                  src="/images/logo_transparent.png"
                  alt="Varanasi Travelers Logo"
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              India's premier spiritual travel agency. We are committed to organizing safe, dignified, and comfortable temple tours across Varanasi, Ayodhya, and Prayagraj for families.
            </p>
            <div className="flex items-center gap-2 text-accent-orange text-xs font-semibold bg-slate-800/40 p-3 rounded-2xl border border-slate-800 inline-block">
              <ShieldCheck size={16} className="shrink-0" />
              <span>Approved by Ministry of Tourism</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, "#home")}
                  className="hover:text-accent-orange transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  onClick={(e) => handleLinkClick(e, "#why-choose-us")}
                  className="hover:text-accent-orange transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  onClick={(e) => handleLinkClick(e, "#packages")}
                  className="hover:text-accent-orange transition-colors"
                >
                  Tour Packages
                </a>
              </li>
              <li>
                <a
                  href="#hotels"
                  onClick={(e) => handleLinkClick(e, "#hotels")}
                  className="hover:text-accent-orange transition-colors"
                >
                  Luxury Hotels
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleLinkClick(e, "#gallery")}
                  className="hover:text-accent-orange transition-colors"
                >
                  Photo Gallery
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleLinkClick(e, "#faq")}
                  className="hover:text-accent-orange transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Tour Packages */}
          <div>
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-4">
              Our Packages
            </h4>
            <ul className="space-y-2 text-xs">
              {tourPackages.map((pkg) => (
                <li key={pkg.id}>
                  <a
                    href="#packages"
                    onClick={(e) => handleLinkClick(e, "#packages")}
                    className="hover:text-accent-orange transition-colors block truncate"
                  >
                    {pkg.name.split(":")[0]} ({pkg.duration})
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div>
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-4">
              Contact Details
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="text-accent-orange shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Arazi No. 153 Barema,<br />
                  Rameshwar, Varanasi,<br />
                  Uttar Pradesh – 221405
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <Phone size={14} className="text-accent-orange shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919288100260" className="hover:text-white transition-colors">
                    +91 92881 00260
                  </a>
                </div>
              </li>
              <li className="flex gap-2 items-center text-slate-400">
                <ShieldCheck size={14} className="text-accent-orange shrink-0" />
                <span>GSTIN: 09CVOPS2321B3ZK</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Links */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span>
              © {new Date().getFullYear()} Divine Pilgrimages. All rights reserved.
            </span>
          </div>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Cancellation Rules</a>
          </div>

          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart size={10} className="fill-accent-orange stroke-none" />
            <span>for spiritual seekers.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
