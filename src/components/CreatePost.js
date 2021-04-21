import React from 'react';
import NavBar from './NavBar';

// props -data as functions or state passed from parent to child component
function CreatePost(props) {
    return (
        // <React.Fragment> </React.Fragment> better than divs- less memory usage
        <>
        <NavBar />
        {/* savePost funciton passed through props from DisplayAllPosts */}
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
        <textarea
          onChange={props.savePostContent}
          placeholder='contents'
          rows="8"
          cols="41"
        required
        // pass down useRef from DisplayAllPosts through props
        ref={props.getContent}
        ></textarea>
        <br />
        <br />
        <button> Publish </button>
      </form>
      </>
    );
}

export default CreatePost;