// Types
import { FC } from "react";
// SEO
import Head from "next/head";
// Custom Components
import AppLayout from "components/layout/app-layout/app-layout.component";

const Shop: FC = () => {
	return (
		<div className="">
			<Head>
				<title>Purcupine Shop</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<AppLayout>
				<h2>SHOPPING</h2>
				<span>cards</span>
			</AppLayout>
		</div>
	);
};

export default Shop;
