"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Phone, Calendar, Users, Briefcase, User, MessageSquare, X } from "lucide-react";
import { Button } from "./Button";
import { tourPackages } from "@/data/content";

interface FormProps {
  compact?: boolean;
  defaultPackageId?: string;
  onSuccess?: () => void;
}

export const Form: React.FC<FormProps> = ({ compact = false, defaultPackageId = "", onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    travelDate: "",
    travellers: "2",
    packageId: defaultPackageId || "ayodhya-varanasi-prayagraj",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<any>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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
    try {
      const existingLeads = JSON.parse(localStorage.getItem("divine_leads") || "[]");
      existingLeads.push({
        ...formData,
        id: Math.random().toString(36).substring(7),
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("divine_leads", JSON.stringify(existingLeads));
    } catch (err) {
      console.error("Local storage error:", err);
    }

    setLastSubmittedData(formData);
    setShowSuccess(true);
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
  };

  return (
    <>
      <div className={`glass-premium p-6 md:p-8 rounded-3xl w-full relative ${compact ? "max-w-md shadow-lg" : "max-w-xl shadow-2xl"}`}>
        <div className="mb-6">
          <span className="text-xs uppercase font-semibold text-accent-orange bg-orange-50 px-3 py-1 rounded-full inline-block mb-2">
            Instant Quote
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-dark-slate">
            Plan Your Spiritual Journey
          </h3>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Fill the form below to receive a custom-tailored package estimate.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-dark-slate mb-1">Full Name</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                <User size={16} />
              </span>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Ramesh Kumar"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white/50 text-sm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all ${
                  errors.fullName ? "border-red-500 bg-red-50/10" : "border-slate-200"
                }`}
              />
            </div>
            {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
          </div>

          {/* Grid Layout for Phone & Travel Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-dark-slate mb-1">Phone Number</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                  <Phone size={16} />
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit Mobile Number"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white/50 text-sm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all ${
                    errors.phone ? "border-red-500 bg-red-50/10" : "border-slate-200"
                  }`}
                />
              </div>
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            {/* Travel Date */}
            <div>
              <label className="block text-xs font-semibold text-dark-slate mb-1">Date of Travel</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                  <Calendar size={16} />
                </span>
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white/50 text-sm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all ${
                    errors.travelDate ? "border-red-500 bg-red-50/10" : "border-slate-200"
                  }`}
                />
              </div>
              {errors.travelDate && <p className="text-xs text-red-500 mt-1">{errors.travelDate}</p>}
            </div>
          </div>

          {/* Grid Layout for Travellers & Package */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Travellers */}
            <div>
              <label className="block text-xs font-semibold text-dark-slate mb-1">No. of Travellers</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                  <Users size={16} />
                </span>
                <input
                  type="number"
                  name="travellers"
                  value={formData.travellers}
                  onChange={handleChange}
                  min="1"
                  placeholder="2"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white/50 text-sm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all ${
                    errors.travellers ? "border-red-500 bg-red-50/10" : "border-slate-200"
                  }`}
                />
              </div>
              {errors.travellers && <p className="text-xs text-red-500 mt-1">{errors.travellers}</p>}
            </div>

            {/* Package selection */}
            <div>
              <label className="block text-xs font-semibold text-dark-slate mb-1">Select Package</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                  <Briefcase size={16} />
                </span>
                <select
                  name="packageId"
                  value={formData.packageId}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white/50 text-sm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange appearance-none transition-all ${
                    errors.packageId ? "border-red-500 bg-red-50/10" : "border-slate-200"
                  }`}
                >
                  <option value="">Choose your pilgrimage...</option>
                  {tourPackages.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name.split(":")[0]} ({pkg.duration})
                    </option>
                  ))}
                  <option value="custom">Custom Itinerary (Describe below)</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {errors.packageId && <p className="text-xs text-red-500 mt-1">{errors.packageId}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-dark-slate mb-1">Special Requirements (Optional)</label>
            <div className="relative">
              <span className="absolute top-3.5 left-3.5 text-slate-400">
                <MessageSquare size={16} />
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Senior citizen assistance, specific hotels, special rituals..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white/50 text-sm focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all resize-none"
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-2">
            <Button type="submit" variant="solid" fullWidth loading={isSubmitting} size="lg">
              GET FREE QUOTE
            </Button>
          </div>

          <div className="text-center mt-3 text-xs text-slate-500">
            ⚡ We will call you back within 15 minutes.
          </div>
        </form>
      </div>

      {/* Success Modal Popup Overlay */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl relative border border-slate-100"
            >
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              <div className="flex justify-center mb-6">
                <div className="bg-green-50 p-4 rounded-full text-green-600 animate-pulse-slow">
                  <CheckCircle2 size={56} className="stroke-[2.5]" />
                </div>
              </div>

              <h4 className="text-2xl font-display font-bold text-dark-slate mb-3">
                Request Submitted!
              </h4>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Thank you for choosing us to assist with your spiritual journey. A dedicated pilgrimage coordinator has received your details and will call you at <strong className="text-accent-orange">your phone number</strong> within 15 minutes.
              </p>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-xs text-left text-slate-500 mb-6 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                  <span>100% Satvik food arrangements secured.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                  <span>VIP Darshan coordination prepared.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                  <span>Private sanitized executive cab set aside.</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <Button
                  variant="solid"
                  fullWidth
                  onClick={handleWhatsAppContinue}
                  className="bg-[#25D366] hover:bg-[#20ba56] text-white border-none flex items-center justify-center gap-2"
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
                >
                  Done
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
