// React
import React, { FC } from "react";
// Custom Components
import CartDropdown from "components/layout/app/navbar/cart-dropdown/container/container.component";
import CartDropdownIcon from "components/layout/app/navbar/cart-dropdown/icon/icon.component";
// Types
import { NavbarProps } from "./navbar.types";
// Styles
import "./navbar.component.scss";

const Navbar: FC<NavbarProps> = ({ activeUser, hidden, loginButton = () => {} }) => {
	const handleClick = (event: any) => {
		loginButton();
	};

	return (
		<nav className="navbar">
			<img src="" alt="logo crwn clothing" className="navbar__logo" />
			<li className="navbar__options">
				<ul>SHOP</ul>
				<ul>CONTACT</ul>
				{activeUser ? <ul>MI CUENTA</ul> : <ul onClick={handleClick}>SIG IN</ul>}
				<ul>
					<CartDropdownIcon toggleCartHidden={() => {}} itemCount="" />
				</ul>
			</li>
			{hidden ? null : <CartDropdown />}
		</nav>
	);
};

export default Navbar;
