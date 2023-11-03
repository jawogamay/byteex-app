import Image from "next/image";
import AboutImage from "@/images/about.png";
import { loungeWearData } from "@/app/consts/dummyData";
const LoungeWearSection = () => {
  return (
    <section className="lg:px-16 py-16 px-4 flex justify-center items-center">
      <div className="flex-initial lg:w-[630px] self-center">
        <h3 className="text-header text-secondary">
          Loungewear you can be proud of.
        </h3>
        {loungeWearData.map((item, index) => (
          <div className="flex align-center mt-4 gap-x-2" key={index}>
            <Image src={item.icon} width={31} height={31} className="self-start"/>
            <div className="self-start">
              <p className="text-secondary text-[22px]">{item.title}</p>
              <p className="text-light text-[15px] leading-6 mt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Image src="/images/beyourself.png"width={433} height={648} alt="women standing"/>
      </div>
    </section>
  );
};
export default LoungeWearSection;
