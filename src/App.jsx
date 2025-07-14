import { useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { Tabs } from "./components/Navigation/Tabs";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { Favorites } from "./components/Favorites/Favorites";

const INITIAL_TODOS = [
	{
		text: "Hacer la cama",
		completed: false,
		favorite: false,
		id: 1752502932820,
		done: false,
	},
	{
		text: "Programar React y hacer la Todo App",
		completed: false,
		favorite: false,
		id: 1752502946827,
		done: false,
	},
	{
		text: "Programar dos horas diarias",
		completed: false,
		favorite: false,
		id: 1752502961021,
		done: false,
	},
	{
		text: "Hacer el proyecto de CV",
		completed: false,
		favorite: false,
		id: 1752502984289,
		done: false,
	},
];

export const App = () => {
	const [activeTab, setActiveTab] = useState(Tabs.TODOS);
	const [todos, setTodos] = useState(INITIAL_TODOS);

	const addTodo = (newTodo) => {
		setTodos((prev) => [...prev, newTodo]);
	};

	const onToggleTodo = (id) => {
		const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));

		setTodos(updatedTodos);
	};

	const onToggleFavorite = (id) => {
		const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, favorite: !todo.favorite } : todo));

		setTodos(updatedTodos);
	};

	const onDeleteTodo = (id) => {
		const filtered = todos.filter((todo) => todo.id !== id);

		setTodos(filtered);
	};

	return (
		<div className="app-container">
			<Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
			<h1 className="app-title">📝 My To-Do List</h1>

			{activeTab === Tabs.TODOS && (
				<TodoList
					onToggleTodo={onToggleTodo}
					onDeleteTodo={onDeleteTodo}
					onToggleFavorite={onToggleFavorite}
					todos={todos}
				/>
			)}
			{activeTab === Tabs.FAVORITES && (
				<Favorites
					todos={todos}
					onToggleTodo={onToggleTodo}
					onDeleteTodo={onDeleteTodo}
					onToggleFavorite={onToggleFavorite}
				/>
			)}
			{activeTab === Tabs.NEW_TODO && <TodoForm addTodo={addTodo} />}
		</div>
	);
};
