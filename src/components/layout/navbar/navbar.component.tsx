// Types
import { FC, useState } from "react";
import { INavbar } from "./navbar.types";
// Styles
import "./navbar.styles.less";
// AntD
import { Menu, Input, Button } from "antd";
import {
	LoginOutlined,
	UserOutlined,
	ShoppingOutlined,
	HomeFilled,
} from "@ant-design/icons";
// Assets
import Logo from "assets/icons/logo";

const Navbar: FC<INavbar> = ({ activeUser }) => {
	const [state, setState] = useState({ current: "mail" });

	const { Search } = Input;
	const { current } = state;

	const handleNavigation = (e) => {
		console.log(`navbar / handleNavigation -> key: ${e.key}`);
		setState({ ...state, current: e.key });
	};

	return (
		<Menu
			theme="dark"
			mode="horizontal"
			defaultSelectedKeys={["1"]}
			onClick={handleNavigation}
			selectedKeys={[current]}
			className="navbar"
		>
			<Menu.Item key="home" className="logo" icon={<HomeFilled />}></Menu.Item>
			<Menu.Item className="search">
				<Search
					placeholder="¿Qué producto estás buscando?"
					onSearch={(value) => console.log(value)}
					enterButton
					size="large"
				/>
			</Menu.Item>
			<Menu.Item key="session" className="session">
				{activeUser ? (
					<Button type="ghost" icon={<UserOutlined />}>
						Mi cuenta
					</Button>
				) : (
					<Button type="primary" icon={<LoginOutlined />}>
						Ingresar
					</Button>
				)}
			</Menu.Item>
			<Menu.Item key="cart" className="cart" icon={<ShoppingOutlined />}></Menu.Item>
		</Menu>
	);
};

export default Navbar;
