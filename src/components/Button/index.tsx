import React from "react";
import style from "./Button.module.scss";

// permitir que seja passado um texto para o botão e um tipo de botão
class Button extends React.Component<{
	children: string;
	type?: "button" | "submit" | "reset" | undefined;
}> {
	render() {
		const { type = "button" } = this.props;
		return (
			<button type={type} className={style.button}>
				{this.props.children}
			</button>
		);
	}
}

export default Button;
