import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeNav = styled.nav`
	margin: 0 auto;
	padding: 16px 24px;
	height: 72px;
	font-size: 3rem;
`;

// const LinkWv = styled.link`
// 	color: red;
// `;


function NavBar() {



    return (
        <nav className='navBar'>
            <ul>
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
				<Link to='/'>
						WV
				</Link>

            </ul>

            
            
        </nav>
    );
}

export default NavBar;