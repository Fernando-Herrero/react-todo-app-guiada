import { useState } from "react";
import "./TodoForm.css";

const INITIAL_FORM_STATE = { todoText: "" };

export const TodoForm = ({ addTodo }) => {
	const [form, setForm] = useState(INITIAL_FORM_STATE);
	const [error, setError] = useState(false);

	const onFormSubmit = (event) => {
		event.preventDefault();

		if (!form.todoText || form.todoText?.trim() === "") {
			setError(true);
		}

		const newTodo = {
			text: form.todoText,
			completed: false,
			favorite: false,
			id: Date.now(),
			done: false,
		};

		addTodo(newTodo);
		setForm(INITIAL_FORM_STATE);
	};

	const onInputChange = ({ target: { name, value } }) => {
		setError(false);
		setForm((prev) => ({ ...prev, [name]: value }));
	};

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

				{error && <p className="error-message">⚠️ Please, write a task</p>}
			</div>
		</>
	);
};
