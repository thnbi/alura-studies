import { useState } from "react";
import Cronometro from "../components/Cronometro";
import Form from "../components/Form";
import List from "../components/List";
import { Itarefa } from "../Types/tarefa";
import style from "./App.module.scss";

function App() {
	const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);
	return (
		<div className={style.AppStyle}>
			<Form setTarefas={setTarefas} />
			<List tarefas={tarefas} />
			<Cronometro />
		</div>
	);
}

export default App;
