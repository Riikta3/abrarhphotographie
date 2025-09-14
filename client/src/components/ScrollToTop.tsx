import { useEffect, useState } from "react";

/**
 * Composant bouton "Retour en haut" global
 * Apparaît après 300px de scroll et permet un retour fluide en haut de page
 */
export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showScrollTop) return null;

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
