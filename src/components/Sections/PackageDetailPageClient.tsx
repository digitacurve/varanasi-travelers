"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Clock, MapPin, Check, X, Building2, Car, Compass, 
  HelpCircle, Sparkles, ChevronRight, CheckCircle2,
  CalendarRange, Phone, MessageSquare, Headphones, Coffee, ArrowRight, Star
} from "lucide-react";
import { Form } from "@/components/UI/Form";
import { FloatingCTA } from "@/components/UI/FloatingCTA";
import { ExtendedPackage } from "@/data/extendedPackages";
import { Lightbox } from "@/components/UI/Lightbox";

interface PackageDetailPageClientProps {
  pkg: ExtendedPackage;
  slug: string;
  allPackages: ExtendedPackage[];
}

export const PackageDetailPageClient: React.FC<PackageDetailPageClientProps> = ({
  pkg,
  slug,
  allPackages
}) => {
  const [activeTab, setActiveTab] = useState<"itinerary" | "inclusions" | "hotels-vehicle" | "faqs">("itinerary");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hasStartedForm, setHasStartedForm] = useState(false);

  // GTM: Track Package Viewed on Mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "Package Viewed",
        packageId: pkg.id,
        packageName: pkg.name,
        price: pkg.startingPrice
      });
    }
  }, [pkg]);

  // Click handler for tracking other CTA clicks
  const handleCTAClick = (ctaType: string) => {
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "Package CTA Click",
        packageId: pkg.id,
        packageName: pkg.name,
        ctaType
      });
    }
  };

  // Find previous & next package for top navigation
  const currentIndex = allPackages.findIndex(p => p.id === pkg.id);
  const prevPkg = currentIndex > 0 ? allPackages[currentIndex - 1] : allPackages[allPackages.length - 1];
  const nextPkg = currentIndex < allPackages.length - 1 ? allPackages[currentIndex + 1] : allPackages[0];

  const prevSlug = prevPkg.id.replace("-tour-package", "");
  const nextSlug = nextPkg.id.replace("-tour-package", "");

  // Find 4 related packages (excluding the current one)
  const relatedPackages = allPackages
    .filter(p => p.id !== pkg.id)
    .slice(0, 4);

  // Generate dynamic route timeline steps
  const routeSteps = pkg.destinations;

  // Inclusions Icon Summary
  const inclusionsIcons = [
    { title: "Hotel Stays", desc: "Premium Star Tier", icon: <Building2 size={16} className="text-amber-500" /> },
    { title: "Private Cab", desc: "AC Vehicle", icon: <Car size={16} className="text-amber-500" /> },
    { title: "Daily Breakfast", desc: "Hygienic/Veg", icon: <Coffee size={16} className="text-amber-500" /> },
    { title: "Sightseeing", desc: "Full Coverage", icon: <Compass size={16} className="text-amber-500" /> },
    { title: "VIP Guide", desc: "Local Coordinators", icon: <CheckCircle2 size={16} className="text-amber-500" /> },
    { title: "24/7 Support", desc: "Dedicated Helpline", icon: <Headphones size={16} className="text-amber-500" /> }
  ];

  // Dynamic Comparison tours (select 2 other tours in the system)
  const compareTours = allPackages
    .filter(p => p.id !== pkg.id)
    .slice(0, 2);

  // Dynamic Mock Reviews relevant to destinations
  const mockReviews = [
    {
      id: "r-1",
      name: "Suresh & Meena Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: `Our trip to ${pkg.destinations.join(" and ")} was flawlessly coordinated. The private vehicle was sanitized daily and the hotel stays were extremely clean and near the temples. VIP Darshan was a lifesaver for my mother.`,
      date: "July 12, 2026",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
    },
    {
      id: "r-2",
      name: "Dr. Lakshmi Rao",
      location: "Hyderabad, Telangana",
      rating: 5,
      text: `Exceptional service for pilgrims. Every spot mentioned in the itinerary was covered without any rush. The coordinator stayed in touch with us 24x7. Excellent Satvik food choices provided in our stays.`,
      date: "June 29, 2026",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
    }
  ];

  // Related dynamic blogs based on package destinations
  const mockBlogs = [
    {
      title: `A Pilgrim's Spiritual Guide to ${pkg.destinations[0] || 'Kashi'}`,
      desc: `Everything you need to know about visiting the oldest living city, temple timings, VIP darshan passes and proper protocols.`,
      readTime: "5 min read",
      image: "/images/hero_slide_ayodhya_varanasi.webp"
    },
    {
      title: "How to Prepare for a Multi-City Pilgrimage in North India",
      desc: "Top packing tips, transport recommendations, and best season timelines for families and senior citizens.",
      readTime: "7 min read",
      image: "/images/gallery/prayagraj_triveni_sangam_view.webp"
    },
    {
      title: "Understanding Satvik Dining Protocols During Yatra",
      desc: "Why clean, onion-and-garlic-free vegetarian dining matters for devotees, and how we secure verified kitchens.",
      readTime: "4 min read",
      image: "/images/gallery/varanasi_ganga_aarti.webp"
    }
  ];

  // Dynamic Gallery images helper resolving destination-specific photos
  const getPackageGallery = () => {
    const pkgId = pkg.id;
    if (pkgId === "kashi-darshan-tour-package") {
      return [
        { id: "kd-1", url: "/images/gallery/varanasi_kashi_vishwanath.webp", title: "Shri Kashi Vishwanath Temple", category: "Varanasi" },
        { id: "kd-2", url: "/images/gallery/varanasi_ganga_aarti.webp", title: "Subah-e-Banaras Ganga Aarti", category: "Varanasi" },
        { id: "kd-3", url: "/images/gallery/varanasi_sunrise_boat_ride.webp", title: "Sunrise Ganga Boat Cruise", category: "Varanasi" },
        { id: "kd-4", url: "/images/gallery/varanasi_sarnath_stupa.webp", title: "Dhamek Stupa at Sarnath", category: "Sarnath" },
        { id: "kd-5", url: "/images/gallery/varanasi_assi_ghat.webp", title: "Holy Ghats of Kashi", category: "Varanasi" },
        { id: "kd-6", url: "/images/gallery/varanasi_manikarnika_ghat.webp", title: "Sacred Manikarnika Ghat", category: "Varanasi" }
      ];
    }
    if (pkgId === "kashi-ayodhya-tour-package") {
      return [
        { id: "ka-1", url: "/images/gallery/varanasi_kashi_vishwanath.webp", title: "Shri Kashi Vishwanath Temple", category: "Varanasi" },
        { id: "ka-2", url: "/images/gallery/varanasi_assi_ghat.webp", title: "Sacred Varanasi Ghats", category: "Varanasi" },
        { id: "ka-3", url: "/images/gallery/ayodhya_ram_mandir_day.webp", title: "Shri Ram Janmabhoomi Mandir", category: "Ayodhya" },
        { id: "ka-4", url: "/images/gallery/ayodhya_saryu_aarti.webp", title: "Holy Saryu River Aarti", category: "Ayodhya" },
        { id: "ka-5", url: "/images/gallery/ayodhya_hanuman_garhi.webp", title: "Hanuman Garhi Temple", category: "Ayodhya" },
        { id: "ka-6", url: "/images/gallery/ayodhya_kanak_bhawan.webp", title: "Kanak Bhawan Temple", category: "Ayodhya" }
      ];
    }
    if (pkgId === "kashi-prayagraj-ayodhya-tour-package") {
      return [
        { id: "kpa-1", url: "/images/gallery/prayagraj_triveni_sangam_view.webp", title: "Triveni Sangam Confluence", category: "Prayagraj" },
        { id: "kpa-2", url: "/images/gallery/ayodhya_ram_mandir_day.webp", title: "Shri Ram Janmabhoomi Mandir", category: "Ayodhya" },
        { id: "kpa-3", url: "/images/gallery/varanasi_kashi_vishwanath.webp", title: "Shri Kashi Vishwanath Temple", category: "Varanasi" },
        { id: "kpa-4", url: "/images/gallery/varanasi_ganga_aarti.webp", title: "Subah-e-Banaras Ganga Aarti", category: "Varanasi" },
        { id: "kpa-5", url: "/images/gallery/prayagraj_anand_bhavan.webp", title: "Anand Bhavan Museum", category: "Prayagraj" },
        { id: "kpa-6", url: "/images/gallery/ayodhya_hanuman_garhi.webp", title: "Hanuman Garhi Temple", category: "Ayodhya" }
      ];
    }
    if (pkgId === "prayagraj-darshan-tour-package") {
      return [
        { id: "pd-1", url: "/images/gallery/prayagraj_triveni_sangam_view.webp", title: "Holy Triveni Sangam", category: "Prayagraj" },
        { id: "pd-2", url: "/images/gallery/prayagraj_bade_hanuman.webp", title: "Lying Bade Hanuman Ji Temple", category: "Prayagraj" },
        { id: "pd-3", url: "/images/gallery/prayagraj_anand_bhavan.webp", title: "Historic Anand Bhavan", category: "Prayagraj" },
        { id: "pd-4", url: "/images/gallery/prayagraj_sangam_boats.webp", title: "Sangam Pilgrimage Boats", category: "Prayagraj" },
        { id: "pd-5", url: "/images/gallery/prayagraj_akshayavat_temple.webp", title: "Sacred Akshayavat Tree", category: "Prayagraj" },
        { id: "pd-6", url: "/images/gallery/prayagraj_evening_ghat.webp", title: "Prayagraj River Ghats", category: "Prayagraj" }
      ];
    }
    if (pkgId === "chitrakoot-darshan-tour-package") {
      return [
        { id: "cd-1", url: "/images/gallery/chitrakoot_ram_ghat.png", title: "Ram Ghat along Mandakini River", category: "Chitrakoot" },
        { id: "cd-2", url: "/images/gallery/chitrakoot_gupt_godavari.png", title: "Mystical Gupt Godavari Caves", category: "Chitrakoot" },
        { id: "cd-3", url: "/images/gallery/chitrakoot_kamadgiri.png", title: "Kamadgiri Parikrama Path", category: "Chitrakoot" },
        { id: "cd-4", url: "/images/gallery/chitrakoot_hanuman_dhara.png", title: "Hanuman Dhara Hill Shrine", category: "Chitrakoot" }
      ];
    }
    if (pkgId === "kashi-chitrakoot-ayodhya-tour-package") {
      return [
        { id: "kca-1", url: "/images/gallery/varanasi_kashi_vishwanath.webp", title: "Shri Kashi Vishwanath Temple", category: "Varanasi" },
        { id: "kca-2", url: "/images/gallery/varanasi_ganga_aarti.webp", title: "Subah-e-Banaras Ganga Aarti", category: "Varanasi" },
        { id: "kca-3", url: "/images/gallery/chitrakoot_ram_ghat.png", title: "Ram Ghat in Chitrakoot", category: "Chitrakoot" },
        { id: "kca-4", url: "/images/gallery/chitrakoot_gupt_godavari.png", title: "Gupt Godavari Caves", category: "Chitrakoot" },
        { id: "kca-5", url: "/images/gallery/ayodhya_ram_mandir_day.webp", title: "Shri Ram Janmabhoomi Mandir", category: "Ayodhya" },
        { id: "kca-6", url: "/images/gallery/ayodhya_hanuman_garhi.webp", title: "Hanuman Garhi Temple", category: "Ayodhya" }
      ];
    }
    if (pkgId === "uttar-pradesh-pilgrimage-tour-package") {
      return [
        { id: "upp-1", url: "/images/gallery/varanasi_kashi_vishwanath.webp", title: "Shri Kashi Vishwanath Temple", category: "Varanasi" },
        { id: "upp-2", url: "/images/gallery/varanasi_sarnath_stupa.webp", title: "Dhamek Stupa at Sarnath", category: "Sarnath" },
        { id: "upp-3", url: "/images/gallery/prayagraj_triveni_sangam_view.webp", title: "Triveni Sangam Prayagraj", category: "Prayagraj" },
        { id: "upp-4", url: "/images/gallery/ayodhya_ram_mandir_day.webp", title: "Shri Ram Janmabhoomi Mandir", category: "Ayodhya" },
        { id: "upp-5", url: "/images/gallery/chitrakoot_ram_ghat.png", title: "Chitrakoot Ram Ghat", category: "Chitrakoot" },
        { id: "upp-6", url: "/images/gallery/chitrakoot_gupt_godavari.png", title: "Gupt Godavari Caves", category: "Chitrakoot" }
      ];
    }
    if (pkgId === "divine-trails-uttar-pradesh-tour-package") {
      return [
        { id: "dt-1", url: "/images/gallery/divine_trails_up.png", title: "Lucknow Heritage Sites", category: "Lucknow" },
        { id: "dt-2", url: "/images/gallery/varanasi_kashi_vishwanath.webp", title: "Shri Kashi Vishwanath Temple", category: "Varanasi" },
        { id: "dt-3", url: "/images/gallery/varanasi_ganga_aarti.webp", title: "Dashashwamedh Ganga Aarti", category: "Varanasi" },
        { id: "dt-4", url: "/images/gallery/prayagraj_triveni_sangam_view.webp", title: "Triveni Sangam Confluence", category: "Prayagraj" },
        { id: "dt-5", url: "/images/gallery/ayodhya_ram_mandir_day.webp", title: "Shri Ram Janmabhoomi Mandir", category: "Ayodhya" },
        { id: "dt-6", url: "/images/gallery/chitrakoot_ram_ghat.png", title: "Chitrakoot Ram Ghat", category: "Chitrakoot" }
      ];
    }
    if (pkgId === "mahakal-darshan-tour-package") {
      return [
        { id: "md-1", url: "/images/gallery/ujjain_mahakaleshwar_temple.webp", title: "Shri Mahakaleshwar Jyotirlinga", category: "Ujjain" },
        { id: "md-2", url: "/images/gallery/ujjain_mahakal_lok.webp", title: "Mahakal Lok Corridor", category: "Ujjain" },
        { id: "md-3", url: "/images/gallery/ujjain_harsiddhi_temple.webp", title: "Harsiddhi Mata Temple", category: "Ujjain" },
        { id: "md-4", url: "/images/gallery/ujjain_kal_bhairav.webp", title: "Kaal Bhairav Temple", category: "Ujjain" },
        { id: "md-5", url: "/images/gallery/ujjain_ram_ghat.webp", title: "Holy Ram Ghat along Shipra", category: "Ujjain" }
      ];
    }
    if (pkgId === "mahakal-omkareshwar-tour-package") {
      return [
        { id: "mo-1", url: "/images/gallery/ujjain_mahakaleshwar_temple.webp", title: "Shri Mahakaleshwar Jyotirlinga", category: "Ujjain" },
        { id: "mo-2", url: "/images/gallery/ujjain_mahakal_lok.webp", title: "Mahakal Lok Corridor", category: "Ujjain" },
        { id: "mo-3", url: "/images/gallery/ujjain_omkareshwar_temple.webp", title: "Shri Omkareshwar Jyotirlinga", category: "Omkareshwar" },
        { id: "mo-4", url: "/images/gallery/ujjain_ram_ghat.webp", title: "Shipra River Ghats", category: "Ujjain" },
        { id: "mo-5", url: "/images/gallery/ujjain_kal_bhairav.webp", title: "Kaal Bhairav Temple", category: "Ujjain" }
      ];
    }
    return [
      { id: "g-1", url: "/images/gallery/varanasi_kashi_vishwanath.webp", title: "Kashi Vishwanath Temple", category: "Varanasi" },
      { id: "g-2", url: "/images/gallery/varanasi_ganga_aarti.webp", title: "Ganga Aarti", category: "Varanasi" },
      { id: "g-3", url: "/images/gallery/prayagraj_triveni_sangam_view.webp", title: "Triveni Sangam Confluence", category: "Prayagraj" },
      { id: "g-4", url: "/images/gallery/chitrakoot_ram_ghat.png", title: "Ram Ghat", category: "Chitrakoot" }
    ];
  };

  const galleryImages = getPackageGallery();

  const handleScrollToForm = () => {
    handleCTAClick("Get Quote");
    const formElement = document.getElementById("inquiry-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#FFFDF9] min-h-screen text-slate-800">
      
      {/* Top Package Navigation */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 text-xs font-bold text-slate-400 select-none">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link 
            href={`/packages/${prevSlug}`}
            className="hover:text-amber-400 flex items-center gap-1.5 transition-colors"
          >
            ← Previous Package: {prevPkg.name}
          </Link>
          <Link 
            href={`/packages/${nextSlug}`}
            className="hover:text-amber-400 flex items-center gap-1.5 transition-colors"
          >
            Next Package: {nextPkg.name} →
          </Link>
        </div>
      </div>

      {/* Dynamic Hero */}
      <section className="relative min-h-[55vh] flex items-end justify-start py-16 bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image
            src={pkg.image}
            alt={pkg.name}
            fill
            priority
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF9] via-slate-950/65 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-orange-200 mb-4 select-none uppercase tracking-wider">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight size={12} className="text-orange-300" />
              <span className="text-white/80">Packages</span>
              <ChevronRight size={12} className="text-orange-300" />
              <span className="text-white">{pkg.name}</span>
            </nav>

            {pkg.tag && (
              <span className="inline-block bg-accent-orange text-white text-[10px] md:text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg tracking-wider uppercase mb-4">
                🔥 {pkg.tag}
              </span>
            )}

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight leading-tight">
              {pkg.name} Tour Package
            </h1>
            
            <p className="text-sm md:text-lg text-slate-100 font-medium mt-4 leading-relaxed italic opacity-95">
              {pkg.subtitle}
            </p>

            {/* Spec badges */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl text-white text-xs font-bold border border-white/10 shadow-sm">
                <Clock size={14} className="text-amber-400" />
                <span>{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl text-white text-xs font-bold border border-white/10 shadow-sm">
                <MapPin size={14} className="text-amber-400" />
                <span>{pkg.destinations.join(" + ")}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl text-white text-xs font-bold border border-white/10 shadow-sm">
                <Sparkles size={14} className="text-amber-400" />
                <span>{pkg.bestTimeToVisit || "October to March"}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Layout Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Estimated Travel Route timeline */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-orange-100/50 shadow-sm">
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest block mb-4">
                  Estimated Travel Route
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                  {routeSteps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="bg-orange-50/50 border border-orange-100/60 rounded-2xl px-5 py-3 flex items-center gap-2">
                        <MapPin size={14} className="text-accent-orange" />
                        <span className="text-sm font-extrabold text-slate-800">{step}</span>
                      </div>
                      {idx < routeSteps.length - 1 && (
                        <div className="text-orange-300 font-extrabold select-none">
                          ↓
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Inclusions Icon Summary */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-orange-100/50 shadow-sm">
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest block mb-6">
                  Services At A Glance
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {inclusionsIcons.map((inc, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <div className="bg-orange-50 p-2.5 rounded-xl border border-orange-100/40">
                        {inc.icon}
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-800 leading-none">{inc.title}</h4>
                        <span className="text-[10px] text-slate-400 font-bold block mt-1">{inc.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Short Overview */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-orange-100/50 shadow-sm">
                <h2 className="text-2xl font-display font-black text-slate-900 mb-4 tracking-tight">
                  Overview
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                  {pkg.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100">
                  <div className="text-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Duration</span>
                    <span className="text-sm font-black text-slate-800">{pkg.duration}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Destinations</span>
                    <span className="text-sm font-black text-slate-800">{pkg.destinations.join(" & ")}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Best Season</span>
                    <span className="text-sm font-black text-slate-800">{pkg.bestTimeToVisit || "Oct - Mar"}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Rating</span>
                    <span className="text-sm font-black text-amber-600 flex items-center justify-center gap-1">
                      ★ {pkg.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Day-Wise Itinerary */}
              <div>
                <h2 className="text-2xl font-display font-black text-slate-900 mb-6 tracking-tight pl-2">
                  Detailed Day-Wise Itinerary
                </h2>
                
                <div className="relative border-l border-orange-200/60 ml-4 md:ml-6 pl-6 md:pl-8 space-y-10 py-2">
                  {pkg.itinerary.map((day) => (
                    <div key={day.day} className="relative">
                      
                      {/* Timeline Bullet */}
                      <div className="absolute -left-[41px] md:-left-[49px] top-1 bg-gradient-to-r from-amber-500 to-accent-orange text-white text-xs font-black w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-4 border-white select-none">
                        {day.day}
                      </div>

                      <div className="bg-white rounded-3xl p-6 md:p-8 border border-orange-100/50 shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-[10px] font-black text-accent-orange uppercase tracking-widest block mb-1">
                          DAY {day.day} ITINERARY
                        </span>
                        <h3 className="text-lg md:text-xl font-display font-black text-slate-900 tracking-tight mb-3">
                          {day.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed font-medium">
                          {day.description}
                        </p>
                      </div>

                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                
                {/* Includes */}
                <div className="bg-emerald-50/30 rounded-3xl p-6 md:p-8 border border-emerald-100/50 shadow-sm">
                  <h3 className="text-lg font-display font-black text-emerald-950 mb-4 flex items-center gap-2">
                    <span className="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">✓</span>
                    What Is Included
                  </h3>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-700 font-bold text-xs select-none">
                        <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excludes */}
                <div className="bg-rose-50/30 rounded-3xl p-6 md:p-8 border border-rose-100/50 shadow-sm">
                  <h3 className="text-lg font-display font-black text-rose-950 mb-4 flex items-center gap-2">
                    <span className="bg-rose-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">✗</span>
                    What Is Excluded
                  </h3>
                  <ul className="space-y-3">
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-700 font-bold text-xs select-none">
                        <X size={14} className="text-rose-500 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Comparison table */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-orange-100/50 shadow-sm overflow-hidden">
                <h2 className="text-2xl font-display font-black text-slate-900 mb-6 tracking-tight">
                  Compare Similar Tours
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-orange-100/60 bg-orange-50/20 text-[10px] uppercase font-black tracking-widest text-slate-400">
                        <th className="p-4">Package</th>
                        <th className="p-4">Duration</th>
                        <th className="p-4">Destinations</th>
                        <th className="p-4">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Current tour */}
                      <tr className="border-b border-orange-100/40 bg-orange-50/10 font-bold">
                        <td className="p-4 text-slate-900 font-black flex items-center gap-1.5">
                          {pkg.name} <span className="bg-amber-100 text-amber-700 text-[8px] px-1.5 py-0.5 rounded uppercase">Current</span>
                        </td>
                        <td className="p-4 text-slate-700">{pkg.duration}</td>
                        <td className="p-4 text-slate-600">{pkg.destinations.join(" + ")}</td>
                        <td className="p-4 text-slate-900 font-black">₹{pkg.startingPrice}</td>
                      </tr>
                      {/* Compare Tours */}
                      {compareTours.map((t) => (
                        <tr key={t.id} className="border-b border-orange-100/20 hover:bg-slate-50 transition-colors">
                          <td className="p-4 font-bold text-slate-800">
                            <Link href={`/packages/${t.id.replace("-tour-package", "")}`} className="hover:text-accent-orange transition-colors">
                              {t.name}
                            </Link>
                          </td>
                          <td className="p-4 text-slate-500 font-semibold">{t.duration}</td>
                          <td className="p-4 text-slate-500 font-semibold">{t.destinations.join(" + ")}</td>
                          <td className="p-4 text-slate-800 font-bold">₹{t.startingPrice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Trust Section */}
              <div className="bg-gradient-to-tr from-amber-50 to-orange-50/30 rounded-3xl p-8 border border-orange-100/60 shadow-sm relative overflow-hidden">
                <h3 className="text-xl font-display font-black text-slate-900 mb-6 tracking-tight">
                  Why Book With Varanasi Travelers?
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {pkg.whyBookWithUs?.map((item, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-bold text-slate-700 leading-normal">{item}</span>
                    </div>
                  )) || (
                    <>
                      <div className="flex gap-2 items-start">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs font-bold text-slate-700 leading-normal">Verified Hotels</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs font-bold text-slate-700 leading-normal">Private AC Cab</span>
                      </div>
                      <div className="flex gap-2 items-start">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs font-bold text-slate-700 leading-normal">24×7 Assistance</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Package Gallery & Lightbox */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-orange-100/50 shadow-sm">
                <h2 className="text-2xl font-display font-black text-slate-900 mb-6 tracking-tight">
                  Destination Gallery
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {galleryImages.map((img, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setLightboxIndex(idx)}
                      className="relative h-24 sm:h-28 rounded-2xl overflow-hidden cursor-pointer hover:opacity-90 active:scale-95 transition-all shadow-sm border border-slate-100"
                    >
                      <Image 
                        src={img.url} 
                        alt={`${pkg.name} Gallery ${idx + 1}`} 
                        fill 
                        sizes="(max-width: 640px) 50vw, 25vw"
                        className="object-cover" 
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Filtered Testimonials */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-orange-100/50 shadow-sm">
                <h2 className="text-2xl font-display font-black text-slate-900 mb-6 tracking-tight flex items-center gap-2">
                  <Star size={22} className="fill-amber-400 stroke-none" />
                  What Devotees Say About This Package
                </h2>

                <div className="space-y-6">
                  {mockReviews.map((rev) => (
                    <div key={rev.id} className="border-b border-slate-100 pb-6 last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-100 shrink-0 shadow-sm">
                          <Image src={rev.avatar} alt={rev.name} fill className="object-cover" loading="lazy" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-800 leading-none">{rev.name}</h4>
                          <span className="text-[10px] text-slate-400 block mt-1">{rev.location} • {rev.date}</span>
                        </div>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed italic">
                        "{rev.text}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Blogs */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-orange-100/50 shadow-sm">
                <h2 className="text-2xl font-display font-black text-slate-900 mb-6 tracking-tight">
                  Related Travel Articles
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {mockBlogs.map((blog, idx) => (
                    <div key={idx} className="group border border-orange-100/30 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-28 w-full bg-orange-50">
                        <Image src={blog.image} alt={blog.title} fill className="object-cover" loading="lazy" />
                      </div>
                      <div className="p-4 text-left">
                        <span className="text-[9px] font-black text-accent-orange uppercase tracking-wider block mb-1">
                          {blog.readTime}
                        </span>
                        <h4 className="text-xs font-black text-slate-800 group-hover:text-accent-orange transition-colors line-clamp-2">
                          {blog.title}
                        </h4>
                        <p className="text-[10px] text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                          {blog.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-orange-100/50 shadow-sm">
                <h2 className="text-2xl font-display font-black text-slate-900 mb-6 tracking-tight flex items-center gap-2">
                  <HelpCircle size={24} className="text-accent-orange" />
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  {pkg.faq.map((fq, i) => (
                    <details key={i} className="group border border-orange-100/30 rounded-2xl bg-orange-50/5 p-4 [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                        <h3 className="text-sm font-black text-slate-800 pr-4 leading-relaxed">
                          {fq.question}
                        </h3>
                        <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-accent-orange">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <p className="text-xs font-semibold text-slate-500 mt-3.5 leading-relaxed pl-1 border-t border-orange-100/30 pt-3">
                        {fq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Lead Form & Pricing */}
            <div className="lg:col-span-1 lg:sticky lg:top-28 space-y-6">
              
              {/* Pricing Widget */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 border border-slate-800 shadow-xl relative overflow-hidden select-none">
                
                {/* Background Art */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full filter blur-xl pointer-events-none" />
                
                <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block mb-1">
                  🔒 LOCK RATE IN ADVANCE
                </span>
                
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-xs text-slate-400 line-through font-semibold">
                    ₹{new Intl.NumberFormat("en-IN").format(pkg.originalPrice || 0)}
                  </span>
                  <span className="text-[9px] font-black text-emerald-400 bg-emerald-950 border border-emerald-900/30 px-2 py-0.5 rounded uppercase tracking-wider">
                    Save {Math.round((1 - (pkg.startingPrice || 0)/(pkg.originalPrice || 1))*100)}%
                  </span>
                </div>

                <div className="mt-1">
                  <span className="text-4xl font-display font-black text-white tracking-tight">
                    ₹{new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(pkg.startingPrice || 0)}
                  </span>
                  <span className="text-xs text-slate-400 font-bold ml-1 uppercase">/ Person</span>
                </div>

                <p className="text-[10px] text-slate-400 font-bold mt-2 leading-relaxed">
                  *Excluding GST (5%) & monument entry tickets. Advance payment of ₹{pkg.lockPrice} locks this price.
                </p>

                <div className="border-t border-slate-800/80 my-5 pt-4">
                  <div className="flex items-center justify-between text-xs text-slate-300 font-bold mb-2">
                    <span>Hotel Tier</span>
                    <span className="text-white font-extrabold">{pkg.hotels.map(h => h.category).join("/")}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300 font-bold">
                    <span>Vehicle Option</span>
                    <span className="text-white font-extrabold">{pkg.vehicle.join(" / ")}</span>
                  </div>
                </div>
              </div>

              {/* Sidebar Sticky Enquiry Form Wrapper */}
              <div id="inquiry-form-section" className="bg-[#FFFFFF] border border-orange-100/50 rounded-[2.5rem] shadow-lg overflow-hidden relative p-1">
                <div className="px-6 pt-6 pb-2 text-center select-none">
                  <h3 className="text-xl font-display font-black text-slate-900 tracking-tight">
                    Plan Your Spiritual Journey
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mt-1">
                    Fill out the form below to receive a custom itinerary.
                  </p>
                </div>
                <Form defaultPackageId={pkg.id} hideHeader />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Internal Linking: Related Packages */}
      <section className="py-12 border-t border-slate-100 bg-slate-50/20 select-none">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h3 className="text-xl font-display font-black text-slate-900 mb-8 tracking-tight">
            Related Tour Packages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {relatedPackages.map((p) => (
              <Link 
                key={p.id} 
                href={`/packages/${p.id.replace("-tour-package", "")}`}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md transition-all flex flex-col h-full text-left"
              >
                <div className="relative h-32 w-full bg-orange-50 shrink-0">
                  <Image src={p.image} alt={p.name} fill className="object-cover" loading="lazy" />
                </div>
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="text-sm font-black text-slate-800 group-hover:text-accent-orange transition-colors">
                      {p.name}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-bold block mt-1">{p.duration}</span>
                  </div>
                  <div className="mt-4 pt-2 border-t border-slate-50 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-semibold">Starting From</span>
                    <span className="text-slate-900 font-black">₹{p.startingPrice}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Gallery Trigger */}
      <Lightbox
        isOpen={lightboxIndex !== null}
        images={galleryImages}
        currentIndex={lightboxIndex !== null ? lightboxIndex : 0}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex(prev => prev !== null ? (prev > 0 ? prev - 1 : galleryImages.length - 1) : null)}
        onNext={() => setLightboxIndex(prev => prev !== null ? (prev < galleryImages.length - 1 ? prev + 1 : 0) : null)}
      />

      {/* Analytics integrated CTAs */}
      <FloatingCTA packageId={pkg.id} packageName={pkg.name} />

    </div>
  );
};
