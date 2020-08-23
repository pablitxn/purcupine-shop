// Types
import { FC } from "react";
// import { User } from "components/Auth/SignInForm/types";
// Components
import SignInForm from "components/auth/sign-in-form/sign-in-form.component";
import AuthLayout from "components/layout/auth-layout/auth-layout.component";
// Hooks
import { useEffect, useState } from "react";
// import { useNavbar } from "hooks";
// AntD
import { Row, Col, Typography } from "antd";
// Firebase
import { loginWithGoogle } from "state/firebase-client";

const { Title } = Typography;

const SignIn: FC = () => {
	const handleSubmit = ({ username, password }: any) => {
		console.log(`el usuario es ${username} y su pass ${password}`);
	};

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
							style={{ width: "120px", marginBottom: "2rem", marginRight: "1rem" }}
						/>
						<Title level={2} style={{ color: "#1c5480", fontSize: "2rem" }}>
							Iniciar Sesión
						</Title>
					</Row>
					<Row
						justify="space-around"
						align="middle"
						style={{
							width: "100%"
						}}
					>
						<SignInForm onSubmit={handleSubmit} onSignInGoogle={loginWithGoogle} />
					</Row>
				</Col>
			</Row>
		</AuthLayout>
	);
};

export default SignIn;
