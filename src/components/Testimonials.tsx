import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sophie & Alexandre", service: "Mariage", rating: 5, text: "Abrar a su capturer l'essence de notre mariage avec une sensibilité remarquable. Chaque photo raconte notre histoire d'amour. Un travail exceptionnel !", date: "Septembre 2024" },
  { name: "Claire", service: "Maternité", rating: 5, text: "Séance maternité magique ! Abrar m'a mise à l'aise immédiatement et les photos sont sublimes. Je recommande vivement ses services.", date: "Août 2024" },
  { name: "Famille Martin", service: "Portrait Famille", rating: 5, text: "Photos de famille naturelles et pleines de vie. Abrar a réussi à capturer la personnalité de chacun de nos enfants. Merci infiniment !", date: "Juillet 2024" },
  { name: "Emma & Lucas", service: "Couple", rating: 5, text: "Séance couple inoubliable dans Paris. Abrar nous a guidés avec bienveillance et professionnalisme. Les résultats dépassent nos attentes !", date: "Juin 2024" },
];

export default function Testimonials() {
  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">Témoignages</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">Découvrez les retours de mes clients sur leur expérience et leurs souvenirs capturés.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate" data-testid={`testimonial-${index}`}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 text-accent fill-current" />)}</div>
                  <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</blockquote>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-start">
                      <div><h4 className="font-medium text-foreground">{testimonial.name}</h4><p className="text-sm text-muted-foreground">{testimonial.service}</p></div>
                      <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
