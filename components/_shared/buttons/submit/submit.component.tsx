// React
import React, { FC } from "components/_shared/buttons/node_modules/react";
// Types
import { CustomButtonProps } from "components/_shared/buttons/submit/submit.types";
// Styles
import "./styles.scss";

const CustomButton: FC<CustomButtonProps> = ({ children, onClick, className = "" }) => (
	<button className={`${className} custom-button`} onClick={onClick}>
		{children}
	</button>
);

export default CustomButton;

/**
 * TODO: apartir de las props, determinar el modificador del boton:
 * 'inverted, googlelogin, etc'
 */
