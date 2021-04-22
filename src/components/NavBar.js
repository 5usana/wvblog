import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
  


    return (
        <nav className='navBar'>
            <ul>
                <Link to='/'>
					<button
						className='Home'
						width='348px'
						size='1.5rem'
						margin='0'
						height='56px'>
						WV
					</button>
				</Link>
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

            </ul>

            
            
        </nav>
    );
}

export default NavBar;