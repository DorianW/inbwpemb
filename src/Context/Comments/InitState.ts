import CommentType from "../../Types/CommentType";

const LOCAL_STATE_NAME = "react-comments-local-state";

export const getInitialState = (): CommentType[] => {
	const stateInMemory = localStorage.getItem(LOCAL_STATE_NAME);

	if (stateInMemory === null) {
		return [];
	} else {
		try {
			return JSON.parse(stateInMemory) as CommentType[];
		} catch (error: unknown) {
			console.error(error);
			return [];
		}
	}
};

export const saveState = (state: CommentType[]) => {
	localStorage.setItem(LOCAL_STATE_NAME, JSON.stringify(state));
};