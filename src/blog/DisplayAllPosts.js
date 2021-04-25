import React, { useState, useRef } from 'react';
import CreatePost from './CreatePost';
import Post from './Post';
import NavBar from '../components/NavBar';
import ModifyPost from './ModifyPost';
import styled from 'styled-components';

const HeaderTwo = styled.h2`
  padding: 30px 0 0 30px;
  margin: 0 auto;
  font-size: 2rem;
`;

const FlowDiv = styled.h2`
  padding: 30px 0 0 30px;
  margin: 0 auto;
  font-size: 3.5rem;
`;
const CreateButton = styled.button`
    display: inline-block;
    // color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    // border: 2px solid black;
    border-radius: 3px;
    display:inline-block;
    margin-left: 30px;
    color: #F06123;
    background-color: white;
    border: 2px solid #F06123;
`;


//Parent component to Post, CreatePost & ModifyPost

function DisplayAllPosts() {
    // Hooks- useState [variable, updater function]
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [allPosts, setAllPosts] = useState([]);
    const [isCreateNewPost, setIsCreateNewPost] = useState(false);
    const [isModifyPost, setIsModifyPost] = useState(false);
    const [editPostId, setEditPostId] = useState("");
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

     // toggles between true and false state of ModifyPost 
    const toggleModifyPostComponent = () => {
      setIsModifyPost(!isModifyPost)
    }

    // saves edited post to id, toggles modifyPost
    const editPost = id => {
      setEditPostId(id);
      toggleModifyPostComponent();
    };

    // deletes post by id
    const deletePost = id => {
      const modifiedPost = allPosts.filter(eachPost => {
        return eachPost.id !== id;
      });
      setAllPosts(modifiedPost)
    };
  
    // updates post component after user makes modifications
    const updatePost = (event) => {
      event.preventDefault();
      const updatedPost = allPosts.map(eachPost => {
        if (eachPost.id === editPostId) {
          return {
            // (...) rest syntax to edit title and content, NOT id. if nothing is modified then the original post will be shown
            ...eachPost,
            title: title || eachPost.title,
            content: content || eachPost.content
          };
        }
        return eachPost;
      });
      setAllPosts(updatedPost);
      toggleModifyPostComponent();
    };

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
    // if modifying post, return post info by id
    else if (isModifyPost) {
      const post = allPosts.find(post => {
        return post.id === editPostId;
      });
      return (
        <ModifyPost
          title={post.title}
          content={post.content}
          updatePost={updatePost}
          savePostTitle={savePostTitle}
          savePostContent={savePostContent}
        />
      );
    } 
    return (
        <>
        <NavBar />
        <HeaderTwo> Postings </HeaderTwo>
        {/* if allPosts is empty, lrt it flow will display */}
        {!allPosts.length ? (
          <FlowDiv>
            <h3>let it flow... </h3>
          </FlowDiv>
      ) : (
        // if allPosts contains entries .map() will display entries
        allPosts.map(eachPost => {
          return (
            <Post
              id={eachPost.id}
              key={eachPost.id}
              title={eachPost.title}
              content={eachPost.content}
              editPost={editPost}
              deletePost={deletePost}
            />
          );
        })
      )}
      <CreateButton onClick={toggleCreateNewPost}>Create New</CreateButton>
    </>
  );
};

export default DisplayAllPosts;