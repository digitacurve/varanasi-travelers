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
  const [isPackagesOpen, setIsPackagesOpen] = useState(true);
  const [isDesktopPackagesOpen, setIsDesktopPackagesOpen] = useState(false);

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
            ? "bg-transparent border-transparent shadow-none pointer-events-none lg:bg-white/80 lg:backdrop-blur-md lg:shadow-sm lg:border-b lg:border-slate-100/70 lg:pointer-events-auto py-2 md:py-2.5"
            : "bg-white py-2.5 md:py-4 border-b border-transparent pointer-events-auto"
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
                  : "w-[130px] md:w-44 h-[38px] md:h-12"
              }`}
            >
              <Image
                src="/images/logo_transparent.png"
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
              className={`text-[8.5px] md:text-[10px] font-medium text-slate-500 tracking-tight leading-tight mt-0.5 transition-all duration-300 ${
                isScrolled ? "hidden lg:block pl-0.5 text-left" : "block text-center lg:text-left"
              }`}
            >
              (A unit of <span className="font-semibold text-slate-700">Baba Vishwanath Traders</span>)
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
                      className="text-sm font-semibold text-slate-600 hover:text-accent-orange transition-colors duration-300 relative py-2 flex items-center gap-1"
                    >
                      {link.name}
                      <ChevronDown size={14} className="text-slate-400 group-hover:text-accent-orange transition-transform duration-200 group-hover:rotate-180" />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-orange transition-all duration-300 group-hover:w-full" />
                    </a>

                    {/* Desktop Hover Dropdown */}
                    {isDesktopPackagesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 flex flex-col gap-1 z-50 animate-in fade-in zoom-in-95 duration-150">
                        <a
                          href="/#packages"
                          onClick={(e) => handleNavClick(e, "/#packages")}
                          className="text-xs font-bold text-accent-orange hover:bg-orange-50 px-3 py-2 rounded-xl flex items-center gap-1.5 transition-colors"
                        >
                          ⚡ View All Packages
                        </a>
                        <div className="border-t border-slate-100 my-1 pt-1 max-h-80 overflow-y-auto">
                          {extendedPackages.map((pkg) => {
                            const slug = pkg.id.replace("-tour-package", "");
                            const href = `/packages/${slug}`;
                            const isActive = pathname === href;
                            return (
                              <Link
                                key={pkg.id}
                                href={href}
                                className={`text-xs px-3 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                                  isActive
                                    ? "text-accent-orange font-bold bg-orange-50/70"
                                    : "text-slate-600 hover:text-accent-orange hover:bg-slate-50 font-medium"
                                }`}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? "bg-accent-orange" : "bg-slate-300"}`} />
                                <span className="truncate">{pkg.name} ({pkg.duration.split("/")[0].trim()})</span>
                              </Link>
                            );
                          })}
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
                  className="text-sm font-semibold text-slate-600 hover:text-accent-orange transition-colors duration-300 relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-orange transition-all duration-300 group-hover:w-full" />
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
                : "p-1.5 text-dark-slate hover:text-accent-orange absolute right-3.5 top-1/2 -translate-y-1/2"
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

        {/* Mobile Floating Dropdown Popover Card (Compact & neatly styled like screenshot) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute right-3.5 top-full mt-2 w-[280px] sm:w-[310px] bg-white rounded-3xl shadow-[0_16px_40px_rgba(15,23,42,0.18)] border border-slate-100 p-4 max-h-[82vh] overflow-y-auto pointer-events-auto z-50 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Packages Accordion Section */}
            <div className="mb-2">
              <button
                onClick={() => setIsPackagesOpen(!isPackagesOpen)}
                className="w-full flex items-center justify-between px-2 py-1.5 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-50 transition-colors select-none"
              >
                <span className="font-display tracking-tight text-slate-900">Packages</span>
                {isPackagesOpen ? (
                  <ChevronUp size={16} className="text-slate-600" />
                ) : (
                  <ChevronDown size={16} className="text-slate-600" />
                )}
              </button>

              {isPackagesOpen && (
                <div className="pl-2 pr-1 pt-1 pb-1 flex flex-col gap-1 border-l-2 border-orange-200 ml-3.5 mt-1">
                  {/* View All Packages */}
                  <a
                    href="/#packages"
                    onClick={(e) => handleNavClick(e, "/#packages")}
                    className="flex items-center gap-1.5 text-xs font-bold text-accent-orange hover:text-orange-600 px-2 py-1.5 rounded-lg hover:bg-orange-50/70 transition-colors"
                  >
                    <span>⚡ View All Packages</span>
                  </a>

                  {/* List of all packages with dots & links */}
                  {extendedPackages.map((pkg) => {
                    const slug = pkg.id.replace("-tour-package", "");
                    const href = `/packages/${slug}`;
                    const isActive = pathname === href;

                    return (
                      <Link
                        key={pkg.id}
                        href={href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-[12.5px] leading-snug px-2 py-1.5 rounded-lg transition-colors flex items-center gap-2 ${
                          isActive
                            ? "text-accent-orange font-bold bg-orange-50/80"
                            : "text-slate-700 hover:text-accent-orange hover:bg-slate-50 font-normal"
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? "bg-accent-orange" : "bg-slate-400"}`} />
                        <span className="truncate">{pkg.name} ({pkg.duration.split("/")[0].trim()})</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            <div className="border-t border-slate-100 pt-2 flex flex-col gap-0.5">
              <a
                href="/#home"
                onClick={(e) => handleNavClick(e, "/#home")}
                className="text-xs font-semibold text-slate-700 hover:text-accent-orange hover:bg-slate-50 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                Home
              </a>
              <a
                href="/#why-choose-us"
                onClick={(e) => handleNavClick(e, "/#why-choose-us")}
                className="text-xs font-semibold text-slate-700 hover:text-accent-orange hover:bg-slate-50 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                Why Choose Us
              </a>
              <a
                href="/#hotels"
                onClick={(e) => handleNavClick(e, "/#hotels")}
                className="text-xs font-semibold text-slate-700 hover:text-accent-orange hover:bg-slate-50 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                Luxury Hotels
              </a>
              <a
                href="/#gallery"
                onClick={(e) => handleNavClick(e, "/#gallery")}
                className="text-xs font-semibold text-slate-700 hover:text-accent-orange hover:bg-slate-50 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                Photo Gallery
              </a>
              <a
                href="/#reviews"
                onClick={(e) => handleNavClick(e, "/#reviews")}
                className="text-xs font-semibold text-slate-700 hover:text-accent-orange hover:bg-slate-50 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                Reviews
              </a>
              <a
                href="/#faq"
                onClick={(e) => handleNavClick(e, "/#faq")}
                className="text-xs font-semibold text-slate-700 hover:text-accent-orange hover:bg-slate-50 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                FAQs
              </a>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-slate-100">
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
