"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { Header } from "@/components/Sections/Header";
import { Footer } from "@/components/Sections/Footer";
import { AnnouncementTicker } from "@/components/Sections/AnnouncementTicker";

export default function ThankYouPage() {
  const [countdown, setCountdown] = useState(3);
  const [whatsappUrl, setWhatsappUrl] = useState("https://wa.me/919288100260");

  useEffect(() => {
    let lead = null;
    try {
      const stored = localStorage.getItem("latest_lead");
      if (stored) {
        lead = JSON.parse(stored);
      }
    } catch (e) {
      console.error("Failed to parse latest lead", e);
    }

    let messageText = "Hello! I just submitted an enquiry on your website. Please share customized package details.";

    if (lead) {
      messageText = 
        `Hello, I have submitted an enquiry on your website.\n\n` +
        `Name: ${lead.fullName || ""}\n` +
        `Mobile: ${lead.phone || ""}\n` +
        `Package: ${lead.packageName || lead.packageId || ""}\n` +
        `Travel Date: ${lead.travelDate || ""}\n` +
        `Travellers: ${lead.travellers || ""}\n\n` +
        `I would like to know more about this tour package.`;
    }

    const url = `https://wa.me/919288100260?text=${encodeURIComponent(messageText)}`;
    setWhatsappUrl(url);

    // Countdown and automatic redirect
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.location.href = url;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnnouncementTicker />
      <Header />
      
      <main className="flex-grow bg-[#FFFDF9] min-h-[60vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full bg-white border border-orange-200/60 p-8 md:p-10 rounded-[2.5rem] shadow-[0_24px_60px_rgba(249,115,22,0.04)] text-center relative overflow-hidden">
          
          {/* Saffron accent bar */}
          <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-amber-400 via-accent-orange to-orange-500" />
          
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-50 p-4 rounded-full text-emerald-600 shadow-sm animate-bounce-slow">
              <CheckCircle2 size={56} className="stroke-[2.5]" />
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight leading-tight mb-4">
            Thank You! Your Enquiry Has Been Received.
          </h1>
          
          <p className="text-sm text-slate-600 leading-relaxed mb-8">
            Our travel expert will contact you shortly. Meanwhile, you can continue the conversation on WhatsApp.
          </p>

          <div className="bg-orange-50/50 border border-orange-100/60 rounded-2xl p-4 mb-8 flex flex-col items-center justify-center gap-1 select-none">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent-orange animate-ping" />
            <span className="text-xs font-bold text-slate-500 mt-1">
              {countdown > 0 ? `Redirecting to WhatsApp in ${countdown} seconds...` : "Redirecting now..."}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={whatsappUrl}
              className="bg-[#25D366] hover:bg-[#20ba56] text-white border-none flex items-center justify-center gap-2.5 py-4 rounded-2xl font-bold transition-all shadow-[0_8px_20px_rgba(37,211,102,0.25)] hover:scale-[1.01] active:scale-[0.98] text-sm"
            >
              <MessageCircle size={18} className="fill-white stroke-none" />
              <span>Open WhatsApp Now</span>
            </a>
            
            <Link
              href="/"
              className="py-4 rounded-2xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors text-sm flex items-center justify-center gap-1.5"
            >
              <span>Back to Home</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
