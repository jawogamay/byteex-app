import Image from "next/image";
import Button from "../button";
import Review from "../review";
import Logo from "@/images/LOGO.png";
import AboutImage from "@/images/about.png";
import { benefitsData } from "@/app/consts/dummyData";

const AboutSection = () => {
  return (
    <div className="lg:px-16 pt-8 px-4 pb-24">
      <div className="lg:flex items-center justify-center">
        <div className="flex-initial lg:w-[460px]">
          <Image src={Logo} alt="Byteex Logo" />
          <p className="text-secondary text-[38px] mt-12">
            Don’t apologize for being comfortable.
          </p>
          {benefitsData.map((item, index) => (
            <div className="flex align-center mt-4 gap-x-2" key={index}>
              <Image
                src={item.icon}
                width={31}
                height={31}
                className="self-start"
              />
              <p className="self-center text-light text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
          <Button customClass="mt-8"> Customize Your Outfit </Button>
        </div>
        <div className="self-start mt-12">
          <Image src={AboutImage} />
        </div>
      </div>
      <div className="absolute">
        <Review
          name="Amy P."
          review="Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them. "
          credentials="One of 500+ 5 Star Reviews Online"
          rating={5}
        />
      </div>
    </div>
  );
};

export default AboutSection;
