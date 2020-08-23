// Types
import { FC } from "react";
import { IAppLayout } from "./app-layout.types";
// Context
import { AppContext } from "state/app-context";
// Hooks
import { useContext, useEffect } from "react";
// Custom Components
import Navbar from "components/layout/navbar/navbar.component";
// Styles
import "./app-layout.styles.less";
// AntD
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

const AppLayout: FC<IAppLayout> = ({ children, navbarProps }) => {
	const { user } = useContext(AppContext);

	useEffect(() => {
		console.log("user context", user);
	}, [user]);

	return (
		<Layout>
			<Header className="header">
				<Navbar {...navbarProps} style={{ width: "100%" }} />
			</Header>
			<Content className="site-layout">{children}</Content>
			<Footer className="footer">porcupine-shop® 2020 </Footer>
		</Layout>
	);
};

export default AppLayout;
