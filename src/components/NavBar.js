import React, { useState } from 'react';




function NavBar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    };

    return (
        <nav className='navBar'>
            <h1>WV</h1>
            <button onClick={handleToggle}>{navbarOpen ? 'Close' : 'Open'}</button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>

            </ul>

            
            
        </nav>
    );
}

export default NavBar;