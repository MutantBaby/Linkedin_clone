import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "./Feed.css";
import InputOptions from "./InputOptions";
import HistoryEduSharpIcon from "@mui/icons-material/HistoryEduSharp";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ArticleIcon from "@mui/icons-material/Article";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Post from "./Post";
import { db } from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__container">
        <div className="feed__input">
          <HistoryEduSharpIcon />
          <form className="feed__form">
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>

        <div className="feed__options">
          <InputOptions Icon={ImageIcon} color="#70B5F9" title="Photo" />
          <InputOptions
            Icon={SubscriptionsIcon}
            color="#E7A33E"
            title="Video"
          />
          <InputOptions Icon={ArticleIcon} color="#C0CBCD" title="Document" />
          <InputOptions
            Icon={EventNoteIcon}
            color="#7FC15E"
            title="Write_Article"
          />
        </div>
      </div>

      <FlipMove>
        {posts.map(
          ({ id, data: { name, description, message, photoUrl, times } }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
              time={times}
            />
          )
        )}
      </FlipMove>
    </div>
  );
}

export default Feed;
