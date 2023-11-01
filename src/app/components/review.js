import Image from "next/image";
import Profile from "@/images/profile.png";
import Star from "./icons/Star";


const Review = ({ profilePic = Profile, name, review, rating = 5, credentials }) => {
  console.log(rating)
  return (
    <article className="mt-16 bg-white text-light border-slate-100 p-4 shadow shadow-black-500/40 rounded-md border">
      <div className="flex gap-x-4">
        <Image src={profilePic} alt="Profile photo" />
        <p className="self-center text-[15px]">{name}</p>
        <div className="self-center flex gap-x-1">
          {Array(rating).fill().map((item, index) => (
            <Star key={index}/>
          ))}
          <p className="text-[11px] ml-3 self-center">{credentials}</p>
        </div>
      </div>
      <div>
        <p className="text-xs mt-4 leading-6">{review}</p>
      </div>
    </article>
  );
};
export default Review;
