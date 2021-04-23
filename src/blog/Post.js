import React from 'react';
import styled from 'styled-components';

const PostSection = styled.section`
    margin: 0 auto;
    text-align: center;
`;


// props destructured to pass down data  -display published postings
function Post({ title, content, editPost, id, deletePost }) {
    return (
        <>
            <PostSection>
            {/* props passed to display title and content once post is published  */}
                <h3>{title}</h3>
                <p> {content}</p>
                <button onClick={() => editPost(id)}> Modify </button>
                <button onClick={() => deletePost(id)}> Delete </button>
            </PostSection>
        </>
        )
    }

export default Post;