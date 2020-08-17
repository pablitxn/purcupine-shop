// Types
import { FC } from "react";
import { ProductProps } from "./product.types";
// AntD
import { Card } from "antd";

const Product: FC<ProductProps> = ({ item, addItem }) => {
	const { Meta } = Card;
	const { name, imageUrl, price } = item;

	return (
		<Card hoverable style={{ width: 240 }} cover={<img alt={name} src={imageUrl} />}>
			<Meta title={name} description={`increible precio -> $${price}`} />
		</Card>
	);
};

export default Product;

// // Types
// import { FC } from "react";
// import { ISection } from "./section.types";
// // AntD
// import { Card, Avatar } from "antd";
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";

// const Section: FC<ISection> = ({ section }) => {
// 	const { Meta } = Card;
// 	const { title, imageUrl } = section;

// 	return (
// 		<Card
// 			style={{ width: 300 }}
// 			cover={
// 				<img
// 					alt="example"
// 					src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
// 				/>
// 			}
// 			actions={[
// 				<SettingOutlined key="setting" />,
// 				<EditOutlined key="edit" />,
// 				<EllipsisOutlined key="ellipsis" />,
// 			]}
// 		>
// 			<Meta
// 				avatar={
// 					<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
// 				}
// 				title="Card title"
// 				description="This is the description"
// 			/>
// 		</Card>
// 	);
// };

// export default Section;
