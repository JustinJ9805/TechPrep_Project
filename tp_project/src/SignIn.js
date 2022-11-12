import React from 'react'

function SignIn() {
	return (
		<div>
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
				<input type="submit" value="Submit" />
				<br/>
				<h3>Not registered?</h3>
				<button>Sign up</button>
			</form>

		</div>
		)
}

export default SignIn;