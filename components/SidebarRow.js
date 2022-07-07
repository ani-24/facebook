import Image from "next/image";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="flex items-center space-x-2 transition duration-200 hover:bg-gray-200 rounded-xl cursor-pointer p-4">
      {src && (
        <Image
          src={src}
          width={30}
          height={30}
          layout="fixed"
          className="rounded-full"
          alt={title}
        />
      )}
      {Icon && <Icon className="w-6 h-6 text-gray-700" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default SidebarRow;
