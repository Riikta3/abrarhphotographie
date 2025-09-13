import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Camera, Heart, Users } from "lucide-react";
import photographerImage from "@assets/generated_images/Professional_photographer_portrait_c024e775.png";

const stats = [
  { icon: Camera, number: "500+", label: "Séances Réalisées" },
  { icon: Heart, number: "200+", label: "Mariages Immortalisés" },
  { icon: Users, number: "1000+", label: "Familles Heureuses" },
  { icon: Award, number: "5", label: "Années d'Expérience" }
];

export default function About() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={photographerImage}
                alt="Marie Dubois, Photographe Professionnelle"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Quote */}
            <Card className="absolute -bottom-8 -right-8 max-w-sm bg-background shadow-lg">
              <CardContent className="p-6">
                <p className="font-script text-lg text-accent mb-2">
                  "La photographie, c'est capturer l'âme"
                </p>
                <p className="text-sm text-muted-foreground">— Marie Dubois</p>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                À Propos de Marie
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Passionnée de photographie depuis plus de 5 ans, je me spécialise dans 
                  l'art de capturer les émotions authentiques et les moments précieux de 
                  votre vie.
                </p>
                <p>
                  Basée à Paris, j'accompagne les couples, familles et futures mamans 
                  dans la création de souvenirs intemporels. Mon approche se base sur 
                  la naturel et l'élégance.
                </p>
                <p>
                  Chaque séance est unique et personnalisée selon vos envies, 
                  dans une ambiance détendue et conviviale.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <stat.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="font-serif text-3xl font-bold text-foreground">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" data-testid="button-about-contact">
              Travaillons Ensemble
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}