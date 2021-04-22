import React from 'react';

// props passed down to display published postings
function Post(props) {
    return (
        <>
        <section>
        {/* props passed to display title and content once post is published  */}
        <h3>{props.title}</h3>
        <p> {props.content}</p>
        <button> Modify </button>
        <button> Delete </button>
        </section>
        </>
        )
    }

export default Post;