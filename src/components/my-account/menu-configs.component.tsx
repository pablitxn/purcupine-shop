// Types
import { FC } from "react";
import { Menu } from "antd";
import { AppstoreOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const MenuConfigs: FC = () => {
	return (
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
			<SubMenu key="sub2" icon={<AppstoreOutlined />} title="Personaliza la aplicación">
				<Menu.Item key="9">Productos</Menu.Item>
				<Menu.Item key="10">Carrito</Menu.Item>
				<SubMenu key="sub3" title="Tema">
					<Menu.Item key="11">Colores</Menu.Item>
					<Menu.Item key="12">Version mobile</Menu.Item>
				</SubMenu>
			</SubMenu>
		</Menu>
	);
};

export default MenuConfigs;
