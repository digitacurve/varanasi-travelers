import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Spiritual Pilgrimage Tours: Varanasi, Ayodhya & Prayagraj Packages",
  description: "Experience the divine. Book premium, 100% customized pilgrimage packages to Varanasi (Kashi), Ayodhya Dham, and Prayagraj Triveni Sangam. Includes VIP Darshan, handpicked luxury hotels, & private AC transits.",
  keywords: ["Varanasi tour package", "Ayodhya tour package", "Prayagraj tour package", "Kashi Vishwanath VIP Darshan", "Ram Mandir Ayodhya package", "Spiritual tours India", "Luxury pilgrimage package"],
  authors: [{ name: "Divine Pilgrimages India" }],
  robots: "index, follow",
  openGraph: {
    title: "Varanasi, Ayodhya & Prayagraj Luxury Pilgrimage Tour Packages",
    description: "Book custom-curated divine spiritual tours. Enjoy luxury hotels, VIP temple entries, and personal AC vehicles.",
    type: "website",
    locale: "en_IN",
    siteName: "Divine Pilgrimages",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-dark-slate selection:bg-accent-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
