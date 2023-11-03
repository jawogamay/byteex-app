import Image from "next/image";
import Button from "../button";

const CustomizeOutfit = () => {
  return (
    <div className="bg-basic lg:px-16 py-8">
      <div className="lg:flex justify-center items-center lg:gap-x-12">
        <div>
          <Image src="/images/customizeoutfit.png" width={523} height={664}/>
        </div>
        <div className="flex-initial lg:w-[680px] self-start text-[#6C6C6C] text-[15px]">
          <h3 className="text-header text-secondary">Be your best self</h3>
          <article className="leading-6 font-normal space-y-4 mt-4">
            <p>Hi! My name’s [Insert Name], and I founded [Insert] in ____</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
              felis finibus consequat.
            </p>
            <p>
              Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
              placerat volutpat ligula, ac consectetur felis varius non. Aliquam
              a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id
              arcu congue, faucibus libero nec, placerat ligula.
            </p>
            <p>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
            </p>
            <p>
              Fusce non ante velit. Sed auctor odio eu semper molestie. Nam
              mattis, sapien eget lobortis fringilla, eros ipsum tristique
              tellus, ac convallis urna massa at nibh.
            </p>
            <p>
              Duis non fermentum augue. Vivamus laoreet aliquam risus, sed
              euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam
              nec in sapien.
            </p>
            <p>Cras mattis varius mollis.</p>
          </article>
          <Button customClass="mt-8">Customize Your Outfit</Button>
        </div>
      </div>
    </div>
  );
};
export default CustomizeOutfit