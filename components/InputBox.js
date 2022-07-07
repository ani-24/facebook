import Image from "next/image";
import { useSession } from "next-auth/react";

import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";

import { EmojiHappyIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { serverTimestamp, doc, setDoc } from "firebase/firestore";

import { db, storage } from "../firebase";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { Toaster, toast } from "react-hot-toast";

const InputBox = () => {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [postImage, setPostImage] = useState(null);
  const invalidPost = () => toast("⚠️ Post should not be empty");
  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value.trim()) {
      invalidPost();
      return;
    } else {
      await addDoc(collection(db, "posts"), {
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: serverTimestamp(),
      }).then((document) => {
        if (postImage) {
          const postsRef = ref(storage, `posts/${document.id}`);
          uploadBytes(postsRef, postImage[0]).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadURL) => {
              const docRef = doc(db, "posts", document.id);
              setDoc(
                docRef,
                {
                  postImage: downloadURL,
                },
                { merge: true }
              );
            });
            removeImage();
          });
        }
      });
      inputRef.current.value = "";
    }
  };
  const addImageToPost = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (readerEvent) => {
        setPostImage([e.target.files[0], readerEvent.target.result]);
      };
    }
  };
  const removeImage = () => {
    setPostImage(null);
    console.log(postImage);
  };
  return (
    <>
      <Toaster />
      <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 mt-6 sticky top-50">
        <div className="flex space-x-4 p-4 items-center">
          <Image
            src={session.user.image}
            layout="fixed"
            height={40}
            width={40}
            className="rounded-full z-0"
            alt={session.user.name}
          />
          <form className="flex flex-1 items-center space-x-5">
            <input
              ref={inputRef}
              type="text"
              className="outline-none rounded-xl bg-gray-100 h-10 px-5 w-full"
              placeholder={`What's on your mind, ${
                session.user.name.split(" ")[0]
              }?`}
            />
            {postImage && (
              <div
                onClick={removeImage}
                className="flex flex-col transition duration-150 hover:scale-105 cursor-pointer"
              >
                <img src={postImage[1]} className="h-10 object-contain" />
                <p className="text-center text-red-500 text-xs">Remove</p>
              </div>
            )}
            <button
              type="submit"
              onClick={sendPost}
              className="p-3 hover:bg-gray-100 rounded-xl"
            >
              <PaperAirplaneIcon className="text-blue-500 rotate-90 h-5 w-5" />
            </button>
          </form>
        </div>
        <div className="flex justify-between items-center border-t py-3 md:px-3">
          <div className="inputIcon">
            <VideoCameraIcon className="h-7 text-red-500" />
            <p className="text-xs md:text-sm lg:text-base font-medium">
              Live Video
            </p>
          </div>
          <div
            className="inputIcon"
            onClick={() => filePickerRef.current.click()}
          >
            <CameraIcon className="h-7 text-green-500" />
            <p className="text-xs md:text-sm lg:text-base font-medium">
              Photo/Video
            </p>
            <input
              ref={filePickerRef}
              type="file"
              hidden
              onChange={addImageToPost}
            />
          </div>
          <div className="inputIcon">
            <EmojiHappyIcon className="h-7 text-yellow-400" />
            <p className="text-xs md:text-sm lg:text-base font-medium">
              Feeling/Activity
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputBox;
