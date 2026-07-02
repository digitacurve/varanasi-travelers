"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxImage {
  id: string;
  url: string;
  title: string;
  category: string;
}

interface LightboxProps {
  isOpen: boolean;
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const currentImage = images[currentIndex];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-md p-4"
        >
          {/* Top Bar */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white z-10">
            <div>
              <span className="text-xs uppercase tracking-wider text-accent-orange font-semibold">
                {currentImage.category}
              </span>
              <h5 className="text-sm md:text-base font-display font-medium">
                {currentImage.title}
              </h5>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer text-slate-300 hover:text-white"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900/50 hover:bg-slate-900 border border-slate-800 text-white rounded-full transition-colors cursor-pointer z-10 hidden md:block"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900/50 hover:bg-slate-900 border border-slate-800 text-white rounded-full transition-colors cursor-pointer z-10 hidden md:block"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Main Image Display */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-5xl h-[60vh] md:h-[75vh]"
          >
            <Image
              src={currentImage.url}
              alt={currentImage.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Mobile swipe and counter helpers */}
          <div className="mt-4 text-xs text-slate-400 font-medium">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Mobile Nav Overlay */}
          <div className="flex gap-4 mt-4 md:hidden">
            <button
              onClick={onPrev}
              className="px-4 py-2 bg-slate-900 text-white border border-slate-800 rounded-full text-xs font-semibold"
            >
              Prev
            </button>
            <button
              onClick={onNext}
              className="px-4 py-2 bg-slate-900 text-white border border-slate-800 rounded-full text-xs font-semibold"
            >
              Next
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
