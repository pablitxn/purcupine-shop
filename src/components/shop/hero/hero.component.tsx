// Types
import { FC } from "react";
import { IHero } from "./hero.types";
// AntD
import { Input } from "antd";
// Styles
import "./hero.styles.less";

const Hero: FC<IHero> = ({ username, onSearch }) => {
	const { Search } = Input;

	return (
		<div className="hero">
			<div className="content">
				<h2>Hola {username}, ¿qué querés buscar hoy?</h2>
				<Search
					placeholder="Autos, Casas, Yates..."
					onSearch={onSearch}
					enterButton="¡Buscar!"
					size="large"
				/>
			</div>
		</div>
	);
};

export default Hero;
