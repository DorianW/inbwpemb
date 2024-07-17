import React, {useContext} from 'react';
import './App.css';
import Postings from "./Views/Postings";
import {PostingsContext} from "./Context/Context";


function App() {
	return (
		<main>
			<PostingsContext.Provider value={useContext(PostingsContext)}>
				<Postings />
			</PostingsContext.Provider>
		</main>
	);
}

export default App;
