import Gallery from "@/components/Gallery";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import weddingImage from "@assets/generated_images/Elegant_French_wedding_photography_51d0cad8.png";
import coupleImage from "@assets/generated_images/Romantic_Paris_couple_session_10bb35d5.png";
import familyImage from "@assets/generated_images/Joyful_family_portrait_session_84976749.png";
import maternityImage from "@assets/generated_images/Serene_maternity_portrait_a4b8ace0.png";

const portfolioHighlights = [
  {
    title: "Mariages d'Exception",
    description: "Immortalisez votre jour J avec élégance et émotion",
    image: weddingImage,
    count: "200+ mariages"
  },
  {
    title: "Séances Couple",
    description: "Amour et complicité dans les plus beaux lieux de Paris",
    image: coupleImage,
    count: "150+ séances"
  },
  {
    title: "Portraits Famille",
    description: "Moments de bonheur partagés en famille",
    image: familyImage,
    count: "300+ familles"
  },
  {
    title: "Maternité",
    description: "La beauté de la grossesse sublimée",
    image: maternityImage,
    count: "100+ futures mamans"
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Ma Galerie
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explorez une sélection de mes plus belles créations, 
              témoins d'instants précieux et d'émotions authentiques.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Portfolio Highlights
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez mes spécialités à travers une sélection de mes plus beaux projets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {portfolioHighlights.map((highlight, index) => (
              <Card key={index} className="overflow-hidden hover-elevate group" data-testid={`portfolio-${highlight.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="relative h-80">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-sm text-accent font-medium mb-2">
                      {highlight.count}
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-white/80">
                      {highlight.description}
                    </p>
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
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Prêt·e à Créer 
            <span className="block font-script text-accent">Vos Souvenirs ?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez-moi pour discuter de votre projet et réserver votre séance photo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" data-testid="button-gallery-contact">
              Réserver une Séance
            </Button>
            <Button variant="outline" size="lg" data-testid="button-gallery-consultation">
              Consultation Gratuite
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}