import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
	

	return (
		<>
            <Link to='/'>
				WV
			</Link>
			<container>
				<form>
					<h1>Join WV</h1>
                    <div className='form-group'>
						<label>First Name</label>
						<input
							type='text'
							value='text'
							name='text'
							className='form-control'
							placeholder='First Name'
							// onChange={handleChange}
						/>
					</div>
                    <div className='form-group'>
						<label>Last Name</label>
						<input
							type='text'
							value='text'
							name='text'
							className='form-control'
							placeholder='Last Name'
							// onChange={handleChange}
						/>
					</div>

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
						
					</div>
				</form>
			</container>
		</>
	);
}

export default SignUp;