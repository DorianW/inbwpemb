import React from 'react';
import './App.css';
import CommentsView from "./Views/CommentsView";
import {CommentsProvider} from "./Context/CommentsProvider";

function App() {
	return (
		<main>
			<CommentsProvider>
				<CommentsView/>
			</CommentsProvider>
		</main>
	);
}

export default App;
