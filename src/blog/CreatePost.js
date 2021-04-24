import React from 'react';
import NavBar from '../components/NavBar';
import styled from 'styled-components';

const HeaderOne = styled.h1`
  padding: 10px 0 0 30px;
  margin: 0 auto;
  font-size: 2rem;
  text-align: center;
`;
const TitleInput = styled.input`

  margin: 0 auto;
  font-size: 1rem;
  display: inline-block;
  margin-left: 30px;
`;
const StyleTextArea = styled.input`
  margin: 0 auto;
  // height: 15vw;
  // width: 30vw;
  // font-size: 1rem;
  // display: block;
  // margin-left: 30px;
`;


const BlogDiv = styled.div`
	  width: 45vw;
	  display: inline-block;
    border-radius: 20px;
    background-color: Blue;
    opacity: .8 ;
    margin: 0 auto;

`;
const PublishButton = styled.button`
    display: inline-block;
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
    display:inline-block;
    margin-left: 30px;
`;

// props -data as functions or state passed from parent to child component
function CreatePost(props) {
    return (
        // <React.Fragment> </React.Fragment> better than divs- less memory usage
        <>
        <NavBar />
        {/* savePost funciton passed through props from DisplayAllPosts */}
        <BlogDiv>
          <form onSubmit={props.savePost}>
          <HeaderOne>Create New Post</HeaderOne>
          {/*savePostTitle function passes useState setTitle through props  */}
          {/* savePostTitle funciton passed through props from DisplayAllPosts */}
          <TitleInput
            type='text'
            onChange={props.savePostTitle}
            placeholder='title'
            // size="39"
            required
            // pass down useRef from DisplayAllPosts through props
            ref={props.getTitle}
          ></TitleInput>
          <br />
          <br />
          {/*savePostContent function passes useState setContent through props  */}
          {/* savePostContent funciton passed through props from DisplayAllPosts */}
          <StyleTextArea
            onChange={props.savePostContent}
            placeholder='word vomit'
            rows="8"
            // cols="41"
          required
          // pass down useRef from DisplayAllPosts through props
          ref={props.getContent}
          ></StyleTextArea>
          <br />
          <br />
          <PublishButton> Publish </PublishButton>
        </form>
        </BlogDiv>
      </>
    );
}

export default CreatePost;