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
	background-color: coral;
	font-weight: 100;
	text-decoration: none;
	font-size: 50px;
	// .nav-tag {
	// 	color: red;
	// 	font-weight: 100;
	// 	text-decoration: none;
	// }
`;

function NavBar() {

    return (
		<NavContainer>
			<Link to='/'>
				<HeaderOne className='nav-tag'> WV </HeaderOne>
			</Link>
			<HomeNav>
				<Link to='/signin'>
					<button
						className='SignIn'
						width='348px'
						size='1.5rem'
						margin='0'
						height='56px'>
						Sign In
					</button>
				</Link>
				<Link to='/signup'>
					<button
						className='SignUp'
						width='348px'
						size='1.5rem'
						margin='0'
						height='56px'>
						Sign Up
					</button>
				</Link>
				<Link to='/blog'>
					<button
						className='log'
						width='348px'
						size='1.5rem'
						margin='0'
						height='56px'>
						Blog
					</button>
				</Link>
				<Link to='/about'>
					<button
						className='primary'
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