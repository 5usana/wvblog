import React from 'react';

function CreatePost(props) {
    return (
        <>
        <form onSubmit={props.savePost}>
        <h1>Create New Post</h1>
        <input
          type='text'
          onChange={props.savePostTitle}
          placeholder='title'
          size="39"
          required
          ref={props.getTitle}
        ></input>
        <br />
        <br />
        <textarea
          onChange={props.savePostContent}
          placeholder='contents'
          rows="8"
          cols="41"
        required
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