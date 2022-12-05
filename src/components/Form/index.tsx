import React from "react";
import { Itarefa } from "../../Types/tarefa";
import Button from "../Button";
import style from "./Form.module.scss";

class Form extends React.Component<{
	setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>;
}> {
	state = {
		tarefa: "",
		tempo: "00:00",
	};

	adicionarTarefa(event: React.FormEvent) {
		event.preventDefault();
		this.props.setTarefas((tarefasAntigas) => [...tarefasAntigas, {...this.state}])
	}

	render() {
		return (
			<form
				className={style.novaTarefa}
				onSubmit={this.adicionarTarefa.bind(this)}
			>
				<div className={style.inputContainer}>
					<label htmlFor="tarefa">Adicione um novo estudo</label>
					<input
						type="text"
						name="tarefa"
						id="tarefa"
						placeholder="O que você deseja estudar"
						value={this.state.tarefa}
						onChange={(event) => {
							this.setState({
								...this.state,
								tarefa: event.target.value,
							});
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
						value={this.state.tempo}
						onChange={(event) => {
							this.setState({
								...this.state,
								tempo: event.target.value,
							});
						}}
						required
					/>
				</div>
				<Button type="submit">Adicionar</Button>
			</form>
		);
	}
}

export default Form;
