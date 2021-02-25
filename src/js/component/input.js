import React, { useState, useEffect } from "react";

export function TaskInput() {
	const [taskList, setTaskList] = useState([]);
	useEffect(() => {
		getTodos();
	}, []);
	function getTodos() {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/aleida1983",

			{
				method: "GET",

				body: JSON.stringify(newTaskList)
			}
		)
			.then(resp => {
				console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
				console.log(resp.status); // el código de estado = 200 o código = 400 etc.

				return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				setTaskList(data);
			})
			.catch(error => {
				//manejo de errores
				console.log(error);
			});
	}

	function deleteTask(taskIndex) {
		let newTaskList = taskList.filter((task, index) => {
			return taskIndex !== index;
		});
		setTaskList(newTaskList);
	}
	function addTask() {
		let inputvalue = document.querySelector("#input").value;
		if (inputvalue !== "") {
			let newTask = { label: inputvalue, done: false };
			let newTaskList = [...taskList, newTask];
			setTaskList(newTaskList);
			document.querySelector("#input").value = "";
		}
	}
	return (
		<div className="d-flex flex-column">
			<label className="label">¿Qué necesitas hacer?</label>
			<input
				onKeyPress={event => {
					if (event.key === "Enter") {
						addTask();
					}
				}}
				id="input"
				type="text"
				placeholder="añadir tarea"></input>
			<div id="todosList">
				<ul>
					{taskList.map((task, index) => {
						return (
							<li key={index}>
								{task.label}{" "}
								<span
									onClick={() => {
										deleteTask(index);
									}}>
									x
								</span>
							</li>
						);
					})}
				</ul>

				<p>{taskList.length} tareas</p>
			</div>
		</div>
	);
}
