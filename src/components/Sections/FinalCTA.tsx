"use client";

import React from "react";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { Button } from "../UI/Button";

export const FinalCTA: React.FC = () => {
  const handleCall = () => {
    window.location.href = "tel:+919288100260";
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi, I am looking for custom pilgrimage packages to Varanasi, Ayodhya and Prayagraj."
    );
    window.open(`https://wa.me/919288100260?text=${message}`, "_blank");
  };

  const handleScrollToForm = () => {
    const formElement = document.getElementById("inquiry-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-24 bg-dark-slate relative overflow-hidden">
      {/* Decorative background overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1920')"
      }} />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent-orange/15 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 text-center text-white">
        <span className="text-xs uppercase font-bold text-accent-orange tracking-widest block mb-4">
          Bespoke Spiritual Experiences
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight leading-[1.15]">
          Need Help Planning Your <br />
          <span className="text-accent-orange">Spiritual Journey?</span>
        </h2>
        <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
          Our destination planners will design a customized tour covering temple entries, local pujas, private transits, and comfortable hotel layouts suitable for elderly parents and families.
        </p>

        {/* Buttons Group */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <Button
            variant="solid"
            size="lg"
            onClick={handleCall}
            icon={<Phone size={18} />}
          >
            Call +91 92881 00260
          </Button>
          <Button
            variant="white"
            size="lg"
            onClick={handleWhatsApp}
            className="!text-[#25D366] hover:!bg-slate-100"
            icon={<MessageCircle size={18} className="fill-[#25D366] stroke-none" />}
          >
            Chat on WhatsApp
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleScrollToForm}
            className="!border-white !text-white hover:!bg-white hover:!text-dark-slate"
            icon={<ArrowUpRight size={18} />}
          >
            Get Free Quote
          </Button>
        </div>

        {/* Support callouts */}
        <p className="text-xs text-slate-400 mt-6 italic">
          *No credit card details required. Receive complete customized travel itineraries for free.
        </p>
      </div>
    </section>
  );
};
