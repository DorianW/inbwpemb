import React, {createContext, useContext} from 'react';
import CommentType from "../../Types/CommentType";
import {initCommentsState} from "./InitState";
import {addCommentByParentId, deepClone} from "./Utils";

export type AddAction = {
	type: 'ADD';
	payload: {
		parentId: CommentType['id'],
		body: CommentType['body'],
	}
}

// add here more specific actions if needed, like DeleteAction... type Actions = AddAction | DeleteAction
type Actions = AddAction;

export const CommentsContext = createContext<{ state: CommentType; dispatch: React.Dispatch<Actions> }>({
	state: initCommentsState,
	dispatch: () => null
});

export const CommentsReducer = (state: CommentType, action: Actions) => {
	switch (action.type) {
		case 'ADD':
			// there is a simple random string helper for creating IDs, general done by the API
			const newComment: CommentType = {id: Math.random().toString(36), body: action.payload.body, comments: []};
			// dirty deepClone used to prevent unwanted effects
			return {...addCommentByParentId(deepClone(state), action.payload.parentId, newComment)};
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
