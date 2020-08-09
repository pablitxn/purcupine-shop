// Types
import { FC } from "react";
import { AppLayoutProps } from "./app-layout.types";
// Custom Components
import Navbar from "components/layout/navbar/navbar.component";
// AntD
import { Layout, Divider } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const AppLayout: FC<AppLayoutProps> = ({ children, navbarProps }) => {
	return (
		<>
			<Layout>
				<Header>
					<Navbar {...navbarProps} />
				</Header>
				<Layout>
					<Sider>sider bronx</Sider>
					<Divider type="vertical" />
					<Content>{children}</Content>
				</Layout>
				<Footer>porcupine-shop® 2020 </Footer>
			</Layout>
		</>
	);
};

export default AppLayout;
