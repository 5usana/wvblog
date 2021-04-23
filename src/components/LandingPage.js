import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Footer from './Footer';

const MainDiv = styled.div`
    padding: 60px 0 0 60px;
	width: 50vw;
	display: inline-block;
    border-radius: 20px;
    text-align: center;
    background-color: white;
    opacity: .8 ;
`;

const Section = styled.section`
    background-color: #CCE4E5;
    padding: 0 0 0 80px;
`

const HeaderOne = styled.h1`
	font-size: 3rem;
	display: left inline;
    text-align: left;
    margin: 0;
`;
const HeaderTwo = styled.h2`
	font-size: 2rem;
	display: left inline;
    text-align: left;
`;

function LandingPage() {
    return (

        <Section>
            <NavBar />
            <MainDiv>
                <section>
                    <HeaderOne>Hey spit it out. </HeaderOne>
                    <br />
                    <HeaderTwo> Don't think, let it flow.</HeaderTwo>

                </section>
            </MainDiv>
            <Footer />
        </Section>
    );
}


export default LandingPage;