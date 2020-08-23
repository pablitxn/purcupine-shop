// Types
import { FC } from "react";
// Styles
import "./styles.less";
// Context
import AppContext from "state/app-context";

interface App {
	Component: any;
	pageProps: any;
}

const App: FC<App> = ({ Component, pageProps }) => {
	return (
		<AppContext>
			<Component {...pageProps} />
		</AppContext>
	);
};

export default App;
