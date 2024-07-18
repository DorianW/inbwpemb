import React, {createContext, useContext} from 'react';
import CommentType from "../../Types/CommentType";
import {saveState} from "./InitState";
import {addCommentByParentId, deepClone, deleteCommentById} from "./Utils";

export type CreateAction = {
	type: 'CREATE';
	payload: {
		body: CommentType['body'],
	}
}

export type AddAction = {
	type: 'ADD';
	payload: {
		parentId: CommentType['id'],
		body: CommentType['body'],
	}
}

export type DeleteAction = {
	type: 'DELETE';
	payload: {
		id: CommentType['id'],
	}
}

type Actions = AddAction | DeleteAction | CreateAction;

export const CommentsContext = createContext<{ state: CommentType[]; dispatch: React.Dispatch<Actions> }>({
	state: [],
	dispatch: () => null
});

export const CommentsReducer = (state: CommentType[], action: Actions): CommentType[] => {
	const clonedState = deepClone(state);
	switch (action.type) {
		case "CREATE":
			return [...clonedState, {
				id: Math.random().toString(36),
				body: action.payload.body,
				comments: []
			}] as CommentType[];
		case 'ADD':
			// there is a simple random string helper for creating IDs, general done by the API
			const newComment: CommentType = {id: Math.random().toString(36), body: action.payload.body, comments: []};
			addCommentByParentId(clonedState, action.payload.parentId, newComment);
			saveState(clonedState);
			return clonedState;
		case 'DELETE':
			const updatedState = deleteCommentById(clonedState, action.payload.id);
			saveState(updatedState);
			return updatedState;
		default:
			return state;
	}
};

export const useCommentsContext = () => {
	const context = useContext(CommentsContext);
	if (!context) {
		throw new Error('useCommentsContext must be used within a CommentsProvider');
	}
	return context;
};
