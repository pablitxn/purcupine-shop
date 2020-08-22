// Types
import { FC } from "react";
// AntD
import { Row, Input, Form, Button, Alert } from "antd";
// Types
import { INewPassForm } from "./new-pass-form.types";

const NewPassForm: FC<INewPassForm> = ({ onSubmit, goBackButton }) => {
	const onFinish = (values) => {
		console.log(values);
		// onSubmit(formData);
	};

	return (
		<Form
			onFinish={onFinish}
			style={{
				width: "100%"
			}}
		>
			<Alert
				message="La contraseña debe tener entre 8 y 16 dígitos, una letra mayúscula y un caracter especial (!#%&?)"
				type="info"
			/>
			<Form.Item label="Codigo de seguridad" hasFeedback>
				<Input
					name="token"
					placeholder="Ingresa el codigo de segurida que enviamos a tu email"
				/>
			</Form.Item>
			<Form.Item label="Contraseña" hasFeedback>
				<Input.Password name="password" type="password" placeholder="Contraseña" />
			</Form.Item>
			<Form.Item label="Repetir Contraseña" hasFeedback>
				<Input.Password
					name="repeatPassword"
					type="password"
					placeholder="Repetí la contraseña"
					style={{ marginBottom: "2rem" }}
				/>
			</Form.Item>
			<Form.Item>
				<Row justify="center" align="middle">
					<Button type="primary" htmlType="submit">
						Generá tu contraseña!
					</Button>
				</Row>
				<Row justify="center" align="middle">
					<a onClick={goBackButton}>Regresar al login</a>
				</Row>
			</Form.Item>
		</Form>
	);
};

export default NewPassForm;
