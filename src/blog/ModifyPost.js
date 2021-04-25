import React from 'react';
import styled from 'styled-components';


const ModifyForm = styled.form`
    margin: 0 auto;
    text-align: center;
`;

const UpdateButton = styled.button`
    display: inline-block;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    display:inline-block;
    color: #F06123;
    background-color: white;
    border: 2px solid #F06123;
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
                    size="41"
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
                <UpdateButton onClick ={props.updatePost}>Update</UpdateButton>
            </ModifyForm>
        </>
    );
}

export default ModifyPost;