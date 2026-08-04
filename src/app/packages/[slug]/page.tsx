import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Sections/Header";
import { Footer } from "@/components/Sections/Footer";
import { AnnouncementTicker } from "@/components/Sections/AnnouncementTicker";
import { extendedPackages } from "@/data/extendedPackages";
import { PackageDetailPageClient } from "@/components/Sections/PackageDetailPageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static routes for all 10 active yatra packages
export async function generateStaticParams() {
  return extendedPackages.map((pkg) => ({
    slug: pkg.id.replace("-tour-package", ""),
  }));
}

// Generate Enterprise-Level Dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const pkg = extendedPackages.find(
    (p) => p.id.replace("-tour-package", "") === slug
  );

  if (!pkg) return {};

  const seoTitle = `${pkg.name} Tour Package | ${pkg.duration} | Varanasi Travelers`;
  const metaDesc = pkg.description.slice(0, 155) + "...";
  const canonical = `https://tour.varanasitravelers.com/packages/${slug}`;

  return {
    title: seoTitle,
    description: metaDesc,
    keywords: [
      pkg.name,
      ...pkg.destinations,
      "Varanasi Travelers",
      "Spiritual Tour India",
      "Pilgrimage Tour",
      "Varanasi Tour Package"
    ],
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: seoTitle,
      description: metaDesc,
      url: canonical,
      siteName: "Varanasi Travelers",
      images: [
        {
          url: pkg.image,
          width: 1200,
          height: 630,
          alt: pkg.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: metaDesc,
      images: [pkg.image],
    },
    robots: "index, follow",
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const pkg = extendedPackages.find(
    (p) => p.id.replace("-tour-package", "") === slug
  );

  if (!pkg) {
    notFound();
  }

  // Schema.org: Organization graph definition
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Varanasi Travelers",
    "url": "https://tour.varanasitravelers.com",
    "logo": "https://tour.varanasitravelers.com/logo.png",
    "telephone": "+919288100260",
    "email": "info@varanasitravelers.com",
    "sameAs": [
      "https://facebook.com/varanasitravelers",
      "https://instagram.com/varanasitravelers",
      "https://twitter.com/varanasitravelers"
    ]
  };

  // Schema.org: TouristTrip graph definition
  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": pkg.name,
    "description": pkg.description,
    "touristType": "Pilgrim",
    "duration": pkg.duration.includes("Nights") 
      ? `P${parseInt(pkg.duration.split("/")[1]) || 3}D` 
      : "P3D",
    "provider": {
      "@type": "TravelAgency",
      "name": "Varanasi Travelers",
      "url": "https://tour.varanasitravelers.com"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": pkg.startingPrice?.toString() || "7999",
      "url": `https://tour.varanasitravelers.com/packages/${slug}`,
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": 1,
        "unitText": "Person"
      }
    },
    "subTrip": pkg.destinations.map(d => ({
      "@type": "TouristTrip",
      "name": d
    })),
    "areaServed": pkg.destinations.map(d => ({
      "@type": "AdministrativeArea",
      "name": d
    })),
    "itinerary": pkg.itinerary.map(item => ({
      "@type": "HowToStep",
      "name": `Day ${item.day}: ${item.title}`,
      "text": item.description
    }))
  };

  // Schema.org: FAQPage graph definition
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pkg.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      {/* Script Injections for search bot crawlers & indexers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AnnouncementTicker />
      <Header />

      <PackageDetailPageClient 
        pkg={pkg} 
        slug={slug} 
        allPackages={extendedPackages} 
      />

      <Footer />
    </>
  );
}
