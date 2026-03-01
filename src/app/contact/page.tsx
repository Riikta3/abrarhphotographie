import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, MapPin } from "lucide-react";

const pricingInfo = [
  {
    icon: Camera,
    title: "Séance Couple",
    price: "À partir de 250€",
    description: "1h de séance, 50+ photos retouchées",
  },
  {
    icon: Camera,
    title: "Portrait Famille",
    price: "À partir de 300€",
    description: "1h30 de séance, 60+ photos retouchées",
  },
  {
    icon: Camera,
    title: "Maternité",
    price: "À partir de 280€",
    description: "1h de séance, 40+ photos retouchées",
  },
  {
    icon: Camera,
    title: "Mariage",
    price: "Sur devis",
    description: "Formules personnalisées selon vos besoins",
  },
];

export default function ContactPage() {
  const contactBackground =
    "/assets/generated_images/Contact_page_background_b496da34.png";

  return (
    <div className='min-h-screen'>
      <PageHeader
        title='Contact Photographe'
        subtitle='Photographe professionnelle en Seine-et-Marne, je serais ravie de vous accompagner dans la création de vos plus beaux souvenirs. Parlons de votre projet !'
        backgroundImage={contactBackground}
      />

      <section className='py-16 pb-0 bg-card'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            <Card
              className='text-center'
              data-testid='quick-info-location'
            >
              <CardContent className='p-8'>
                <div className='flex justify-center mb-4'>
                  <div className='p-3 bg-accent/10 rounded-full'>
                    <MapPin className='h-6 w-6 text-accent' />
                  </div>
                </div>
                <h3 className='font-serif text-xl font-bold text-foreground mb-2'>
                  Zone d'Intervention
                </h3>
                <p className='text-muted-foreground'>
                  Photographe en Seine-et-Marne, Paris et Île-de-France
                </p>
              </CardContent>
            </Card>

            <Card
              className='text-center'
              data-testid='quick-info-flexibility'
            >
              <CardContent className='p-8'>
                <div className='flex justify-center mb-4'>
                  <div className='p-3 bg-accent/10 rounded-full'>
                    <Camera className='h-6 w-6 text-accent' />
                  </div>
                </div>
                <h3 className='font-serif text-xl font-bold text-foreground mb-2'>
                  Séances Personnalisées
                </h3>
                <p className='text-muted-foreground'>
                  Mariages, couples, familles et maternité
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ContactForm />

      <section className='py-24 bg-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-6'>
              Tarifs Photographe
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Photographe professionnelle en Seine-et-Marne, je propose des
              formules adaptées à chaque projet. Devis personnalisé et gratuit
              pour tous vos événements.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {pricingInfo.map((item, index) => (
              <Card
                key={index}
                className='text-center hover-elevate'
                data-testid={`pricing-${item.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <CardContent className='p-6'>
                  <div className='flex justify-center mb-4'>
                    <div className='p-3 bg-accent/10 rounded-full'>
                      <item.icon className='h-6 w-6 text-accent' />
                    </div>
                  </div>
                  <h3 className='font-serif text-lg font-bold text-foreground mb-2'>
                    {item.title}
                  </h3>
                  <div className='text-2xl font-bold text-accent mb-3'>
                    {item.price}
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className='text-center mt-8'>
            <p className='text-muted-foreground'>
              * Tarifs TTC, déplacement inclus en Seine-et-Marne et Paris. Devis
              gratuit pour tous vos projets photographiques.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
