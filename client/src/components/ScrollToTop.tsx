import { useEffect, useState } from "react";

/**
 * Composant bouton "Retour en haut" global
 * Apparaît après 300px de scroll et permet un retour fluide en haut de page
 */
export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    /**
     * Observer les changements de classe sur le body pour détecter l'ouverture du lightbox
     */
    const observer = new MutationObserver(() => {
      setIsLightboxOpen(document.body.classList.contains("lightbox-open"));
    });

    // Observer les changements d'attributs sur le body
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Ne pas afficher le bouton si on n'a pas scrollé ou si le lightbox est ouvert
  if (!showScrollTop || isLightboxOpen) return null;

  return (
    <button
      onClick={scrollToTop}
      className='fixed bottom-8 right-8 z-50 bg-primary text-secondary hover:bg-primary/90 dark:bg-secondary dark:text-primary dark:hover:bg-secondary/90 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110'
      title='Retour en haut'
      aria-label='Retour en haut de la page'
    >
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M5 10l7-7m0 0l7 7m-7-7v18'
        />
      </svg>
    </button>
  );
}
