import { Camera, Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className='bg-primary text-primary-foreground py-12 sm:py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8'>
          {/* Logo & Description */}
          <div className='col-span-1 sm:col-span-2 md:col-span-2'>
            <div className='flex items-center space-x-2 mb-4'>
              <Camera className='h-6 w-6 sm:h-8 sm:w-8 text-accent' />
              <span className='font-script text-xl sm:text-2xl'>
                Abrar H Photographie
              </span>
            </div>
            <p className='text-primary-foreground/80 mb-4 sm:mb-6 text-sm sm:text-base'>
              Photographe professionnelle en Seine-et-Marne (Marne-la-Vallée),
              spécialisée dans les mariages, couples, familles et maternité.
              Zone d'intervention : Paris et Île-de-France. Capturons ensemble
              vos moments précieux.
            </p>
            <div className='flex space-x-3 sm:space-x-4'>
              <a
                href='https://instagram.com/abrar.hphotographie
'
                target='_blank'
                rel='noopener noreferrer'
                data-testid='link-instagram'
                className='p-2 bg-accent/10 rounded-full hover-elevate'
                title='Suivez-moi sur Instagram @abrar.hphotographie
'
              >
                <Instagram className='h-5 w-5 text-accent' />
              </a>
              <a
                href='#'
                data-testid='link-facebook'
                className='p-2 bg-accent/10 rounded-full hover-elevate'
              >
                <Facebook className='h-5 w-5 text-accent' />
              </a>
              <a
                href='mailto:marie@photography.fr'
                data-testid='link-email-footer'
                className='p-2 bg-accent/10 rounded-full hover-elevate'
              >
                <Mail className='h-5 w-5 text-accent' />
              </a>
            </div>

            {/* Instagram Handle */}
            <div className='mt-4 pt-4 border-t border-primary-foreground/20'>
              <p className='text-primary-foreground/60 text-sm'>
                Suivez mes dernières créations :
                <a
                  href='https://instagram.com/abrar.hphotographie
'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='ml-1 text-accent hover:text-accent/80 transition-colors font-medium'
                  data-testid='link-instagram-handle'
                >
                  @abrar.hphotographie
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className='font-serif text-lg font-semibold mb-4'>Services</h3>
            <ul className='space-y-2 text-primary-foreground/80'>
              <li>
                <a
                  href='#'
                  data-testid='link-footer-mariages'
                  className='hover:text-accent transition-colors'
                >
                  Mariages
                </a>
              </li>
              <li>
                <a
                  href='#'
                  data-testid='link-footer-couples'
                  className='hover:text-accent transition-colors'
                >
                  Couples
                </a>
              </li>
              <li>
                <a
                  href='#'
                  data-testid='link-footer-familles'
                  className='hover:text-accent transition-colors'
                >
                  Familles
                </a>
              </li>
              <li>
                <a
                  href='#'
                  data-testid='link-footer-maternite'
                  className='hover:text-accent transition-colors'
                >
                  Maternité
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='font-serif text-lg font-semibold mb-4'>Contact</h3>
            <ul className='space-y-2 text-primary-foreground/80 text-sm'>
              <li data-testid='footer-location'>
                Seine-et-Marne & Île-de-France
              </li>
              <li data-testid='footer-instagram'>
                <a
                  href='https://instagram.com/abrar.hphotographie
'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-accent transition-colors'
                >
                  @abrar.hphotographie
                </a>
              </li>
              <li data-testid='footer-email'>marie@photography.fr</li>
            </ul>
          </div>
        </div>

        <div className='border-t border-primary-foreground/20 mt-12 pt-8 text-center'>
          <p className='text-primary-foreground/60 text-sm'>
            © {new Date().getFullYear()} Abrar H Photographie. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
