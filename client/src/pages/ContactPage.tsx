import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Euro, Camera } from "lucide-react";
import contactBackground from "@assets/generated_images/Contact_page_background_b496da34.png";

const pricingInfo = [
  {
    icon: Camera,
    title: "Séance Couple",
    price: "À partir de 250€",
    description: "1h de séance, 50+ photos retouchées"
  },
  {
    icon: Camera,
    title: "Portrait Famille",
    price: "À partir de 300€", 
    description: "1h30 de séance, 60+ photos retouchées"
  },
  {
    icon: Camera,
    title: "Maternité",
    price: "À partir de 280€",
    description: "1h de séance, 40+ photos retouchées"
  },
  {
    icon: Camera,
    title: "Mariage",
    price: "Sur devis",
    description: "Formules personnalisées selon vos besoins"
  }
];

const locations = [
  "Paris Centre (1er-4e arrondissements)",
  "Montmartre & Sacré-Cœur (18e)",
  "Marais & Bastille (3e-4e-11e)",
  "Trocadéro & Tour Eiffel (16e)",
  "Île Saint-Louis & Notre-Dame (4e)",
  "Champs-Élysées & Arc de Triomphe (8e)",
  "Parcs parisiens (Buttes-Chaumont, Luxembourg...)",
  "Châteaux d'Île-de-France sur demande"
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Background */}
      <PageHeader
        title="Contactez-Moi"
        subtitle="Parlons de votre projet et donnons vie à vos plus beaux souvenirs."
        backgroundImage={contactBackground}
      />

      {/* Quick Info */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center" data-testid="quick-info-location">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Zone d'Intervention
                </h3>
                <p className="text-muted-foreground">
                  Paris & Île-de-France
                </p>
              </CardContent>
            </Card>

            <Card className="text-center" data-testid="quick-info-response">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Délai de Réponse
                </h3>
                <p className="text-muted-foreground">
                  Sous 24h maximum
                </p>
              </CardContent>
            </Card>

            <Card className="text-center" data-testid="quick-info-consultation">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Euro className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Devis
                </h3>
                <p className="text-muted-foreground">
                  Totalement gratuit
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <ContactForm />

      {/* Pricing Information */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tarifs Indicatifs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des formules adaptées à chaque projet. Devis personnalisé sur demande.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingInfo.map((item, index) => (
              <Card key={index} className="text-center hover-elevate" data-testid={`pricing-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <div className="text-2xl font-bold text-accent mb-3">
                    {item.price}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              * Tarifs TTC, déplacement inclus dans Paris. Devis gratuit pour les projets sur-mesure.
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Lieux de Séance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mes lieux favoris pour immortaliser vos plus beaux moments à Paris et en Île-de-France.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((location, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-background rounded-lg hover-elevate"
                data-testid={`location-${index}`}
              >
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <span className="text-foreground">{location}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Un lieu particulier en tête ? N'hésitez pas à me faire part de vos envies !
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}