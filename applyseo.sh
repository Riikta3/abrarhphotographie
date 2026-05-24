#!/bin/bash
# Script SEO Next.js — à exécuter depuis le dossier front_next
set -e

echo "Application des changements SEO Next.js..."

# ── src/app/layout.tsx ──────────────────────────────────────────────────────
cat > src/app/layout.tsx << 'EOF'
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
EOF

# ── src/app/page.tsx ─────────────────────────────────────────────────────────
cat > src/app/page.tsx << 'EOF'
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photographe Mariage Storytelling Seine-et-Marne",
  description:
    "Photographe mariage immersif et storytelling à Marne-la-Vallée (77), Paris et toute l'Île-de-France. Séances famille Chelles, couple, maternité. Duo photo et vidéo mariage 77.",
  alternates: { canonical: "https://abrarh-photographie.fr/" },
  openGraph: {
    type: "website",
    url: "https://abrarh-photographie.fr/",
    title: "Photographe Mariage Storytelling Seine-et-Marne | Abrar H Photographie",
    description:
      "Photographe mariage storytelling à Marne-la-Vallée et Paris. Reportages immersifs, séances famille Chelles, taxi photo tour, duo photo+vidéo.",
    images: [{ url: "/assets/generated_images/Elegant_French_wedding_photography_51d0cad8.png" }],
  },
};

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <Services />
      <About showStats={false} />
      <Gallery />
      <Testimonials />
    </div>
  );
}
EOF

# ── src/app/about/page.tsx ───────────────────────────────────────────────────
cat > src/app/about/page.tsx << 'EOF'
import About from "@/components/About";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À Propos — Photographe Mariage Famille Marne-la-Vallée",
  description:
    "Découvrez Abrar H, photographe mariage storytelling basée à Marne-la-Vallée (Seine-et-Marne 77). Approche naturelle, reportages immersifs, duo photo+vidéo, taxi photo tour Paris.",
  alternates: { canonical: "https://abrarh-photographie.fr/about" },
  openGraph: {
    type: "profile",
    url: "https://abrarh-photographie.fr/about",
    title: "À Propos — Photographe Mariage Famille Marne-la-Vallée | Abrar H",
    description:
      "Photographe professionnelle à Marne-la-Vallée (77). Mariage storytelling, famille Chelles, duo vidéaste, taxi photo tour Paris.",
    images: [{ url: "/assets/generated_images/Professional_photographer_portrait_c024e775.png" }],
  },
};

export default function AboutPage() {
  return (
    <div className='min-h-screen'>
      <PageHeader
        title="Photographe Mariage & Famille à Marne-la-Vallée"
        subtitle="Basée en Seine-et-Marne (77), je capture vos moments de vie avec une approche storytelling naturelle — mariages immersifs, séances famille Chelles, duo photo+vidéo."
        backgroundImage='/assets/generated_images/About_page_background_61b45b57.png'
      />
      <About showStats={true} />
      <section className='py-24 pt-12 bg-card'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-6'>Mon Processus</h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              De notre premier contact à la livraison de vos photos, voici comment se déroule notre collaboration.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              { step: "01", title: "Premier Contact", description: "Échangeons sur votre projet mariage, séance famille ou couple. Je réponds sous 24h et propose un rendez-vous découverte gratuit." },
              { step: "02", title: "Séance Photo", description: "Ambiance détendue et bienveillante — reportage mariage immersif, taxi photo tour Paris, séance famille sur le vif ou maternité en extérieur." },
              { step: "03", title: "Livraison", description: "Retouches soignées et livraison de vos photos haute résolution dans une galerie privée sous 7 jours." },
            ].map((step, index) => (
              <div key={index} className='text-center' data-testid={`process-step-${step.step}`}>
                <div className='font-serif text-4xl font-bold text-accent mb-4'>{step.step}</div>
                <h3 className='font-serif text-xl font-bold text-foreground mb-4'>{step.title}</h3>
                <p className='text-muted-foreground'>{step.description}</p>
              </div>
            ))}
          </div>
          <div className='text-center mt-12'>
            <Button className='font-medium px-6 sm:px-8 py-3 w-full sm:w-auto min-h-12 border-0 cursor-pointer' size='lg' data-testid='button-start-project' asChild>
              <Link href='/contact'>Commençons Votre Projet</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
EOF

# ── src/app/gallery/page.tsx ─────────────────────────────────────────────────
cat > src/app/gallery/page.tsx << 'EOF'
import Gallery from "@/components/Gallery";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio Photographe Mariage & Famille Seine-et-Marne",
  description:
    "Portfolio photographe mariage storytelling, famille sur le vif, couple et maternité en Seine-et-Marne (77) et Paris. Photos naturelles et authentiques d'Abrar H.",
  alternates: { canonical: "https://abrarh-photographie.fr/gallery" },
  openGraph: {
    type: "website",
    url: "https://abrarh-photographie.fr/gallery",
    title: "Portfolio Photographe Mariage & Famille Seine-et-Marne | Abrar H",
    description: "Portfolio mariage storytelling, famille sur le vif, couple et maternité en Seine-et-Marne et Paris.",
    images: [{ url: "/assets/generated_images/Gallery_page_background_1712e0f1.png" }],
  },
};

const portfolioSelection = [
  {
    title: "Reportage Mariage Seine-et-Marne",
    description: "Photographe mariage storytelling 77 : un reportage immersif qui capture vos émotions vraies, vos regards complices, chaque baiser et chaque sourire de votre journée unique en Île-de-France.",
    image: "/assets/generated_images/Elegant_French_wedding_photography_51d0cad8.png",
    count: "200+ mariages",
    keywords: "photographe mariage seine-et-marne, reportage mariage immersif paris, photographe mariage storytelling 77",
  },
  {
    title: "Séances Couple Romantiques Paris",
    description: "Taxi photo tour Paris, Trocadéro, bords de Seine : je vous guide dans les plus beaux décors parisiens. Séance couple naturelle et authentique, sans pose forcée.",
    image: "/assets/generated_images/Romantic_Paris_couple_session_10bb35d5.png",
    count: "150+ séances",
    keywords: "séance couple paris, taxi photo tour paris, circuit touristique photo monuments paris",
  },
  {
    title: "Photographe Famille Chelles & Seine-et-Marne",
    description: "Shooting photo famille sur le vif en Île-de-France. Séance photo famille à Chelles, Marne-la-Vallée, Paris ou séance photo privée Disneyland Paris. Des instants spontanés et sincères.",
    image: "/assets/generated_images/Joyful_family_portrait_session_84976749.png",
    count: "300+ familles",
    keywords: "photographe famille chelles, photographe famille seine-et-marne, séance photo famille idf",
  },
  {
    title: "Séances Maternité Île-de-France",
    description: "La maternité dans toute sa splendeur naturelle. Séance photo maternité en Seine-et-Marne, Paris ou à domicile. Ces neuf mois magiques transformés en souvenirs précieux pour l'éternité.",
    image: "/assets/generated_images/Serene_maternity_portrait_a4b8ace0.png",
    count: "100+ futures mamans",
    keywords: "séance maternité seine-et-marne, photographe maternité paris, grossesse photo île-de-france",
  },
];

export default function GalleryPage() {
  return (
    <div className='min-h-screen'>
      <PageHeader
        title='Portfolio Photographe Mariage & Famille Seine-et-Marne'
        subtitle="Reportages mariage immersifs, séances famille sur le vif, couple romantique et maternité en Seine-et-Marne (77) et Paris. Chaque image raconte une histoire vraie."
        backgroundImage='/assets/generated_images/Gallery_page_background_1712e0f1.png'
      />
      <section className='py-24 pb-0 bg-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-6'>
              Photographe Mariage & Famille en Île-de-France
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Séance photo famille Chelles, reportage mariage storytelling 77, duo photo et vidéo mariage Paris : découvrez mes créations dans toute la Seine-et-Marne et l'Île-de-France.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
            {portfolioSelection.map((selection, index) => (
              <Card key={index} className='overflow-hidden hover-elevate group' data-testid={`portfolio-${selection.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className='relative h-80'>
                  <Image src={selection.image} alt={`${selection.title} — ${selection.keywords.split(",")[0].trim()}`} fill className='object-cover transition-transform duration-300 group-hover:scale-105' loading='lazy' />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
                  <div className='absolute bottom-6 left-6 text-white'>
                    <div className='text-sm text-accent font-medium mb-2'>{selection.count}</div>
                    <h3 className='font-serif text-2xl font-bold mb-2'>{selection.title}</h3>
                    <p className='text-white/80'>{selection.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Gallery />
      <section className='py-24 bg-card'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-6'>
            Prêt·e à Créer
            <span className='block font-script text-accent'>Votre Histoire ?</span>
          </h2>
          <p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Photographe mariage storytelling en Seine-et-Marne et Île-de-France, je serais ravie de capturer vos plus beaux moments. Parlons de votre projet mariage, famille ou couple !
          </p>
          <div className='flex justify-center'>
            <Button size='lg' data-testid='button-gallery-contact' asChild>
              <Link href='/contact' className='cursor-pointer'>Réserver une Séance</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
EOF

# ── src/app/contact/page.tsx ─────────────────────────────────────────────────
cat > src/app/contact/page.tsx << 'EOF'
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Tarifs Photographe Mariage Seine-et-Marne",
  description:
    "Contactez Abrar H Photographie pour votre mariage, famille ou couple en Seine-et-Marne (77) et Paris. Devis gratuit, duo photo+vidéo disponible, taxi photo tour Paris.",
  alternates: { canonical: "https://abrarh-photographie.fr/contact" },
  openGraph: {
    type: "website",
    url: "https://abrarh-photographie.fr/contact",
    title: "Contact & Tarifs Photographe Mariage Seine-et-Marne | Abrar H",
    description: "Devis gratuit pour votre mariage, famille ou couple en Seine-et-Marne. Duo photo+vidéo, taxi photo tour Paris.",
    images: [{ url: "/assets/generated_images/Contact_page_background_b496da34.png" }],
  },
};

const pricingInfo = [
  { icon: Camera, title: "Séance Couple", price: "À partir de 250€", description: "1h de séance, 50+ photos retouchées" },
  { icon: Camera, title: "Portrait Famille", price: "À partir de 300€", description: "1h30 de séance, 60+ photos retouchées" },
  { icon: Camera, title: "Maternité", price: "À partir de 280€", description: "1h de séance, 40+ photos retouchées" },
  { icon: Camera, title: "Mariage", price: "Sur devis", description: "Formules personnalisées selon vos besoins" },
];

export default function ContactPage() {
  return (
    <div className='min-h-screen'>
      <PageHeader
        title='Contact & Tarifs — Photographe Mariage Seine-et-Marne'
        subtitle='Devis gratuit pour votre mariage storytelling, séance famille Chelles, taxi photo tour Paris ou duo photo+vidéo en Île-de-France. Réponse sous 24h.'
        backgroundImage='/assets/generated_images/Contact_page_background_b496da34.png'
      />
      <section className='py-16 pb-0 bg-card'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            <Card className='text-center' data-testid='quick-info-location'>
              <CardContent className='p-8'>
                <div className='flex justify-center mb-4'><div className='p-3 bg-accent/10 rounded-full'><MapPin className='h-6 w-6 text-accent' /></div></div>
                <h3 className='font-serif text-xl font-bold text-foreground mb-2'>Zone d'Intervention</h3>
                <p className='text-muted-foreground'>Marne-la-Vallée, Chelles, Seine-et-Marne (77), Paris et Île-de-France</p>
              </CardContent>
            </Card>
            <Card className='text-center' data-testid='quick-info-flexibility'>
              <CardContent className='p-8'>
                <div className='flex justify-center mb-4'><div className='p-3 bg-accent/10 rounded-full'><Camera className='h-6 w-6 text-accent' /></div></div>
                <h3 className='font-serif text-xl font-bold text-foreground mb-2'>Séances & Formules</h3>
                <p className='text-muted-foreground'>Mariage, couple, famille, maternité — duo photo+vidéo disponible</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <ContactForm />
      <section className='py-24 bg-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-6'>Tarifs Photographe Seine-et-Marne</h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Photographe professionnelle en Seine-et-Marne, je propose des formules adaptées à chaque projet. Devis personnalisé et gratuit pour tous vos événements — mariages, familles, couples, maternité.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {pricingInfo.map((item, index) => (
              <Card key={index} className='text-center hover-elevate' data-testid={`pricing-${item.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <CardContent className='p-6'>
                  <div className='flex justify-center mb-4'><div className='p-3 bg-accent/10 rounded-full'><item.icon className='h-6 w-6 text-accent' /></div></div>
                  <h3 className='font-serif text-lg font-bold text-foreground mb-2'>{item.title}</h3>
                  <div className='text-2xl font-bold text-accent mb-3'>{item.price}</div>
                  <p className='text-sm text-muted-foreground'>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className='text-center mt-8'>
            <p className='text-muted-foreground'>* Tarifs TTC, déplacement inclus en Seine-et-Marne et Paris. Devis gratuit pour tous vos projets photographiques.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
EOF

# ── src/components/Hero.tsx ──────────────────────────────────────────────────
cat > src/components/Hero.tsx << 'EOF'
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";

const coupleCarousel = "/assets/generated_images/Couple_carousel_image_48d3ae82.png";
const familyCarousel = "/assets/generated_images/Family_carousel_image_6ee3d582.png";
const weddingCarousel = "/assets/generated_images/Wedding_carousel_image_56d2de9c.png";

const carouselImages = [
  { src: weddingCarousel, alt: "Photographe mariage storytelling Seine-et-Marne — reportage immersif 77", title: "Mariages", subtitle: "Votre jour le plus important" },
  { src: coupleCarousel, alt: "Taxi photo tour Paris — séance couple romantique Trocadéro et bords de Seine", title: "Couples", subtitle: "Taxi photo tour Paris" },
  { src: familyCarousel, alt: "Photographe famille Chelles Marne-la-Vallée — shooting famille sur le vif IDF", title: "Familles", subtitle: "Séances famille Chelles & IDF" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };
  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };
  const goToSlide = (index: number) => { setIsAutoPlay(false); setCurrentIndex(index); };

  return (
    <section className='relative min-h-screen h-screen flex items-center justify-center overflow-hidden'>
      <Carousel currentIndex={currentIndex} />
      <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-10' />
      <div className='relative z-30 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight'>
          Photographe Mariage & Famille
          <span className='block font-script text-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>Seine-et-Marne</span>
        </h1>
        <div className='text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed px-2 space-y-2'>
          <h2>Reportage immersif & storytelling — Marne-la-Vallée (77), Paris et toute l'Île-de-France.</h2>
        </div>
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto relative z-50'>
          <Button size='lg' data-testid='button-portfolio' className='bg-accent text-accent-foreground font-medium px-6 sm:px-8 py-3 w-full sm:w-auto min-h-12 border-0 cursor-pointer' asChild>
            <a href='/gallery'>Voir Mon Portfolio<ArrowRight className='ml-2 h-4 w-4 sm:h-5 sm:w-5' /></a>
          </Button>
          <Button variant='outline' size='lg' data-testid='button-contact-hero' className='bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-6 sm:px-8 py-3 w-full sm:w-auto min-h-12 cursor-pointer' asChild>
            <a href='/contact'>Me Contacter</a>
          </Button>
        </div>
        <div className='mt-8 text-center'>
          <p className='text-white/70 mb-0 text-sm sm:text-base'>Suivez mes dernières créations sur Instagram</p>
          <a href='https://www.instagram.com/abrar.hphotographie/' target='_blank' rel='noopener noreferrer' className='inline-flex items-center text-accent hover:text-accent/80 transition-colors font-medium text-lg' data-testid='link-hero-instagram'>
            <span className='mr-2'>@abrar.hphotographie</span>
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/></svg>
          </a>
        </div>
      </div>
      <div className='hidden lg:block'>
        <div className='absolute inset-0 pointer-events-none group'></div>
        <button className='absolute left-6 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white/70 hover:text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-40' onClick={goToPrevious} data-testid='carousel-prev' aria-label='Image précédente' type='button'><ChevronLeft className='h-5 w-5' /></button>
        <button className='absolute right-6 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white/70 hover:text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-40' onClick={goToNext} data-testid='carousel-next' aria-label='Image suivante' type='button'><ChevronRight className='h-5 w-5' /></button>
        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40'>
          {carouselImages.map((_, index) => (
            <button key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-amber-400/80" : "bg-white/30 hover:bg-white/60"}`} onClick={() => goToSlide(index)} data-testid={`carousel-dot-${index}`} aria-label={`Aller à l'image ${index + 1}`} type='button' />
          ))}
        </div>
        <button className='absolute top-6 right-6 bg-black/20 hover:bg-black/40 text-white/70 hover:text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-40' onClick={() => setIsAutoPlay(!isAutoPlay)} aria-label={isAutoPlay ? "Pause le carousel" : "Reprendre le carousel"} type='button'>
          {isAutoPlay ? <Pause className='h-3 w-3' /> : <Play className='h-3 w-3 ml-0.5' />}
        </button>
      </div>
    </section>
  );
}
EOF

# ── src/components/Services.tsx ──────────────────────────────────────────────
cat > src/components/Services.tsx << 'EOF'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NextImage from "next/image";

const weddingImage = "/assets/generated_images/Elegant_French_wedding_photography_51d0cad8.png";
const familyImage = "/assets/generated_images/Joyful_family_portrait_session_84976749.png";
const coupleImage = "/assets/generated_images/Romantic_Paris_couple_session_10bb35d5.png";

const services = [
  {
    title: "Photographe Mariage Seine-et-Marne",
    description: [
      "Photographe mariage storytelling en Seine-et-Marne (77) et Paris — je réalise un reportage immersif qui va bien au-delà des poses traditionnelles.",
      "Chaque regard complice, chaque larme de joie, chaque éclat de rire devient une image intemporelle. Duo photo et vidéo mariage disponible pour un forfait photo+vidéo 77 complet.",
      "De Marne-la-Vallée aux châteaux de l'Île-de-France, je capture l'authenticité de votre journée unique.",
    ],
    image: weddingImage,
    features: ["Reportage complet (des préparatifs à la soirée)", "Duo vidéaste mariage Paris disponible", "Galerie privée en ligne & post-traitement signature"],
    keywords: "photographe mariage Seine-et-Marne, reportage mariage immersif, duo photo vidéo mariage 77",
  },
  {
    title: "Séance Couple & Engagement Paris",
    description: "Taxi photo tour Paris, Trocadéro, bords de Seine, Montmartre : je vous guide dans un circuit touristique photo monuments Paris inoubliable. Séances couple naturelles en Seine-et-Marne aussi.",
    image: coupleImage,
    features: ["Taxi photo tour Paris — monuments iconiques", "Séances naturelles sans pose forcée", "50+ photos retouchées livraison rapide"],
    keywords: "taxi photo tour paris, séance couple seine-et-marne, circuit touristique photo paris",
  },
  {
    title: "Photographe Famille Seine-et-Marne",
    description: "Shooting photo famille sur le vif à Chelles, Marne-la-Vallée, bords de Marne ou séance photo privée Disneyland Paris (Chessy). Chaque famille a sa propre magie — je la capture naturellement.",
    image: familyImage,
    features: ["Séances famille Chelles & Marne-la-Vallée", "Séance photo privée Disneyland Paris", "Maternité, naissance, famille recomposée", "Extérieur, studio ou à domicile"],
    keywords: "photographe famille chelles, séance photo privée disneyland paris, shooting famille sur le vif IDF",
  },
];

export default function Services() {
  return (
    <section className='py-24 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12 sm:mb-16'>
          <h2 className='font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6'>Mes Spécialités</h2>
          <p className='text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4'>
            Photographe mariage storytelling, taxi photo tour Paris, shooting famille sur le vif en Seine-et-Marne — je transforme chaque instant en souvenir intemporel pour les couples et familles d'Île-de-France.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr'>
          {services.map((service, index) => (
            <Card key={index} className='hover-elevate overflow-hidden group flex flex-col' data-testid={`card-service-${service.title.toLowerCase()}`}>
              <div className='relative h-48 sm:h-56 md:h-64 overflow-hidden'>
                <NextImage src={service.image} alt={`${service.title} — ${service.keywords.split(",")[0].trim()}`} fill className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' loading='lazy' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                <div className='absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white'>
                  <h3 className='font-serif text-xl sm:text-2xl font-bold'>{service.title}</h3>
                </div>
              </div>
              <CardContent className='p-4 sm:p-6 flex flex-col flex-grow'>
                <div className='text-muted-foreground mb-4 space-y-3'>
                  {Array.isArray(service.description) ? service.description.map((p, i) => <p key={i}>{p}</p>) : <p>{service.description}</p>}
                </div>
                <ul className='space-y-2 mb-6'>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className='flex items-center text-sm text-muted-foreground'>
                      <div className='w-1.5 h-1.5 bg-accent rounded-full mr-3' />{feature}
                    </li>
                  ))}
                </ul>
                <Button variant='outline' className='w-full mt-auto hover:bg-accent hover:text-accent-foreground transition-colors' data-testid={`button-service-${service.title.toLowerCase()}`} asChild>
                  <a href='/contact' title={`Demander un devis pour ${service.title}`}>
                    {service.title.includes("Mariage") && "Planifions votre jour J"}
                    {service.title.includes("Couple") && "Créons votre séance romantique"}
                    {service.title.includes("Famille") && "Immortalisons vos moments"}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
EOF

# ── src/components/Testimonials.tsx ─────────────────────────────────────────
cat > src/components/Testimonials.tsx << 'EOF'
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sophie & Alexandre", service: "Mariage", rating: 5, text: "Abrar a su capturer l'essence de notre mariage avec une sensibilité remarquable. Chaque photo raconte notre histoire d'amour. Un travail exceptionnel !", date: "Septembre 2024" },
  { name: "Claire", service: "Maternité", rating: 5, text: "Séance maternité magique ! Abrar m'a mise à l'aise immédiatement et les photos sont sublimes. Je recommande vivement ses services.", date: "Août 2024" },
  { name: "Famille Martin", service: "Portrait Famille", rating: 5, text: "Photos de famille naturelles et pleines de vie. Abrar a réussi à capturer la personnalité de chacun de nos enfants. Merci infiniment !", date: "Juillet 2024" },
  { name: "Emma & Lucas", service: "Couple", rating: 5, text: "Séance couple inoubliable dans Paris. Abrar nous a guidés avec bienveillance et professionnalisme. Les résultats dépassent nos attentes !", date: "Juin 2024" },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://abrarh-photographie.fr/#business",
  "name": "Abrar H Photographie",
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "4", "bestRating": "5", "worstRating": "1" },
  "review": [
    { "@type": "Review", "author": { "@type": "Person", "name": "Sophie & Alexandre" }, "datePublished": "2024-09-01", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Abrar a su capturer l'essence de notre mariage avec une sensibilité remarquable." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Claire" }, "datePublished": "2024-08-01", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Séance maternité magique ! Abrar m'a mise à l'aise immédiatement." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Famille Martin" }, "datePublished": "2024-07-01", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Photos de famille naturelles et pleines de vie. Abrar a réussi à capturer la personnalité de chacun de nos enfants." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Emma & Lucas" }, "datePublished": "2024-06-01", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Séance couple inoubliable dans Paris. Abrar nous a guidés avec bienveillance et professionnalisme." },
  ],
};

export default function Testimonials() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">Témoignages</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">Découvrez les retours de mes clients sur leur expérience et leurs souvenirs capturés.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate" data-testid={`testimonial-${index}`}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 text-accent fill-current" />)}</div>
                  <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</blockquote>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-start">
                      <div><h4 className="font-medium text-foreground">{testimonial.name}</h4><p className="text-sm text-muted-foreground">{testimonial.service}</p></div>
                      <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
EOF

# ── src/components/Footer.tsx ────────────────────────────────────────────────
cat > src/components/Footer.tsx << 'EOF'
import { Camera, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='bg-primary text-primary-foreground py-12 sm:py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8'>
          <div className='col-span-1 sm:col-span-2 md:col-span-2'>
            <div className='flex items-center space-x-2 mb-4'>
              <Camera className='h-6 w-6 sm:h-8 sm:w-8 text-accent' />
              <span className='font-script text-xl sm:text-2xl'>Abrar H Photographie</span>
            </div>
            <p className='text-primary-foreground/80 mb-4 sm:mb-6 text-sm sm:text-base'>
              Photographe professionnelle en Seine-et-Marne (Marne-la-Vallée), spécialisée dans les mariages, couples, familles et maternité. Zone d'intervention : Paris et Île-de-France.
            </p>
            <div className='mt-4 pt-4 border-t border-primary-foreground/20'>
              <div className='flex items-center text-primary-foreground/60 text-sm'>
                <span>Suivez mes dernières créations :</span>
                <a href='https://instagram.com/abrar.hphotographie' target='_blank' rel='noopener noreferrer' className='ml-1 text-accent hover:text-accent/80 transition-colors font-medium' data-testid='link-instagram-handle'>@abrar.hphotographie</a>
                <Instagram className='h-5 w-5 text-accent ml-2' />
              </div>
            </div>
          </div>
          <div>
            <h3 className='font-serif text-lg font-semibold mb-4'>Services</h3>
            <ul className='space-y-2 text-primary-foreground/80 text-sm'>
              <li><Link href='/galerie?categorie=Mariages' data-testid='link-footer-mariages' className='hover:text-accent transition-colors'>Mariages</Link></li>
              <li><Link href='/galerie?categorie=Couples' data-testid='link-footer-couples' className='hover:text-accent transition-colors'>Couples</Link></li>
              <li><Link href='/galerie?categorie=Familles' data-testid='link-footer-familles' className='hover:text-accent transition-colors'>Familles</Link></li>
              <li><Link href='/galerie?categorie=Maternité' data-testid='link-footer-maternite' className='hover:text-accent transition-colors'>Maternité</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='font-serif text-lg font-semibold mb-4'>Contact</h3>
            <ul className='space-y-2 text-primary-foreground/80 text-sm'>
              <li data-testid='footer-location'>Seine-et-Marne & Île-de-France</li>
              <li data-testid='footer-instagram'><a href='https://instagram.com/abrar.hphotographie' target='_blank' rel='noopener noreferrer' className='hover:text-accent transition-colors'>@abrar.hphotographie</a></li>
              <li data-testid='footer-email'>contact@abrarh-photographie.fr</li>
            </ul>
          </div>
        </div>
        <div className='border-t border-primary-foreground/20 mt-12 pt-8'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
            <p className='text-primary-foreground/60 text-sm text-center sm:text-left'>© {new Date().getFullYear()} Abrar H Photographie. Tous droits réservés.</p>
            <div className='flex flex-wrap justify-center gap-4 sm:gap-6 text-sm'>
              <Link href='/mentions-legales' className='text-primary-foreground/60 hover:text-accent transition-colors' data-testid='link-footer-legal'>Mentions légales</Link>
              <Link href='/politique-de-confidentialite' className='text-primary-foreground/60 hover:text-accent transition-colors' data-testid='link-footer-privacy'>Confidentialité</Link>
              <Link href='/conditions-utilisation' className='text-primary-foreground/60 hover:text-accent transition-colors' data-testid='link-footer-terms'>CGU</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
EOF

# ── next.config.ts ───────────────────────────────────────────────────────────
cat > next.config.ts << 'EOF'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/galerie", destination: "/gallery", permanent: true }];
  },
};

export default nextConfig;
EOF

# ── public/sitemap.xml ───────────────────────────────────────────────────────
cat > public/sitemap.xml << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://abrarh-photographie.fr/</loc><lastmod>2026-05-24</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>
  <url><loc>https://abrarh-photographie.fr/about</loc><lastmod>2026-05-24</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://abrarh-photographie.fr/gallery</loc><lastmod>2026-05-24</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://abrarh-photographie.fr/contact</loc><lastmod>2026-05-24</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
</urlset>
EOF

# ── public/robots.txt ────────────────────────────────────────────────────────
cat > public/robots.txt << 'EOF'
User-agent: *
Allow: /

Disallow: /api/
Disallow: /conditions-utilisation
Disallow: /politique-de-confidentialite
Disallow: /mentions-legales

Sitemap: https://abrarh-photographie.fr/sitemap.xml
EOF

echo ""
echo "✓ Tous les fichiers ont été créés."
echo ""
echo "Maintenant exécute :"
echo "  git add src/app/layout.tsx src/app/page.tsx src/app/about/page.tsx src/app/gallery/page.tsx src/app/contact/page.tsx src/components/Hero.tsx src/components/Services.tsx src/components/Testimonials.tsx src/components/Footer.tsx next.config.ts public/sitemap.xml public/robots.txt"
echo "  git commit -m \"SEO: metadata Next.js, JSON-LD, keywords géo, alt texts, redirects, sitemap\""
echo "  git push -u origin claude/confident-sagan-HL7cx"

