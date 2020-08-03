// React
import React, { FC } from "react";
// Custom Components
import FormImput from "components/auth/sign-in-form/node_modules/components/_shared/inputs/FormInput";
// Types
import { SignUpFormProps } from "./sign-up-form.types";
// Styles
import "./styles.scss";

const SignUpForm: FC<SignUpFormProps> = ({ onSubmit }) => {
	const handleSubmit = (event: any) => {
		event.preventDefault();
		console.log(event.target.value);
	};

	return (
		<div className="signup-form">
			<h2 className="signup-form__title">Sign up with your email and password</h2>
			<form className="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
				{/* <FormImput />
        <FormImput />
        <FormImput />
        <FormImput /> */}
			</form>
		</div>
	);
};

export default SignUpForm;

/**
 * name
 * email
 * pass
 * repeat pass
 */
