import { FC, FormEvent, useState } from "react";
import { useDispatch } from 'react-redux';
import { logIn, formAuthorizationClose } from "src/redux/actions";
import { LOG_IN_DATA } from "src/constants/Constants";


const CreateAuthorizationForm: FC = () => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const dispatch = useDispatch();

	const loginVerification = (e: FormEvent<HTMLFormElement>) => {
		if (LOG_IN_DATA.username === username && LOG_IN_DATA.password === password) {
			dispatch(logIn());
			dispatch(formAuthorizationClose());
			e.preventDefault();
		} else {
			alert("Incorrect username or password");
			e.preventDefault();
		}
	}


	return (
		<div className="modal" id="modal-name" >
			<div className="modal-sandbox" ></div>
			<div className="wrapper fadeInDown">
				<div id="formContent">
					<div className="close-modal-1" onClick={() => { dispatch(formAuthorizationClose()); }}>&#10006;</div>
					<h2 className="active"> Sign In </h2>
					<h2 className="inactive underlineHover">Sign Up </h2>


					<form onSubmit={loginVerification}>
						<input type="text" id="login" className="fadeIn second" name="login" placeholder="login"
							onChange={(e) => { setUsername(e.target.value) }} />
						<input type="text" id="password" className="fadeIn third" name="login" placeholder="password"
							onChange={(e) => { setPassword(e.target.value) }} />
						<input type="submit" className="fadeIn fourth" value="Log In" />
					</form>

					<div id="formFooter">
						<a className="underlineHover" href="index.html">Forgot Password?</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export { CreateAuthorizationForm };