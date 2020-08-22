// Hooks
import { useState } from "react";

type MenuEvent = {
	item: any;
	key: any;
	keyPath: any;
	domEvent: any;
};

export const useNavbar = () => {
	// const [current, setCurrent] = useState("");
	// const $activeUser = useSelector((state: any) => activeUserSelector(state));
	// const session = !!$activeUser;

	const currentUser = { name: "test" };
	const session = true;

	return { currentUser, session };
};
