import PageHeader from "../PageHeader";
import aboutBackground from "@assets/generated_images/About_page_background_61b45b57.png";

export default function PageHeaderExample() {
  return (
    <PageHeader
      title="À Propos de Marie"
      subtitle="Découvrez mon parcours, ma passion et ma philosophie de la photographie."
      backgroundImage={aboutBackground}
    />
  );
}