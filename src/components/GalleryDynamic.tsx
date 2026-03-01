"use client";

import { Button } from "@/components/ui/button";
import {
  fetchPhotos,
  getImageUrl,
  getThumbnailUrl,
  type StrapiPhoto,
} from "@/lib/strapiApi";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const categories = ["Tous", "Mariages", "Couples", "Familles", "Maternité"];

export default function GalleryDynamic() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);
  const [photos, setPhotos] = useState<StrapiPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetch photos from Strapi based on selected category
   */
  useEffect(() => {
    const loadPhotos = async () => {
      setLoading(true);
      setError(null);
      try {
        const category = activeCategory === "Tous" ? undefined : activeCategory;
        const data = await fetchPhotos(category, "gallery");
        setPhotos(data);
      } catch (err) {
        setError("Impossible de charger les photos. Veuillez réessayer.");
        console.error("Error loading photos:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPhotos();
  }, [activeCategory]);

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
  const closeLightbox = () => {
    setLightboxImage(null);
  };

  /**
   * Navigue vers l'image précédente dans le lightbox
   */
  const previousImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage(
        lightboxImage > 0 ? lightboxImage - 1 : photos.length - 1
      );
    }
  };

  /**
   * Navigue vers l'image suivante dans le lightbox
   */
  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage(
        lightboxImage < photos.length - 1 ? lightboxImage + 1 : 0
      );
    }
  };

  /**
   * Gère la navigation au clavier dans le lightbox
   * @param event - Événement clavier
   */
  const handleKeyDown = (event: KeyboardEvent) => {
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
  };

  // Ajouter les écouteurs d'événements clavier
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage]);

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

        {/* Loading State */}
        {loading && (
          <div className='text-center py-12'>
            <p className='text-muted-foreground'>Chargement des photos...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className='text-center py-12'>
            <p className='text-destructive mb-4'>{error}</p>
            <Button onClick={() => window.location.reload()}>Réessayer</Button>
          </div>
        )}

        {/* Gallery Grid */}
        {!loading && !error && photos.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-muted-foreground'>
              Aucune photo disponible pour cette catégorie.
            </p>
          </div>
        )}

        {!loading && !error && photos.length > 0 && (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6'>
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className='group relative overflow-hidden rounded-lg hover-elevate aspect-square cursor-pointer'
                data-testid={`gallery-image-${index}`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={getThumbnailUrl(photo)}
                  alt={photo.alt}
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300' />
                <div className='absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <span className='text-white font-medium'>
                    {photo.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox */}
        {lightboxImage !== null && photos[lightboxImage] && (
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
            {photos.length > 1 && (
              <button
                onClick={previousImage}
                className='absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors'
                aria-label='Image précédente'
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Bouton suivant */}
            {photos.length > 1 && (
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
              <img
                src={getImageUrl(photos[lightboxImage])}
                alt={photos[lightboxImage].alt}
                className='max-w-full max-h-full object-contain rounded-lg'
              />
            </div>

            {/* Informations de l'image */}
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg'>
              <span className='text-sm font-medium'>
                {lightboxImage + 1} / {photos.length} -{" "}
                {photos[lightboxImage].category}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
