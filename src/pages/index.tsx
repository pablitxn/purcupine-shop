// Types
import { FC } from "react";
// Custom Components
import AppLayout from "components/layout/app-layout/app-layout.component";
import Hero from "components/shop/hero/hero.component";
import Sections from "components/shop/sections/sections.component";
import Offers from "components/shop/offers/offers.component";
// Utils
import { sections } from "utils";

const Home: FC = () => {
	const handleSearch = (value: string) => {
		console.log(value);
	};

	return (
		<AppLayout>
			<Hero username="Ramón" onSearch={handleSearch} />
			<Offers />
			<Sections sections={sections} />
		</AppLayout>
	);
};

export default Home;
