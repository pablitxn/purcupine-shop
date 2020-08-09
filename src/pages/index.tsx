// Types
import { FC } from "react";
// SEO
import Head from "next/head";
// Custom Components
import AppLayout from "components/layout/app-layout/app-layout.component";

const Index: FC = () => {
	return (
		<div className="">
			<Head>
				<title>Index</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<AppLayout>
				<h2>Index VIEJITA</h2>
				<span>cards</span>
			</AppLayout>
		</div>
	);
};

export default Index;
