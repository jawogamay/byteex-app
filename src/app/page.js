import Image from "next/image";
import PromotionalBanner from "./components/promotionalbanner";
import Logo from "@/images/LOGO.png";
import AboutImage from "@/images/about.png";
import { benefitsData } from "./consts/dummyData";
import Button from "./components/button";
import Review from "./components/review";

export default function Home() {
  return (
    <main>
      <PromotionalBanner />
      <div className="lg:px-16 pt-8 px-4">
        <Image src={Logo} alt="Byteex Logo" />
        <div className="lg:flex items-center mt-12 justify-between">
          <div className="flex-initial lg:w-[460px]">
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
            <Review
              name="Amy P."
              review="Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them. "
              credentials="One of 500+ 5 Star Reviews Online"
              rating={5}
            />
          </div>
          <div className="self-start">
            <Image src={AboutImage} />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-primary to-white px-16 py-8 md:mt-[-100px]">
        <p className="text-[#868787] text-center text-xl md:mt-[90px]">as seen in</p>
        <div className="lg:flex md:space-x-16 mt-8 justify-center lg:space-y-8">
          <Image src="/images/ecostylist.png" width={178} height={22} alt="Eco-stylist logo"/>
          <Image src="/images/canadianliving.png" width={115} height={52} alt="Canadian Living logo"/>
          <Image src="/images/jillianharris.png" width={271} height={53} alt="Jillian Harris logo"/>
          <Image src="/images/ecohub.png" width={194} height={37} alt="The Eco Hub logo"/>
          <Image src="/images/trendhunter.png" width={192} height={58} alt="Trendhunter logo"/>
        </div>
      </div>
    </main>
  );
}
