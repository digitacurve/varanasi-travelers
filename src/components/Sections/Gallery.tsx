"use client";

import React, { useState, useEffect, useRef } from "react";
import { ZoomIn } from "lucide-react";
import { galleryImages } from "@/data/content";
import { Lightbox } from "../UI/Lightbox";

type GalleryCategory = "All" | "Varanasi" | "Ayodhya" | "Prayagraj" | "Ujjain";

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number | null>(null);
  const dragOffsetRef = useRef<number>(0);

  const categories: GalleryCategory[] = ["All", "Varanasi", "Ayodhya", "Prayagraj", "Ujjain"];

  const filteredImages = galleryImages.filter((img) => {
    if (activeCategory === "All") return true;
    return img.category === activeCategory;
  });

  // Duplicate images to create an infinite horizontal loop
  const displayImages = [...filteredImages, ...filteredImages, ...filteredImages];

  const openLightbox = (index: number) => {
    setLightboxIndex(index % filteredImages.length);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
  };

  // Mobile manual swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - touchStartRef.current;
    
    // Shift drag offset
    dragOffsetRef.current = dragOffsetRef.current + diff;
    setDragOffset(dragOffsetRef.current);
    touchStartRef.current = currentX;
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
    // Resume auto scroll slowly after a brief delay
    setTimeout(() => {
      setIsPaused(false);
    }, 1500);
  };

  // Reset drag offset when active category changes to prevent visual issues
  useEffect(() => {
    dragOffsetRef.current = 0;
    setDragOffset(0);
  }, [activeCategory]);

  return (
    <section id="gallery" className="py-6 md:py-20 bg-transparent relative select-none">
      
      {/* Dynamic CSS marquee rules */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee-scroll {
          display: flex;
          width: max-content;
          animation: marquee 95s linear infinite;
        }
        .animate-marquee-paused {
          animation-play-state: paused !important;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
          <span className="text-[10px] sm:text-xs uppercase font-bold text-amber-400 bg-amber-500/10 backdrop-blur-md px-3.5 py-1 rounded-full inline-block mb-2 tracking-widest border border-amber-400/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
            Visual Darshan
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            Pilgrimage Photo Gallery
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mt-2 md:mt-4 leading-relaxed">
            Take a visual tour through India's holy lands. Explore the ghats of Varanasi, the grandeur of Ayodhya, the confluence of Prayagraj, and the temples of Ujjain.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-display text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white border border-amber-300/40 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "bg-white/[0.07] backdrop-blur-2xl text-slate-300 border border-white/15 hover:bg-white/[0.12] hover:text-white"
              }`}
              style={{
                boxShadow: activeCategory === cat
                  ? "0 4px 14px -2px rgba(234, 88, 12, 0.4), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)"
                  : "0 4px 16px rgba(0,0,0,0.2), inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Marquee Carousel Wrapper */}
      <div 
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="w-full overflow-hidden relative cursor-grab active:cursor-grabbing py-4"
      >
        <div 
          className={`animate-marquee-scroll flex gap-6 ${isPaused ? "animate-marquee-paused" : ""}`}
          style={{ transform: dragOffset !== 0 ? `translateX(${dragOffset}px)` : undefined }}
        >
          {displayImages.map((img, i) => (
            <div
              key={`${img.id}-${i}`}
              onClick={() => openLightbox(i)}
              className="relative h-64 md:h-80 w-80 shrink-0 rounded-[2rem] overflow-hidden transition-all duration-300 cursor-pointer bg-slate-900 border border-white/20 hover:border-amber-400/50"
              style={{
                boxShadow: "0 8px 32px 0 rgba(0,0,0,0.4), inset 0 1px 1px 0 rgba(255,255,255,0.25)"
              }}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover pointer-events-none"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 bg-amber-950/80 border border-amber-400/40 px-2.5 py-0.5 rounded-full backdrop-blur-md inline-block mb-2 self-start shadow-xs">
                  {img.category}
                </span>
                <h4 className="text-base font-display font-bold text-white leading-tight flex items-center gap-1.5 drop-shadow-xs">
                  {img.title}
                  <ZoomIn size={16} className="text-amber-400 shrink-0" />
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Trigger */}
      <Lightbox
        isOpen={lightboxIndex !== null}
        images={filteredImages}
        currentIndex={lightboxIndex || 0}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
