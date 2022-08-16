import React, { useState, useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post.js";
import { db, serverTimestamp } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [inputText, setInputText] = useState("");
  const postsCollectionRef = collection(db, "posts");

  const queryDoc = query(postsCollectionRef, orderBy("timestamp", "desc"));
  const user = useSelector(selectUser);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(queryDoc);
      setPosts(
        data.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    };
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const sendPosts = async (event) => {
    event.preventDefault();
    await addDoc(postsCollectionRef, {
      name: user.displayName,
      description: user.email,
      message: inputText,
      photoUrl: user.photoUrl ?? "",
      timestamp: serverTimestamp(),
    });
    setInputText("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={inputText}
              type="text"
              onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={sendPosts} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7fc15e"
          />
        </div>
      </div>

      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            name={post.name}
            description={post.description}
            message={post.message}
            photoUrl={post.photoUrl}
          />
        );
      })}
    </div>
  );
}

export default Feed;
