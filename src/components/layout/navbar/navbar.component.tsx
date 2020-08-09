// Types
import { FC } from "react";
import { NavbarProps } from "./navbar.types";
// Custom Components
import CartDropdown from "components/layout/navbar/cart-dropdown/container/container.component";
import CartDropdownIcon from "components/layout/navbar/cart-dropdown/icon/icon.component";
// AntD
import { Menu } from "antd";

const Navbar: FC<NavbarProps> = ({ activeUser }) => {
	const hidden = true;
	const cartItems = [];

	// TODO: abstraer `Link > a`

	return (
		<>
			<div className="logo" />
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
				<Menu.Item key="1">nav 1</Menu.Item>
				<Menu.Item key="2">nav 2</Menu.Item>
				<Menu.Item key="3">nav 3</Menu.Item>
				{activeUser ? (
					<Menu.Item key="4">nav 4</Menu.Item>
				) : (
					<Menu.Item key="5">nav 5</Menu.Item>
				)}
				<Menu.Item>
					<CartDropdownIcon toggleCartHidden={() => {}} itemCount="2" />
				</Menu.Item>
				{hidden ? null : <CartDropdown cartItems={cartItems} />}
			</Menu>
		</>
	);
};

export default Navbar;
