"use client";

import React, { useState } from "react";
import { AnnouncementTicker } from "@/components/Sections/AnnouncementTicker";
import { Header } from "@/components/Sections/Header";
import { Hero } from "@/components/Sections/Hero";
import { WhyChoose } from "@/components/Sections/WhyChoose";
import { Packages } from "@/components/Sections/Packages";
import { Inclusions } from "@/components/Sections/Inclusions";
import { Hotels } from "@/components/Sections/Hotels";
import { Transport } from "@/components/Sections/Transport";
import { Gallery } from "@/components/Sections/Gallery";
import { Reviews } from "@/components/Sections/Reviews";
import { FAQ } from "@/components/Sections/FAQ";
import { FinalCTA } from "@/components/Sections/FinalCTA";
import { Footer } from "@/components/Sections/Footer";
import { FloatingCTA } from "@/components/UI/FloatingCTA";
import { tourPackages } from "@/data/content";

export default function Home() {
  const [selectedPackageId, setSelectedPackageId] = useState("ayodhya-varanasi-prayagraj");

  const handleSelectPackage = (pkgId: string) => {
    setSelectedPackageId(pkgId);
  };

  // Structured Schema.org markup for TravelAgency and Tour package listing
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://divinejourneys.in/#agency",
        "name": "Divine Pilgrimages India",
        "image": "https://images.unsplash.com/photo-1561361513-2d000a50f0db?auto=format&fit=crop&q=80&w=800",
        "description": "Premium travel agency offering custom pilgrimage tour packages to Varanasi, Ayodhya, and Prayagraj with VIP Darshan and luxury hotels.",
        "telephone": "+91-9288100260",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Vishwanath Corridor Rd, near Dashashwamedh Ghat",
          "addressLocality": "Varanasi",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "221001",
          "addressCountry": "IN"
        },
        "priceRange": "$$",
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Varanasi" },
          { "@type": "AdministrativeArea", "name": "Ayodhya" },
          { "@type": "AdministrativeArea", "name": "Prayagraj" }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1248"
        }
      },
      ...tourPackages.map((pkg) => ({
        "@type": "TouristTrip",
        "@id": `https://divinejourneys.in/#trip-${pkg.id}`,
        "name": pkg.name,
        "description": pkg.description,
        "touristType": "Pilgrim",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": pkg.startingPrice.toString(),
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "value": 1,
            "unitText": "Person"
          }
        },
        "subTrip": pkg.destinations.map((dest) => ({
          "@type": "TouristTrip",
          "name": dest
        }))
      }))
    ]
  };

  return (
    <>
      {/* Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="flex flex-col min-h-screen">
        {/* Header and Top Utilities */}
        <AnnouncementTicker />
        <Header />

        {/* Main Content Layout */}
        <main className="flex-grow">
          {/* Hero section containing split landing & form */}
          <Hero
            selectedPackageId={selectedPackageId}
            onSelectPackage={handleSelectPackage}
          />

          {/* Trust credentials / Core indicators */}
          <WhyChoose />

          {/* Filterable Tour packages */}
          <Packages onSelectPackage={handleSelectPackage} />

          {/* Standard inclusions details comparison */}
          <Inclusions />

          {/* Selected Hotel Categories */}
          <Hotels />

          {/* Sanitized Chauffeur Transport */}
          <Transport />

          {/* Lightboxed Masonry Gallery */}
          <Gallery />

          {/* Google Style pilgrim reviews */}
          <Reviews />

          {/* Collapsible FAQ accordion */}
          <FAQ />

          {/* Conversion final banner */}
          <FinalCTA />
        </main>

        {/* Brand Information and Policies Footer */}
        <Footer />

        {/* Floating Call & WhatsApp triggers */}
        <FloatingCTA />
      </div>
    </>
  );
}
