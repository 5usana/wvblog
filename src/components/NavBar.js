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
                <Link to='/post'>
					<button
						className='secondary'
						width='348px'
						size='1.5rem'
						margin='0'
						height='56px'>
						Post
					</button>
				</Link>
                <Link to='/log'>
					<button
						className='log'
						width='348px'
						size='1.5rem'
						margin='0'
						height='56px'>
						Entries
					</button>
				</Link>

            </ul>

            
            
        </nav>
    );
}

export default NavBar;