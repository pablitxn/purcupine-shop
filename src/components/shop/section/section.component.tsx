// Types
import { FC } from "react";
import { ISection } from "./section.types";

const Section: FC<ISection> = ({ section }) => {
	const { title, imageUrl } = section;

	return (
		<div>
			<img src={imageUrl} className="background-image" />
			<div className="content">
				<h2 className="title">{title.toUpperCase()}</h2>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default Section;
