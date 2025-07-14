import { useState } from "react";
import "./TodoForm.css";

const INITIAL_FORM_STATE = { todoText: "" };

export const TodoForm = () => {
	const [form, setForm] = useState(INITIAL_FORM_STATE);

	const onFormSubmit = (event) => {
		event.preventDefault();

		if (!form.todoText) return console.log("Fill the text input!");

		const newTodo = {
			text: form.todoText,
			completed: false,
			favorite: false,
			id: Date.now(),
			done: false,
		};

		console.log("Form sent", newTodo);

		setForm(INITIAL_FORM_STATE);
	};

	const onInputChange = ({ target: { name, value } }) => setForm((prev) => ({ ...prev, [name]: value }));

	return (
		<>
			<h2 className="form-title">✏️ Create new task</h2>

			<div className="todo-form-container" onSubmit={onFormSubmit}>
				<form className="todo-form">
					<input
						type="text"
						className="todo-input"
						name="todoText"
						value={form.todoText}
						onChange={onInputChange}
						placeholder="Introduce task..."
					/>
					<button type="submit" className="add-btn">
						Add
					</button>
				</form>
			</div>
		</>
	);
};
