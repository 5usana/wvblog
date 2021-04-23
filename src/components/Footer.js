import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterStyle = styled.footer`
	position: fixed;
	display: block;
	bottom: 0;
	background-color: #f2f2f2;
	color: #222f65;
	height: 70px;
	width: 100vw;
	text-align: center;
	padding-top: 45px;

	.footer-text {
		display: inline-block;
		color: #222f65;
		font-weight: 700;
		text-decoration: none;
		padding: 0 4px;
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