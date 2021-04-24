import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeNav = styled.nav`
margin: 0 auto;
padding: 16px 24px;
height: 200px;
font-size: 3rem;
`;

const NavContainer = styled.section`
display: flex;
flex-direction: row;
order: 1;
background-color: #CCE4E5;
flex-flow: row;	

`;

const HeaderOne = styled.h1`
	// background-color: coral;
	font-weight: 100;
	font-size: 50px;
	margin-left: 20px;
	color: black;
	text-decoration: none;

    
	// .nav-tag {
	// 	color: red;
	// 	font-weight: 100;
	// 	text-decoration: none;
	// }
`;

const SignInButton = styled.button`
	display:inline-block;
 	padding:0.35em 1em;
 	border:0.29em solid #FFFFFF;
 	margin:0 0.6em 0.3em 0;
 	order-radius:0.12em;
//  	box-sizing: border-box;
//  	font-weight:400;
//  	color:#000000;
 	transition: all 0.2s;
`;

const SignUpButton = styled.button`
	display:inline-block;
 	padding:0.35em 1em;
 	border:0.29em solid #FFFFFF;
 	margin:0 0.6em 0.3em 0;
 	order-radius:0.12em;
 	transition: all 0.2s;
`;

function NavBar() {

    return (
		<NavContainer>
			<Link style={{ textDecoration: 'none' }} to='/'>
				<HeaderOne className='nav-tag' > WV </HeaderOne>
			</Link>
			<HomeNav>
				<Link to='/signin'>
					<SignInButton
						className='SignIn'
						width='348px'
						size='1.5rem'
						margin='0'
						height='56px'>
						Sign In
					</SignInButton>
				</Link>
				<Link to='/signup'>
					<SignUpButton
						className='SignUp'
						width='348px'
						size='1.5rem'
						margin='0'
						height='56px'>
						Sign Up
					</SignUpButton>
				</Link>
				<Link to='/blog'>
					<button
						className='blog'
						width='348px'
						size='1.5rem'
						margin='0'
						height='56px'>
						Blog
					</button>
				</Link>
				<Link to='/about'>
					<button
						className='about'
						width='348px'
						size='1.5rem'
						margin='0'
						height='56px'>
						About
					</button>
				</Link>
			</HomeNav>
			

			
		</NavContainer>
    );
}

export default NavBar;