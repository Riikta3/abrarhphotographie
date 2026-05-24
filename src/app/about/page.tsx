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
