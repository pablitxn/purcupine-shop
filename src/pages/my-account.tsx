// Types
import { FC, useMemo } from "react";
// Components
import MenuConfigs from "components/my-account/menu-configs.component";
import MyAccount from "components/my-account/my-account.component";
import AppLayout from "components/layout/app-layout/app-layout.component";
// Context
import { AppContext } from "state/app-context";
// Hooks
import { useContext, useState } from "react";
// AntD
import { Row, Col } from "antd";

const Profile: FC = () => {
	const [user, setUser] = useState({
		displayName: "",
		photoURL: "",
		email: "",
		phoneNumber: ""
	});

	const ctx = useContext(AppContext);

	const onSignOut = () => {};

	const [toggleCollapsed, setToggleCollapsed] = useState(false);

	const handleCollapsed = (e: any) => {
		setToggleCollapsed(!toggleCollapsed);
	};

	useMemo(() => {
		console.log("on your mind", ctx);
		ctx && setUser(ctx);
	}, [ctx]);

	return (
		<AppLayout>
			<Row>
				<Col span={4} style={{ minHeight: "840px" }}>
					<MenuConfigs />
				</Col>
				<Col span={20}>
					<MyAccount user={user} />
				</Col>
			</Row>
		</AppLayout>
	);
};

export default Profile;
