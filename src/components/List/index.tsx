import style from "./List.module.scss";
import Item from "./Item";
import { Itarefa } from "../../Types/tarefa";



function List({ tarefas }: { tarefas: Itarefa[] }) {
	return (
		<aside className={style.listaTarefas}>
			<h2>Estudos do dia</h2>
			<ul>
				{tarefas.map((item, index) => (
					<Item {...item} key={index} />
				))}
			</ul>
		</aside>
	);
}

export default List;
