import Image from "next/image";

const Contact = ({ src, name }) => {
  return (
    <div className="p-2 mb-2 flex space-x-4 items-center rounded-xl hover:bg-gray-200 cursor-pointer">
      <div className="relative">
        <Image
          src={src}
          height={40}
          width={40}
          alt={name}
          objectFit="cover"
          className="rounded-full"
        />
        <div className="absolute h-3 w-3 rounded-full bg-green-500 bottom-1 right-1"></div>
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Contact;
