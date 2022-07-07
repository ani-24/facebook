import Image from "next/image";

import { ChatIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

const Post = ({ name, message, email, image, postImage, timestamp }) => {
  return (
    <div className="flex flex-col bg-white rounded-3xl shadow-md mt-10">
      <div className="flex items-center space-x-4 p-5">
        <Image
          src={image}
          height={50}
          width={50}
          alt={name}
          className="rounded-full"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-xs text-gray-400 font-medium">
            {timestamp?.toDate().toLocaleString()}
          </p>
        </div>
      </div>
      <div className="p-5 pt-0">
        <p>{message}</p>
      </div>
      {postImage && (
        <div className="flex justify-center">
          <img src={postImage} alt={message} />
        </div>
      )}
      <div className="flex justify-around items-center border-t">
        <div className="postIconContainer">
          <ThumbUpIcon className="postIcon" />
          <p>Like</p>
        </div>
        <div className="postIconContainer">
          <ChatIcon className="postIcon" />
          <p>Comment</p>
        </div>
        <div className="postIconContainer">
          <ShareIcon className="postIcon" />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
