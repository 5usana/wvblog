import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const SignInContainer = styled.div`
	margin: 0 auto;
	text-align: center;
`;

const HeaderOne = styled.h1`
	font-size: 2.5rem;
`;

const HeaderSix = styled.h6`
	font-size: 1rem;
	color: #F06123;
`;

function SignIn() {

	

	return (
		<>
			<Link to='/'>
				WV
			</Link>
			<SignInContainer>
				<form>
					<HeaderOne>Welcome Back!</HeaderOne>
					<HeaderSix> Coming soon! </HeaderSix>
					<div className='form-group'>
						<label>Email</label>
						<input
							type='text'
							value='email'
							name='email'
							className='form-control'
							placeholder='Email'
							// onChange={handleChange}
						/>
					</div>
                    <br />
					<div className='form-group'>
						<label>Password</label>
						<input
							type='password'
							name='password'
							value='password'
							className='form-control'
							placeholder='Password'
							// onChange={handleChange}
						/>
					</div>
					<br />
					<button type='submit' className='btn'>
						Log In
					</button>

					<div className='new-member'>
						<br />
                        <br />
                        Join us! 
                        {/* <Link to='/signup'>Sign Up</Link> */}
						
					</div>
				</form>
			</SignInContainer>
		</>
	);
}

export default SignIn;