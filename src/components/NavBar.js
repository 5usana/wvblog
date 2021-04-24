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
	font-weight: 100;
	font-size: 50px;
	margin-left: 20px;
	color: black;
	text-decoration: none;
`;

const SignInButton = styled.button`
	display:inline-block;
 	padding:0.35em .2em;
 	border:0.29em solid #FFFFFF;
 	margin:0 0.6em 0.3em 0;
 	order-radius:0.12em;
 	transition: all 0.2s;
`;

const SignUpButton = styled.button`
	display:inline-block;
	padding:0.35em .2em;
 	border:0.29em solid #FFFFFF;
 	margin:0 0.6em 0.3em 0;
 	order-radius:0.12em;
 	transition: all 0.2s;
`;

const BlogButton = styled.button`
	display:inline-block;
	padding:0.35em .4em;
 	border:0.29em solid #FFFFFF;
 	margin:0 0.6em 0.3em 0;
 	order-radius:0.12em;
 	transition: all 0.2s;
`;

const AboutButton = styled.button`
	display:inline-block;
	padding:0.35em .4em;
 	border:0.29em solid #FFFFFF;
//  	margin:0 0.6em 0em 0;
 	order-radius:0.12em;
 	transition: all 0.2s;
`;

function NavBar() {

    return (
		<NavContainer>
			<Link style={{ textDecoration: 'none' }} to='/'>
				<HeaderOne> 
					WV 
					</HeaderOne>
			</Link>
			<HomeNav>
				<Link to='/signin'>
					<SignInButton>
						Sign In
					</SignInButton>
				</Link>
				<Link to='/signup'>
					<SignUpButton>
						Sign Up
					</SignUpButton>
				</Link>
				<Link to='/blog'>
					<BlogButton>
						Blog
					</BlogButton>
				</Link>
				<Link to='/about'>
					<AboutButton>
						About
					</AboutButton>
				</Link>
			</HomeNav>
		</NavContainer>
    );
}

export default NavBar;