import React from 'react';
import './App.css';
import Comments from "./Views/Comments";
import {CommentsProvider} from "./Context/CommentsProvider";

function App() {
	return (
		<main>
			<CommentsProvider>
				<Comments/>
			</CommentsProvider>
		</main>
	);
}

export default App;
