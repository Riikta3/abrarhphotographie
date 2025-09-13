import { Button } from "@/components/ui/button";
import { useState } from "react";
import weddingImage from "@assets/generated_images/Elegant_French_wedding_photography_51d0cad8.png";
import coupleImage from "@assets/generated_images/Romantic_Paris_couple_session_10bb35d5.png";
import familyImage from "@assets/generated_images/Joyful_family_portrait_session_84976749.png";
import maternityImage from "@assets/generated_images/Serene_maternity_portrait_a4b8ace0.png";
import weddingChurch from "@assets/generated_images/Wedding_ceremony_in_church_38001092.png";
import coupleSeineImage from "@assets/generated_images/Couple_engagement_Seine_riverbank_7223cd63.png";
import familyLuxembourg from "@assets/generated_images/Family_portrait_Luxembourg_Gardens_2f08af26.png";
import maternityStudio from "@assets/generated_images/Studio_maternity_portrait_3e65dd7d.png";
import weddingReception from "@assets/generated_images/Wedding_reception_château_52d31cf8.png";
import coupleTrocadero from "@assets/generated_images/Couple_Trocadéro_Eiffel_Tower_6338da06.png";

const categories = ["Tous", "Mariages", "Couples", "Familles", "Maternité"];

const galleryImages = [
  { src: weddingImage, category: "Mariages", alt: "Mariage élégant en extérieur" },
  { src: weddingChurch, category: "Mariages", alt: "Cérémonie religieuse" },
  { src: weddingReception, category: "Mariages", alt: "Réception de mariage" },
  { src: coupleImage, category: "Couples", alt: "Séance couple romantique" },
  { src: coupleSeineImage, category: "Couples", alt: "Engagement bord de Seine" },
  { src: coupleTrocadero, category: "Couples", alt: "Couple Trocadéro" },
  { src: familyImage, category: "Familles", alt: "Portrait famille joyeux" },
  { src: familyLuxembourg, category: "Familles", alt: "Famille au Luxembourg" },
  { src: maternityImage, category: "Maternité", alt: "Maternité en nature" },
  { src: maternityStudio, category: "Maternité", alt: "Portrait maternité studio" },
  // Dupliquer quelques images pour remplir la galerie
  { src: weddingImage, category: "Mariages", alt: "Mariage champêtre" },
  { src: coupleImage, category: "Couples", alt: "Amour parisien" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredImages = activeCategory === "Tous" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Ma Galerie
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Découvrez une sélection de mes plus beaux clichés, 
            témoins de moments uniques et d'émotions authentiques.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              data-testid={`button-filter-${category.toLowerCase()}`}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg hover-elevate aspect-square"
              data-testid={`gallery-image-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-medium">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}