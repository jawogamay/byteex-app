import Image from "next/image";
import Card from "../card";
import { perksData } from "@/app/consts/dummyData";
import Button from "../button";
import Star from "../icons/Star";

const PerkSection = () => {
  return (
    <section className="py-8">
      <h3 className="text-header text-secondary text-center">
        Comfort made easy
      </h3>
      <div className="lg:flex justify-center items-center mt-12 lg:space-x-12">
        {perksData.map((item, index) => (
          <Card key={index} type={item.type}>
            <Image src={item.icon} width={60} height={60} alt={item.title} />
            <p className="text-[22px] text-secondary">{item.title}</p>
            <p className="text-center text-[15px] leading-6 mt-4">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-8 ">
        <Button customClass="mb-4">Customize Your Outfit</Button>
        <div className="flex space-x-2">
          {Array(5)
            .fill()
            .map((item, index) => (
              <div className="self-center" key={index}>
                <Star />
              </div>
            ))}
          <p className="self-end text-xs">Over 500+ 5 Star Reviews Online</p>
        </div>
      </div>
    </section>
  );
};
export default PerkSection;
