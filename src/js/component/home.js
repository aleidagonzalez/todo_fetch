import React from "react";
import { TaskInput } from "./input";
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

export function Home() {
	return (
		<div className="body d-flex flex-column align-items-center">
			<h1>TODOS</h1>
			<TaskInput />
		</div>
	);
}
