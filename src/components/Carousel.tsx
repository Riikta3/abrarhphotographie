const coupleCarousel =
  "/assets/home/carousel/seance-engagement-paris-estelle-augustin.jpg";
const familyCarousel =
  "/assets/home/carousel/photographe-famille-exterieur-seine-et-marne-pamela.jpg";
const weddingCarousel =
  "/assets/home/carousel/photographe-mariage-chateau-ile-de-france-reception.jpg";

const carouselImages = [
  {
    src: weddingCarousel,
    alt: "Mariage élégant en France",
    title: "Mariages",
    subtitle: "Votre jour le plus important",
  },
  {
    src: coupleCarousel,
    alt: "Séance couple à Paris",
    title: "Couples",
    subtitle: "Moments romantiques à Paris",
  },
  {
    src: familyCarousel,
    alt: "Portrait famille joyeux",
    title: "Familles",
    subtitle: "Souvenirs familiaux précieux",
  },
];

interface CarouselProps {
  currentIndex: number;
}

export default function Carousel({ currentIndex }: CarouselProps) {
  return (
    <div className='absolute inset-0 z-0'>
      {/* Background Images */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className='absolute inset-0 bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${image.src})` }}
          />
        </div>
      ))}

      {/* Image Info */}
      <div className='absolute bottom-16 left-8 z-10 text-white'>
        <h3 className='font-serif text-2xl md:text-3xl font-bold mb-1'>
          {carouselImages[currentIndex].title}
        </h3>
        <p className='text-white/80'>{carouselImages[currentIndex].subtitle}</p>
      </div>
    </div>
  );
}
