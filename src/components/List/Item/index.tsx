import { Itarefa } from "../../../Types/tarefa";
import style from "./Item.module.scss";

interface Props extends Itarefa {
	selecionaTarefa: (tarefaSelecionada: Itarefa) => void;
}

function Item({
	tarefa,
	tempo,
	selecionado,
	completado,
	id,
	selecionaTarefa,
}: Props) {
	console.log("");
	return (
		<li
			className={`${style.item} ${
				selecionado ? style.itemSelecionado : ""
			} ${completado ? style.itemCompletado : ""}`}
			onClick={() =>
				!completado &&
				selecionaTarefa({ tarefa, tempo, selecionado, completado, id })
			}
		>
			<h3>{tarefa}</h3>
			<span>{tempo}</span>
			{completado && (
				<span
					className={style.concluido}
					aria-Label="tarefa completada"
				></span>
			)}
		</li>
	);
}

export default Item;
