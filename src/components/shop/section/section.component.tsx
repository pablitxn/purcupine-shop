// Types
import { FC } from "react";
import { ISection } from "./section.types";
// AntD
import { Card } from "antd";

const Section: FC<ISection> = ({ section }) => {
	const { Meta } = Card;
	const { title, imageUrl } = section;

	return (
		<Card hoverable style={{ width: 240 }} cover={<img alt={title} src={imageUrl} />}>
			<Meta title={title} description="SHOP NOW" />
		</Card>
	);
};

export default Section;
