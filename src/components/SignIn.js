import React from 'react';
import { Link } from 'react-router-dom';


function SignIn() {
	// add functionality
	// const [customerSignIn, setCustomerSignIn] = useState({
	// 	email: '',
	// 	password: '',
	// });

	// const handleChange = (event) => {
	// 	setCustomerSignIn({
	// 		...customerSignIn,
	// 		[event.target.name]: event.target.value,
	// 	});
	// };
	

	return (
		<>
			<Link to='/'>
					<button
						className='Home'
						width='348px'
						size='1.5rem'
						margin='0'
						height='56px'>
						WV
					</button>
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