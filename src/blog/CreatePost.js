import React from 'react';
import NavBar from '../components/NavBar';
import styled from 'styled-components';

const BlogDiv = styled.div`
    display: flex;
	  flex-flow: row wrap;
    width: 350px;
	  margin: 0 auto;
	  margin-bottom: 24px;
	  text-align: center;

	  &.mobile {
		width: 180px;
	}
`;

const PublishButton = styled.button`
    display: inline-block;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    color: #F06123;
    background-color: white;
    border: 2px solid #F06123;
    border-radius: 3px;
    display:inline-block; 
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
          <h1>Create New Post</h1>
          {/*savePostTitle function passes useState setTitle through props  */}
          {/* savePostTitle funciton passed through props from DisplayAllPosts */}
          <input
            type='text'
            onChange={props.savePostTitle}
            placeholder='title'
            size="39"
            required
            // pass down useRef from DisplayAllPosts through props
            ref={props.getTitle}
          ></input>
          <br />
          <br />
          {/*savePostContent function passes useState setContent through props  */}
          {/* savePostContent funciton passed through props from DisplayAllPosts */}
          <textArea
            onChange={props.savePostContent}
            placeholder='word vomit'
            rows="8"
            cols="41"
          required
          // pass down useRef from DisplayAllPosts through props
          ref={props.getContent}
          ></textArea>
          <br />
          <br />
          <PublishButton> Publish </PublishButton>
        </form>
        </BlogDiv>
      </>
    );
}

export default CreatePost;