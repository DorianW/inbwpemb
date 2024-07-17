import React from 'react';
import './App.css';
import CommentsView from "./Views/CommentsView";
import {CommentsProvider} from "./Context/CommentsProvider";

function App() {
	return (
		<main className="p-4">
			<CommentsProvider>
				<h1 className="text-2xl font-extrabold">React comments demonstration</h1>
				<CommentsView/>
			</CommentsProvider>
		</main>
	);
}

export default App;
