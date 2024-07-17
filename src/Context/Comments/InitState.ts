import CommentType from "../../Types/CommentType";

const LOCAL_STATE_NAME = "react-comments-local-state";

const initCommentsState: CommentType = {
	id: 'eduegdue',
	body: 'Content of the root posting',
	comments: []
}

export const getInitialState = (): CommentType => {
	const stateInMemory = localStorage.getItem(LOCAL_STATE_NAME);

	if (stateInMemory === null) {
		return initCommentsState;
	} else {
		try {
			return JSON.parse(stateInMemory) as CommentType;
		} catch (error: unknown) {
			console.error(error);
			return initCommentsState;
		}
	}
};

export const saveState = (state: CommentType) => {
	localStorage.setItem(LOCAL_STATE_NAME, JSON.stringify(state));
};