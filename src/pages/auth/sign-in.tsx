// Types
import { FC } from "react";
// import { User } from "components/Auth/SignInForm/types";
// Components
import SignInForm from "components/auth/sign-in-form/sign-in-form.component";
// Hooks
// import { useEffect } from "react";
// import { useNavbar } from "hooks";
// AntD
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const SignIn: FC = () => {
	// const { session } = useNavbar();

	const handleSubmit = ({ username, password }: any) => {
		console.log(`el usuario es ${username} y su pass ${password}`);
	};

	const handleGoogleSignIn = () => {};

	const forgotPassButton = () => console.log("forgotPassButton");

	// useEffect(() => {
	// 	session && h.push("/");
	// }, []);

	return (
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
					<Title level={2}>Iniciar Sesión</Title>
				</Row>
				<Row
					justify="space-around"
					align="middle"
					style={{
						width: "100%"
					}}
				>
					<SignInForm
						onSubmit={handleSubmit}
						forgotPassButton={forgotPassButton}
						onSignInGoogle={handleGoogleSignIn}
					/>
				</Row>
			</Col>
		</Row>
	);
};

export default SignIn;
