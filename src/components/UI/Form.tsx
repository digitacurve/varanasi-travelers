"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Phone, Calendar, Users, Briefcase, User, MessageSquare, X } from "lucide-react";
import { Button } from "./Button";
import { tourPackages } from "@/data/content";

interface FormProps {
  compact?: boolean;
  defaultPackageId?: string;
  onSuccess?: () => void;
  hideHeader?: boolean;
}

export const Form: React.FC<FormProps> = ({ 
  compact = false, 
  defaultPackageId = "", 
  onSuccess,
  hideHeader = false 
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    travelDate: "",
    travellers: "2",
    packageId: defaultPackageId || "ayodhya-varanasi-prayagraj",
    message: "",
  });

  const [metaData, setMetaData] = useState({
    packageName: "",
    packageUrl: "",
    utmSource: "",
    utmCampaign: "",
    utmMedium: "",
    referrer: "",
    currentPage: "",
    currentTimestamp: "",
    deviceType: ""
  });

  const [hasStartedTracking, setHasStartedTracking] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    setMounted(true);
    setMinDate(new Date().toISOString().split("T")[0]);

    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const pkg = tourPackages.find(p => p.id === defaultPackageId || p.id.replace("-tour-package", "") === defaultPackageId);
      
      const source = urlParams.get("utm_source") || "";
      const campaign = urlParams.get("utm_campaign") || "";
      const medium = urlParams.get("utm_medium") || "";
      const ref = document.referrer || "";
      const curPage = window.location.href;
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      setMetaData({
        packageName: pkg ? pkg.name : (defaultPackageId || "General Inquiry"),
        packageUrl: curPage,
        utmSource: source,
        utmCampaign: campaign,
        utmMedium: medium,
        referrer: ref,
        currentPage: curPage,
        currentTimestamp: new Date().toISOString(),
        deviceType: isMobile ? "Mobile" : "Desktop"
      });
    }
  }, [defaultPackageId]);

  useEffect(() => {
    if (showSuccess) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSuccess]);

  const handleWhatsAppContinue = () => {
    if (!lastSubmittedData) return;
    const pkgName = tourPackages.find(p => p.id === lastSubmittedData.packageId)?.name || lastSubmittedData.packageId;
    const message = encodeURIComponent(
      `Hello Varanasi Travelers! I just submitted an inquiry on your website:\n` +
      `*Name:* ${lastSubmittedData.fullName}\n` +
      `*Phone:* ${lastSubmittedData.phone}\n` +
      `*Travel Date:* ${lastSubmittedData.travelDate}\n` +
      `*Travellers:* ${lastSubmittedData.travellers}\n` +
      `*Selected Package:* ${pkgName}\n` +
      (lastSubmittedData.message ? `*Requirements:* ${lastSubmittedData.message}` : '')
    );
    window.open(`https://wa.me/919288100260?text=${message}`, "_blank");
  };

  useEffect(() => {
    if (defaultPackageId) {
      setFormData((prev) => ({ ...prev, packageId: defaultPackageId }));
    }
  }, [defaultPackageId]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!formData.travelDate) {
      newErrors.travelDate = "Please select a travel date";
    }

    const num = parseInt(formData.travellers);
    if (!formData.travellers) {
      newErrors.travellers = "Travellers count is required";
    } else if (isNaN(num) || num < 1) {
      newErrors.travellers = "Must be 1 or more travellers";
    }

    if (!formData.packageId) {
      newErrors.packageId = "Please select a package";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const trackFormStart = () => {
    if (!hasStartedTracking) {
      setHasStartedTracking(true);
      if (typeof window !== "undefined") {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "Form Started",
          packageId: defaultPackageId || formData.packageId,
          packageName: metaData.packageName
        });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    trackFormStart();
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);

    // Save lead in localStorage for mockup tracking
    const submissionTimestamp = new Date().toISOString();
    const currentPkg = tourPackages.find(p => p.id === formData.packageId || p.id.replace("-tour-package", "") === formData.packageId);
    const resolvedPackageName = currentPkg ? currentPkg.name : (metaData.packageName || formData.packageId);
    
    try {
      const existingLeads = JSON.parse(localStorage.getItem("divine_leads") || "[]");
      const fullLead = {
        ...formData,
        ...metaData,
        packageName: resolvedPackageName,
        timestamp: submissionTimestamp,
        id: Math.random().toString(36).substring(7),
      };
      existingLeads.push(fullLead);
      localStorage.setItem("divine_leads", JSON.stringify(existingLeads));
      
      // Save for thank you page redirect
      localStorage.setItem("latest_lead", JSON.stringify(fullLead));
    } catch (err) {
      console.error("Local storage error:", err);
    }

    // Push GTM Form Submitted and Lead conversion events
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      
      // Google Ads Enhanced Conversions: set user_data prior to conversion event
      const userData: Record<string, string> = {};
      if ((formData as any).email && typeof (formData as any).email === "string" && (formData as any).email.trim()) {
        userData.email = (formData as any).email.trim();
      }
      if (formData.phone && typeof formData.phone === "string" && formData.phone.trim()) {
        userData.phone_number = formData.phone.trim();
      }

      if (Object.keys(userData).length > 0) {
        if (typeof (window as any).gtag !== "function") {
          (window as any).gtag = function () {
            ((window as any).dataLayer = (window as any).dataLayer || []).push(arguments);
          };
        }
        (window as any).gtag("set", "user_data", userData);
      }

      // Form Submitted event
      (window as any).dataLayer.push({
        event: "Form Submitted",
        packageId: formData.packageId,
        packageName: resolvedPackageName,
        packageUrl: metaData.packageUrl,
        utmSource: metaData.utmSource,
        utmCampaign: metaData.utmCampaign,
        utmMedium: metaData.utmMedium,
        referrer: metaData.referrer,
        currentPage: metaData.currentPage,
        currentTimestamp: submissionTimestamp,
        deviceType: metaData.deviceType,
        fullName: formData.fullName,
        phone: formData.phone,
        travelDate: formData.travelDate,
        travellers: formData.travellers,
        message: formData.message
      });

      // GA4 & Google Ads "Lead" conversion event
      (window as any).dataLayer.push({
        event: "Lead",
        packageId: formData.packageId,
        packageName: resolvedPackageName,
        fullName: formData.fullName,
        phone: formData.phone,
        travelDate: formData.travelDate,
        travellers: formData.travellers
      });
    }

    setFormData({
      fullName: "",
      phone: "",
      travelDate: "",
      travellers: "2",
      packageId: defaultPackageId || "ayodhya-varanasi-prayagraj",
      message: "",
    });

    if (onSuccess) {
      onSuccess();
    }

    // Redirect to Thank You page
    window.location.href = "/thank-you";
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes auraBreath {
          0% { transform: translate(0, 0) scale(1); opacity: 0.38; }
          50% { transform: translate(-8px, -12px) scale(1.08); opacity: 0.5; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.38; }
        }
        .form-glow-wrapper::before {
          content: "";
          position: absolute;
          top: -160px;
          left: -160px;
          width: calc(100% + 320px);
          height: calc(100% + 320px);
          background: 
            radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.45) 0%, transparent 30%),
            radial-gradient(circle at 40% 40%, rgba(255, 213, 79, 0.5) 0%, transparent 50%),
            radial-gradient(circle at 65% 65%, rgba(255, 193, 7, 0.45) 0%, transparent 55%),
            radial-gradient(circle at 50% 50%, rgba(255, 107, 0, 0.6) 0%, rgba(255, 107, 0, 0.15) 75%, transparent 100%);
          filter: blur(200px);
          border-radius: 60px;
          pointer-events: none;
          z-index: -10;
          mix-blend-mode: screen;
          animation: auraBreath 7s ease-in-out infinite;
          transition: opacity 0.5s ease, filter 0.5s ease;
        }
        .form-glow-wrapper:focus-within::before {
          opacity: 0.62 !important;
          filter: blur(180px);
        }
      `}} />

      <div className="relative w-full flex justify-center z-10 group form-glow-wrapper">
        <div className={`bg-[#FFFDF9] border border-orange-200/80 p-6 md:p-8 rounded-[2.5rem] w-full relative shadow-[0_24px_50px_-10px_rgba(249,115,22,0.08),0_0_20px_rgba(249,115,22,0.12)] focus-within:border-accent-orange focus-within:shadow-[0_24px_50px_-10px_rgba(249,115,22,0.14),0_0_30px_rgba(249,115,22,0.22)] transition-all duration-500 ${compact ? "max-w-md" : "max-w-xl"} overflow-hidden text-slate-800`}>
          
          {/* Top gold header element inside the card */}
          <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-amber-400 via-accent-orange to-orange-500" />

          {/* Luxury Booking Header inside the card */}
          <div className="mb-6 pb-4 border-b border-orange-100/60 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-extrabold text-accent-orange bg-orange-50 border border-orange-100/60 px-3 py-1 rounded-full inline-block tracking-widest">
                Divine Booking Engine
              </span>
              <h3 className="text-lg font-display font-extrabold text-slate-900 mt-2.5">
                Request Custom Itinerary
              </h3>
            </div>
            <div className="text-right hidden sm:block">
              <span className="text-[9px] uppercase font-extrabold text-slate-400 block tracking-wider">Response Time</span>
              <span className="text-xs font-bold text-emerald-700 flex items-center justify-end gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Under 15 Mins
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="hidden" name="meta_packageName" value={metaData.packageName} />
            <input type="hidden" name="meta_packageUrl" value={metaData.packageUrl} />
            <input type="hidden" name="meta_utmSource" value={metaData.utmSource} />
            <input type="hidden" name="meta_utmCampaign" value={metaData.utmCampaign} />
            <input type="hidden" name="meta_utmMedium" value={metaData.utmMedium} />
            <input type="hidden" name="meta_referrer" value={metaData.referrer} />
            <input type="hidden" name="meta_currentPage" value={metaData.currentPage} />
            <input type="hidden" name="meta_currentTimestamp" value={metaData.currentTimestamp} />
            <input type="hidden" name="meta_deviceType" value={metaData.deviceType} />
            {/* Full Name Booking Tile */}
            <div className="space-y-1 w-full text-left">
              <div className={`relative flex flex-col px-4 py-2.5 rounded-2xl border transition-all duration-300 bg-[#FCF9F5] border-amber-900/10 focus-within:bg-white focus-within:border-accent-orange focus-within:shadow-[0_8px_30px_rgba(249,115,22,0.05)] ${
                errors.fullName ? "border-red-300 focus-within:border-red-500 focus-within:ring-red-100/30" : "focus-within:ring-4 focus-within:ring-accent-orange/5"
              }`}>
                <label className="text-[10px] uppercase font-extrabold tracking-widest text-[#1F2937] flex items-center gap-1.5 mb-1 select-none">
                  <User size={12} className="text-accent-orange" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-transparent border-none text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 p-0 font-medium"
                />
              </div>
              {errors.fullName && <p className="text-xs text-red-600 pl-1">{errors.fullName}</p>}
            </div>

            {/* Grid Layout for Phone & Travel Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Phone Booking Tile */}
              <div className="space-y-1 w-full text-left">
                <div className={`relative flex flex-col px-4 py-2.5 rounded-2xl border transition-all duration-300 bg-[#FCF9F5] border-amber-900/10 focus-within:bg-white focus-within:border-accent-orange focus-within:shadow-[0_8px_30px_rgba(249,115,22,0.05)] ${
                  errors.phone ? "border-red-300 focus-within:border-red-500 focus-within:ring-red-100/30" : "focus-within:ring-4 focus-within:ring-accent-orange/5"
                }`}>
                  <label className="text-[10px] uppercase font-extrabold tracking-widest text-[#1F2937] flex items-center gap-1.5 mb-1 select-none">
                    <Phone size={12} className="text-accent-orange" />
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit Phone Number"
                    className="w-full bg-transparent border-none text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 p-0 font-medium"
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-600 pl-1">{errors.phone}</p>}
              </div>

              {/* Travel Date Booking Tile */}
              <div className="space-y-1 w-full text-left">
                <div className={`relative flex flex-col px-4 py-2.5 rounded-2xl border transition-all duration-300 bg-[#FCF9F5] border-amber-900/10 focus-within:bg-white focus-within:border-accent-orange focus-within:shadow-[0_8px_30px_rgba(249,115,22,0.05)] ${
                  errors.travelDate ? "border-red-300 focus-within:border-red-500 focus-within:ring-red-100/30" : "focus-within:ring-4 focus-within:ring-accent-orange/5"
                }`}>
                  <label className="text-[10px] uppercase font-extrabold tracking-widest text-[#1F2937] flex items-center gap-1.5 mb-1 select-none">
                    <Calendar size={12} className="text-accent-orange" />
                    Date of Travel
                  </label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    min={minDate}
                    className="w-full bg-transparent border-none text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 p-0 cursor-pointer font-medium"
                  />
                </div>
                {errors.travelDate && <p className="text-xs text-red-600 pl-1">{errors.travelDate}</p>}
              </div>
            </div>

            {/* Grid Layout for Travellers & Package */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Travellers Booking Tile */}
              <div className="space-y-1 w-full text-left">
                <div className={`relative flex flex-col px-4 py-2.5 rounded-2xl border transition-all duration-300 bg-[#FCF9F5] border-amber-900/10 focus-within:bg-white focus-within:border-accent-orange focus-within:shadow-[0_8px_30px_rgba(249,115,22,0.05)] ${
                  errors.travellers ? "border-red-300 focus-within:border-red-500 focus-within:ring-red-100/30" : "focus-within:ring-4 focus-within:ring-accent-orange/5"
                }`}>
                  <label className="text-[10px] uppercase font-extrabold tracking-widest text-[#1F2937] flex items-center gap-1.5 mb-1 select-none">
                    <Users size={12} className="text-accent-orange" />
                    No. of Travellers
                  </label>
                  <input
                    type="number"
                    name="travellers"
                    value={formData.travellers}
                    onChange={handleChange}
                    min="1"
                    placeholder="2"
                    className="w-full bg-transparent border-none text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 p-0 font-medium"
                  />
                </div>
                {errors.travellers && <p className="text-xs text-red-600 pl-1">{errors.travellers}</p>}
              </div>

              {/* Package Selection Booking Tile */}
              <div className="space-y-1 w-full text-left">
                <div className={`relative flex flex-col px-4 py-2.5 rounded-2xl border transition-all duration-300 bg-[#FCF9F5] border-amber-900/10 focus-within:bg-white focus-within:border-accent-orange focus-within:shadow-[0_8px_30px_rgba(249,115,22,0.05)] ${
                  errors.packageId ? "border-red-300 focus-within:border-red-500 focus-within:ring-red-100/30" : "focus-within:ring-4 focus-within:ring-accent-orange/5"
                }`}>
                  <label className="text-[10px] uppercase font-extrabold tracking-widest text-[#1F2937] flex items-center gap-1.5 mb-1 select-none">
                    <Briefcase size={12} className="text-accent-orange" />
                    Select Tour Package
                  </label>
                  <div className="relative w-full flex items-center">
                    <select
                      name="packageId"
                      value={formData.packageId}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 p-0 appearance-none cursor-pointer pr-6 font-medium"
                    >
                      <option value="">Choose your pilgrimage...</option>
                      {tourPackages.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                          {pkg.name.split(":")[0]} ({pkg.duration})
                        </option>
                      ))}
                      <option value="custom">Custom Itinerary (Describe below)</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-amber-800">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                {errors.packageId && <p className="text-xs text-red-600 pl-1">{errors.packageId}</p>}
              </div>
            </div>

            {/* Special Requirements Booking Tile */}
            <div className="space-y-1 text-left">
              <div className="relative flex flex-col px-4 py-2.5 rounded-2xl border border-amber-900/10 bg-[#FCF9F5] transition-all duration-300 focus-within:bg-white focus-within:border-accent-orange focus-within:shadow-[0_8px_30px_rgba(249,115,22,0.05)] focus-within:ring-4 focus-within:ring-accent-orange/5">
                <label className="text-[10px] uppercase font-extrabold tracking-widest text-[#1F2937] flex items-center gap-1.5 mb-1 select-none">
                  <MessageSquare size={12} className="text-accent-orange" />
                  Special Requirements (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  placeholder="e.g. Senior citizen assistance, satvik food, specific hotel stays..."
                  className="w-full bg-transparent border-none text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 p-0 resize-none font-medium"
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="solid"
                fullWidth
                loading={isSubmitting}
                size="lg"
                className="bg-gradient-to-r from-amber-500 via-accent-orange to-orange-600 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 hover:shadow-[0_12px_30px_rgba(249,115,22,0.4)] shadow-[0_6px_20px_rgba(249,115,22,0.25)] hover:scale-[1.01] active:scale-[0.97] border-none transition-all duration-300 py-4.5 rounded-2xl text-white font-extrabold"
              >
                GET FREE QUOTE
              </Button>
            </div>

            <div className="text-center mt-3 text-xs text-slate-500">
              ⚡ We will call you back within 15 minutes.
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal Popup Overlay via React Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full text-center shadow-2xl relative border border-slate-100 my-auto flex flex-col items-center z-50"
              >
                <button
                  onClick={() => setShowSuccess(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors p-1"
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>

                <div className="flex justify-center mb-5 mt-2">
                  <div className="bg-emerald-50 p-3.5 rounded-full text-emerald-600 shadow-sm">
                    <CheckCircle2 size={48} className="stroke-[2.5]" />
                  </div>
                </div>

                <h4 className="text-xl md:text-2xl font-display font-extrabold text-slate-900 tracking-tight mb-2">
                  Request Submitted!
                </h4>
                <p className="text-xs md:text-sm text-slate-600 mb-5 leading-relaxed">
                  Thank you for choosing us. A dedicated pilgrimage coordinator has received your details and will call you back at <span className="font-bold text-accent-orange">{lastSubmittedData?.phone}</span> within 15 minutes.
                </p>

                <div className="bg-[#FFFDF9] rounded-2xl p-4 border border-orange-100/60 text-xs text-left text-slate-600 mb-6 space-y-2.5 w-full shadow-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>100% Satvik food arrangements secured.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>VIP Darshan coordination prepared.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Private sanitized executive cab set aside.</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 w-full">
                  <Button
                    variant="solid"
                    fullWidth
                    onClick={handleWhatsAppContinue}
                    className="bg-[#25D366] hover:bg-[#20ba56] text-white border-none flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-all shadow-[0_4px_12px_rgba(37,211,102,0.2)]"
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97C16.586 1.93 14.113.905 11.48.905c-5.44 0-9.867 4.42-9.87 9.855-.001 1.838.485 3.633 1.408 5.204l-1.066 3.9 3.99-1.047zm11.367-6.41c-.27-.135-1.595-.788-1.843-.877-.247-.09-.427-.135-.607.135-.18.27-.697.877-.855 1.057-.157.18-.315.202-.585.067-.27-.135-1.138-.42-2.167-1.34-1.008-.9-1.815-1.92-2.013-2.257-.198-.337-.021-.519.148-.687.152-.152.337-.393.506-.59.169-.197.225-.337.338-.562.112-.225.056-.42-.028-.59-.084-.169-.697-1.688-.955-2.31-.25-.6-.524-.515-.72-.524-.19-.01-.408-.01-.624-.01a1.2 1.2 0 00-.866.405c-.292.315-1.114 1.09-1.114 2.658 0 1.57 1.146 3.085 1.303 3.298.157.213 2.257 3.447 5.467 4.832.763.33 1.358.526 1.823.674.767.244 1.465.21 2.017.127.616-.093 1.596-.652 1.82-1.282.225-.63.225-1.17.157-1.283-.067-.113-.247-.203-.518-.338z"/>
                  </svg>
                  <span>Continue on WhatsApp</span>
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => setShowSuccess(false)}
                  className="py-3.5 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
};
