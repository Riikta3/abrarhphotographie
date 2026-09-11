import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Camera, Heart, Star } from "lucide-react";
import NextImage from "next/image";

const photographerImage =
  "/assets/generated_images/Professional_photographer_portrait_c024e775.png";

const values = [
  {
    icon: Heart,
    title: "Authenticité",
    description:
      "Je capture vos émotions vraies, sans artifice, pour des souvenirs sincères et touchants.",
  },
  {
    icon: Camera,
    title: "Excellence",
    description:
      "Matériel professionnel et techniques éprouvées pour une qualité d'image exceptionnelle.",
  },
  {
    icon: Star,
    title: "Créativité",
    description:
      "Chaque séance est unique, adaptée à votre personnalité et à vos envies.",
  },
  {
    icon: Award,
    title: "Professionalisme",
    description:
      "Ponctualité, écoute et respect de vos besoins pour une expérience sereine.",
  },
];

/**
 * Composant About - Affiche la section "À propos de Marie"
 * @param showStats - Affiche les valeurs si true (par défaut: true)
 */
interface AboutProps {
  showStats?: boolean;
}

export default function About({ showStats = true }: AboutProps) {
  return (
    <section className='py-16 sm:py-20 lg:py-24 bg-card'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {showStats ? (
          // Layout pour la page About : photo+valeurs à gauche, texte à droite
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start'>
            {/* Colonne gauche : Image + Valeurs */}
            <div className='space-y-20'>
              {/* Image avec effet amélioré */}
              <div className='relative group'>
                <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
                  <NextImage
                    src={photographerImage}
                    alt='Abrar H Photographie, Photographe Professionnelle'
                    width={800}
                    height={1000}
                    className='w-full h-[450px] sm:h-[550px] lg:h-[650px] object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent' />
                </div>

                {/* Floating Quote amélioré */}
                <Card className='absolute -bottom-6 sm:-bottom-8 lg:-bottom-10 -right-6 sm:-right-8 lg:-right-10 max-w-xs sm:max-w-sm bg-background/95 backdrop-blur-sm shadow-xl border-0'>
                  <CardContent className='p-6 sm:p-8'>
                    <p className='font-script text-lg sm:text-xl text-primary mb-3 leading-relaxed'>
                      "La photographie, c'est capturer l'âme"
                    </p>
                    <p className='text-sm sm:text-base text-primary/80 font-medium'>
                      — Abrar H Photographie
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Mes Valeurs */}
              <div className='space-y-6'>
                <h3 className='font-serif text-2xl sm:text-3xl font-bold text-foreground text-center mb-6'>
                  Mes Valeurs
                </h3>
                <div className='grid grid-cols-1 gap-4'>
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className='p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 transition-all duration-300'
                      data-testid={`value-${value.title.toLowerCase()}`}
                    >
                      <div className='flex items-start space-x-4'>
                        <div className='flex-shrink-0'>
                          <div className='p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full'>
                            <value.icon className='h-6 w-6 text-accent' />
                          </div>
                        </div>
                        <div className='flex-1'>
                          <h4 className='font-serif text-lg font-semibold text-foreground mb-2'>
                            {value.title}
                          </h4>
                          <p className='text-sm text-muted-foreground leading-relaxed'>
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Colonne droite : Contenu détaillé amélioré */}
            <div className='space-y-8 w-full'>
              <div className='space-y-8'>
                <div>
                  <div className='space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed'>
                    <p className='text-xl sm:text-2xl font-medium text-foreground leading-relaxed'>
                      Photographe professionnel basé à Marne-la-Vallée (77), je
                      capture vos plus beaux moments de vie à travers des photos
                      naturelles, sincères et pleines d'émotion.
                    </p>
                    <p>
                      Spécialisé dans la photographie de mariage en
                      Seine-et-Marne et en Île-de-France, je raconte votre
                      histoire à travers un regard authentique et un style
                      storytelling.
                    </p>
                  </div>
                </div>

                <div className='space-y-8'>
                  <div className='space-y-4 p-6 rounded-xl bg-background/30 backdrop-blur-sm border border-border/30'>
                    <h3 className='font-serif text-xl font-bold text-foreground flex items-center'>
                      <div className='w-2 h-2 rounded-full mr-3'></div>
                      Une approche centrée sur l'émotion et le naturel
                    </h3>
                    <p className='text-base text-muted-foreground leading-relaxed'>
                      Mon objectif est simple : créer des images qui vous
                      ressemblent. Que ce soit pour un mariage, une séance
                      couple ou une séance engagement, chaque photo est pensée
                      pour transmettre l'essence de vos liens et de vos
                      émotions.
                    </p>
                  </div>

                  <div className='space-y-4 p-6 rounded-xl bg-background/30 backdrop-blur-sm border border-border/30'>
                    <h3 className='font-serif text-xl font-bold text-foreground flex items-center'>
                      <div className='w-2 h-2  rounded-full mr-3'></div>
                      Photographe lifestyle en Île-de-France
                    </h3>
                    <p className='text-base text-muted-foreground leading-relaxed'>
                      En tant que photographe lifestyle, je vous accompagne dans
                      tous les moments forts de votre vie : fiançailles,
                      mariages civils ou religieux, instants en famille. Mon
                      approche discrète et bienveillante vous permet de vivre
                      pleinement l'instant, sans jamais forcer les poses.
                    </p>
                  </div>

                  <div className='space-y-4 p-6 rounded-xl bg-background/30 backdrop-blur-sm border border-border/30'>
                    <h3 className='font-serif text-xl font-bold text-foreground flex items-center'>
                      <div className='w-2 h-2  rounded-full mr-3'></div>
                      Pourquoi faire appel à un photographe à Marne-la-Vallée
                      (Seine-et-Marne) ?
                    </h3>
                    <p className='text-base text-muted-foreground leading-relaxed'>
                      Travailler avec un photographe local, c'est bénéficier
                      d'une parfaite connaissance des lieux en Île-de-France,
                      mais aussi d'une proximité et d'un accompagnement humain à
                      chaque étape. Je me déplace dans toute la Seine-et-Marne,
                      Paris et les départements voisins pour immortaliser votre
                      journée.
                    </p>
                  </div>

                  <div className='space-y-4 p-6 rounded-xl bg-background/30 backdrop-blur-sm border border-border/30'>
                    <h3 className='font-serif text-xl font-bold text-foreground flex items-center'>
                      <div className='w-2 h-2  rounded-full mr-3'></div>
                      Contactez votre photographe de mariage à Marne-la-Vallée
                    </h3>
                    <p className='text-base text-muted-foreground leading-relaxed'>
                      Envie d'en savoir plus ou de me confier votre projet ? Je
                      suis à votre écoute. Ensemble, capturons la beauté de
                      votre histoire à Marne-la-Vallée, à Paris ou ailleurs en
                      Île-de-France.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Layout pour la page Home : image à gauche, texte à droite
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center'>
            {/* Image */}
            <div className='relative group'>
              <div className='relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl'>
                <NextImage
                  src={photographerImage}
                  alt='Abrar H, photographe professionnelle en Seine-et-Marne'
                  fill
                  sizes='(max-width: 1024px) 100vw, 50vw'
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
              </div>

              {/* Floating Quote */}
              <Card className='absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -right-4 sm:-right-6 lg:-right-8 max-w-xs sm:max-w-sm bg-background/95 backdrop-blur-sm shadow-xl border-0'>
                <CardContent className='p-4 sm:p-6'>
                  <p className='font-script text-base sm:text-lg text-primary mb-2'>
                    "La photographie, c'est capturer l'âme"
                  </p>
                  <p className='text-xs sm:text-sm text-primary/70'>
                    — Abrar H Photographie
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Content */}
            <div className='space-y-6 sm:space-y-8 mt-8 lg:mt-0 w-full'>
              <div>
                <h2 className='font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6'>
                  À Propos d'Abrar
                </h2>
                <div className='space-y-4 text-base sm:text-lg text-muted-foreground'>
                  <p>
                    Passionnée de photographie depuis plus de 5 ans, je me
                    spécialise dans l'art de capturer les émotions authentiques
                    et les moments précieux de votre vie.
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

              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center w-full'>
                <Button
                  size='lg'
                  className='font-medium px-6 sm:px-8 py-3 w-full sm:w-auto min-h-12 border-0 cursor-pointer'
                  data-testid='button-about-contact'
                  asChild
                >
                  <a href='/contact'>Travaillons Ensemble</a>
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  asChild
                  className='px-6 sm:px-8 py-3 w-full sm:w-auto min-h-12 cursor-pointer hover:shadow-xs hover:translate-y-0 active:shadow-xs active:translate-y-0'
                  data-testid='button-about-instagram'
                >
                  <a
                    href='https://instagram.com/abrar.hphotographie'
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
        )}

        {/* Boutons centrés au milieu de la page pour la version About */}
        {showStats && (
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-16 w-full'>
            <Button
              size='lg'
              className='font-medium px-6 sm:px-8 py-3 w-full sm:w-auto min-h-12 border-0 cursor-pointer'
              data-testid='button-about-contact'
              asChild
            >
              <a href='/contact'>Travaillons Ensemble</a>
            </Button>
            <Button
              variant='outline'
              size='lg'
              asChild
              className='px-6 sm:px-8 py-3 w-full sm:w-auto min-h-12 cursor-pointer hover:shadow-xs hover:translate-y-0 active:shadow-xs active:translate-y-0'
              data-testid='button-about-instagram'
            >
              <a
                href='https://instagram.com/abrar.hphotographie'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center'
              >
                <svg
                  className='w-5 h-5 mr-3'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
                Voir sur Instagram
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
