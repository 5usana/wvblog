import React from 'react';

import NavBar from './NavBar';



function LandingPage() {
    return (
        <div className="landingPage">

           <NavBar />
            <h1>Hey spit it out.</h1>
            <h2>Don't think, let it flow.</h2>

        </div>
    );
}

// function Footer() {
// 	let currentyear = new Date().getFullYear();
// 	return (
// 		<footer>
// 			<hr />
// 			<p className='footer-text'>{currentyear} Copyright ⓒ </p>
// 			<Link className='footer-text' to='/about'>
// 				5usana
// 			</Link>
// 		</footer>
// 	);
// }

export default LandingPage;