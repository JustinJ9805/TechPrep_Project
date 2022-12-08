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
		<div className='student'>
			<br></br>
			<br></br>
			<h3>Student Registration</h3>
			<button onClick={props.toggleBool}>Im a business</button>
			<br></br>
			<br></br>
			<form className='container-fluid signUp_form'>
				<div className='row'>
					<h5 className='signUp_headings'>Customer Info</h5>
					<label className='col-3'>
						Username:
						<input className='signUp_input' type="text" name="name" />
					</label>
					<br></br>
					<br></br>
					<h6 className='col-3'>Password must be 8 to 16 characters!</h6>
					<label className='col-3'>
						Password:
						<input className='signUp_input' type="password" minLength={8} maxLength={16} name="pass" />
					</label>
				</div>

				<div className='row'>
					<label className='col-6'>
						First Name:
						<input className='signUp_input' type="text" name="first name"/>
					</label>
					<br></br>
					<br></br>
					<label className='col-6'>
						Last Name:
						<input className='signUp_input' type="text" name="last name" />
					</label>
				</div>

				<br></br>
				<br></br>
				<div className='row'>
					<br></br>
					<br></br>
					<h5 className='signUp_headings'>Shipping Info</h5>
					<label className='col-6'>
						Street Address:
						<input className='signUp_input' type="text" name="address" />
					</label>
					<br></br>
					<br></br>
					<label className='col-6'>
						City:
						<input className='signUp_input' type="text" name="city" />
					</label>
					<br></br>
					<br></br>
					<label className='col-6'>
						State:
						<input className='signUp_input' type="text" name="state" />
					</label>
					<br></br>
					<br></br>
					<label className='col-6'>
						Zip Code:
						<input className='signUp_input' type="text" name="zip code" />
					</label>
					
				</div>
				<br></br>
				<br></br>
				<h5 className='signUp_headings'>Contact Info</h5>
				<div className='row'>
					<label className='col-6'>
						Email:
						<input className='signUp_input' type="text" name="email" />
					</label>
					<br></br>
					<br></br>
					<label className='col-6'>
						Phone:
						<input className='signUp_input' type="text" name="phone" />
					</label>
					<br></br>
					<br></br>
				</div>
				
				<input className='signUp_input' type="submit" value="Sign Up" />
				<br></br>
				<br></br>
				<h3>Registered? Sign in above!</h3>
				
			</form>
		</div>
	)
}

function Business(props){

	return(
		<div className='business'>
			<br></br>
			<br></br>
			<h3>Business Registration</h3>
			<button onClick={props.toggleBool}>Im a student</button>
			<br></br>
			<br></br>
			<form className='container-fluid signUp_form'>
				<label>
					Username:
					<input className='signUp_input' type="text" name="name" />
				</label> 
				<br></br>
				<br></br>
				<h6>Password must be 8 to 16 characters!</h6>
				<label>
					Password:
					<input className='signUp_input' type="password" minLength={8} maxLength={16} name="pass" />
				</label>
				<br></br>
				<br></br>
				<label>
					Business Name:
					<input className='signUp_input' type="text" name="first name"/>
				</label>
				<br></br>
				<br></br>
				<label>
					Account Holder First Name:
					<input className='signUp_input' type="text" name="first name"/>
				</label>
				<br></br>
				<br></br>
				<label>
					Account Holder Last Name:
					<input className='signUp_input' type="text" name="last name" />
				</label>
				<br></br>
				<br></br>
				<h5 className='signUp_headings'>Business Info</h5>
				<label>
					Street Address:
					<input className='signUp_input' type="text" name="address" />
				</label>
				<br></br>
				<br></br>
				<label>
					City:
					<input className='signUp_input' type="text" name="city" />
				</label>
				<br></br>
				<br></br>
				<label>
					State:
					<input className='signUp_input' type="text" name="state" />
				</label>
				<br></br>
				<br></br>
				<label>
					Zip Code:
					<input className='signUp_input' type="text" name="zip code" />
				</label>
				<br></br>
				<br></br>
				<label>
					Email:
					<input className='signUp_input' type="text" name="email" />
				</label>
				<br></br>
				<br></br>
				<label>
					Phone:
					<input className='signUp_input' type="text" name="Phone" />
				</label>
				<br></br>
				<br></br>
				<input className='signUp_input' type="submit" value="Sign Up" />
				<br></br>
				<br></br>
				<h3>Registered? Sign in above!</h3>
				

			</form>
		</div>
	)
}

export default SignUp
