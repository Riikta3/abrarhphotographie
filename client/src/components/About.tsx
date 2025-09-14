import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import photographerImage from "@assets/generated_images/Professional_photographer_portrait_c024e775.png";
import { Award, Camera, Heart, Users } from "lucide-react";

const stats = [
  { icon: Camera, number: "500+", label: "Séances Réalisées" },
  { icon: Heart, number: "200+", label: "Mariages Immortalisés" },
  { icon: Users, number: "1000+", label: "Familles Heureuses" },
  { icon: Award, number: "5", label: "Années d'Expérience" },
];

/**
 * Composant About - Affiche la section "À propos de Marie"
 * @param showStats - Affiche les statistiques si true (par défaut: true)
 */
interface AboutProps {
  showStats?: boolean;
}

export default function About({ showStats = true }: AboutProps) {
  return (
    <section className='py-16 sm:py-20 lg:py-24 bg-card'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center'>
          {/* Image */}
          <div className='relative'>
            <div className='relative overflow-hidden rounded-lg'>
              <img
                src={photographerImage}
                alt='Marie Dubois, Photographe Professionnelle'
                className='w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
            </div>

            {/* Floating Quote */}
            <Card className='absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -right-4 sm:-right-6 lg:-right-8 max-w-xs sm:max-w-sm bg-secondary shadow-lg'>
              <CardContent className='p-4 sm:p-6'>
                <p className='font-script text-base sm:text-lg text-primary mb-2'>
                  "La photographie, c'est capturer l'âme"
                </p>
                <p className='text-xs sm:text-sm text-primary/70'>
                  — Marie Dubois
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className='space-y-6 sm:space-y-8 mt-8 lg:mt-0'>
            <div>
              <h2 className='font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6'>
                À Propos de Marie
              </h2>
              <div className='space-y-4 text-base sm:text-lg text-muted-foreground'>
                <p>
                  Passionnée de photographie depuis plus de 5 ans, je me
                  spécialise dans l'art de capturer les émotions authentiques et
                  les moments précieux de votre vie.
                </p>
                <p>
                  Basée en Seine-et-Marne (Marne-la-Vallée), j'interviens dans
                  toute l'Île-de-France pour accompagner les couples, familles
                  et futures mamans dans la création de souvenirs intemporels.
                  Mon approche se base sur la naturel et l'élégance.
                </p>
                <p>
                  Chaque séance est unique et personnalisée selon vos envies,
                  dans une ambiance détendue et conviviale.
                </p>
              </div>
            </div>

            {/* Stats - Affichage conditionnel */}
            {showStats && (
              <div className='grid grid-cols-2 gap-4 sm:gap-6'>
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className='text-center'
                    data-testid={`stat-${stat.label
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <div className='flex justify-center mb-3'>
                      <div className='p-3 bg-accent/10 rounded-full'>
                        <stat.icon className='h-6 w-6 text-accent' />
                      </div>
                    </div>
                    <div className='font-serif text-2xl sm:text-3xl font-bold text-foreground'>
                      {stat.number}
                    </div>
                    <div className='text-xs sm:text-sm text-muted-foreground'>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                data-testid='button-about-contact'
              >
                Travaillons Ensemble
              </Button>
              <Button
                variant='outline'
                size='lg'
                asChild
                data-testid='button-about-instagram'
              >
                <a
                  href='https://instagram.com/marie_dubois_photo'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center'
                >
                  <svg
                    className='w-5 h-5 mr-2'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                  </svg>
                  Voir sur Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
