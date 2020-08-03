// Types
import { FC } from "react";

interface App {
	Component: any;
	pageProps: any;
}

const App: FC<App> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default App;
