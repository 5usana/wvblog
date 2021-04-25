import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Footer from './Footer';

const MainDiv = styled.div`
    padding: 30px 0 0 10px;
	width: 50vw;
	display: inline-block;
    border-radius: 20px;
    text-align: center;
    background-color: white;
    opacity: .8 ;
    margin-left: 150px;
`;

const HeaderOne = styled.h1`
	font-size: 3.4rem;
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