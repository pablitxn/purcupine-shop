// Types and Context
import { FC, ReactNode, createContext } from "react";

export const AppContext = createContext(null);
AppContext.displayName = "App Context";

interface IAppContext {
	children: ReactNode;
	user: any;
}

const ContextProvider: FC<IAppContext> = ({ children, user }) => {
	return <AppContext.Provider value={user}>{children}</AppContext.Provider>;
};

export default ContextProvider;
