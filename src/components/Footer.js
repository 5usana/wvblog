import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterStyle = styled.footer`
	position: fixed;
	display: block;
	bottom: 0;
	// color: #000000;
	height: 70px;
	width: 100vw;
	text-align: center;

	.footer-text {
		display: inline-block;
		color: #000000;
		font-weight: 500;
		text-decoration: none;
		padding: 0 0 8px 0;
	}
`;

function Footer() {
	let currentyear = new Date().getFullYear();
	return (
		<FooterStyle>
			<hr />
			<p className='footer-text'>{currentyear} Copyright ⓒ </p>
			<Link className='footer-text' to='/about'>
				5usana
			</Link>
		</FooterStyle>
	);
}

export default Footer;