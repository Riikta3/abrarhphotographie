import About from "@/components/About";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Note: I'm omitting the direct asset import for now as I need to check the path in front_next
// const aboutBackground = "@assets/generated_images/About_page_background_61b45b57.png";

export default function AboutPage() {
  return (
    <div className='min-h-screen'>
      <PageHeader
        title="À Propos d'Abrar"
        subtitle='Découvrez mon parcours, ma passion et ma philosophie de la photographie.'
        backgroundImage='/assets/about/photographe-mariage-seine-et-marne-manon-micka-background.jpg'
        backgroundPosition='bottom'
      />

      <About showStats={true} />

      <section className='py-24 pt-12 bg-card'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-6'>
              Mon Processus
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              De notre premier contact à la livraison de vos photos, voici
              comment se déroule notre collaboration.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                step: "01",
                title: "Premier Contact",
                description:
                  "Échangeons sur votre projet, vos envies et planifions votre séance selon vos disponibilités.",
              },
              {
                step: "02",
                title: "Séance Photo",
                description:
                  "Moment privilégié où je capture vos plus beaux sourires dans une ambiance détendue et naturelle.",
              },
              {
                step: "03",
                title: "Livraison",
                description:
                  "Retouches soignées et livraison de vos photos haute résolution dans une galerie privée sous 7 jours.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className='text-center'
                data-testid={`process-step-${step.step}`}
              >
                <div className='font-serif text-4xl font-bold text-accent mb-4'>
                  {step.step}
                </div>
                <h3 className='font-serif text-xl font-bold text-foreground mb-4'>
                  {step.title}
                </h3>
                <p className='text-muted-foreground'>{step.description}</p>
              </div>
            ))}
          </div>

          <div className='text-center mt-12'>
            <Button
              className='font-medium px-6 sm:px-8 py-3 w-full sm:w-auto min-h-12 border-0 cursor-pointer'
              size='lg'
              data-testid='button-start-project'
              asChild
            >
              <Link href='/contact'>Commençons Votre Projet</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
