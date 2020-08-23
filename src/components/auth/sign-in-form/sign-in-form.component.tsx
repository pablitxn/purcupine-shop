// Types
import { FC } from "react";
// Hooks
import { useAccountValidator } from "hooks";
import { useState } from "react";
// Components
import Navigation from "components/_shared/navigation/navigation.component";
// AntD
import { Col, Row, Input, Form, Button } from "antd";
// Types
import { ISignInForm, HandleChange } from "./sign-in-form.types";

const SignInForm: FC<ISignInForm> = ({ onSubmit, forgotPassButton, onSignInGoogle }) => {
	const [formData, setFormData] = useState({
		username: "",
		password: ""
	});

	const { formValidations, handleValidations } = useAccountValidator();

	const handleSubmit = () => {
		handleValidations(formData);
		onSubmit(formData);
	};

	const handleChange: HandleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<Form
			onFinish={handleSubmit}
			style={{
				width: "100%"
			}}
		>
			<Form.Item
				label="Username"
				hasFeedback
				validateStatus={formValidations.username ? "error" : ""}
				help={formValidations.username ? "El usuario es válido" : null}
			>
				<Input
					id="username"
					name="username"
					onChange={handleChange}
					value={formData.username}
					// prefix={}
					placeholder="Username"
				/>
			</Form.Item>
			<Form.Item
				label="Contraseña"
				hasFeedback
				validateStatus={formValidations.password ? "error" : ""}
				help={formValidations.password ? "La contraseña es inválida" : null}
			>
				<Input.Password
					id="password"
					name="password"
					onChange={handleChange}
					value={formData.password}
					// prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
					type="password"
					placeholder="Password"
				/>
			</Form.Item>
			<Form.Item>
				<Row justify="center" align="middle">
					<Col span={12}>
						<Button block type="primary" htmlType="submit">
							Iniciar Sesión
						</Button>
					</Col>
					<Col span={12}>
						<Button block type="ghost" onClick={onSignInGoogle}>
							Conectar con Gmail
						</Button>
					</Col>
				</Row>
				<Row justify="center" align="middle">
					<Navigation href="/auth/forgot-pass">¿Olvidaste tu contraseña?</Navigation>
				</Row>
			</Form.Item>
		</Form>
	);
};

export default SignInForm;
