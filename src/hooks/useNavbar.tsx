// React
import { useState, useContext } from "react";
// Router
import { useRouter } from "next/router";
// Context
import { AppContext } from "state/app-context";

type HandleClick = (event: MenuEvent) => void;

type MenuEvent = {
	item: any;
	key: any;
	keyPath: any;
	domEvent: any;
};

export const useNavbar = () => {
	const [current, setCurrent] = useState("");
	const router = useRouter();
	const user = useContext(AppContext);

	const handleClick: HandleClick = ({ key }) => {
		setCurrent(key);
		router.push(key);
	};

	return { current, handleClick, user };
};
