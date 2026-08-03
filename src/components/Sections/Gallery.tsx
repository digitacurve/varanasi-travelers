"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { galleryImages } from "@/data/content";
import { Lightbox } from "../UI/Lightbox";

type GalleryCategory = "All" | "Varanasi" | "Ayodhya" | "Prayagraj" | "Ujjain";

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: GalleryCategory[] = ["All", "Varanasi", "Ayodhya", "Prayagraj", "Ujjain"];

  const filteredImages = galleryImages.filter((img) => {
    if (activeCategory === "All") return true;
    return img.category === activeCategory;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
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

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white relative">
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

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, i) => (
            <div
              key={img.id}
              onClick={() => openLightbox(i)}
              className="relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer h-72 w-full bg-slate-100"
            >
              <Image
                src={img.url}
                alt={img.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                <span className="text-[10px] uppercase font-bold tracking-widest text-accent-orange bg-orange-950/20 px-2 py-0.5 rounded backdrop-blur-md inline-block mb-2">
                  {img.category}
                </span>
                <h4 className="text-base font-display font-bold leading-tight flex items-center gap-1.5">
                  {img.title}
                  <ZoomIn size={16} className="text-accent-orange shrink-0" />
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
