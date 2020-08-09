// Types
import { FC } from "react";
import { IAppLayout } from "./app-layout.types";
// Custom Components
import Navbar from "components/layout/navbar/navbar.component";
// Styles
import "./app-layout.styles.less";
// AntD
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

const AppLayout: FC<IAppLayout> = ({ children, navbarProps }) => {
	return (
		<>
			<Layout>
				<Header className="header">
					<Navbar {...navbarProps} />
				</Header>
				<Content className="site-layout">
					<div className="site-layout-background">{children}</div>
				</Content>
				<Footer className="footer">porcupine-shop® 2020 </Footer>
			</Layout>
		</>
	);
};

export default AppLayout;
