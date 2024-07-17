import {ReactNode, useReducer} from "react";
import {CommentsReducer, CommentsContext} from "./Comments/Context";
import {getInitialState} from "./Comments/InitState";

export const CommentsProvider = ({children}: { children: ReactNode }) => {
	// TODO load state from local memory
	const [state, dispatch] = useReducer(CommentsReducer, getInitialState());

	return (
		<CommentsContext.Provider value={{state, dispatch}}>
			{children}
		</CommentsContext.Provider>
	);
};