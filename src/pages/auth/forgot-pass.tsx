// Types
import { FC } from "react";
// Components
import RecoveryForm from "components/auth/recovery-form/recovery-form.component";
import AuthLayout from "components/layout/auth-layout/auth-layout.component";
// AntD
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const ForgotPass: FC = () => {
	const handleSubmit = (email: string) => console.log("correo para resetear ->", email);

	return (
		<AuthLayout>
			<Row
				justify="center"
				align="middle"
				style={{
					width: "100%",
					height: "100%"
				}}
			>
				<Col span={20}>
					<Row
						justify="start"
						align="middle"
						style={{
							width: "100%"
						}}
					>
						<img
							src="/pre-logo.png"
							alt="Logo"
							style={{ width: "120px", marginBottom: "1rem" }}
						/>
						<Title level={2} style={{ color: "#1c5480", fontSize: "2rem" }}>
							Recuperar Contraseña
						</Title>
					</Row>
					<Row
						justify="space-around"
						align="middle"
						style={{
							width: "100%"
						}}
					>
						<RecoveryForm onSubmit={handleSubmit} />
					</Row>
				</Col>
			</Row>
		</AuthLayout>
	);
};

export default ForgotPass;
