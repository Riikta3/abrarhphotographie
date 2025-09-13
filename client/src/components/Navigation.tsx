import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Camera, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "À Propos" },
    { path: "/gallery", label: "Galerie" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-accent" />
            <span className="font-script text-2xl text-foreground">
              Marie Dubois
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`font-medium transition-colors hover:text-accent ${
                  isActive(item.path) ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button data-testid="button-consultation" variant="default">
              Consultation Gratuite
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              data-testid="button-mobile-menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`block font-medium transition-colors hover:text-accent ${
                  isActive(item.path) ? "text-accent" : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button data-testid="button-mobile-consultation" className="w-full" variant="default">
              Consultation Gratuite
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}