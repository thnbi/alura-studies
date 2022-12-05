import React, { useState } from "react";
import { Itarefa } from "../../Types/tarefa";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
	setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>;
}

function Form({ setTarefas }: Props) {
	const [tarefa, setTarefa] = useState("");
	const [tempo, setTempo] = useState("00:00");

	function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setTarefas((tarefasAntigas) => [
			...tarefasAntigas,
			{
				tarefa,
				tempo,
				selecionado: false,
				completado: false,
				id: uuidv4(),
			},
		]);
		setTarefa("");
		setTempo("00:00");
	}

	return (
		<form className={style.novaTarefa} onSubmit={adicionarTarefa}>
			<div className={style.inputContainer}>
				<label htmlFor="tarefa">Adicione um novo estudo</label>
				<input
					type="text"
					name="tarefa"
					id="tarefa"
					placeholder="O que você deseja estudar"
					value={tarefa}
					onChange={(event) => {
						setTarefa(event.target.value);
					}}
					required
				/>
			</div>
			<div className={style.inputContainer}>
				<label htmlFor="tempo">Tempo</label>
				<input
					type="time"
					step="1"
					name="tempo"
					id="tempo"
					min="00:00:00"
					max="01:30:00"
					value={tempo}
					onChange={(event) => {
						setTempo(event.target.value);
					}}
					required
				/>
			</div>
			<Button type="submit">Adicionar</Button>
		</form>
	);
}

export default Form;
