// React App
import React, { FC } from "react";
// Types
import { SectionProps } from "./types"
// Styles
import "./styles.scss";

const Section: FC<SectionProps> = ({ section, size, className }) => {
	const { title, imageUrl } = section;

	return (
		<div className={`${size} ${className} section`}>
			<img src={imageUrl} className="background-image" />
			<div className="content">
				<h2 className="title">{title.toUpperCase()}</h2>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	)
};

export default Section;
