// Types
import { FC } from "react";
// AntD
import { Row, Col, Avatar, Divider, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

interface IMyAccount {
	user: any;
}

const MyAccount: FC<IMyAccount> = ({ user }) => {
	const { displayName, photoURL, email, phoneNumber } = user;

	const onSignOut = () => {};

	return (
		<div style={{ width: "100%", marginTop: "2rem" }}>
			<Row>
				<Col span={20}>
					<h2> Mi cuenta </h2>
				</Col>
				<Col span={4}>
					<Button type="ghost" style={{ backgroundColor: "gray" }} onClick={onSignOut}>
						Log out
					</Button>
				</Col>
			</Row>
			<Col span={24}>
				<Row justify="center">
					<Avatar size={128} icon={<UserOutlined />} src={photoURL ?? ""} />
				</Row>
				<Row justify="center">
					<h3>{displayName}</h3>
				</Row>
			</Col>

			<Divider type="horizontal" orientation="center" />
			<Row>
				<Col span={8}>
					<div>
						<h4>Correo</h4>
						<span>{email}</span>
						<h4>Telefono</h4>
						<span>{phoneNumber ?? "-"}</span>
					</div>
				</Col>
				<Col span={8}>
					<div>
						<h4>Direccion</h4>
						<span>Avenida de Mayo 678</span>
						<h4>Verificado</h4>
						<span>VERIFICADO</span>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default MyAccount;
