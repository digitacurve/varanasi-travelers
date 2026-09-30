"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../UI/Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { extendedPackages } from "@/data/extendedPackages";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [isDesktopPackagesOpen, setIsDesktopPackagesOpen] = useState(false);

  const destinationCategories = [
    { name: "All Packages", filter: "All" },
    { name: "Varanasi", filter: "Varanasi" },
    { name: "Ayodhya", filter: "Ayodhya" },
    { name: "Prayagraj", filter: "Prayagraj" },
    { name: "Ujjain", filter: "Ujjain" },
    { name: "Gaya", filter: "Gaya" },
  ];

  const handleCategoryClick = (e: React.MouseEvent, filter: string) => {
    setIsMobileMenuOpen(false);
    setIsDesktopPackagesOpen(false);
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/") {
        e.preventDefault();
        const targetElement = document.querySelector("#packages");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
        window.dispatchEvent(new CustomEvent("filter-package-category", { detail: filter }));
      } else {
        window.location.href = `/#packages`;
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDesktopPackagesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Why Us", href: "/#why-choose-us" },
    { name: "Packages", href: "/#packages", isDropdown: true },
    { name: "Hotels", href: "/#hotels" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Reviews", href: "/#reviews" },
    { name: "FAQs", href: "/#faq" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    setIsDesktopPackagesOpen(false);
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      const targetElement = document.querySelector(href.replace("/", ""));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Backdrop for closing mobile dropdown when clicking outside */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-transparent border-transparent shadow-none pointer-events-none lg:bg-slate-950/85 lg:backdrop-blur-2xl lg:shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] lg:border-b lg:border-white/10 lg:pointer-events-auto py-2 md:py-2.5"
            : "bg-slate-950/80 backdrop-blur-2xl py-2.5 md:py-4 border-b border-white/10 pointer-events-auto shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 md:px-8 flex justify-between items-center relative">
          {/* Logo */}
          <a
            href="/#home"
            className={`flex flex-col group cursor-pointer transition-all duration-300 pointer-events-auto py-0.5 ${
              isScrolled
                ? "items-start text-left"
                : "items-center lg:items-start mx-auto lg:mx-0 text-center lg:text-left"
            }`}
          >
            <div
              className={`relative transition-all duration-300 ${
                isScrolled
                  ? "w-[90px] md:w-36 h-[24px] md:h-10 drop-shadow-[0_1px_3px_rgba(255,255,255,0.85)]"
                  : "w-[130px] md:w-44 h-[50px] md:h-14"
              }`}
            >
              <Image
                src={isScrolled ? "/images/logo_transparent.png" : "/images/logo_center_new.png"}
                alt="Varanasi Travelers Logo"
                fill
                sizes="(max-width: 768px) 130px, 176px"
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? "object-left" : "object-center lg:object-left"
                }`}
                priority
              />
            </div>
            <span
              className={`text-[8.5px] md:text-[10px] font-medium text-slate-400 tracking-tight leading-tight mt-0.5 transition-all duration-300 ${
                isScrolled ? "hidden lg:block pl-0.5 text-left" : "block text-center lg:text-left"
              }`}
            >
              (A unit of <span className="font-semibold text-amber-400">Baba Vishwanath Traders</span>)
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 pointer-events-auto">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setIsDesktopPackagesOpen(true)}
                    onMouseLeave={() => setIsDesktopPackagesOpen(false)}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors duration-300 relative py-2 flex items-center gap-1"
                    >
                      {link.name}
                      <ChevronDown size={14} className="text-slate-400 group-hover:text-amber-400 transition-transform duration-200 group-hover:rotate-180" />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
                    </a>

                    {/* Desktop Hover Dropdown */}
                    {isDesktopPackagesOpen && (
                      <div 
                        className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-slate-950/95 backdrop-blur-3xl rounded-2xl border border-white/15 p-3 flex flex-col gap-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                        style={{
                          boxShadow: "0 20px 48px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.2)"
                        }}
                      >
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">
                          Filter by Destination
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {destinationCategories.map((cat) => (
                            <button
                              key={cat.name}
                              onClick={(e) => handleCategoryClick(e, cat.filter)}
                              className="text-xs px-3 py-1.5 rounded-full bg-white/[0.08] hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 hover:text-white text-slate-200 font-medium transition-all duration-200 border border-white/10 hover:border-amber-400/40 cursor-pointer flex items-center gap-1.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                              {cat.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors duration-300 relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4 pointer-events-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => (window.location.href = "tel:+919288100260")}
              icon={<Phone size={14} />}
            >
              Call +91 92881 00260
            </Button>
            <Button
              variant="solid"
              size="sm"
              onClick={() => {
                const formElement = document.getElementById("inquiry-form-section");
                if (formElement) formElement.scrollIntoView({ behavior: "smooth" });
              }}
              icon={<ArrowUpRight size={14} />}
            >
              Plan Free Tour
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden pointer-events-auto transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center ${
              isScrolled
                ? "w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-accent-orange text-white shadow-lg shadow-orange-500/40 border border-white/30"
                : "p-1.5 text-white hover:text-amber-400 absolute right-3.5 top-1/2 -translate-y-1/2"
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X size={18} className={isScrolled ? "stroke-[2.5]" : "stroke-[2]"} />
            ) : (
              <Menu size={18} className={isScrolled ? "stroke-[2.5]" : "stroke-[2]"} />
            )}
          </button>
        </div>

        {/* Mobile Floating Dropdown Popover Card (Compact & neatly styled) */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden absolute right-3.5 top-full mt-2 w-[280px] sm:w-[310px] bg-slate-950/95 backdrop-blur-3xl rounded-3xl border border-white/15 p-4 max-h-[82vh] overflow-y-auto pointer-events-auto z-50 animate-in fade-in zoom-in-95 duration-200"
            style={{
              boxShadow: "0 24px 48px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.2)"
            }}
          >
            
            {/* Packages Accordion Section */}
            <div className="mb-2">
              <button
                onClick={() => setIsPackagesOpen(!isPackagesOpen)}
                className="w-full flex items-center justify-between px-2 py-1.5 rounded-xl text-base font-bold text-white hover:bg-white/5 transition-colors select-none"
              >
                <span className="font-display tracking-tight text-white">Packages</span>
                {isPackagesOpen ? (
                  <ChevronUp size={16} className="text-amber-400" />
                ) : (
                  <ChevronDown size={16} className="text-slate-400" />
                )}
              </button>

              {isPackagesOpen && (
                <div className="pt-2 pb-1.5 px-1.5 flex flex-wrap gap-1.5 border-l-2 border-amber-500/40 ml-3.5 mt-1">
                  {destinationCategories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={(e) => handleCategoryClick(e, cat.filter)}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/[0.08] hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 hover:text-white text-slate-200 font-medium transition-all duration-200 border border-white/10 active:scale-95 cursor-pointer flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            <div className="border-t border-white/10 pt-2 flex flex-col gap-0.5">
              <a
                href="/#home"
                onClick={(e) => handleNavClick(e, "/#home")}
                className="text-xs font-semibold text-slate-300 hover:text-amber-400 hover:bg-white/5 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                Home
              </a>
              <a
                href="/#why-choose-us"
                onClick={(e) => handleNavClick(e, "/#why-choose-us")}
                className="text-xs font-semibold text-slate-300 hover:text-amber-400 hover:bg-white/5 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                Why Choose Us
              </a>
              <a
                href="/#hotels"
                onClick={(e) => handleNavClick(e, "/#hotels")}
                className="text-xs font-semibold text-slate-300 hover:text-amber-400 hover:bg-white/5 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                Luxury Hotels
              </a>
              <a
                href="/#gallery"
                onClick={(e) => handleNavClick(e, "/#gallery")}
                className="text-xs font-semibold text-slate-300 hover:text-amber-400 hover:bg-white/5 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                Photo Gallery
              </a>
              <a
                href="/#reviews"
                onClick={(e) => handleNavClick(e, "/#reviews")}
                className="text-xs font-semibold text-slate-300 hover:text-amber-400 hover:bg-white/5 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                Reviews
              </a>
              <a
                href="/#faq"
                onClick={(e) => handleNavClick(e, "/#faq")}
                className="text-xs font-semibold text-slate-300 hover:text-amber-400 hover:bg-white/5 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                FAQs
              </a>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-white/10">
              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.location.href = "tel:+919288100260";
                }}
                icon={<Phone size={13} />}
              >
                Call +91 92881 00260
              </Button>
              <Button
                variant="solid"
                size="sm"
                fullWidth
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const formElement = document.getElementById("inquiry-form-section");
                  if (formElement) formElement.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Plan Free Tour
              </Button>
            </div>

          </div>
        )}
      </header>
    </>
  );
};
