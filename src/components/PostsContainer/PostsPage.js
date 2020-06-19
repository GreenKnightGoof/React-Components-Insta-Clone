//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from '../../dummy-data.js';

const PostsPage = (props) => {
  // set up state for your data
  const [post, postData] = useState()
console.log(props)
  return (
    <div className="posts-container-wrapper">
      {dummyData.map((postData) => {
        return <Post post={postData}/>
      })}
    </div>
  );
};

export default PostsPage;
