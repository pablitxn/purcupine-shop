import Head from "next/head";
import Button from "../components/Button";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="">
				hola
				<Button />
			</main>

			<footer className="">
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by <img src="/vercel.svg" alt="Vercel Logo" className="" />
				</a>
			</footer>
		</div>
	);
}
