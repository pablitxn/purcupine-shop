// Types
import { FC } from "react";
import { AppLayoutProps } from "./app-layout.types";
// Custom Components
import Navbar from "components/layout/navbar/navbar.component";

const AppLayout: FC<AppLayoutProps> = ({ children, navbarProps }) => {
	return (
		<>
			<Navbar {...navbarProps} />
			<main className="main">{children}</main>
			<footer className="footer">porcupine-shop® 2020 </footer>
		</>
	);
};

export default AppLayout;
