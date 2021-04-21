import React from 'react';


function Post(props) {
    return (
        <>
        <section>
        <h3>{props.title}</h3>
        <p> {props.content}</p>
        </section>
        </>
        )
    }

export default Post;