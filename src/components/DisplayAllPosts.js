import React, { useState, useRef } from 'react';
import CreatePost from './CreatePost';

function DisplayAllPosts() {
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

    const toggleCreateNewPost =()=>{
        setIsCreateNewPost(!isCreateNewPost)
    }

    const savePost = (event) => {
        event.preventDefault();
        const id = Date.now();
        setAllPosts([...allPosts, {title, content, id }]);
        console.log(allPosts);
        getTitle.current.value = "";
        getContent.current.value = "";
        toggleCreateNewPost()
      };
    if(isCreateNewPost){
        return (
            <> 
                <CreatePost 
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
        <h2>ALL POSTS</h2>
        <br />
        <br />
        <button onClick={toggleCreateNewPost}>Create New</button>
        </>
    )

};

export default DisplayAllPosts;