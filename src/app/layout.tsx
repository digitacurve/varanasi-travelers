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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KPXHR3MV');`
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-dark-slate selection:bg-accent-orange selection:text-white">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KPXHR3MV"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
