import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Footer from './Footer';

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
            <Footer />
        </section>
    );
}


export default LandingPage;