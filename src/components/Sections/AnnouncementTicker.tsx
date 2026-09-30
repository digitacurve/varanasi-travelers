"use client";

import React from "react";

export const AnnouncementTicker: React.FC = () => {
  const tickerText = "🚩 Complete Pilgrimage Travel Solutions • 🛕 Ayodhya • Varanasi • Prayagraj • Mahakaleshwar • Omkareshwar • ✈️ Flight Booking Assistance • 🚆 Train Booking Assistance • 🚌 Bus Booking Assistance • 🏨 Premium Hotel Reservations • 🚗 Private AC Cabs & Airport/Railway Pickup & Drop • 🙏 VIP Darshan & Special Puja Arrangements • 💬 24/7 WhatsApp Assistance • ⭐ Customized Tour Packages for Individuals, Families & Groups • 🔒 Secure & Hassle-Free Booking Experience";

  return (
    <div 
      className="bg-gradient-to-r from-[#9A3412] via-[#C2410C] to-[#9A3412] text-amber-50 text-[11px] font-semibold py-2.5 overflow-hidden border-b border-[#7C2D12] select-none relative z-50 tracking-wide"
      style={{
        boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.2), 0 2px 8px rgba(0,0,0,0.15)"
      }}
    >
      <div className="flex w-max ticker-scroll cursor-pointer">
        <div className="flex items-center gap-12 px-6">
          <span>{tickerText}</span>
        </div>
        <div className="flex items-center gap-12 px-6" aria-hidden="true">
          <span>{tickerText}</span>
        </div>
      </div>
    </div>
  );
};
