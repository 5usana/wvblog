import React from 'react';
import { Link } from 'react-router-dom';


function SignIn() {

	

	return (
		<>
			<Link to='/'>
				WV
			</Link>
			<container>
				<form>
					<h1>Welcome Back!</h1>

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
			</container>
		</>
	);
}

export default SignIn;