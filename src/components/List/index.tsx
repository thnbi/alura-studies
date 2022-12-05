import style from "./List.module.scss";
import Item from "./Item";
import { Itarefa } from "../../Types/tarefa";

interface Props {
	tarefas: Itarefa[];
	selecionaTarefa: (tarefaSelecionada: Itarefa) => void;
}


function List({ tarefas, selecionaTarefa }: Props) {
	return (
		<aside className={style.listaTarefas}>
			<h2>Estudos do dia</h2>
			<ul>
				{tarefas.map((item) => (
					<Item {...item} selecionaTarefa={selecionaTarefa} key={item.id} />
				))}
			</ul>
		</aside>
	);
}

export default List;
