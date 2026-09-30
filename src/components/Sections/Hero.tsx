"use client";

import React, { useState, useEffect } from "react";
import { Star, Phone, MessageCircle, Shield, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "../UI/Button";

interface HeroProps {
  selectedPackageId: string;
  onSelectPackage: (pkgId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ selectedPackageId, onSelectPackage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const slides = [
    {
      id: "kashi-darshan-tour-package",
      packageName: "Kashi Darshan",
      duration: "2 Nights / 3 Days",
      price: "Starting From ₹7,999 / Person",
      destination: "Varanasi",
      subtitle: "Experience the spiritual soul of Kashi with Shri Kashi Vishwanath Temple, Ganga Aarti and Sarnath.",
      cta: "Get Free Itinerary",
      bgImage: "/images/gallery/varanasi_kashi_vishwanath.webp",
    },
    {
      id: "prayagraj-darshan-tour-package",
      packageName: "Prayagraj Darshan",
      duration: "2 Nights / 3 Days",
      price: "Starting From ₹6,999 / Person",
      destination: "Prayagraj",
      subtitle: "Take a holy dip at Triveni Sangam and explore Prayagraj's most sacred temples.",
      cta: "Get Free Itinerary",
      bgImage: "/images/gallery/prayagraj_triveni_sangam_view.webp",
    },
    {
      id: "chitrakoot-darshan-tour-package",
      packageName: "Chitrakoot Darshan",
      duration: "2 Nights / 3 Days",
      price: "Starting From ₹7,499 / Person",
      destination: "Chitrakoot",
      subtitle: "Walk the sacred path of Lord Rama through Chitrakoot's temples, ghats and holy caves.",
      cta: "Get Free Itinerary",
      bgImage: "/images/gallery/chitrakoot_ram_ghat.png",
    },
    {
      id: "mahakal-darshan-tour-package",
      packageName: "Mahakal Darshan",
      duration: "1 Night / 2 Days",
      price: "Starting From ₹4,999 / Person",
      destination: "Ujjain",
      subtitle: "Seek blessings at Shri Mahakaleshwar Jyotirlinga and explore Mahakal Lok.",
      cta: "Get Free Itinerary",
      bgImage: "/images/gallery/ujjain_mahakaleshwar_temple.webp",
    },
    {
      id: "ayodhya-darshan-tour-package",
      packageName: "Ayodhya Darshan",
      duration: "1 Night / 2 Days",
      price: "Starting From ₹4,999 / Person",
      destination: "Ayodhya",
      subtitle: "Seek blessings at Shri Ram Janmabhoomi Mandir, witness evening Saryu Aarti, and explore Ayodhya Dham.",
      cta: "Get Free Itinerary",
      bgImage: "/images/gallery/ayodhya_ram_mandir_day.webp",
    }
  ];

  // Auto-play interval (3 seconds) with pause on hover
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentSlide, isHovered, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleScrollToForm = () => {
    const currentPkgId = slides[currentSlide].id;
    if (onSelectPackage) {
      onSelectPackage(currentPkgId);
    }
    
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "Package CTA Click",
        packageId: currentPkgId,
        packageName: slides[currentSlide].packageName,
        ctaType: slides[currentSlide].cta
      });
    }

    const el = document.getElementById("inquiry-form-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleCall = () => {
    const currentPkgId = slides[currentSlide].id;
    const currentPkgName = slides[currentSlide].packageName;
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "Phone Click",
        packageId: currentPkgId,
        packageName: currentPkgName
      });
    }
    window.location.href = "tel:+919288100260";
  };

  const handleWhatsApp = () => {
    const currentPkgId = slides[currentSlide].id;
    const currentPkgName = slides[currentSlide].packageName;
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "WhatsApp Click",
        packageId: currentPkgId,
        packageName: currentPkgName
      });
    }
    const message = encodeURIComponent(
      `Hello Varanasi Travelers! I am interested in booking the "${currentPkgName}" package (${slides[currentSlide].duration}). Please share custom details.`
    );
    window.open(`https://wa.me/919288100260?text=${message}`, "_blank");
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section
      id="home"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center py-20 md:py-28 overflow-hidden bg-slate-950"
    >
      {/* Slide Backgrounds with smooth cross-fade */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentSlide ? "opacity-80" : "opacity-0"
            }`}
          >
            <Image
              src={slide.bgImage}
              alt={`Spiritual Tour Slide ${idx + 1}`}
              fill
              priority={idx === 0} // Preload/priority-load the first slide
              sizes="100vw"
              className="object-cover object-center"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Cinematic dark overlay for center readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/90 z-10 pointer-events-none" />

      {/* Background radial soft light blobs centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-orange/5 rounded-full filter blur-[150px] pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-20 flex justify-center">
        <div className="max-w-3xl text-white space-y-8 flex flex-col items-center text-center min-h-[480px] justify-center mx-auto">
          
          {/* Slide Badge / Tag */}
          <div className="h-6 overflow-hidden w-full flex justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={`badge-${currentSlide}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-xs md:text-sm uppercase font-bold text-amber-300 bg-amber-950/40 backdrop-blur-xl border border-amber-400/40 px-4 py-1.5 rounded-full inline-block tracking-widest shadow-xs"
              >
                {slides[currentSlide].destination}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Animated Headline & Subheadline */}
          <div className="space-y-4 w-full text-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1] pt-0 mt-0 text-center text-white drop-shadow-md"
              >
                {slides[currentSlide].packageName}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${currentSlide}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="text-base md:text-lg text-slate-200 max-w-2xl leading-relaxed font-medium text-center mx-auto drop-shadow-xs"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Dynamic Starting Price Section */}
          <div className="h-14 overflow-hidden flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={`price-${currentSlide}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-4 justify-center"
              >
                <span className="text-amber-200/90 text-xs uppercase font-extrabold tracking-widest drop-shadow-md">
                  {slides[currentSlide].duration}
                </span>
                <span className="text-2xl md:text-3xl font-display font-extrabold text-amber-400 drop-shadow-md">
                  {slides[currentSlide].price}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center justify-center w-full pt-2">
            <Button
              variant="solid"
              size="lg"
              onClick={handleScrollToForm}
            >
              {slides[currentSlide].cta}
            </Button>
            <Button
              variant="white"
              size="lg"
              onClick={handleWhatsApp}
              className="!text-emerald-400 hover:!bg-white/10 !bg-white/5 backdrop-blur-md border border-emerald-500/30"
              icon={<MessageCircle size={18} className="fill-emerald-400 stroke-none animate-pulse-slow" />}
            >
              WhatsApp
            </Button>
            <Button
              variant="white"
              size="lg"
              onClick={handleCall}
              className="!bg-white/10 hover:!bg-white/20 !text-white border border-white/20 backdrop-blur-md"
              icon={<Phone size={18} />}
            >
              Call Now
            </Button>
          </div>

          {/* Trust Indicators Centered */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 w-full pt-8 border-t border-white/15">
            <div className="flex flex-col items-center text-center space-y-2 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
              <Star className="text-amber-400 shrink-0 fill-amber-400" size={20} />
              <div>
                <h5 className="text-xs font-bold text-white uppercase tracking-wider">Google Rated</h5>
                <p className="text-[10px] text-slate-300">4.9/5 Star Rating</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
              <Shield className="text-amber-400 shrink-0" size={20} />
              <div>
                <h5 className="text-xs font-bold text-white uppercase tracking-wider">GST Registered</h5>
                <p className="text-[10px] text-slate-300">Baba Vishwanath Traders</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
              <Users className="text-amber-400 shrink-0" size={20} />
              <div>
                <h5 className="text-xs font-bold text-white uppercase tracking-wider">Happy Travellers</h5>
                <p className="text-[10px] text-slate-300">12,000+ Journeys</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
              <Phone className="text-amber-400 shrink-0" size={20} />
              <div>
                <h5 className="text-xs font-bold text-white uppercase tracking-wider">24x7 Assistance</h5>
                <p className="text-[10px] text-slate-300">On-Trip Support</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white backdrop-blur-md transition-all cursor-pointer shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white backdrop-blur-md transition-all cursor-pointer shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentSlide ? "bg-amber-400 w-8 shadow-xs" : "bg-white/30 hover:bg-white/50 w-2.5"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
