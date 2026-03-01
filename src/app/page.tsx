import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <Services />
      <About showStats={false} />
      <Gallery />
      <Testimonials />
    </div>
  );
}
