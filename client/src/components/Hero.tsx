import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Carousel from "./Carousel";

export default function Hero() {
  return (
    <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <Carousel />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          Capturer Vos
          <span className="block font-script text-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Moments Précieux</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
          Photographe professionnelle à Paris, spécialisée dans les mariages, 
          couples, familles et maternité avec élégance et authenticité.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
          <Button 
            size="lg" 
            data-testid="button-portfolio"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6 sm:px-8 py-3 w-full sm:w-auto min-h-12"
          >
            Voir Mon Portfolio
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            data-testid="button-contact-hero"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-6 sm:px-8 py-3 w-full sm:w-auto min-h-12"
          >
            Me Contacter
          </Button>
        </div>
        
        {/* Instagram Link */}
        <div className="mt-8 text-center">
          <p className="text-white/70 mb-3 text-sm sm:text-base">
            Suivez mes dernières créations sur Instagram
          </p>
          <a 
            href="https://instagram.com/marie_dubois_photo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-medium text-lg"
            data-testid="link-hero-instagram"
          >
            <span className="mr-2">@marie_dubois_photo</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}