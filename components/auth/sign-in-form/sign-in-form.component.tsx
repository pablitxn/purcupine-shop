// React
import React, { FC, useState } from "react";
// Custom Components
import FormInput from "components/_shared/inputs/FormInput";
import CustomButton from "components/_shared/buttons/submit/submit.component";
//Types
import { SignInFormProps } from "components/auth/sign-in-form/sign-in-form.types";
// Styles
import "./styles.scss";

const SignInForm: FC<SignInFormProps> = ({ onSubmit, onGoogleSignIn }) => {
	const [state, setState] = useState({
		email: "",
		password: "",
	});

	// const emailRegex = /^(\w|\d|\.)+@(\w)+\.(\w){2,4}$/;
	// const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;

	const handleEmail = (
		input: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		// TODO: email validation
		setState({ ...state, email: input.target.value });
	};

	const handlePassword = (
		input: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		// TODO: email validation
		setState({ ...state, password: input.target.value });
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		onSubmit(state);
	};

	return (
		<div className="login">
			<header className="header">
				<h2 className="header__title">I already have an account</h2>
				<span className="header__text">Sign in with your email and password</span>
			</header>
			<form className="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
				<FormInput
					className="form__input"
					type="email"
					onChange={handleEmail}
					value={state.email}
					label="email"
				/>
				<FormInput
					className="form__input"
					type="password"
					onChange={handlePassword}
					value={state.password}
					label="password"
				/>
				<div className="form__submit">
					{/** TODO: revisar estas clases */}
					<CustomButton
						className="form__button custom-button--normal"
						type="submit"
						onClick={handleSubmit}
					>
						Sign In
					</CustomButton>
					<CustomButton
						className="form__button custom-button--google-login"
						onClick={onGoogleSignIn}
					>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
