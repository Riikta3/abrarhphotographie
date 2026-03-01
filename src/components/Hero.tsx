"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";

// Import des images du carousel
const coupleCarousel =
  "/assets/generated_images/Couple_carousel_image_48d3ae82.png";
const familyCarousel =
  "/assets/generated_images/Family_carousel_image_6ee3d582.png";
const weddingCarousel =
  "/assets/generated_images/Wedding_carousel_image_56d2de9c.png";

const carouselImages = [
  {
    src: weddingCarousel,
    alt: "Mariage élégant en France",
    title: "Mariages",
    subtitle: "Votre jour le plus important",
  },
  {
    src: coupleCarousel,
    alt: "Séance couple à Paris",
    title: "Couples",
    subtitle: "Moments romantiques à Paris",
  },
  {
    src: familyCarousel,
    alt: "Portrait famille joyeux",
    title: "Familles",
    subtitle: "Souvenirs familiaux précieux",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    console.log("goToPrevious called, current index:", currentIndex);
    setIsAutoPlay(false);
    const newIndex =
      currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1;
    console.log("Setting new index to:", newIndex);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    console.log("goToNext called, current index:", currentIndex);
    setIsAutoPlay(false);
    const newIndex =
      currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1;
    console.log("Setting new index to:", newIndex);
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    console.log("goToSlide called, target index:", index);
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };
  return (
    <section className='relative min-h-screen h-screen flex items-center justify-center overflow-hidden'>
      {/* Carousel Background */}
      <Carousel currentIndex={currentIndex} />

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-10' />

      {/* Content */}
      <div className='relative z-30 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight'>
          Photographe <br />
          Mariage & Famille
          <span className='block font-script text-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
            Storytelling
          </span>
        </h1>
        <div className='text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed px-2 space-y-2'>
          <h2>
            Basé en Seine-et-Marne (77) - Interventions à Paris, Marne-la-Vallée
            et toute l'Île-de-France.
          </h2>
        </div>

        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto relative z-50'>
          <Button
            size='lg'
            data-testid='button-portfolio'
            className='bg-accent  text-accent-foreground font-medium px-6 sm:px-8 py-3 w-full sm:w-auto min-h-12 border-0 cursor-pointer'
            asChild
          >
            <a href='/gallery'>
              Voir Mon Portfolio
              <ArrowRight className='ml-2 h-4 w-4 sm:h-5 sm:w-5' />
            </a>
          </Button>

          <Button
            variant='outline'
            size='lg'
            data-testid='button-contact-hero'
            className='bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-6 sm:px-8 py-3 w-full sm:w-auto min-h-12 cursor-pointer'
            asChild
          >
            <a href='/contact'>Me Contacter</a>
          </Button>
        </div>

        {/* Instagram Link */}
        <div className='mt-8 text-center'>
          <p className='text-white/70 mb-0 text-sm sm:text-base'>
            Suivez mes dernières créations sur Instagram
          </p>
          <a
            href='https://www.instagram.com/abrar.hphotographie/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center text-accent hover:text-accent/80 transition-colors font-medium text-lg'
            data-testid='link-hero-instagram'
          >
            <span className='mr-2'>@abrar.hphotographie</span>
            <svg
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
            </svg>
          </a>
        </div>
      </div>

      {/* Carousel Controls - Hidden on mobile/tablet */}
      <div className='hidden lg:block'>
        {/* Hover Detection Area - Invisible but detects hover */}
        <div className='absolute inset-0 pointer-events-none group'></div>

        {/* Navigation Arrows */}
        <button
          className='absolute left-6 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white/70 hover:text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-40'
          onClick={goToPrevious}
          data-testid='carousel-prev'
          aria-label='Image précédente'
          type='button'
        >
          <ChevronLeft className='h-5 w-5' />
        </button>

        <button
          className='absolute right-6 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white/70 hover:text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-40'
          onClick={goToNext}
          data-testid='carousel-next'
          aria-label='Image suivante'
          type='button'
        >
          <ChevronRight className='h-5 w-5' />
        </button>

        {/* Dots Indicator */}
        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40'>
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-amber-400/80"
                  : "bg-white/30 hover:bg-white/60"
              }`}
              onClick={() => goToSlide(index)}
              data-testid={`carousel-dot-${index}`}
              aria-label={`Aller à l'image ${index + 1}`}
              type='button'
            />
          ))}
        </div>

        {/* Auto-play Control */}
        <button
          className='absolute top-6 right-6 bg-black/20 hover:bg-black/40 text-white/70 hover:text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-40'
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          aria-label={
            isAutoPlay ? "Pause le carousel" : "Reprendre le carousel"
          }
          type='button'
        >
          {isAutoPlay ? (
            <Pause className='h-3 w-3' />
          ) : (
            <Play className='h-3 w-3 ml-0.5' />
          )}
        </button>
      </div>
    </section>
  );
}
