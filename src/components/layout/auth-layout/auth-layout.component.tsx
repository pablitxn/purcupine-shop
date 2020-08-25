// Types
import { FC, ReactNode } from "react";
// Context
import { AppContext } from "state/app-context";
// Hooks
import { useRouter } from "next/router";
import { useEffect, useContext } from "react";
// Styles
import "./auth-layout.styles.less";

interface IAuthLayout {
	children: ReactNode;
}

const AuthLayout: FC<IAuthLayout> = ({ children }) => {
	// const { user } = useContext(AppContext);

	const router = useRouter();

	// useEffect(() => {
	// console.log(router, user);
	// }, [router, user]);

	return (
		<div className="auth-layout">
			<main className="main">{children}</main>
		</div>
	);
};

export default AuthLayout;
