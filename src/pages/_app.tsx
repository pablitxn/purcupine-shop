// Types
import { FC } from "react";
// Styles
import "./styles.less";

interface App {
	Component: any;
	pageProps: any;
}

const App: FC<App> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default App;
