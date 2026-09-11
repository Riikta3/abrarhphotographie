/**
 * Source unique des visuels du carrousel du hero.
 *
 * Hero et Carousel lisaient auparavant deux tableaux distincts : les `alt`
 * optimisés définis dans Hero n'étaient jamais rendus, et toute image ajoutée
 * d'un seul côté désynchronisait les puces de navigation.
 */
export const carouselImages = [
  {
    src: "/assets/generated_images/Wedding_carousel_image_56d2de9c.png",
    alt: "Photographe mariage storytelling Seine-et-Marne — reportage immersif 77",
    title: "Mariages",
    subtitle: "Votre jour le plus important",
  },
  {
    src: "/assets/generated_images/Couple_carousel_image_48d3ae82.png",
    alt: "Taxi photo tour Paris — séance couple romantique Trocadéro et bords de Seine",
    title: "Couples",
    subtitle: "Taxi photo tour Paris",
  },
  {
    src: "/assets/generated_images/Family_carousel_image_6ee3d582.png",
    alt: "Photographe famille Chelles Marne-la-Vallée — shooting famille sur le vif IDF",
    title: "Familles",
    subtitle: "Séances famille Chelles & IDF",
  },
] as const;
