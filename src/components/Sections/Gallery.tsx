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
    <section id="gallery" className="py-14 md:py-20 bg-transparent relative select-none">
      
      {/* Dynamic CSS marquee rules */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee-scroll {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-paused {
          animation-play-state: paused !important;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold text-accent-orange bg-orange-50 px-4 py-1.5 rounded-full inline-block mb-3 tracking-widest">
            Visual Darshan
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-dark-slate tracking-tight">
            Pilgrimage Photo Gallery
          </h2>
          <p className="text-sm md:text-base text-slate-500 mt-4 leading-relaxed">
            Take a visual tour through India's holy lands. Explore the ghats of Varanasi, the grandeur of Ayodhya, the confluence of Prayagraj, and the temples of Ujjain.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-display text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-dark-slate text-white"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-dark-slate"
              }`}
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
              className="relative h-64 md:h-80 w-80 shrink-0 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-orange-950/[0.03] transition-all duration-500 cursor-pointer bg-slate-100 border border-slate-100"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover pointer-events-none"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-accent-orange bg-orange-950/20 px-2 py-0.5 rounded backdrop-blur-md inline-block mb-2 self-start">
                  {img.category}
                </span>
                <h4 className="text-base font-display font-bold text-white leading-tight flex items-center gap-1.5">
                  {img.title}
                  <ZoomIn size={16} className="text-accent-orange shrink-0 animate-pulse" />
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
