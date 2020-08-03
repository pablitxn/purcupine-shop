// Types
import { FC } from "react";
// Custom Components
import Navbar from "components/layout/app/navbar/navbar.component";

const AppLayout: FC = ({ children }: any) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<footer>porcupine-shop® 2020 </footer>
		</>
	);
};

export default AppLayout;
