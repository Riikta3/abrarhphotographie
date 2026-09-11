import { Suspense } from "react";
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
                  <Image src={selection.image} alt={selection.title} fill sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw' className='object-cover transition-transform duration-300 group-hover:scale-105' loading='lazy' />
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
      <Suspense fallback={null}><Gallery /></Suspense>
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
