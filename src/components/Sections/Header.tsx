"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "../UI/Button";
import Image from "next/image";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Why Us", href: "/#why-choose-us" },
    { name: "Packages", href: "/#packages" },
    { name: "Hotels", href: "/#hotels" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Reviews", href: "/#reviews" },
    { name: "FAQs", href: "/#faq" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const targetElement = document.querySelector(href.replace("/", ""));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-2 md:py-3 border-b border-slate-100"
          : "bg-white/95 py-2.5 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group cursor-pointer p-1 md:p-3 transition-colors duration-300">
          <div className="relative w-[130px] md:w-44 h-[42px] md:h-14">
            <Image
              src="/images/logo_transparent.png"
              alt="Varanasi Travelers Logo"
              fill
              sizes="(max-width: 768px) 130px, 176px"
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-semibold text-slate-600 hover:text-accent-orange transition-colors duration-300 relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-orange transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
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
          className="lg:hidden p-2 text-dark-slate hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-6 space-y-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold text-slate-700 hover:text-accent-orange transition-colors py-2 border-b border-slate-50"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-2">
            <Button
              variant="outline"
              fullWidth
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.location.href = "tel:+919288100260";
              }}
              icon={<Phone size={16} />}
            >
              Call +91 92881 00260
            </Button>
            <Button
              variant="solid"
              fullWidth
              onClick={() => {
                setIsMobileMenuOpen(false);
                const formElement = document.getElementById("inquiry-form-section");
                if (formElement) formElement.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
