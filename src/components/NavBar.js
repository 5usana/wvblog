import React from 'react';
import { Link } from 'react-router-dom';



function NavBar() {
    return (
        <div>
            
            <menu>drop down menu</menu>
            <h1>WV</h1>
            <Link to='/createpost'></Link>
            <Link to='/displayallposts'></Link>
            
        </div>
    );
}

export default NavBar;