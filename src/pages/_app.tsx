// Types
import { FC } from "react";
// Styles
import "./styles.less";
// Context
import ContextProvider from "state/app-context";
// Hooks
import { useEffect, useState } from "react";
// Firebase
import { getCurrentUser } from "state/firebase-client";

interface App {
	Component: any;
	pageProps: any;
}

const App: FC<App> = ({ Component, pageProps }) => {
	const [user, setUser] = useState(undefined);

	useEffect(() => {
		getCurrentUser(setUser);
	}, []);

	return (
		<ContextProvider user={user}>
			<Component {...pageProps} />
		</ContextProvider>
	);
};

export default App;
