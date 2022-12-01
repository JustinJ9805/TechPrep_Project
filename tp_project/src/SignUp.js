import React, {useState} from 'react'
import './signUp.css'

function SignUp(){
	const [myBool, setmyBool] = useState(true);

	function toggleBool(){
		setmyBool(!myBool)
	}

	return (
		myBool ? <Student toggleBool = {toggleBool}/> : <Business toggleBool = {toggleBool}/>
	);
}

function Student(props){
	return(
		<div>
			<br></br>
			<br></br>
			<h3>Student Registration</h3>
			<button onClick={props.toggleBool}>Im a business</button>
			<br></br>
			<br></br>
			<form className='container-fluid signUp_form'>
				<div className='row'>
					<h5>Customer Info</h5>
					<label className='col-3'>
						Username:
						<input type="text" name="name" />
					</label>
					<br></br>
					<br></br>
					<h6 className='col-3'>Password must be 8 to 16 characters!</h6>
					<label className='col-3'>
						Password:
						<input type="password" minLength={8} maxLength={16} name="pass" />
					</label>
				</div>

				<div className='row'>
					<label className='col-6'>
						First Name:
						<input type="text" name="first name"/>
					</label>
					<br></br>
					<br></br>
					<label className='col-6'>
						Last Name:
						<input type="text" name="last name" />
					</label>
				</div>

				<br></br>
				<br></br>
				<div className='row'>
					<br></br>
					<br></br>
					<h5>Shipping Info</h5>
					<label className='col-6'>
						Street Address:
						<input type="text" name="address" />
					</label>
					<br></br>
					<br></br>
					<label className='col-6'>
						City:
						<input type="text" name="city" />
					</label>
					<br></br>
					<br></br>
					<label className='col-6'>
						State:
						<input type="text" name="state" />
					</label>
					<br></br>
					<br></br>
					<label className='col-6'>
						Zip Code:
						<input type="text" name="zip code" />
					</label>
					
				</div>
				<br></br>
				<br></br>
				<h5>Contact Info</h5>
				<div className='row'>
					<label className='col-6'>
						Email:
						<input type="text" name="email" />
					</label>
					<br></br>
					<br></br>
					<label className='col-6'>
						Phone:
						<input type="text" name="phone" />
					</label>
					<br></br>
					<br></br>
				</div>
				
				<input type="submit" value="Sign Up" />
				<br></br>
				<br></br>
				<h3>Registered? Sign in</h3>
				<button>Sign in</button>
			</form>
		</div>
	)
}

function Business(props){
	return(
		<div>
			<br></br>
			<br></br>
			<h3>Business Registration</h3>
			<button onClick={props.toggleBool}>Im a student</button>
			<br></br>
			<br></br>
			<form className='container-fluid'>
				<label>
					Username:
					<input type="text" name="name" />
				</label>
				<br></br>
				<br></br>
				<h6>Password must be 8 to 16 characters!</h6>
				<label>
					Password:
					<input type="password" minLength={8} maxLength={16} name="pass" />
				</label>
				<br></br>
				<br></br>
				<label>
					Business Name:
					<input type="text" name="first name"/>
				</label>
				<br></br>
				<br></br>
				<label>
					Account Holder First Name:
					<input type="text" name="first name"/>
				</label>
				<br></br>
				<br></br>
				<label>
					Account Holder Last Name:
					<input type="text" name="last name" />
				</label>
				<br></br>
				<br></br>
				<h5>Business Info</h5>
				<label>
					Street Address:
					<input type="text" name="address" />
				</label>
				<br></br>
				<br></br>
				<label>
					City:
					<input type="text" name="city" />
				</label>
				<br></br>
				<br></br>
				<label>
					State:
					<input type="text" name="state" />
				</label>
				<br></br>
				<br></br>
				<label>
					Zip Code:
					<input type="text" name="zip code" />
				</label>
				<br></br>
				<br></br>
				<label>
					Email:
					<input type="text" name="email" />
				</label>
				<br></br>
				<br></br>
				<label>
					Phone:
					<input type="text" name="Phone" />
				</label>
				<br></br>
				<br></br>
				<input type="submit" value="Sign Up" />
				<br></br>
				<br></br>
				<h3>Registered? Sign in</h3>
				<button>Sign in</button>
			</form>
		</div>
	)
}

export default SignUp
