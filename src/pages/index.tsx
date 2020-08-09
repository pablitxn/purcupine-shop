// Types
import { FC } from "react";
// Custom Components
import AppLayout from "components/layout/app-layout/app-layout.component";
import Section from "components/shop/section/section.component";
// Utils
import { sections } from "utils";

const Home: FC = () => {
	return (
		<AppLayout>
			{sections.map((section, i) => (
				<Section key={i} section={section} />
			))}
		</AppLayout>
	);
};

export default Home;
