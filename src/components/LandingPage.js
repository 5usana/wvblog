import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Footer from './Footer';

const MainDiv = styled.div`
    border-radius: 20px;
    border: 5px solid black;
    width: 350px;
	margin: 0 auto;
	margin-bottom: 10px;
	text-align: center;

	&.mobile {
		width: 180px;
	}
`;

const HeaderOne = styled.h1`
	font-size: 3.3rem;
	display: left inline;
    text-align: left;
    margin: 0;
    margin-left: 25px;
`;
const HeaderTwo = styled.h2`
	font-size: 1.8rem;
	display: left inline;
    text-align: left;
    margin-left: 25px;
`;


function LandingPage() {
    return (
        <div>
            <NavBar />
            <MainDiv>
                <section>
                    <HeaderOne>Hey spit it out. </HeaderOne>
                    <HeaderTwo> Don't think, let it flow.</HeaderTwo>
                </section>
            </MainDiv>
            <Footer />
        </div>
        
    );
}


export default LandingPage;