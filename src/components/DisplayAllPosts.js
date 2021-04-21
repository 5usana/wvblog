import React, { useState, useRef } from 'react';
import CreatePost from './CreatePost';
import Post from './Post';
import NavBar from './NavBar';

//Parent component to Post, CreatePost & ModifyPost

function DisplayAllPosts() {
    // Hooks- useState [variable, updater function]
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [allPosts, setAllPosts] = useState([]);
    const [isCreateNewPost, setIsCreateNewPost] = useState(false);
    // Initialize useRef
    const getTitle = useRef();
    const getContent = useRef();

    
    const savePostTitle = (event) => {
    setTitle(event.target.value);
    console.log(title);
    };

    const savePostContent = (event) => {
    setContent(event.target.value);
    console.log(content);
    };

    // toggles between true and false state of isCreateNewPost 
    const toggleCreateNewPost =()=>{
        // conditional rendering- renders component only when condition is met
        setIsCreateNewPost(!isCreateNewPost)
    }

    // function saves captured input data into allPosts state variable
    const savePost = (event) => {
        event.preventDefault();
        // each post is assigned a unique id
        const id = Date.now();
        // spread operator appends data to allPosts state
        setAllPosts([...allPosts, {title, content, id }]);
        console.log(allPosts);
        // clear input value of title/content once post is published
        getTitle.current.value = "";
        getContent.current.value = "";
        toggleCreateNewPost()
      };
    // render CreateNewPost component when user clicks  create new and remove once published button is clicked
    if(isCreateNewPost){
        return (
            <> 
                <CreatePost 
                // functions passed through props
                savePostTitle = {savePostTitle}
                savePostContent = {savePostContent}
                getTitle= {getTitle}
                getContent= {getContent}
                savePost= {savePost}
                />    
            </>
        );
    }  
    return (
        <>
        <NavBar />
        <h2> Postings </h2>
        {!allPosts.length ? (
          <div>
          <h3>let it flow... </h3>
        </div>
      ) : (
        allPosts.map(eachPost => {
          return (
            <Post
            id={eachPost.id}
            key={eachPost.id}
            title={eachPost.title}
            content={eachPost.content}
            />
            );
          })
          )}

      <br />
      <br />

      <button onClick={toggleCreateNewPost}>Create New</button>
    </>
  );
};

export default DisplayAllPosts;