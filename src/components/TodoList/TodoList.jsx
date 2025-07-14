import "./TodoList.css";

export const TodoList = (props) => {
	return (
		<div className="todo-list-container">
			<h2 className="todo-list-title">📋 All tasks</h2>

			{!props?.todos?.length && <p className="todo-list-empty">There aren't taks to show</p>}
			{props?.todos?.map((todo) => {
				return (
					<div key={todo.id} className="todo">
						{todo.text}
					</div>
				);
			})}
		</div>
	);
};
