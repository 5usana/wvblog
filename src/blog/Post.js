import React from 'react';

// props destructured to pass down data  -display published postings
function Post({ title, content, editPost, id, deletePost }) {
    return (
        <>
            <section>
            {/* props passed to display title and content once post is published  */}
                <h3>{title}</h3>
                <p> {content}</p>
                <button onClick={() => editPost(id)}> Modify </button>
                <button onClick={() => deletePost(id)}> Delete </button>
            </section>
        </>
        )
    }

export default Post;