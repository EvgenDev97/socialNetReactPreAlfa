import React from "react";
import styles from "./_post.module.scss";
const Post = (props) => {
  return (
    <div className={styles.post}>
      <img src="" alt="" />
      {props.message} {props.likesCount}
    </div>
  );
};
export default Post;
