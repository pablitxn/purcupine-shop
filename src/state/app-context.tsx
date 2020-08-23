// Types and Context
import { FC, ReactNode, createContext } from "react";

export const AppContext = createContext(null);
AppContext.displayName = "App Context";

interface IAppContext {
	children: ReactNode;
}

const ContextComponent: FC<IAppContext> = ({ children }) => {
	const initialValue = {
		user: {
			name: "",
			email: ""
		}
	};

	return <AppContext.Provider value={initialValue}>{children}</AppContext.Provider>;
};

export default ContextComponent;
