// Types
import { FC } from "react";
import { ISection } from "./section.types";
// Styles
import "./section.styles.less";
// AntD
import { Card } from "antd";

const Section: FC<ISection> = ({ section }) => {
	const { title, imageUrl } = section;

	return (
		<div className="section">
			<img src={imageUrl} className="background-image" />
			<div className="content">
				<h2 className="title">{title.toUpperCase()}</h2>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default Section;
