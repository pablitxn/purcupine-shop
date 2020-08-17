// Types
import { FC } from "react";
import { IOffer } from "./offer.types";
// Styles
import "./offer.styles.less";
// Custom Components
import Product from "components/shop/product/product.component";

const Offer: FC<IOffer> = ({ items, titleSection }) => {
	return (
		<div className="offer">
			<h3 className="title">{titleSection}</h3>
			<div className="cards">
				{items.map((item, i) => (
					<Product key={i} item={item} />
				))}
			</div>
		</div>
	);
};

export default Offer;
