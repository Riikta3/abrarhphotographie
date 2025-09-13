import { Camera, Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8 text-accent" />
              <span className="font-script text-2xl">Marie Dubois</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Photographe professionnelle à Paris, spécialisée dans les mariages, 
              couples, familles et maternité. Capturons ensemble vos moments précieux.
            </p>
            <div className="flex space-x-4">
              <a href="#" data-testid="link-instagram" className="p-2 bg-accent/10 rounded-full hover-elevate">
                <Instagram className="h-5 w-5 text-accent" />
              </a>
              <a href="#" data-testid="link-facebook" className="p-2 bg-accent/10 rounded-full hover-elevate">
                <Facebook className="h-5 w-5 text-accent" />
              </a>
              <a href="#" data-testid="link-email-footer" className="p-2 bg-accent/10 rounded-full hover-elevate">
                <Mail className="h-5 w-5 text-accent" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" data-testid="link-footer-mariages" className="hover:text-accent transition-colors">Mariages</a></li>
              <li><a href="#" data-testid="link-footer-couples" className="hover:text-accent transition-colors">Couples</a></li>
              <li><a href="#" data-testid="link-footer-familles" className="hover:text-accent transition-colors">Familles</a></li>
              <li><a href="#" data-testid="link-footer-maternite" className="hover:text-accent transition-colors">Maternité</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li data-testid="footer-location">Paris & Île-de-France</li>
              <li data-testid="footer-phone">+33 6 12 34 56 78</li>
              <li data-testid="footer-email">marie@photography.fr</li>
              <li data-testid="footer-hours">Lun-Sam: 9h-19h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Marie Dubois Photographie. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}