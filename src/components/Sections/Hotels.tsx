"use client";

import React from "react";
import Image from "next/image";
import { Star, MapPin, Award } from "lucide-react";
import { Button } from "../UI/Button";
import { hotelDetails } from "@/data/content";

export const Hotels: React.FC = () => {
  const handleHotelInquiry = (hotelName: string) => {
    const formElement = document.getElementById("inquiry-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hotels" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold text-accent-orange bg-orange-50 px-4 py-1.5 rounded-full inline-block mb-3 tracking-widest">
            Premium Accommodation
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-dark-slate tracking-tight">
            Handpicked Luxury Stays
          </h2>
          <p className="text-sm md:text-base text-slate-500 mt-4 leading-relaxed">
            We partner with the highest-rated properties in each city to guarantee clean rooms, modern amenities, pure vegetarian kitchens, and closeness to the holy sites.
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {hotelDetails.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.02)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Hotel Image with Category Badge */}
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                
                <span className="absolute top-4 left-4 bg-dark-slate text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md font-display uppercase tracking-wider">
                  {hotel.category} Stay
                </span>

                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-1">
                  <div className="flex text-amber-400">
                    {Array.from({ length: Math.floor(hotel.rating) }).map((_, i) => (
                      <Star key={i} size={14} className="fill-current" />
                    ))}
                  </div>
                  <span className="text-white text-xs font-bold ml-1">{hotel.rating}.0 Rating</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                {/* Location */}
                <div className="flex items-center gap-1 text-slate-500 mb-2">
                  <MapPin size={14} className="text-accent-orange shrink-0" />
                  <span className="text-xs font-medium uppercase tracking-wide">{hotel.location}</span>
                </div>

                {/* Hotel Name */}
                <h4 className="text-lg md:text-xl font-display font-bold text-dark-slate mb-4 group-hover:text-accent-orange transition-colors">
                  {hotel.name}
                </h4>

                {/* Amenities grid */}
                <div className="space-y-2 flex-1 mb-6">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    Property Highlights:
                  </span>
                  <ul className="grid grid-cols-1 gap-2">
                    {hotel.amenities.map((amenity, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-orange shrink-0" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Button */}
                <div className="pt-6 border-t border-slate-50">
                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => handleHotelInquiry(hotel.name)}
                    icon={<Award size={16} />}
                  >
                    Select in Package
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
