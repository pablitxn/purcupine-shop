// React
import React, { FC } from "react";
// Types
import { ItemProps } from "./item.types";
// Styles
import "./item.component.scss";

const Item: FC<ItemProps> = ({
	item: { imageUrl = "", price = 0, name = "", quantity = 0 },
}) => {
	return (
		<div className="cart-item">
			<img className="cart-item__image" src={imageUrl} alt="" />
			<div>
				<span className="cart-item__name">{name}</span>
				<span className="cart-item__details">
					{quantity} x ${price}
				</span>
			</div>
		</div>
	);
};

export default Item;
