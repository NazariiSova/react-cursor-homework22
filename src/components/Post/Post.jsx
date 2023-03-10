import "./Post.css";
import { useState } from "react";
import  comments50  from "../img/comments-50.png"
import downloads50 from "../img/download-50.png"
import heart50 from "../img/heart-50.png"
import repeat50 from "../img/repeat-50.png"


export const Post = ({ avatar, firstName, nickname, content, photo }) => {
  const [comments, setComments] = useState(10);
  const [likes, setLikes] = useState(100);
  const [downloads, setDownloads] = useState(0);
  const [reposts, setReposts] = useState(1);

  const incrementComments = () => {
    setComments(comments + 1);
  };
  const decrementComments = () => {
    setComments(comments - 1);
  };
  const incrementLikes = () => {
    setLikes(likes + 1);
  };
  const decrementLikes = () => {
    setLikes(likes - 1);
  };
  const incrementDownloads = () => {
    setDownloads(downloads + 1);
  };
  const decrementDownloads = () => {
    setDownloads(downloads - 1);
  };
  const incrementReposts = () => {
    setReposts(reposts + 1);
  };
  const decrementReposts = () => {
    setReposts(reposts - 1);
  };

  return (
    <div className="post">
      <div className="post-header">
        <img className="avatar" src={avatar}/>
        <h2 className="firstName">{firstName}</h2>
        <p className="post-header-nickname">{nickname}</p>
      </div>
      <div className="post-body">
        <p className="content-text">{content}</p>
        <img className="content-img" src = {photo} alt="post photo"/>
      </div>
      <div className="container-icon">
        <img className="icon" src={ comments50 } onClick={incrementComments} />
        <span>{comments}</span>
        <img className="icon" src={ repeat50 } onClick={incrementReposts} />
        <span>{reposts}</span>
        <img className="icon" src={ heart50 } onClick={incrementLikes} />
        <span>{likes}</span>
        <img className="icon" src={ downloads50 } onClick={incrementDownloads} />
        <span>{downloads}</span>
      </div>
    </div>
  );
};