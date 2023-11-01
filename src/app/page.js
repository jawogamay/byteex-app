import Image from "next/image";
import PromotionalBanner from "./components/promotionalbanner";
import Logo from "@/images/LOGO.png";
import AboutImage from "@/images/about.png";
import { benefitsData } from "./consts/dummyData";
import Button from "./components/button";

export default function Home() {
  return (
    <main>
      <PromotionalBanner />
      <div className="px-16 py-8">
        <Image src={Logo} alt="Byteex Logo" />
        <div className="md:flex items-center mt-12 justify-between">
          <div className="flex-initial w-[460px]">
            <p className="text-secondary text-[38px]">
              Don’t apologize for being comfortable.
            </p>
            {benefitsData.map((item, index) => (
              <div className="flex align-center mt-4 gap-x-2" key={index}>
                <Image src={item.icon} width={31} height={31} />
                <p className="self-center text-light text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
            <Button customClass="mt-8"> Customize Your Outfit </Button>
          </div>
          <div>
            <Image src={AboutImage} />
          </div>
        </div>
      </div>
    </main>
  );
}
