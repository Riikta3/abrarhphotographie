import { Camera, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='bg-primary text-primary-foreground py-12 sm:py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8'>
          <div className='col-span-1 sm:col-span-2 md:col-span-2'>
            <div className='flex items-center space-x-2 mb-4'>
              <Camera className='h-6 w-6 sm:h-8 sm:w-8 text-accent' />
              <span className='font-script text-xl sm:text-2xl'>Abrar H Photographie</span>
            </div>
            <p className='text-primary-foreground/80 mb-4 sm:mb-6 text-sm sm:text-base'>
              Photographe professionnelle en Seine-et-Marne (Marne-la-Vallée), spécialisée dans les mariages, couples, familles et maternité. Zone d'intervention : Paris et Île-de-France.
            </p>
            <div className='mt-4 pt-4 border-t border-primary-foreground/20'>
              <div className='flex items-center text-primary-foreground/60 text-sm'>
                <span>Suivez mes dernières créations :</span>
                <a href='https://instagram.com/abrar.hphotographie' target='_blank' rel='noopener noreferrer' className='ml-1 text-accent hover:text-accent/80 transition-colors font-medium' data-testid='link-instagram-handle'>@abrar.hphotographie</a>
                <Instagram className='h-5 w-5 text-accent ml-2' />
              </div>
            </div>
          </div>
          <div>
            <h3 className='font-serif text-lg font-semibold mb-4'>Services</h3>
            <ul className='space-y-2 text-primary-foreground/80 text-sm'>
              <li><Link href='/gallery?categorie=Mariages' data-testid='link-footer-mariages' className='hover:text-accent transition-colors'>Mariages</Link></li>
              <li><Link href='/gallery?categorie=Couples' data-testid='link-footer-couples' className='hover:text-accent transition-colors'>Couples</Link></li>
              <li><Link href='/gallery?categorie=Familles' data-testid='link-footer-familles' className='hover:text-accent transition-colors'>Familles</Link></li>
              <li><Link href='/gallery?categorie=Maternité' data-testid='link-footer-maternite' className='hover:text-accent transition-colors'>Maternité</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='font-serif text-lg font-semibold mb-4'>Contact</h3>
            <ul className='space-y-2 text-primary-foreground/80 text-sm'>
              <li data-testid='footer-location'>Seine-et-Marne & Île-de-France</li>
              <li data-testid='footer-instagram'><a href='https://instagram.com/abrar.hphotographie' target='_blank' rel='noopener noreferrer' className='hover:text-accent transition-colors'>@abrar.hphotographie</a></li>
              <li data-testid='footer-email'>contact@abrarh-photographie.fr</li>
            </ul>
          </div>
        </div>
        <div className='border-t border-primary-foreground/20 mt-12 pt-8'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
            <p className='text-primary-foreground/60 text-sm text-center sm:text-left'>© {new Date().getFullYear()} Abrar H Photographie. Tous droits réservés.</p>
            <div className='flex flex-wrap justify-center gap-4 sm:gap-6 text-sm'>
              <Link href='/mentions-legales' className='text-primary-foreground/60 hover:text-accent transition-colors' data-testid='link-footer-legal'>Mentions légales</Link>
              <Link href='/politique-de-confidentialite' className='text-primary-foreground/60 hover:text-accent transition-colors' data-testid='link-footer-privacy'>Confidentialité</Link>
              <Link href='/conditions-utilisation' className='text-primary-foreground/60 hover:text-accent transition-colors' data-testid='link-footer-terms'>CGU</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
