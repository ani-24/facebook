const HeaderIcon = ({ Icon, active }) => {
  return (
    <div className="flex items-center cursor-pointer md:px-5 lg:px-8 h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500">
      <Icon className={`h-5 text-gray-500 ${active && "text-blue-500"}`} />
    </div>
  );
};

export default HeaderIcon;
