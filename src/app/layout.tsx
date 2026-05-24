import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { UIProviders } from "@/components/providers/UIProviders";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Dancing_Script, Lato, Playfair_Display } from "next/font/google";
import "./globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-script" });

export const metadata: Metadata = {
  metadataBase: new URL("https://abrarh-photographie.fr"),
  title: {
    default: "Photographe Mariage Storytelling Seine-et-Marne | Abrar H Photographie",
    template: "%s | Abrar H Photographie",
  },
  description:
    "Photographe mariage storytelling à Marne-la-Vallée (77) et Paris. Reportages mariage immersifs, séances couple, famille & maternité en Île-de-France. Duo photo et vidéo mariage disponible.",
  keywords: [
    "photographe mariage seine-et-marne",
    "photographe mariage paris",
    "photographe mariage 77",
    "photographe mariage île-de-france",
    "photographe famille chelles",
    "photographe famille seine-et-marne",
    "séance photo famille IDF",
    "reportage mariage immersif paris",
    "photographe mariage storytelling 77",
    "photos mariage naturelles authentiques",
    "shooting photo famille sur le vif IDF",
    "duo photographe vidéaste mariage paris",
    "forfait photo et vidéo mariage 77",
    "taxi photo tour paris",
    "séance photo privée disneyland paris",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://abrarh-photographie.fr",
    siteName: "Abrar H Photographie",
    title: "Photographe Mariage Storytelling Seine-et-Marne | Abrar H Photographie",
    description:
      "Photographe mariage storytelling à Marne-la-Vallée (77) et Paris. Reportages mariage immersifs, séances couple, famille & maternité. Duo photo+vidéo disponible.",
    images: [
      {
        url: "/assets/generated_images/Elegant_French_wedding_photography_51d0cad8.png",
        width: 1200,
        height: 630,
        alt: "Photographe mariage storytelling Seine-et-Marne — Abrar H Photographie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photographe Mariage Storytelling Seine-et-Marne | Abrar H Photographie",
    description:
      "Photographe mariage storytelling à Marne-la-Vallée (77) et Paris. Reportages immersifs, couple, famille, maternité.",
    images: ["/assets/generated_images/Elegant_French_wedding_photography_51d0cad8.png"],
  },
  alternates: {
    canonical: "https://abrarh-photographie.fr",
  },
  other: {
    "geo.region": "FR-77",
    "geo.placename": "Marne-la-Vallée, Seine-et-Marne",
    "geo.position": "48.8483;2.6234",
    ICBM: "48.8483, 2.6234",
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://abrarh-photographie.fr/#business",
  name: "Abrar H Photographie",
  description:
    "Photographe mariage storytelling, couple, famille et maternité à Marne-la-Vallée (77) et Paris. Duo photo et vidéo mariage disponible.",
  url: "https://abrarh-photographie.fr",
  image:
    "https://abrarh-photographie.fr/assets/generated_images/Elegant_French_wedding_photography_51d0cad8.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marne-la-Vallée",
    addressRegion: "Seine-et-Marne",
    postalCode: "77700",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 48.8483, longitude: 2.6234 },
  areaServed: [
    { "@type": "City", name: "Marne-la-Vallée" },
    { "@type": "City", name: "Paris" },
    { "@type": "City", name: "Chelles" },
    { "@type": "City", name: "Chessy" },
    { "@type": "AdministrativeArea", name: "Seine-et-Marne" },
    { "@type": "AdministrativeArea", name: "Île-de-France" },
  ],
  sameAs: ["https://www.instagram.com/abrar.hphotographie/"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services Photographiques",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mariage Storytelling Seine-et-Marne" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Séance Famille Chelles & IDF" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taxi Photo Tour Paris" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Duo Photo et Vidéo Mariage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Séance Maternité Seine-et-Marne" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='fr' suppressHydrationWarning>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </head>
      <body
        className={`${lato.variable} ${playfair.variable} ${dancingScript.variable} antialiased`}
        suppressHydrationWarning
      >
        <QueryProvider>
          <UIProviders>
            <div className='min-h-screen bg-background'>
              <Navigation />
              <main role='main'>{children}</main>
              <Footer />
              <ScrollToTop />
              <CookieBanner />
            </div>
            <Toaster />
          </UIProviders>
        </QueryProvider>
      </body>
    </html>
  );
}
