import React from 'react'

function SignIn() {
	return (
		<div>
			<br></br>
			<br></br>
			<form>
				<label>
					Username:
					<input type="text" name="name" />
				</label>
				<label>
					Password:
					<input type="password" name="pass" />
				</label>
				<br></br>
				<input type="submit" value="Sign In" />
				<br/>
				<h3>Not registered?</h3>
				<button>Sign up</button>
			</form>

		</div>
		)
}

export default SignIn;