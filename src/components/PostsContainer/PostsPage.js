//Complete the necessary code in this file
// import useState

import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from '../../dummy-data.js';

const PostsPage = () => {
  console.log(Post)
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {dummyData.map((postData) => {
        return <Post post={postData}/>
      })}
    </div>
  );
};

export default PostsPage;
