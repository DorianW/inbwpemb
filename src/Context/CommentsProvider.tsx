import {ReactNode, useReducer} from "react";
import {CommentsReducer, CommentsContext} from "./Comments/Context";
import {initCommentsState} from "./Comments/InitState";

export const CommentsProvider = ({children}: { children: ReactNode }) => {
	// TODO load state from local memory
	const [state, dispatch] = useReducer(CommentsReducer, initCommentsState);

	return (
		<CommentsContext.Provider value={{state, dispatch}}>
			{children}
		</CommentsContext.Provider>
	);
};