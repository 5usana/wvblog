import React from 'react';

function CreatePost(props) {
    return (
        <>
        <form onSubmit={props.savePost}>
          <h1>Create New Post</h1>
          <input
            type="text"
            onChange={props.savePostTitleToState}
            placeholder="title"
            size="45"
            required
            ref={props.getTitle}
          ></input>
          <br />
          <br />
          <textarea
            onChange={props.savePostContentToState}
            placeholder="contents"
            rows="8"
            cols="41"
          required
          ref={props.getContent}
          ></textarea>
          <br />
          <br />
          <button>Save Post</button>
        </form>
      </>
    );
}

export default CreatePost;