"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnnouncementTicker } from "@/components/Sections/AnnouncementTicker";
import { Header } from "@/components/Sections/Header";
import { Hero } from "@/components/Sections/Hero";
import { WhyChoose } from "@/components/Sections/WhyChoose";
import { Packages } from "@/components/Sections/Packages";
import { Inclusions } from "@/components/Sections/Inclusions";
import { Hotels } from "@/components/Sections/Hotels";
import { Transport } from "@/components/Sections/Transport";
import { Gallery } from "@/components/Sections/Gallery";
import { Reviews } from "@/components/Sections/Reviews";
import { FAQ } from "@/components/Sections/FAQ";
import { FinalCTA } from "@/components/Sections/FinalCTA";
import { Footer } from "@/components/Sections/Footer";
import { FloatingCTA } from "@/components/UI/FloatingCTA";
import { Form } from "@/components/UI/Form";
import { Star, Shield, Users, Phone } from "lucide-react";
import { tourPackages } from "@/data/content";

export default function Home() {
  const [selectedPackageId, setSelectedPackageId] = useState("ayodhya-varanasi-prayagraj");
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the ambient section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Responsive state to preserve 60 FPS on low-end mobile devices
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animating coordinates for Arrow 1 (diagonal descent left-to-right)
  const arrow1X = useTransform(scrollYProgress, [0.0, 0.45], ["-30vw", "130vw"]);
  const arrow1Y = useTransform(scrollYProgress, [0.0, 0.45], ["0px", "220px"]);
  const arrow1Opacity = useTransform(scrollYProgress, [0.0, 0.05, 0.4, 0.45], [0, 1, 1, 0]);

  // Animating coordinates for Arrow 2 (diagonal ascent right-to-left)
  const arrow2X = useTransform(scrollYProgress, [0.28, 0.72], ["130vw", "-30vw"]);
  const arrow2Y = useTransform(scrollYProgress, [0.28, 0.72], ["120px", "-60px"]);
  const arrow2Opacity = useTransform(scrollYProgress, [0.28, 0.33, 0.67, 0.72], [0, 1, 1, 0]);

  // Animating coordinates for Arrow 3 (diagonal descent left-to-right)
  const arrow3X = useTransform(scrollYProgress, [0.55, 0.95], ["-30vw", "130vw"]);
  const arrow3Y = useTransform(scrollYProgress, [0.55, 0.95], ["-60px", "160px"]);
  const arrow3Opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.9, 0.95], [0, 1, 1, 0]);
 
  const handleSelectPackage = (pkgId: string) => {
    setSelectedPackageId(pkgId);
  };

  // Structured Schema.org markup for TravelAgency and Tour package listing
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://divinejourneys.in/#agency",
        "name": "Divine Pilgrimages India",
        "image": "https://images.unsplash.com/photo-1561361513-2d000a50f0db?auto=format&fit=crop&q=80&w=800",
        "description": "Premium travel agency offering custom pilgrimage tour packages to Varanasi, Ayodhya, and Prayagraj with VIP Darshan and luxury hotels.",
        "telephone": "+91-9288100260",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Vishwanath Corridor Rd, near Dashashwamedh Ghat",
          "addressLocality": "Varanasi",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "221001",
          "addressCountry": "IN"
        },
        "priceRange": "$$",
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Varanasi" },
          { "@type": "AdministrativeArea", "name": "Ayodhya" },
          { "@type": "AdministrativeArea", "name": "Prayagraj" }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1248"
        }
      },
      ...tourPackages.map((pkg) => ({
        "@type": "TouristTrip",
        "@id": `https://divinejourneys.in/#trip-${pkg.id}`,
        "name": pkg.name,
        "description": pkg.description,
        "touristType": "Pilgrim",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": (pkg.startingPrice || 0).toString(),
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "value": 1,
            "unitText": "Person"
          }
        },
        "subTrip": pkg.destinations.map((dest) => ({
          "@type": "TouristTrip",
          "name": dest
        }))
      }))
    ]
  };

  return (
    <>
      {/* Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="flex flex-col min-h-screen">
        {/* Header and Top Utilities */}
        <AnnouncementTicker />
        <Header />

        {/* Main Content Layout */}
        <main className="flex-grow">
          {/* Hero section containing split landing & form */}
          <Hero
            selectedPackageId={selectedPackageId}
            onSelectPackage={handleSelectPackage}
          />

          {/* Continuous ambient background container starting from Enquiry Form to FAQ */}
          <div ref={containerRef} className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FFF7EE] to-[#FFF4E6] w-full border-t border-orange-100/40">
            {/* Style Injector for large neon saffron ambient glow layers */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes auraBreathA {
                0% { transform: translate(0, 0) scale(1); opacity: 0.32; }
                50% { transform: translate(-12px, 16px) scale(1.06); opacity: 0.44; }
                100% { transform: translate(0, 0) scale(1); opacity: 0.32; }
              }
              @keyframes auraBreathB {
                0% { transform: translate(0, 0) scale(1.06); opacity: 0.44; }
                50% { transform: translate(16px, -10px) scale(1); opacity: 0.28; }
                100% { transform: translate(0, 0) scale(1.06); opacity: 0.44; }
              }
              @keyframes auraBreathC {
                0% { transform: translate(0, 0) scale(1); opacity: 0.28; }
                50% { transform: translate(-10px, -15px) scale(1.05); opacity: 0.42; }
                100% { transform: translate(0, 0) scale(1); opacity: 0.28; }
              }

              .ambient-glow-aura {
                position: absolute;
                border-radius: 50%;
                pointer-events: none;
                z-index: 0;
                mix-blend-mode: screen;
                filter: blur(280px);
                width: 700px;
                height: 700px;
              }

              .glow-1 {
                top: 2%;
                left: -150px;
                background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,213,79,0.5) 20%, rgba(255,176,0,0.4) 50%, rgba(255,106,0,0.3) 100%);
                animation: auraBreathA 10s ease-in-out infinite;
              }
              .glow-2 {
                top: 16%;
                right: -200px;
                background: radial-gradient(circle, rgba(255,213,79,0.4) 0%, rgba(255,140,0,0.5) 40%, rgba(255,106,0,0.3) 100%);
                animation: auraBreathB 8s ease-in-out infinite;
                width: 800px;
                height: 800px;
              }
              .glow-3 {
                top: 36%;
                left: -200px;
                background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,176,0,0.4) 30%, rgba(255,106,0,0.3) 100%);
                animation: auraBreathC 12s ease-in-out infinite;
                width: 750px;
                height: 750px;
              }
              .glow-4 {
                top: 54%;
                right: -150px;
                background: radial-gradient(circle, rgba(255,213,79,0.45) 0%, rgba(255,140,0,0.4) 50%, rgba(255,106,0,0.3) 100%);
                animation: auraBreathA 9s ease-in-out infinite;
                width: 700px;
                height: 700px;
              }
              .glow-5 {
                top: 70%;
                left: -150px;
                background: radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,176,0,0.45) 30%, rgba(255,106,0,0.3) 100%);
                animation: auraBreathB 11s ease-in-out infinite;
                width: 780px;
                height: 780px;
              }
              .glow-6 {
                top: 86%;
                right: -200px;
                background: radial-gradient(circle, rgba(255,213,79,0.4) 0%, rgba(255,140,0,0.5) 45%, rgba(255,106,0,0.3) 100%);
                animation: auraBreathC 10s ease-in-out infinite;
                width: 800px;
                height: 800px;
              }
            `}} />

            {/* Glowing background entities */}
            <div className="ambient-glow-aura glow-1" />
            <div className="ambient-glow-aura glow-2" />
            <div className="ambient-glow-aura glow-3" />
            <div className="ambient-glow-aura glow-4" />
            <div className="ambient-glow-aura glow-5" />
            <div className="ambient-glow-aura glow-6" />

            {/* Divine Arrows Scroll Animation Layer (disabled on mobile for 60fps performance) */}
            {!isMobile && mounted && (
              <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                
                {/* Arrow 1: Upper-middle diagonal fly */}
                <motion.div
                  style={{
                    x: arrow1X,
                    y: arrow1Y,
                    opacity: arrow1Opacity,
                    top: "16%"
                  }}
                  className="absolute left-0 pointer-events-none transform rotate-[12deg] filter blur-[0.3px]"
                >
                  <svg width="240" height="50" viewBox="0 0 220 40" fill="none" className="drop-shadow-[0_0_15px_rgba(255,106,0,0.75)]">
                    <defs>
                      <linearGradient id="arrowGrad1" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.0" />
                        <stop offset="40%" stopColor="#FF7F11" stopOpacity="0.4" />
                        <stop offset="85%" stopColor="#FFC107" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#FFF" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    <path d="M 10 20 L 175 20" stroke="url(#arrowGrad1)" strokeWidth="3" strokeLinecap="round" strokeDasharray="10,5" />
                    <line x1="110" y1="20" x2="195" y2="20" stroke="#FFC107" strokeWidth="2.5" />
                    <path d="M 195 14 L 214 20 L 195 26 Z" fill="#FF6A00" stroke="#FFC107" strokeWidth="1.2" />
                    <path d="M 110 20 L 98 12 L 104 20 L 98 28 Z" fill="#FF7F11" />
                    <path d="M 120 20 L 110 14 L 115 20 L 110 26 Z" fill="#FFC107" />
                  </svg>
                </motion.div>

                {/* Arrow 2: Middle-lower reverse diagonal fly */}
                <motion.div
                  style={{
                    x: arrow2X,
                    y: arrow2Y,
                    opacity: arrow2Opacity,
                    top: "48%"
                  }}
                  className="absolute left-0 pointer-events-none scale-x-[-1] rotate-[-8deg] filter blur-[0.3px]"
                >
                  <svg width="240" height="50" viewBox="0 0 220 40" fill="none" className="drop-shadow-[0_0_15px_rgba(255,127,17,0.75)]">
                    <defs>
                      <linearGradient id="arrowGrad2" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#FF7F11" stopOpacity="0.0" />
                        <stop offset="40%" stopColor="#FF6A00" stopOpacity="0.4" />
                        <stop offset="85%" stopColor="#FFD54F" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#FFF" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    <path d="M 10 20 L 175 20" stroke="url(#arrowGrad2)" strokeWidth="3" strokeLinecap="round" strokeDasharray="10,5" />
                    <line x1="110" y1="20" x2="195" y2="20" stroke="#FFD54F" strokeWidth="2.5" />
                    <path d="M 195 14 L 214 20 L 195 26 Z" fill="#FF7F11" stroke="#FFD54F" strokeWidth="1.2" />
                    <path d="M 110 20 L 98 12 L 104 20 L 98 28 Z" fill="#FF6A00" />
                    <path d="M 120 20 L 110 14 L 115 20 L 110 26 Z" fill="#FFD54F" />
                  </svg>
                </motion.div>

                {/* Arrow 3: Bottom-most diagonal fly */}
                <motion.div
                  style={{
                    x: arrow3X,
                    y: arrow3Y,
                    opacity: arrow3Opacity,
                    top: "76%"
                  }}
                  className="absolute left-0 pointer-events-none rotate-[16deg] filter blur-[0.3px]"
                >
                  <svg width="240" height="50" viewBox="0 0 220 40" fill="none" className="drop-shadow-[0_0_15px_rgba(255,106,0,0.75)]">
                    <defs>
                      <linearGradient id="arrowGrad3" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.0" />
                        <stop offset="40%" stopColor="#FFC107" stopOpacity="0.4" />
                        <stop offset="85%" stopColor="#FF7F11" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#FFF" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    <path d="M 10 20 L 175 20" stroke="url(#arrowGrad3)" strokeWidth="3" strokeLinecap="round" strokeDasharray="10,5" />
                    <line x1="110" y1="20" x2="195" y2="20" stroke="#FF7F11" strokeWidth="2.5" />
                    <path d="M 195 14 L 214 20 L 195 26 Z" fill="#FF6A00" stroke="#FFC107" strokeWidth="1.2" />
                    <path d="M 110 20 L 98 12 L 104 20 L 98 28 Z" fill="#FFC107" />
                    <path d="M 120 20 L 110 14 L 115 20 L 110 26 Z" fill="#FF7F11" />
                  </svg>
                </motion.div>

              </div>
            )}

            {/* Layout content wrapper */}
            <div className="relative z-10 w-full">
              {/* Inquiry Form Section directly below Hero */}
              <section id="inquiry-form-section" className="py-16 md:py-24 bg-transparent border-b border-orange-100/30 relative overflow-hidden">
                {/* Saffron soft radial glow effects and faint mandalas rendered client-side only to prevent hydration warnings */}
                {mounted && (
                  <>
                    <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full filter blur-[120px] pointer-events-none z-0" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-orange/5 rounded-full filter blur-[150px] pointer-events-none z-0" />
                    
                    {/* Faint elegant mandala SVG in background top-right */}
                    <div className="absolute right-[-100px] top-1/4 opacity-[0.03] text-accent-orange pointer-events-none select-none z-0">
                      <svg width="450" height="450" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.5">
                        <circle cx="60" cy="60" r="10" />
                        <circle cx="60" cy="60" r="25" strokeDasharray="2,2" />
                        <circle cx="60" cy="60" r="40" />
                        <circle cx="60" cy="60" r="55" strokeDasharray="4,4" />
                        {Array.from({ length: 12 }).map((_, i) => {
                          const angle = (i * 30 * Math.PI) / 180;
                          return (
                            <line
                              key={i}
                              x1={60 + 10 * Math.cos(angle)}
                              y1={60 + 10 * Math.sin(angle)}
                              x2={60 + 55 * Math.cos(angle)}
                              y2={60 + 55 * Math.sin(angle)}
                            />
                          );
                        })}
                        {Array.from({ length: 24 }).map((_, i) => {
                          const angle = (i * 15 * Math.PI) / 180;
                          return <circle key={i} cx={60 + 40 * Math.cos(angle)} cy={60 + 40 * Math.sin(angle)} r="1" fill="currentColor" />;
                        })}
                      </svg>
                    </div>

                    {/* Faint elegant mandala SVG in background bottom-left */}
                    <div className="absolute left-[-150px] bottom-10 opacity-[0.02] text-accent-orange pointer-events-none select-none z-0">
                      <svg width="450" height="450" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.5">
                        <circle cx="60" cy="60" r="10" />
                        <circle cx="60" cy="60" r="25" strokeDasharray="2,2" />
                        <circle cx="60" cy="60" r="40" />
                        <circle cx="60" cy="60" r="55" strokeDasharray="4,4" />
                        {Array.from({ length: 12 }).map((_, i) => {
                          const angle = (i * 30 * Math.PI) / 180;
                          return (
                            <line
                              key={i}
                              x1={60 + 10 * Math.cos(angle)}
                              y1={60 + 10 * Math.sin(angle)}
                              x2={60 + 55 * Math.cos(angle)}
                              y2={60 + 55 * Math.sin(angle)}
                            />
                          );
                        })}
                        {Array.from({ length: 24 }).map((_, i) => {
                          const angle = (i * 15 * Math.PI) / 180;
                          return <circle key={i} cx={60 + 40 * Math.cos(angle)} cy={60 + 40 * Math.sin(angle)} r="1" fill="currentColor" />;
                        })}
                      </svg>
                    </div>
                  </>
                )}

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-12 lg:gap-x-16 items-start">
                    
                    {/* Left Column: White Glassmorphism Form Card (5 cols on desktop) */}
                    <div className="col-span-1 lg:col-span-5 row-start-1 lg:row-start-1 flex justify-center lg:justify-start w-full relative z-10">
                      <Form defaultPackageId={selectedPackageId} hideHeader />
                    </div>

                    {/* Explore Our Most Popular Spiritual Tour Packages: displayed after Form on mobile, below Row 1 on desktop */}
                    <div className="col-span-1 lg:col-span-12 row-start-2 lg:row-start-2 w-full relative z-10">
                      <Packages onSelectPackage={handleSelectPackage} noPadding />
                    </div>

                    {/* Right Column: Heading, descriptions, gold accents, and trust cards (7 cols on desktop) */}
                    <div className="col-span-1 lg:col-span-7 row-start-3 lg:row-start-1 space-y-8 text-left relative z-10">
                      {/* Subtle Saffron Badge */}
                      <div>
                        <span className="text-xs uppercase font-bold text-accent-orange bg-orange-50 border border-orange-100 px-3.5 py-1.5 rounded-full inline-block tracking-wider shadow-sm">
                          Instant Custom Quote
                        </span>
                      </div>

                      {/* Section Heading & Subtitle */}
                      <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
                          Plan Your <span className="text-accent-orange">Spiritual Journey</span>
                        </h2>
                        {/* Subtle gold line accent */}
                        <div className="h-1 w-20 bg-gradient-to-r from-accent-orange to-amber-500 rounded-full" />
                        <p className="text-base text-slate-600 max-w-xl leading-relaxed">
                          Share your travel preferences and receive a custom-tailored package estimate. Our local pilgrimage experts will design the perfect itinerary with handpicked hotels, private transport, and seamless VIP Darshan.
                        </p>
                      </div>

                      {/* Trust Indicators Grid with luxury medallion icons, cream backgrounds, and subtle hover animations */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                        {/* Google Rating */}
                        <div className="flex items-start gap-4 bg-[#FFFDF9]/95 backdrop-blur-sm p-5 rounded-2xl border border-orange-100/60 shadow-[0_12px_32px_rgba(249,115,22,0.04)] shadow-orange-950/[0.01] transition-all duration-300 hover:shadow-xl hover:shadow-orange-950/[0.04] hover:border-orange-200 hover:-translate-y-1 cursor-default">
                          <div className="bg-gradient-to-br from-amber-400 via-accent-orange to-orange-600 text-white p-3 rounded-full shrink-0 shadow-[0_4px_12px_rgba(249,115,22,0.2)] flex items-center justify-center">
                            <Star className="fill-white stroke-white" size={20} />
                          </div>
                          <div>
                            <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide">4.9/5 Google Rated</h4>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Highly recommended for family and senior citizen care.</p>
                          </div>
                        </div>

                        {/* GST Registered */}
                        <div className="flex items-start gap-4 bg-[#FFFDF9]/95 backdrop-blur-sm p-5 rounded-2xl border border-orange-100/60 shadow-[0_12px_32px_rgba(249,115,22,0.04)] shadow-orange-950/[0.01] transition-all duration-300 hover:shadow-xl hover:shadow-orange-950/[0.04] hover:border-orange-200 hover:-translate-y-1 cursor-default">
                          <div className="bg-gradient-to-br from-amber-400 via-accent-orange to-orange-600 text-white p-3 rounded-full shrink-0 shadow-[0_4px_12px_rgba(249,115,22,0.2)] flex items-center justify-center">
                            <Shield size={20} />
                          </div>
                          <div>
                            <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide">GST Registered Agency</h4>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">100% transparent invoicing with zero hidden charges.</p>
                          </div>
                        </div>

                        {/* Happy Travellers */}
                        <div className="flex items-start gap-4 bg-[#FFFDF9]/95 backdrop-blur-sm p-5 rounded-2xl border border-orange-100/60 shadow-[0_12px_32px_rgba(249,115,22,0.04)] shadow-orange-950/[0.01] transition-all duration-300 hover:shadow-xl hover:shadow-orange-950/[0.04] hover:border-orange-200 hover:-translate-y-1 cursor-default">
                          <div className="bg-gradient-to-br from-amber-400 via-accent-orange to-orange-600 text-white p-3 rounded-full shrink-0 shadow-[0_4px_12px_rgba(249,115,22,0.2)] flex items-center justify-center">
                            <Users size={20} />
                          </div>
                          <div>
                            <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide">12,000+ Happy Pilgrims</h4>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Memorable spiritual journeys designed for families.</p>
                          </div>
                        </div>

                        {/* 24x7 Assistance */}
                        <div className="flex items-start gap-4 bg-[#FFFDF9]/95 backdrop-blur-sm p-5 rounded-2xl border border-orange-100/60 shadow-[0_12px_32px_rgba(249,115,22,0.04)] shadow-orange-950/[0.01] transition-all duration-300 hover:shadow-xl hover:shadow-orange-950/[0.04] hover:border-orange-200 hover:-translate-y-1 cursor-default">
                          <div className="bg-gradient-to-br from-amber-400 via-accent-orange to-orange-600 text-white p-3 rounded-full shrink-0 shadow-[0_4px_12px_rgba(249,115,22,0.2)] flex items-center justify-center">
                            <Phone size={20} />
                          </div>
                          <div>
                            <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide">24/7 On-Trip Support</h4>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">On-ground assistance for rituals, darshans & queries.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Trust credentials / Core indicators */}
              <WhyChoose />

              {/* Standard inclusions details comparison */}
              <Inclusions />

              {/* Selected Hotel Categories */}
              <Hotels />

              {/* Sanitized Chauffeur Transport */}
              <Transport />

              {/* Lightboxed Masonry Gallery */}
              <Gallery />

              {/* Google Style pilgrim reviews */}
              <Reviews />

              {/* Collapsible FAQ accordion */}
              <FAQ />
            </div>
          </div>

          {/* Conversion final banner */}
          <FinalCTA />
        </main>

        {/* Brand Information and Policies Footer */}
        <Footer />

        {/* Floating Call & WhatsApp triggers */}
        <FloatingCTA />
      </div>
    </>
  );
}
