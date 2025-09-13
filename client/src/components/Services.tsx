import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import weddingImage from "@assets/generated_images/Elegant_French_wedding_photography_51d0cad8.png";
import coupleImage from "@assets/generated_images/Romantic_Paris_couple_session_10bb35d5.png";
import familyImage from "@assets/generated_images/Joyful_family_portrait_session_84976749.png";
import maternityImage from "@assets/generated_images/Serene_maternity_portrait_a4b8ace0.png";

const services = [
  {
    title: "Mariages",
    description: "Immortalisez votre jour le plus important avec élégance et émotion",
    image: weddingImage,
    features: ["Cérémonie & Réception", "Séance couple", "Retouches incluses"]
  },
  {
    title: "Couples",
    description: "Séances romantiques dans les plus beaux lieux de Paris",
    image: coupleImage,
    features: ["Lieux iconiques", "Ambiance naturelle", "50+ photos retouchées"]
  },
  {
    title: "Familles",
    description: "Portraits chaleureux qui reflètent l'amour familial",
    image: familyImage,
    features: ["Sessions flexibles", "Enfants bienvenus", "Ambiance détendue"]
  },
  {
    title: "Maternité",
    description: "Célébrez ce moment unique avec grâce et beauté",
    image: maternityImage,
    features: ["Studio ou extérieur", "Accessoires fournis", "Séance privée"]
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Mes Spécialités
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chaque session est unique et personnalisée selon vos envies. 
            Découvrez mes différentes spécialités photographiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate overflow-hidden group" data-testid={`card-service-${service.title.toLowerCase()}`}>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif text-2xl font-bold">{service.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  data-testid={`button-service-${service.title.toLowerCase()}`}
                >
                  En Savoir Plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}