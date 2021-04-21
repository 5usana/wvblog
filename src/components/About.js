import React from 'react';
import susana from '../images/avatar-susana.png';
import NavBar from './NavBar';

function About() {
    return (
        <>
			<NavBar />
          	<h1>Meet Susana</h1>
			<section>
				<figure>
					<a href='https://www.linkedin.com/in/susanacmartins/' target='blank'>
					<img src={susana} alt='susana avatar' />	
					</a>
					<a href='https://github.com/5usana' target='blank'>
						Susana Martins
					</a>
				</figure>  
        </section>
        </>
    );
}

export default About;