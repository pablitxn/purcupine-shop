// React
import { FC, useState } from "react";
// AntD
import { Input, Form, Button, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
// Components
import Navigation from "components/_shared/navigation/navigation.component";
// Types
import { IRecoveryForm } from "./recovery-form.types";
// Styles
import "./recovery-form.styles.less";

const RecoveryForm: FC<IRecoveryForm> = ({ onSubmit }) => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);

	const handleChange = (event: any) => {
		const { value } = event.target;
		setEmail(value);
	};

	const handleSubmit = () => {
		if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(email)) {
			onSubmit(email);
			setError(false);
		} else {
			setError(true);
		}
	};

	return (
		<Form onFinish={handleSubmit} className="form">
			<Form.Item
				hasFeedback
				validateStatus={error ? "error" : ""}
				help={error ? "Revisa que el correo sea correcto" : null}
				className="item"
			>
				<span className="label">Email</span>
				<Input
					name="email"
					onChange={handleChange}
					value={email}
					prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
					placeholder="Email"
				/>
			</Form.Item>
			<Form.Item className="item">
				<Row justify="center" align="middle">
					<Button type="primary" htmlType="submit" className="submit">
						Enviar Email
					</Button>
				</Row>
				<Row justify="center" align="middle">
					<Navigation href="/auth/sign-in">Regresar al login</Navigation>
				</Row>
			</Form.Item>
		</Form>
	);
};

export default RecoveryForm;
