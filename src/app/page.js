import Image from "next/image";
import PromotionalBanner from "./components/promotionalbanner";
import CustomizeOutfit from "./components/home/customizeoutfit";
import AboutSection from "./components/home/about";
import SponsorSection from "./components/home/sponsors";
import LoungeWearSection from "./components/home/loungewear";
import PerkSection from "./components/home/perk";

export default function Home() {
  return (
    <main>
      <PromotionalBanner />
      <AboutSection />
      <SponsorSection />
      <LoungeWearSection />
      <CustomizeOutfit />
      <PerkSection />
    </main>
  );
}
