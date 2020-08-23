// Types
import { FC, ReactNode } from "react";
// AntD
import { Button } from "antd";
// Router
import Link from "next/link";

interface IButtonWithNavigation {
	icon: ReactNode;
	children: ReactNode;
	href: string;
	type: "text" | "link" | "ghost" | "primary" | "default" | "dashed";
}

const ButtonWithNavigation: FC<IButtonWithNavigation> = ({
	children,
	href,
	type,
	icon
}) => (
	<Button type={type} icon={icon}>
		<Link href={href}>
			<a>{children}</a>
		</Link>
	</Button>
);

export default ButtonWithNavigation;
