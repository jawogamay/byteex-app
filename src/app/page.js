import Image from "next/image";
import PromotionalBanner from "./components/promotionalbanner";
import CustomizeOutfit from "./components/home/customizeoutfit";
import AboutSection from "./components/home/about";
import SponsorSection from "./components/home/sponsors";

export default function Home() {
  return (
    <main>
      <PromotionalBanner />
      <AboutSection />
      <SponsorSection />
      <CustomizeOutfit />
    </main>
  );
}
