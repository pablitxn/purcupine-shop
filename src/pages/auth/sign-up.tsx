// Components
import SignUpForm from "components/auth/sign-up-form/sign-up-form.component";
import AuthLayout from "components/layout/auth-layout/auth-layout.component";
// AntD
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const SignUp = () => {
	const handleSubmit: any = (username: string, password: string) => {
		console.log(`el usuario es ${username} y su pass ${password}`);
	};

	const forgotPassButton = () => console.log("forgotPassButton");

	return (
		<AuthLayout>
			<Row
				justify="center"
				align="middle"
				style={{
					width: "100%",
					height: "100vh"
				}}
			>
				<Col xs={22} sm={10} xl={6}>
					<Row
						justify="start"
						align="middle"
						style={{
							width: "100%"
						}}
					>
						<Title level={2}>Crear cuenta</Title>
					</Row>
					<Row
						justify="space-around"
						align="middle"
						style={{
							width: "100%"
						}}
					>
						<SignUpForm onSubmit={handleSubmit} forgotPassButton={forgotPassButton} />
					</Row>
				</Col>
			</Row>
		</AuthLayout>
	);
};

export default SignUp;
