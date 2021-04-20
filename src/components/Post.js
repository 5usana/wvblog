import React from 'react';
import NavBar from './NavBar';

function Post(props) {
    return (
        <>
        <NavBar />
        <section>
        <h3>{props.title}</h3>
        <p> {props.content}</p>
        </section>
        </>
        )
    }

export default Post;