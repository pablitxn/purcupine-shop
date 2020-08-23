// Components
import NewPassForm from "components/auth/new-pass-form/new-pass-form.component";
import AuthLayout from "components/layout/auth-layout/auth-layout.component";
// AntD
import { Row, Col, Typography } from "antd";
// Router
const { Title } = Typography;

const NewPassword = () => {
	const handleSubmit: any = ({ password_reset_token, password }: any) => {
		console.log(`pass -> ${password}  |  token -> ${password_reset_token}`);
	};

	const goBackButton = () => console.log("goBackButton");

	return (
		<AuthLayout>
			<Col span={24}>
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
							<Title level={2}>Establecer contraseña</Title>
						</Row>
						<Row
							justify="space-around"
							align="middle"
							style={{
								width: "100%"
							}}
						>
							<NewPassForm onSubmit={handleSubmit} goBackButton={goBackButton} />
						</Row>
					</Col>
				</Row>
			</Col>
		</AuthLayout>
	);
};

export default NewPassword;
