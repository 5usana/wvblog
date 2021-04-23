import React from 'react';
import styled from 'styled-components';


const ModifyForm = styled.form`
    margin: 0 auto;
    text-align: center;
`;



function ModifyPost(props) {
    return (
        <>
            <ModifyForm>
                <h1>Modify Post</h1>
                <input
                    defaultValue={props.title}
                    onChange={props.savePostTitle}
                    text
                    placeholder="title"
                    size="39"
                ></input>
                <br />
                <br />
                <textarea
                    defaultValue={props.content}
                    placeholder="word vomit"
                    onChange={props.savePostContent}
                    rows="8"
                    cols="41"
                ></textarea>
                <br />
                <br />
                <button onClick ={props.updatePost}>Update Post</button>
            </ModifyForm>
        </>
    );
}

export default ModifyPost;