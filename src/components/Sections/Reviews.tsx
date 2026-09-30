"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Check } from "lucide-react";

interface GoogleReviewItem {
  id: string;
  authorName: string;
  authorPhoto?: string;
  avatarBg?: string;
  rating: number;
  timeAgo: string;
  text: string;
  hasStarBadge?: boolean;
}

const GOOGLE_WRITE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJUyzcz14xjjkR-lXVYrGuIfw";

const REAL_GOOGLE_REVIEWS: GoogleReviewItem[] = [
  {
    id: "rev-1",
    authorName: "Brahmesh Tanikonda",
    authorPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    timeAgo: "11 months ago",
    text: "It was a really wonderful and amazing trip covering Ayodhya, Prayagraj, Varanasi, Shri Vishnupad, and Patna Airport! The cab driver Ramesh Ji was very punctual, polite, and drove very safely. Highly recommended!",
  },
  {
    id: "rev-2",
    authorName: "Anuj Singh",
    authorPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    timeAgo: "11 months ago",
    text: "This travels agencies very nice& supporting everything",
  },
  {
    id: "rev-3",
    authorName: "Rohit Singh",
    avatarBg: "bg-[#e65100]",
    hasStarBadge: true,
    rating: 5,
    timeAgo: "11 months ago",
    text: "There are service is very good.",
  },
  {
    id: "rev-4",
    authorName: "Alok Kumar",
    avatarBg: "bg-[#1565c0]",
    rating: 5,
    timeAgo: "11 months ago",
    text: "Best tour and travel agency in Varanasi. Very well organized Kashi Vishwanath darshan and Ganga Aarti boat ride.",
  },
  {
    id: "rev-5",
    authorName: "Suresh Verma",
    avatarBg: "bg-[#2e7d32]",
    rating: 5,
    timeAgo: "1 year ago",
    text: "Excellent cab service and prompt response from the team. Reliable and safe for family trips.",
  },
  {
    id: "rev-6",
    authorName: "Vikas Pandey",
    avatarBg: "bg-[#6a1b9a]",
    rating: 5,
    timeAgo: "1 year ago",
    text: "Great experience with Baba Vishwanath Traders. Professional drivers and clean AC vehicles.",
  },
];

export const Reviews: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Duplicate reviews for continuous infinite seamless moving track
  const allReviews = [...REAL_GOOGLE_REVIEWS, ...REAL_GOOGLE_REVIEWS];

  return (
    <section id="reviews" className="py-10 md:py-14 bg-white relative overflow-hidden">
      {/* Inline styles for continuous marquee movement */}
      <style jsx>{`
        @keyframes autoScrollReviews {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .moving-reviews-track {
          display: flex;
          gap: 1rem;
          width: max-content;
          animation: autoScrollReviews 26s linear infinite;
          will-change: transform;
        }
        .moving-reviews-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main Widget Container */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-6 lg:gap-8">
          
          {/* LEFT SIDE: Google Business Profile Header Card */}
          <div className="w-full lg:w-72 shrink-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left mb-2 lg:mb-0">
            <div className="flex flex-col sm:flex-row lg:flex-row items-center lg:items-start gap-3.5 mb-2">
              {/* Temple / Brand Emblem */}
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-center justify-center p-2 text-accent-orange mx-auto sm:mx-0">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                  <path d="M12 2L15 8H9L12 2Z" />
                  <path d="M6 9H18V12H6V9Z" opacity="0.9" />
                  <path d="M4 13H20V17H4V13Z" opacity="0.8" />
                  <path d="M2 18H22V22H2V18Z" opacity="0.7" />
                  <circle cx="12" cy="15" r="1.5" fill="#fff" />
                </svg>
              </div>

              <div>
                <h3 className="text-sm md:text-base font-bold text-dark-slate leading-snug">
                  Baba Vishwanath Traders
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-tight mt-0.5">
                  – Trusted Travel, Tour Services Provider
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Varanasi Travelers — A unit of Baba Vishwanath Traders
                </p>
              </div>
            </div>

            {/* Stars & Reviews Count */}
            <div className="flex items-center justify-center lg:justify-start gap-1.5 my-1.5">
              <div className="flex text-amber-400 gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={17} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-600 font-medium mb-3 text-center lg:text-left">
              9 Google reviews
            </p>

            {/* Write a review button */}
            <a
              href={GOOGLE_WRITE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-xs md:text-sm font-semibold px-4 py-2 border border-slate-300 rounded-lg text-slate-800 bg-white hover:bg-slate-50 transition-colors shadow-sm w-fit mx-auto lg:mx-0"
            >
              Write a review
            </a>
          </div>

          {/* RIGHT SIDE: CSS-Driven Auto-Moving Reviews Carousel */}
          <div className="flex-1 min-w-0 overflow-hidden relative">
            <div className="moving-reviews-track py-2">
              {allReviews.map((rev, index) => {
                const uniqueKey = `${rev.id}-${index}`;
                const isExpanded = expandedId === uniqueKey;
                const isLongText = rev.text.length > 90;

                return (
                  <div
                    key={uniqueKey}
                    className="w-[280px] md:w-[295px] shrink-0 bg-[#f8f9fa] border border-slate-200/80 rounded-2xl p-4 md:p-5 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
                  >
                    <div>
                      {/* Top Header: Avatar + Name + Google G logo */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2.5 overflow-hidden">
                          {rev.authorPhoto ? (
                            <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 bg-slate-200">
                              <Image
                                src={rev.authorPhoto}
                                alt={rev.authorName}
                                fill
                                sizes="36px"
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div
                              className={`relative w-9 h-9 rounded-full ${
                                rev.avatarBg || "bg-accent-orange"
                              } text-white font-bold text-sm flex items-center justify-center shrink-0`}
                            >
                              {rev.authorName.charAt(0).toUpperCase()}
                              {rev.hasStarBadge && (
                                <span className="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-0.5 text-amber-500 shadow-xs">
                                  <Star size={9} className="fill-amber-500" />
                                </span>
                              )}
                            </div>
                          )}

                          <div className="overflow-hidden">
                            <h4 className="text-xs md:text-sm font-bold text-dark-slate truncate">
                              {rev.authorName}
                            </h4>
                            <span className="text-[11px] text-slate-500 block truncate">
                              {rev.timeAgo}
                            </span>
                          </div>
                        </div>

                        {/* Google Multi-color G Icon */}
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          />
                        </svg>
                      </div>

                      {/* Stars with Google Verified Blue Badge */}
                      <div className="flex items-center gap-1.5 mb-2.5">
                        <div className="flex text-amber-400 gap-0.5">
                          {Array.from({ length: rev.rating }).map((_, i) => (
                            <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span
                          className="w-3.5 h-3.5 rounded-full bg-[#1a73e8] text-white flex items-center justify-center"
                          title="Verified Google Review"
                        >
                          <Check size={9} strokeWidth={3} />
                        </span>
                      </div>

                      {/* Review Text */}
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                        {isExpanded || !isLongText
                          ? rev.text
                          : `${rev.text.slice(0, 90)}...`}
                      </p>
                    </div>

                    {/* Read more button if text is long */}
                    {isLongText && (
                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? null : uniqueKey)}
                        className="text-xs text-slate-500 hover:text-dark-slate font-medium mt-2 text-left cursor-pointer transition-colors"
                      >
                        {isExpanded ? "Read less" : "Read more"}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
