import React, { useState } from 'react';



function NavBar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    };

    return (
        <nav className='navBar'>
            <h1>WV</h1>
            <button onClick={handleToggle}>{navbarOpen ? 'Close' : 'Open'}</button>
            <ul>

            </ul>

            
            
        </nav>
    );
}

export default NavBar;