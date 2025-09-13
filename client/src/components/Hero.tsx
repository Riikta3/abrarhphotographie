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
      </div>
    </section>
  );
}