import React from 'react';
import CreatePost from './CreatePost';
import DisplayAllPosts from './DisplayAllPosts';
import NavBar from './NavBar'

function LandingPage() {
    return (
        <div className="landingPage">
           <NavBar />
            <h1>Hey spit it out.</h1>
            <h2>Don't think, let it flow.</h2>
            <CreatePost />
            <DisplayAllPosts />

        </div>
    );
}

export default LandingPage;