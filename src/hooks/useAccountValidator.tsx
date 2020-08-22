// Hooks
import { useState } from "react";
// Utils
import { sessionRegex } from "utils";

type FormData = {
	username: string;
	password: string;
};

export const useAccountValidator = () => {
	const [formValidations, setFormValidations] = useState({
		username: false,
		password: false
	});

	const handleValidations = ({ username, password }: FormData) => {
		setFormValidations({
			username: !sessionRegex.username.test(username),
			password: !sessionRegex.password.test(password)
		});
	};

	return { formValidations, handleValidations };
};
