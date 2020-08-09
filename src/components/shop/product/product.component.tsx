// Types
import { FC } from "react";
import { ProductProps } from "./product.types";

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

// <Card
//     style={{ width: 300 }}
//     cover={
//       <img
//         alt="example"
//         src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
//       />
//     }
//     actions={[
//       <SettingOutlined key="setting" />,
//       <EditOutlined key="edit" />,
//       <EllipsisOutlined key="ellipsis" />,
//     ]}
//   >
//     <Meta
//       avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
//       title="Card title"
//       description="This is the description"
//     />
//   </Card>,
