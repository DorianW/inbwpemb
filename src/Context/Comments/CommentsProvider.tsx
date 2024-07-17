import {ReactNode, useReducer} from "react";
import {CommentsReducer, CommentsContext} from "./Context";
import {getInitialState} from "./InitState";

export const CommentsProvider = ({children}: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(CommentsReducer, getInitialState());

	return (
		<CommentsContext.Provider value={{state, dispatch}}>
			{children}
		</CommentsContext.Provider>
	);
};