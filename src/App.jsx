import { useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { Tabs } from "./components/Navigation/Tabs";

const INITIAL_TAB = Object.keys(Tabs)[0]; //TODOS

export const App = () => {
	const [activeTab, setActiveTab] = useState(INITIAL_TAB);
	return (
		<div className="app-container">
			<Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
			<h1 className="app-title">📝 My To-Do List</h1>

			<p>Active Tab: {activeTab} </p>
		</div>
	);
};
