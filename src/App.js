/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";

import DummyData from './dummy-data';
import PostsPage from './components/PostsContainer/PostsPage';
import Comments from './components/CommentSection/CommentSectionContainer';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';

import "./App.css";



// import the PostsPage and SearchBar and add them to the App


const App = () => {

  console.log(DummyData)
  console.log(PostsPage)
  console.log(Comments)
  console.log(SearchBarContainer)

  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <DummyData />
      <PostsPage />
      <SearchBarContainer />
      <Comments />
    </div>
  );
};

export default App;
