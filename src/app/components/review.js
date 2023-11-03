import Image from "next/image";
import Profile from "@/images/profile.png";
import Star from "./icons/Star";


const Review = ({ profilePic = Profile, name, review, rating = 5, credentials }) => {
  console.log(rating)
  return (
    <article className="lg:w-[460px] z-50 mt-16 bg-white text-light p-4 shadow  rounded-md border">
      <div className="lg:flex gap-x-4 text-center items-center justify-center mx-auto">
        <Image src={profilePic} alt="Profile photo" className="mx-auto"/>
        <p className="self-center text-[15px]">{name}</p>
        <div className="self-center flex gap-x-1 justify-center">
          {Array(rating).fill().map((item, index) => (
            <Star key={index}/>
          ))}
          <p className="text-[11px] ml-3 self-center text-center">{credentials}</p>
        </div>
      </div>
      <div>
        <p className="text-xs mt-4 leading-6 lg:text-left text-center">{review}</p>
      </div>
    </article>
  );
};
export default Review;
