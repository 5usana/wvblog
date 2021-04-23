import React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';

const HeroDiv = styled.div`
	padding: 160px 0 0 260px;
	width: 50vw;
	display: inline-block;
`;

const HeaderOne = styled.h1`
	font-size: 3rem;
	display: inline;
`;
const HeaderTwo = styled.h2`
	font-size: 2rem;
	display: inline;
`;

function LandingPage() {
    return (

        <section>
        <NavBar />
        <HeroDiv>
            <HeaderOne>Hey spit it out. </HeaderOne>
            <br />
            <HeaderTwo> Don't think, let it flow.</HeaderTwo>
        </HeroDiv>

        </section>
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