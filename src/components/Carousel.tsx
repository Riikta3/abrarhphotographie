import NextImage from "next/image";
import { carouselImages } from "@/lib/carouselImages";

interface CarouselProps {
  currentIndex: number;
}

/**
 * Visuels de fond du hero.
 *
 * Les images passent par next/image (et non par une background-image CSS)
 * pour trois raisons : l'optimisation AVIF/WebP s'applique, le premier
 * visuel peut être marqué `priority` (c'est le LCP de la page d'accueil),
 * et les textes alternatifs deviennent lisibles par Google Images.
 */
export default function Carousel({ currentIndex }: CarouselProps) {
  return (
    <div className='absolute inset-0 z-0'>
      {carouselImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index === currentIndex ? undefined : true}
        >
          <NextImage
            src={image.src}
            alt={image.alt}
            fill
            sizes='100vw'
            className='photo-filter object-cover'
            // La première slide est l'élément LCP : elle doit être chargée
            // sans attendre, les suivantes peuvent être différées.
            priority={index === 0}
            loading={index === 0 ? undefined : "lazy"}
          />
        </div>
      ))}

      {/* Légende de la slide courante */}
      <div className='absolute bottom-16 left-8 z-10 text-white'>
        <p className='font-serif text-2xl md:text-3xl font-bold mb-1'>
          {carouselImages[currentIndex].title}
        </p>
        <p className='text-white/80'>{carouselImages[currentIndex].subtitle}</p>
      </div>
    </div>
  );
}
