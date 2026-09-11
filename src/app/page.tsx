import { Suspense } from "react";
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
      <Suspense fallback={null}><Gallery /></Suspense>
      <Testimonials />
    </div>
  );
}
