import { getFirestore, collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { app } from "../firebase";
import Post from "./Post";

const Posts = () => {
  const [realtimePosts] = useCollection(
    query(collection(getFirestore(app), "posts"), orderBy("timestamp", "desc"))
  );
  return (
    <div className="pb-5 scrollbar-hide">
      {realtimePosts?.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          image={post.data().image}
          postImage={post.data().postImage}
          timestamp={post.data().timestamp}
        />
      ))}
    </div>
  );
};

export default Posts;
