import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import weddingCarousel from "@assets/generated_images/Wedding_carousel_image_56d2de9c.png";
import coupleCarousel from "@assets/generated_images/Couple_carousel_image_48d3ae82.png";
import familyCarousel from "@assets/generated_images/Family_carousel_image_6ee3d582.png";

const carouselImages = [
  {
    src: weddingCarousel,
    alt: "Mariage élégant en France",
    title: "Mariages",
    subtitle: "Votre jour le plus important"
  },
  {
    src: coupleCarousel,
    alt: "Séance couple à Paris",
    title: "Couples",
    subtitle: "Moments romantiques à Paris"
  },
  {
    src: familyCarousel,
    alt: "Portrait famille joyeux",
    title: "Familles",
    subtitle: "Souvenirs familiaux précieux"
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="absolute inset-0 z-0">
      {/* Background Images */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image.src})` }}
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
        onClick={goToPrevious}
        data-testid="carousel-prev"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
        onClick={goToNext}
        data-testid="carousel-next"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-accent" 
                : "bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => setCurrentIndex(index)}
            data-testid={`carousel-dot-${index}`}
          />
        ))}
      </div>

      {/* Image Info */}
      <div className="absolute bottom-16 left-8 z-10 text-white">
        <h3 className="font-serif text-2xl md:text-3xl font-bold mb-1">
          {carouselImages[currentIndex].title}
        </h3>
        <p className="text-white/80">
          {carouselImages[currentIndex].subtitle}
        </p>
      </div>
    </div>
  );
}