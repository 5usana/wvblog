import React from 'react';
import { useState, Link } from 'react-router-dom';



function NavBar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className='navBar'>
            <h1>WV</h1>
            <button>{navbarOpen ? 'Close' : 'Open'}</button>
            <ul>

            </ul>
            
            <Link to='/createpost'></Link>
            <Link to='/displayallposts'></Link>
            
        </nav>
    );
}

export default NavBar;