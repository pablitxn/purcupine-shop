import React, { FC } from "components/home/shop/product/node_modules/react";
// Types
import { ProductProps } from "./product.types";
// Styles
import "./styles.scss";

const Product: FC<ProductProps> = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;

	return (
		<div className="item">
			<div
				className="item__image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="footer">
				<span className="footer__name">{name}</span>
				<span className="footer__price">{price}</span>
			</div>
			<button onClick={() => addItem(item)} className="item__add-button">
				Add to cart
			</button>
		</div>
	);
};

export default Product;

// TODO: revisar BEM, button-custom. revisar
