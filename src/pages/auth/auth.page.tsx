// Types
import { FC } from "react";
// SEO
import Head from "next/head";
// Custom Components
import AppLayout from "components/layout/app-layout/app-layout.component";

const Auth: FC = () => {
	return (
		<div className="">
			<Head>
				<title>Purcupine Shop</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<AppLayout>
				<h2>logueate wachin</h2>
				<span>login</span>
			</AppLayout>
		</div>
	);
};

export default Auth;
