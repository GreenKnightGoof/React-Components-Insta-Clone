// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data";
console.log(dummyData)
const CommentSection = props => {
 let [comment, commentState] = useState(0);

  return (
    <div>
      {dummyData.map(() => {
        return <Comment comment={props.comments}/>
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
