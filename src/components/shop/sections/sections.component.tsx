// Types
import { FC } from "react";
import { ISections } from "./sections.types";
// Styles
import "./sections.styles.less";
// Custom Components
import Section from "./section/section.component";

const Sections: FC<ISections> = ({ sections }) => {
	return (
		<div className="sections">
			{sections.map((section, i) => (
				<Section key={i} section={section} />
			))}
		</div>
	);
};

export default Sections;
