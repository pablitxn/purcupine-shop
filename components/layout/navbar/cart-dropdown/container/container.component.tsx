// Types
import { FC } from "react";
import { ContainerProps } from "./container.types";
// Styles
import "./container.component.scss";
// Custom Components
import CartItem from "components/layout/navbar/cart-dropdown/item/item.component";

const Container: FC<ContainerProps> = ({ cartItems = [] }) => {
	const handleClick = (event: any) => {
		// event.preventDefault();
		// navigationButton();
		// handleDropdown();
	};

	return (
		<div className="cart-dropdown">
			<div className="cart-dropdown__item">
				{cartItems.length ? (
					cartItems.map((cartItem, i) => <CartItem key={i} item={cartItem} />)
				) : (
					<span className="cart-dropdown__item--empty">Your cart is empty</span>
				)}
			</div>
			<button className="cart-dropdown__button" onClick={handleClick}></button>
		</div>
	);
};

export default Container;
