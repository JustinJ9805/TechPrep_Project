import React from 'react'

function SignUp() {
	return (
		<div>
			<form>
				<label>
					Username:
					<input type="text" name="name" />
				</label>
				<br/>
				<label>
					Password:
					<input type="password" name="pass" />
				</label>
				<br/>
				<label>
					First Name:
					<input type="text" name="first name"/>
				</label>
				<br/>
				<label>
					Last Name:
					<input type="text" name="last name" />
				</label>
				<br />
				<label>
					Street Address:
					<input type="text" name="address" />
				</label>
				<br />
				<label>
					City:
					<input type="text" name="city" />
				</label>
				<br />
				<label>
					State:
					<input type="text" name="state" />
				</label>
				<br />
				<label>
					Zip Code:
					<input type="text" name="zip code" />
				</label>
				<br />
				<label>
					Email:
					<input type="text" name="email" />
				</label>
				<br></br>
				<input type="submit" value="Submit" />
				<br></br>
				<h3>Registered? Sign in</h3>
				<button>Sign in</button>
			</form>

		</div>
	)
}

export default SignUp;