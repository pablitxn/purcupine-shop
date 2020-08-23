// Types
import { FC, useState } from "react";
import { INavbar } from "./navbar.types";
// Styles
import "./navbar.styles.less";
// Components
import ButtonWithNavigation from "components/_shared/button-with-navigation/button-with-navigation.component";
import Link from "next/link";
// AntD
import { Menu, Input } from "antd";
import {
	LoginOutlined,
	UserOutlined,
	ShoppingOutlined,
	HomeFilled
} from "@ant-design/icons";

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
				{false ? (
					<ButtonWithNavigation type="ghost" icon={<UserOutlined />} href="/my-account">
						Mi cuenta
					</ButtonWithNavigation>
				) : (
					<ButtonWithNavigation
						type="primary"
						icon={<LoginOutlined />}
						href="/auth/sign-in"
					>
						Ingresar
					</ButtonWithNavigation>
				)}
			</Menu.Item>
			<Menu.Item key="cart" className="cart" icon={<ShoppingOutlined />}></Menu.Item>
		</Menu>
	);
};

export default Navbar;
