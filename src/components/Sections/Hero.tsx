"use client";

import React from "react";
import { Star, Phone, MessageCircle, Shield, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Form } from "../UI/Form";
import { Button } from "../UI/Button";

interface HeroProps {
  selectedPackageId: string;
  onSelectPackage: (pkgId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ selectedPackageId, onSelectPackage }) => {
  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi, I want to inquire about your Varanasi, Ayodhya & Prayagraj tour packages."
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-start py-16 md:py-24 overflow-hidden"
    >
      {/* Background Image Container with controlled opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/ayodhya_hero.jpg')",
          opacity: 0.85,
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/80 z-0" />

      {/* Background radial soft light blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-orange/10 rounded-full filter blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        {/* Main Columns Container - Top Aligned */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          
          {/* Left Column (60% width on Desktop) */}
          <div className="w-full lg:w-[60%] text-white space-y-6 flex flex-col items-start">
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1] pt-0 mt-0"
            >
              Ayodhya • Varanasi • Prayagraj
              <span className="block text-accent-orange mt-2">Sacred Tour Packages</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base md:text-lg text-slate-300 max-w-xl leading-relaxed"
            >
              Experience India's most sacred pilgrimage destinations with carefully curated tour packages designed for families, couples, and senior citizens. Enjoy comfortable hotels, private AC transportation, expert local assistance, and seamless darshan at Ayodhya Ram Mandir, Kashi Vishwanath, Ganga Aarti, and Triveni Sangam—all in one unforgettable spiritual journey.
            </motion.p>

            {/* Mobile Lead Capture Form - Stacks immediately below content on mobile viewports */}
            <div id="inquiry-form-section-mobile" className="block lg:hidden w-full mt-4">
              <Form defaultPackageId={selectedPackageId} compact />
            </div>

            {/* Rating, Pricing, CTAs & Badges Block */}
            <div className="w-full space-y-6 pt-4">
              
              {/* Rating and Price row */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap items-center gap-6"
              >
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-accent-orange">
                  <Star size={12} className="fill-accent-orange stroke-accent-orange" />
                  <span>4.9/5 Google Rated Operator</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-slate-400 text-xs uppercase font-bold tracking-wider">
                    Starting From
                  </span>
                  <span className="text-2xl md:text-3xl font-display font-extrabold text-accent-orange">
                    ₹5,999<span className="text-xs font-normal text-slate-300 ml-1">* per person</span>
                  </span>
                </div>
              </motion.div>

              {/* Direct CTA Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  variant="solid"
                  size="lg"
                  onClick={handleCall}
                  icon={<Phone size={18} />}
                >
                  Call Now
                </Button>
                <Button
                  variant="white"
                  size="lg"
                  onClick={handleWhatsApp}
                  className="!text-emerald-600 hover:!bg-slate-100"
                  icon={<MessageCircle size={18} className="fill-emerald-600 stroke-none" />}
                >
                  WhatsApp Chat
                </Button>
              </motion.div>

              {/* Trust Badges Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10"
              >
                <div className="flex items-center gap-2">
                  <Shield className="text-accent-orange shrink-0" size={20} />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">GST Registered</h5>
                    <p className="text-[10px] text-slate-400">100% Tax Compliant</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-accent-orange shrink-0" size={20} />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">12,000+ Families</h5>
                    <p className="text-[10px] text-slate-400">Happy Travellers</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-accent-orange shrink-0" size={20} />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">Local Experts</h5>
                    <p className="text-[10px] text-slate-400">Hassle-free Rituals</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="text-accent-orange shrink-0" size={20} />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">24x7 Assistance</h5>
                    <p className="text-[10px] text-slate-400">On-ground Support</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Right Column (40% width on Desktop) - Top Aligned, Hidden on Mobile */}
          <div
            id="inquiry-form-section"
            className="hidden lg:block lg:w-[40%] shrink-0 pt-0 mt-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full pt-0 mt-0"
            >
              <Form defaultPackageId={selectedPackageId} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
