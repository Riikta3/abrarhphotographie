import Gallery from "@/components/Gallery";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import weddingImage from "@assets/generated_images/Elegant_French_wedding_photography_51d0cad8.png";
import galleryBackground from "@assets/generated_images/Gallery_page_background_1712e0f1.png";
import familyImage from "@assets/generated_images/Joyful_family_portrait_session_84976749.png";
import coupleImage from "@assets/generated_images/Romantic_Paris_couple_session_10bb35d5.png";
import maternityImage from "@assets/generated_images/Serene_maternity_portrait_a4b8ace0.png";

const portfolioSelection = [
  {
    title: "Photographe Mariage en Seine-et-Marne",
    description:
      "Votre union célébrée avec passion dans les plus beaux décors d'Île-de-France. Chaque baiser, chaque regard, chaque sourire devient un trésor éternel.",
    image: weddingImage,
    count: "200+ mariages",
    keywords:
      "photographe mariage seine-et-marne, mariage paris, photographe mariage ile-de-france",
  },
  {
    title: "Séances Couple Romantiques",
    description:
      "L'amour se raconte en images dans les jardins parisiens et les rives de Seine-et-Marne. Créons ensemble votre histoire d'amour en photos.",
    image: coupleImage,
    count: "150+ séances",
    keywords:
      "séance couple paris, photographe couple seine-et-marne, engagement photo",
  },
  {
    title: "Photographe Famille & Maternité",
    description:
      "Ces petits moments qui font la grandeur de la vie. De la douce attente à la joie partagée, chaque étape mérite d'être chérie.",
    image: familyImage,
    count: "300+ familles",
    keywords:
      "photographe famille seine-et-marne, séance maternité paris, portrait famille",
  },
  {
    title: "Séances Maternité Tendance",
    description:
      "La maternité dans toute sa splendeur naturelle. Ces neuf mois magiques transformés en souvenirs précieux pour l'éternité.",
    image: maternityImage,
    count: "100+ futures mamans",
    keywords:
      "séance maternité seine-et-marne, photographe maternité paris, grossesse photo",
  },
];

export default function GalleryPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section with Background */}
      <PageHeader
        title='Portfolio Photographe - Seine-et-Marne & Paris'
        subtitle="Découvrez mes créations photographiques en Seine-et-Marne et Paris. Mariages, couples, familles et maternité : chaque image raconte une histoire unique d'amour et d'émotion."
        backgroundImage={galleryBackground}
      />

      {/* Sélection Portfolio */}
      <section className='py-24 pb-0 bg-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-6'>
              Mes Spécialités Photographiques
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Photographe professionnelle en Seine-et-Marne, je vous accompagne
              dans vos plus beaux moments. Chaque séance est une aventure
              unique, une histoire d'amour à raconter en images.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
            {portfolioSelection.map((selection, index) => (
              <Card
                key={index}
                className='overflow-hidden hover-elevate group'
                data-testid={`portfolio-${selection.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <div className='relative h-80'>
                  <img
                    src={selection.image}
                    alt={`${selection.title} - Photographe professionnelle en Seine-et-Marne`}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                    loading='lazy'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
                  <div className='absolute bottom-6 left-6 text-white'>
                    <div className='text-sm text-accent font-medium mb-2'>
                      {selection.count}
                    </div>
                    <h3 className='font-serif text-2xl font-bold mb-2'>
                      {selection.title}
                    </h3>
                    <p className='text-white/80'>{selection.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Gallery */}
      <Gallery />

      {/* Call to Action */}
      <section className='py-24 bg-card'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-6'>
            Prêt·e à Créer
            <span className='block font-script text-accent'>
              Vos Souvenirs ?
            </span>
          </h2>
          <p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Photographe en Seine-et-Marne et Paris, je serais ravie de vous
            accompagner dans la création de vos plus beaux souvenirs. Parlons de
            votre projet !
          </p>
          <div className='flex justify-center'>
            <Button
              size='lg'
              data-testid='button-gallery-contact'
              asChild
            >
              <a
                href='/contact'
                className='cursor-pointer'
              >
                Réserver une Séance
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
