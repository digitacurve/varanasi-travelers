"use client";

import React from "react";

export const AnnouncementTicker: React.FC = () => {
  const tickerText = "🚩 Complete Pilgrimage Travel Solutions • 🛕 Ayodhya • Varanasi • Prayagraj • Mahakaleshwar • Omkareshwar • ✈️ Flight Booking Assistance • 🚆 Train Booking Assistance • 🚌 Bus Booking Assistance • 🏨 Premium Hotel Reservations • 🚗 Private AC Cabs & Airport/Railway Pickup & Drop • 🙏 VIP Darshan & Special Puja Arrangements • 💬 24/7 WhatsApp Assistance • ⭐ Customized Tour Packages for Individuals, Families & Groups • 🔒 Secure & Hassle-Free Booking Experience";

  return (
    <div className="bg-gradient-to-r from-orange-600 via-accent-orange to-orange-600 text-white text-[11px] font-semibold py-2.5 overflow-hidden border-b border-orange-700 select-none relative z-50">
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
