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
                <NextImage src={service.image} alt={service.title} fill sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw' className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' loading='lazy' />
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
