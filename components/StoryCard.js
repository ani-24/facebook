import Image from "next/image";

const StoryCard = ({ name, src, profile }) => {
  return (
    <div className="relative p-3 h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        src={profile}
        height={40}
        width={40}
        layout="fixed"
        className="absolute opacity-0 lg:opacity-100 rounded-full z-20 object-cover"
        alt={name}
      />
      <Image
        src={src}
        layout="fill"
        className="filter brightness-75 rounded-full lg:rounded-3xl object-cover"
        alt={name}
      />
    </div>
  );
};

export default StoryCard;
