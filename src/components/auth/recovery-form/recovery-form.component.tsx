// React
import { FC, useState } from "react";
// AntD
import { Input, Form, Button, Row } from "antd";
// Components
import Navigation from "components/_shared/navigation/navigation.component";
// Types
import { IRecoveryForm } from "./recovery-form.types";

const RecoveryForm: FC<IRecoveryForm> = ({ onSubmit, goBackButton }) => {
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
		<Form
			onFinish={handleSubmit}
			style={{
				width: "100%"
			}}
		>
			<Form.Item
				label="Email"
				hasFeedback
				validateStatus={error ? "error" : ""}
				help={error ? "Revisa que el correo sea correcto" : null}
			>
				<Input
					id="email"
					name="email"
					onChange={handleChange}
					value={email}
					// prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
					placeholder="Email"
				/>
			</Form.Item>
			<Form.Item>
				<Row justify="center" align="middle">
					<Button type="primary" htmlType="submit">
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
