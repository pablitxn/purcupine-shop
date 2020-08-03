// React
import React, { FC, useState } from "react";
// Types
import { FormInputProps } from "./types";
// Styles
import "./styles.scss";

const FormInput: FC<FormInputProps> = ({ onChange, value, label, className = "", type }) => {

	return (
		<div className="input">
			<input onChange={onChange} className="input__field" value={value} type={type} />
			{label ? (
				<label className={`${className} ${value.length ? "shrink" : ""} input__label`}>
					{label}
				</label>
			) : null}
		</div>
	)
}

export default FormInput;
