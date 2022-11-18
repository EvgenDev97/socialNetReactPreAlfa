import React from "react";
import MyPosts from "./myPosts/Myposts";
import ProfileInfo from "./myPosts/profileInfo/profileinfo";

const Profile = (props) => {
  return (
    <div className="content">
      <ProfileInfo />
      <div className="content__main">
        <MyPosts postData={props.profileState.postData} />
      </div>
    </div>
  );
};

export default Profile;
