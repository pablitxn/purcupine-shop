// Types
import { FC } from "react";
// Components
import ButtonWithNavigation from "components/_shared/button-with-navigation/button-with-navigation.component";
import Navigation from "components/_shared/navigation/navigation.component";
// Styles
import "./navbar.styles.less";
// Hooks
import { useNavbar } from "hooks";
// AntD
import { Menu, Input, Row, Col } from "antd";
import {
	LoginOutlined,
	UserOutlined,
	ShoppingOutlined,
	HomeFilled
} from "@ant-design/icons";

const { Search } = Input;

const Navbar: FC = () => {
	const alignCenter = { display: "flex", alignItems: "center" };
	const { user, handleClick } = useNavbar();

	return (
		<Row justify="center">
			<Col span={2}>
				<Menu
					theme="dark"
					mode="horizontal"
					onClick={handleClick}
					selectedKeys={[]}
					className="navbar"
				>
					<Menu.Item key="home" className="logo" style={alignCenter}>
						<Navigation href="/">
							<HomeFilled />
						</Navigation>
					</Menu.Item>
				</Menu>
			</Col>

			<Col span={18} style={alignCenter}>
				<Search
					placeholder="¿Qué producto estás buscando?"
					onSearch={(value) => console.log(value)}
					enterButton
					size="large"
				/>
			</Col>

			<Col span={4}>
				<Menu
					theme="dark"
					mode="horizontal"
					onClick={handleClick}
					selectedKeys={[]}
					className="navbar"
				>
					{user && (
						<Menu.Item key="my-account" className="session">
							<ButtonWithNavigation
								href="/my-account"
								type="default"
								icon={<UserOutlined />}
							>
								Mi cuenta
							</ButtonWithNavigation>
						</Menu.Item>
					)}
					{user === null && (
						<Menu.Item key="sign-in" className="session">
							<ButtonWithNavigation
								href="/auth/sign-in"
								type="primary"
								icon={<LoginOutlined />}
							>
								Ingresar
							</ButtonWithNavigation>
						</Menu.Item>
					)}
					{user === undefined && <Menu.Item>loading...</Menu.Item>}
					<Menu.Item key="cart" className="cart" style={alignCenter}>
						<Navigation href="/cart">
							<ShoppingOutlined />
						</Navigation>
					</Menu.Item>
				</Menu>
			</Col>
		</Row>
	);
};

export default Navbar;
