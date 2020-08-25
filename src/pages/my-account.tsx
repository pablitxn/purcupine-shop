// Types
import { FC } from "react";
// Context
import { AppContext } from "state/app-context";
// Hooks
import { useContext, useState } from "react";
// AntD
import { Row, Col, Avatar, Divider, Button, Menu } from "antd";
import {
	AppstoreOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	PieChartOutlined,
	DesktopOutlined,
	UserOutlined,
	ContainerOutlined,
	MailOutlined
} from "@ant-design/icons";
import AppLayout from "components/layout/app-layout/app-layout.component";

const { SubMenu } = Menu;

const Profile: FC = () => {
	// const { user } = useContext(AppContext);

	const photoURL = "";
	const displayName = "";
	const email = "";
	const phoneNumber = "";

	const onSignOut = () => {};

	const [toggleCollapsed, setToggleCollapsed] = useState(false);

	const handleCollapsed = (e: any) => {
		setToggleCollapsed(!toggleCollapsed);
	};

	return (
		<AppLayout>
			<Row>
				<Col span={4} style={{ minHeight: "840px" }}>
					<Menu
						defaultSelectedKeys={["1"]}
						defaultOpenKeys={["sub1"]}
						mode="inline"
						theme="dark"
						style={{ height: "100%" }}
					>
						<Menu.Item key="1" icon={<UserOutlined />}>
							CUENTA
						</Menu.Item>
						<SubMenu key="sub1" icon={<MailOutlined />} title="Configuraciones">
							<Menu.Item key="5">Mi Perfil</Menu.Item>
							<Menu.Item key="6">Mi Cuenta</Menu.Item>
							<Menu.Item key="7">Invita amigos!</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub2"
							icon={<AppstoreOutlined />}
							title="Personaliza la aplicación"
						>
							<Menu.Item key="9">Productos</Menu.Item>
							<Menu.Item key="10">Carrito</Menu.Item>
							<SubMenu key="sub3" title="Tema">
								<Menu.Item key="11">Colores</Menu.Item>
								<Menu.Item key="12">Version mobile</Menu.Item>
							</SubMenu>
						</SubMenu>
					</Menu>
				</Col>

				<Col span={20}>
					<div style={{ width: "100%", marginTop: "2rem" }}>
						<Row>
							<Col span={20}>
								<h2> Mi cuenta </h2>
							</Col>
							<Col span={4}>
								<Button
									type="ghost"
									style={{ backgroundColor: "gray" }}
									onClick={onSignOut}
								>
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
				</Col>
			</Row>
		</AppLayout>
	);
};

export default Profile;
