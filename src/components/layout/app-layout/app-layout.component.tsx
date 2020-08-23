// Types
import { FC } from "react";
import { IAppLayout } from "./app-layout.types";
// Context
import { AppContext } from "state/app-context";
// Hooks
import { useContext } from "react";
// Custom Components
import Navbar from "components/layout/navbar/navbar.component";
// Styles
import "./app-layout.styles.less";
// AntD
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

const AppLayout: FC<IAppLayout> = ({ children }) => {
	const { user } = useContext(AppContext);

	return (
		<Layout>
			<Header className="header" style={{ width: "100%" }}>
				<Navbar activeUser={user} />
			</Header>
			<Content className="site-layout">{children}</Content>
			<Footer className="footer">porcupine-shop® 2020 </Footer>
		</Layout>
	);
};

export default AppLayout;
