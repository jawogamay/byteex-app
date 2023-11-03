import Image from "next/image";

const SponsorSection = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-white px-16 py-8 md:mt-[-100px]">
      <p className="text-[#868787] text-center text-xl md:mt-[90px]">
        as seen in
      </p>
      <div className="lg:flex md:space-x-16 mt-8 justify-center lg:space-y-8">
        <Image
          src="/images/ecostylist.png"
          width={178}
          height={22}
          alt="Eco-stylist logo"
        />
        <Image
          src="/images/canadianliving.png"
          width={115}
          height={52}
          alt="Canadian Living logo"
        />
        <Image
          src="/images/jillianharris.png"
          width={271}
          height={53}
          alt="Jillian Harris logo"
        />
        <Image
          src="/images/ecohub.png"
          width={194}
          height={37}
          alt="The Eco Hub logo"
        />
        <Image
          src="/images/trendhunter.png"
          width={192}
          height={58}
          alt="Trendhunter logo"
        />
      </div>
    </div>
  );
};
export default SponsorSection
