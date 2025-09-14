import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import weddingImage from "@assets/generated_images/Elegant_French_wedding_photography_51d0cad8.png";
import familyImage from "@assets/generated_images/Joyful_family_portrait_session_84976749.png";
import coupleImage from "@assets/generated_images/Romantic_Paris_couple_session_10bb35d5.png";

const services = [
  {
    title: "Photographe Mariage",
    description:
      "Votre histoire d'amour mérite d'être racontée avec passion. Photographe de mariage en Seine-et-Marne, j'immortalise chaque émotion, chaque regard complice, chaque rire partagé pour que vous puissiez revivre à l'infini ce jour magique dans les plus beaux lieux d'Île-de-France.",
    image: weddingImage,
    features: ["Cérémonie & Réception", "Séance couple", "Retouches incluses"],
    keywords:
      "photographe mariage Seine-et-Marne, mariage Île-de-France, photographe cérémonie",
  },
  {
    title: "Séance Couple",
    description:
      "Parce que l'amour se célèbre tous les jours. Séances photo couple romantiques dans les plus beaux décors de Paris et Seine-et-Marne. Je révèle votre complicité à travers des moments volés, des regards tendres, votre histoire unique.",
    image: coupleImage,
    features: [
      "Lieux iconiques Paris",
      "Ambiance naturelle",
      "50+ photos retouchées",
    ],
    keywords:
      "séance couple Paris, photographe couple Seine-et-Marne, séance romantique",
  },
  {
    title: "Photographe Famille & Maternité",
    description:
      "Ces petits moments qui font les grands souvenirs. Photographe famille et maternité en Seine-et-Marne, je saisis l'authenticité de vos émotions que ce soit l'attente d'un bébé ou la joie d'une famille. Parce que chaque famille a sa propre magie.",
    image: familyImage,
    features: [
      "Sessions famille ou maternité",
      "Enfants & futurs parents bienvenus",
      "Studio, extérieur ou à domicile",
      "Ambiance détendue & accessoires fournis",
    ],
    keywords:
      "photographe famille Seine-et-Marne, photographe maternité, portrait famille Île-de-France",
  },
];

export default function Services() {
  return (
    <section className='py-24 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12 sm:mb-16'>
          <h2 className='font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6'>
            Mes Spécialités
          </h2>
          <p className='text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4'>
            Photographe à Marne-la-Vallée, je vous accompagne pour immortaliser
            vos plus beaux souvenirs avec authenticité et émotion. Chaque
            histoire est unique, chaque moment précieux. Spécialisée dans les
            mariages, couples, familles et maternité en Île-de-France.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr'>
          {services.map((service, index) => (
            <Card
              key={index}
              className='hover-elevate overflow-hidden group flex flex-col'
              data-testid={`card-service-${service.title.toLowerCase()}`}
            >
              <div className='relative h-48 sm:h-56 md:h-64 overflow-hidden'>
                <img
                  src={service.image}
                  alt={`${service.title} - Photographe professionnelle en Seine-et-Marne`}
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                <div className='absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white'>
                  <h3 className='font-serif text-xl sm:text-2xl font-bold'>
                    {service.title}
                  </h3>
                </div>
              </div>

              <CardContent className='p-4 sm:p-6 flex flex-col flex-grow'>
                <p className='text-muted-foreground mb-4'>
                  {service.description}
                </p>

                <ul className='space-y-2 mb-6'>
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className='flex items-center text-sm text-muted-foreground'
                    >
                      <div className='w-1.5 h-1.5 bg-accent rounded-full mr-3' />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant='outline'
                  className='w-full mt-auto hover:bg-accent hover:text-accent-foreground transition-colors'
                  data-testid={`button-service-${service.title.toLowerCase()}`}
                  asChild
                >
                  <a
                    href='/contact'
                    title={`Demander un devis pour ${service.title}`}
                  >
                    {service.title === "Photographe Mariage" &&
                      "Planifions votre jour J"}
                    {service.title === "Séance Couple" &&
                      "Créons votre séance romantique"}
                    {service.title === "Photographe Famille & Maternité" &&
                      "Immortalisons vos moments"}
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
