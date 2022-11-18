import React from "react";
import styles from "./_posts.module.scss";
import Post from "./Postt/Post";

const MyPosts = (props) => {
  let postElements = props.postData.map((p) => {
    return <Post message={p.post} likesCount={[p.likesCount]} />;
  });

  return (
    <div className={styles.posts}>
      <div>My post</div>
      <div>
        <textarea></textarea>
        <div>
          <button>add post</button>
        </div>
      </div>
      {postElements}
    </div>
  );
};
export default MyPosts;
