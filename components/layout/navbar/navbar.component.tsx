// Types
import { FC } from "react";
import { NavbarProps } from "./navbar.types";
// Styles
import "./navbar.component.scss";
// Custom Components
import CartDropdown from "components/layout/navbar/cart-dropdown/container/container.component";
import CartDropdownIcon from "components/layout/navbar/cart-dropdown/icon/icon.component";
// Routes
import Link from "next/link";

const Navbar: FC<NavbarProps> = ({ activeUser }) => {
	const hidden = true;
	const cartItems = [];

	// TODO: abstraer `Link > a`

	return (
		<nav className="navbar">
			<Link href="/">
				<a>
					<img src="" alt="logo crwn clothing" className="logo" />
				</a>
			</Link>
			<li className="options">
				<ul>
					<Link href="/shop">
						<a>SHOP</a>
					</Link>
				</ul>
				<ul>
					<Link href="/contact">
						<a>CONTACT</a>
					</Link>
				</ul>
				{activeUser ? (
					<ul>
						<Link href="/my-account">
							<a>MY ACCOUNT</a>
						</Link>
					</ul>
				) : (
					<ul>
						<Link href="/auth">
							<a>SIGN IN</a>
						</Link>
					</ul>
				)}
				<ul>
					<CartDropdownIcon toggleCartHidden={() => {}} itemCount="2" />
				</ul>
			</li>
			{hidden ? null : <CartDropdown cartItems={cartItems} />}
		</nav>
	);
};

export default Navbar;
