import Stories from "./Stories";
import InputBox from "./../components/InputBox";
import Posts from "./Posts";

const Feed = () => {
  return (
    <div className="h-full flex-grow pt-6 mr-4 xl:mr-40 ">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
