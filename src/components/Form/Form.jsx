import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewPost, updatePosts } from "../../store/actions";
import { useSelector } from "react-redux";
import { getOriginPostList, getPostList } from "../../store/selectors";
import styles from "./form.module.css"
// import { getOriginPostList } from "../../store/selectors";

export const Form = () => {
  const dispatch = useDispatch();
  const listOfPosts = useSelector(getPostList);
  const originPostList = useSelector(getOriginPostList);
  const [avatar, setAvatar] = useState("");
  const [firstName, setFirstName] = useState("");
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");
  

  const handlerChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    switch (name) {
      case "avatar":
        setAvatar(value);
        break;
      case "name":
        setFirstName(value);
        break;
      case "nickname":
        setNickname(value);
        break;
      case "content":
        setContent(value);
        break;
      case "photo":
        setPhoto(value);
        break;
      default:
    }
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
console.log("I'm here1");
    if (
      avatar.length >= 1 &&
      avatar.includes("https://") &&
      firstName.length >= 1 &&
      nickname.length >= 2 &&
      nickname.includes("@") &&
      content.length >= 1 &&
      photo.includes("https://")
    
    ) {
      console.log("I'm here2");
      const data = {
        avatar: avatar,
        firstName: firstName,
        nickname: nickname,
        content: content,
        photo: photo,
        id: new Date().getTime(),
      };
      console.log("I'm here3");

      dispatch(setNewPost(data));
    }
  };

  return (
    <form className={styles.box}>
      <label className={styles.newPostAvatar}>
        <b>Your avatar</b>
        <input
          className="input"
          name="avatar"
          onChange={handlerChange}
          value={avatar}
          type="url"
          placeholder="paste the link"
        />
      </label>

      <label className={styles.newPostName}>
        <b>Your name</b>
        <input
          className="input"
          name="name"
          onChange={handlerChange}
          value={firstName}
          type="text"
        />
      </label>

      <label className={styles.newPostNickname}>
        <b>Your Nickname</b>
        <input
          className="input"
          name="nickname"
          onChange={handlerChange}
          value={nickname}
          type="text"
          placeholder="start writing with @"
        />
      </label>

      <label className={styles.newPostContent}>
        <b>Write the text of the post</b>
        <input
          className="input"
          name="content"
          onChange={handlerChange}
          value={content}
          type="text"
        />
      </label>

      <label className={styles.newPostPhoto}>
        <b>Link to the photo</b>
        <input
          className="input"
          name="photo"
          onChange={handlerChange}
          value={photo}
          type="url"
          placeholder="paste the link"
        />
      </label>

      <button
        className={styles.addNewPost}
        onClick={handlerSubmit}
        onKeyDown={handlerSubmit}
        type="submit"
      >
        Add new post
      </button>
    </form>
  );
};
