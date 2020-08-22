// Types
import { FC } from "react";
// Components
import RecoveryForm from "components/auth/recovery-form/recovery-form.component";
// AntD
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const ForgotPass: FC = () => {
	const handleSubmit = (email: string) => console.log("correo para resetear ->", email);
	const goBackButton = () => console.log("goBackButton");

	return (
		<Row
			justify="center"
			align="middle"
			style={{
				width: "100%",
				height: "100vh",
			}}
		>
			<Col xs={22} sm={10} xl={6}>
				<Row
					justify="start"
					align="middle"
					style={{
						width: "100%",
					}}
				>
					<Title level={2}>Recuperar Contraseña</Title>
				</Row>
				<Row
					justify="space-around"
					align="middle"
					style={{
						width: "100%",
					}}
				>
					<RecoveryForm onSubmit={handleSubmit} goBackButton={goBackButton} />
				</Row>
			</Col>
		</Row>
	);
};

export default ForgotPass;
