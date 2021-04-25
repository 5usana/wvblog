import React from 'react';
import styled from 'styled-components';

const PostSection = styled.section`
    margin: 0 auto;
    // text-align: center;
    margin: 0 auto;
    font-size: 1rem;
    display: inline-block;
    margin-left: 30px;
`;
const ModifyButton = styled.button`
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
const DeleteButton = styled.button`
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

// props destructured to pass down data  -display published postings
function Post({ title, content, editPost, id, deletePost }) {
    return (
        <>
            <PostSection>
            {/* props passed to display title and content once post is published  */}
                <h3>{title}</h3>
                <p> {content}</p>
                <ModifyButton onClick={() => editPost(id)}> Modify </ModifyButton>
                <DeleteButton onClick={() => deletePost(id)}> Delete </DeleteButton>
            </PostSection>
        </>
        )
    }

export default Post;