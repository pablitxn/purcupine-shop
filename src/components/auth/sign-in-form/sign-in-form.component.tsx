// Types
import { FC } from "react";
import { ISignInForm, HandleChange } from "./sign-in-form.types";
// Hooks
import { useAccountValidator } from "hooks";
import { useState } from "react";
// Components
import Navigation from "components/_shared/navigation/navigation.component";
// AntD
import { Col, Row, Input, Form, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
// Styles
import "./sign-in-form.styles.less";

const SignInForm: FC<ISignInForm> = ({ onSubmit, onSignInGoogle }) => {
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
		<Form onFinish={handleSubmit} className="form">
			<Form.Item
				hasFeedback
				validateStatus={formValidations.username ? "error" : ""}
				help={formValidations.username ? "El usuario no es válido" : null}
				className="item"
			>
				<span className="label">Username</span>
				<Input
					name="username"
					onChange={handleChange}
					value={formData.username}
					prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
					placeholder="Username"
				/>
			</Form.Item>
			<Form.Item
				hasFeedback
				validateStatus={formValidations.password ? "error" : ""}
				help={formValidations.password ? "La contraseña es inválida" : null}
				className="item"
			>
				<span className="label">Password</span>
				<Input.Password
					name="password"
					onChange={handleChange}
					value={formData.password}
					prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
					type="password"
					placeholder="Password"
				/>
			</Form.Item>
			<Form.Item className="item">
				<Row justify="center" align="middle" className="options">
					<Col span={11} pull={1}>
						<Button block type="primary" htmlType="submit">
							Iniciar Sesión
						</Button>
					</Col>
					<Col span={11} push={1}>
						<Button block type="ghost" onClick={onSignInGoogle}>
							Conectar con Gmail
						</Button>
					</Col>
				</Row>
				<Row justify="center" align="middle">
					<Navigation href="/auth/forgot-pass">¿Olvidaste tu contraseña?</Navigation>
				</Row>
				<Row justify="center" align="middle">
					<Navigation href="/">Volver al incio</Navigation>
				</Row>
			</Form.Item>
		</Form>
	);
};

export default SignInForm;
