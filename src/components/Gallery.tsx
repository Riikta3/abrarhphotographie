"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import NextImage from "next/image";
import { useCallback, useEffect, useState } from "react";

const coupleSeineImage =
  "/assets/generated_images/Couple_engagement_Seine_riverbank_7223cd63.png";
const coupleTrocadero =
  "/assets/generated_images/Couple_Trocadéro_Eiffel_Tower_6338da06.png";
const weddingImage =
  "/assets/generated_images/Elegant_French_wedding_photography_51d0cad8.png";
const familyLuxembourg =
  "/assets/generated_images/Family_portrait_Luxembourg_Gardens_2f08af26.png";
const familyImage =
  "/assets/generated_images/Joyful_family_portrait_session_84976749.png";
const coupleImage =
  "/assets/generated_images/Romantic_Paris_couple_session_10bb35d5.png";
const maternityImage =
  "/assets/generated_images/Serene_maternity_portrait_a4b8ace0.png";
const maternityStudio =
  "/assets/generated_images/Studio_maternity_portrait_3e65dd7d.png";
const weddingChurch =
  "/assets/generated_images/Wedding_ceremony_in_church_38001092.png";
const weddingReception =
  "/assets/generated_images/Wedding_reception_château_52d31cf8.png";

const categories = ["Tous", "Mariages", "Couples", "Familles & Maternité"];

const galleryImages = [
  {
    src: weddingImage,
    category: "Mariages",
    alt: "Photographe mariage Seine-et-Marne - Cérémonie élégante en extérieur",
  },
  {
    src: weddingChurch,
    category: "Mariages",
    alt: "Photographe mariage Paris - Cérémonie religieuse dans une église",
  },
  {
    src: weddingReception,
    category: "Mariages",
    alt: "Photographe mariage Île-de-France - Réception de mariage au château",
  },
  {
    src: coupleImage,
    category: "Couples",
    alt: "Séance couple romantique Paris - Photographe couple Seine-et-Marne",
  },
  {
    src: coupleSeineImage,
    category: "Couples",
    alt: "Séance engagement bord de Seine - Photographe couple Paris",
  },
  {
    src: coupleTrocadero,
    category: "Couples",
    alt: "Couple au Trocadéro avec Tour Eiffel - Photographe couple Paris",
  },
  {
    src: familyImage,
    category: "Familles & Maternité",
    alt: "Portrait famille joyeux - Photographe famille Seine-et-Marne",
  },
  {
    src: familyLuxembourg,
    category: "Familles & Maternité",
    alt: "Séance famille Jardin du Luxembourg - Photographe famille Paris",
  },
  {
    src: maternityImage,
    category: "Familles & Maternité",
    alt: "Séance maternité nature - Photographe maternité Seine-et-Marne",
  },
  {
    src: maternityStudio,
    category: "Familles & Maternité",
    alt: "Portrait maternité studio - Photographe maternité Paris",
  },
  // Dupliquer quelques images pour remplir la galerie
  {
    src: weddingImage,
    category: "Mariages",
    alt: "Mariage champêtre romantique - Photographe mariage Île-de-France",
  },
  {
    src: coupleImage,
    category: "Couples",
    alt: "Amour parisien - Séance couple romantique Paris",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "Tous"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  /**
   * Ouvre le lightbox avec l'image sélectionnée
   * @param index - Index de l'image dans le tableau filtré
   */
  const openLightbox = (index: number) => {
    setLightboxImage(index);
  };

  /**
   * Ferme le lightbox
   */
  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
  }, []);

  /**
   * Navigue vers l'image précédente dans le lightbox
   */
  const previousImage = useCallback(() => {
    if (lightboxImage !== null) {
      setLightboxImage(
        lightboxImage > 0 ? lightboxImage - 1 : filteredImages.length - 1,
      );
    }
  }, [lightboxImage, filteredImages.length]);

  /**
   * Navigue vers l'image suivante dans le lightbox
   */
  const nextImage = useCallback(() => {
    if (lightboxImage !== null) {
      setLightboxImage(
        lightboxImage < filteredImages.length - 1 ? lightboxImage + 1 : 0,
      );
    }
  }, [lightboxImage, filteredImages.length]);

  /**
   * Gère la navigation au clavier dans le lightbox
   * @param event - Événement clavier
   */
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (lightboxImage === null) return;

      switch (event.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          previousImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
      }
    },
    [lightboxImage, closeLightbox, previousImage, nextImage],
  );

  // Ajouter les écouteurs d'événements clavier
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Gérer l'affichage du scroll to top quand le lightbox est ouvert
  useEffect(() => {
    if (lightboxImage !== null) {
      document.body.classList.add("lightbox-open");
    } else {
      document.body.classList.remove("lightbox-open");
    }

    // Nettoyage au démontage du composant
    return () => {
      document.body.classList.remove("lightbox-open");
    };
  }, [lightboxImage]);

  return (
    <section className='py-24 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12 sm:mb-16'>
          <h2 className='font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6'>
            Galerie Photographique
          </h2>
          <p className='text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4'>
            Explorez mes créations photographiques en Seine-et-Marne et
            Île-de-France. Chaque image raconte une histoire d'amour, de joie et
            d'émotion pure.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className='flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4'>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              data-testid={`button-filter-${category.toLowerCase()}`}
              className='transition-all duration-200'
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6'>
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-lg hover-elevate aspect-square cursor-pointer'
              data-testid={`gallery-image-${index}`}
              onClick={() => openLightbox(index)}
            >
              <NextImage
                src={image.src}
                alt={image.alt}
                fill
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                loading='lazy'
              />
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300' />
              <div className='absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <span className='text-white font-medium'>{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage !== null && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm'>
            {/* Bouton fermer */}
            <button
              onClick={closeLightbox}
              className='absolute top-4 right-4 z-10 p-3 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors'
              aria-label='Fermer le lightbox'
            >
              <X size={24} />
            </button>

            {/* Bouton précédent */}
            {filteredImages.length > 1 && (
              <button
                onClick={previousImage}
                className='absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors'
                aria-label='Image précédente'
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Bouton suivant */}
            {filteredImages.length > 1 && (
              <button
                onClick={nextImage}
                className='absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors'
                aria-label='Image suivante'
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Conteneur de l'image */}
            <div className='max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-8'>
              {/* Image principale */}
              <NextImage
                src={filteredImages[lightboxImage].src}
                alt={filteredImages[lightboxImage].alt}
                width={1200}
                height={800}
                className='max-w-full max-h-full object-contain rounded-lg'
              />
            </div>

            {/* Informations de l'image */}
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg'>
              <span className='text-sm font-medium'>
                {lightboxImage + 1} / {filteredImages.length} -{" "}
                {filteredImages[lightboxImage].category}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
