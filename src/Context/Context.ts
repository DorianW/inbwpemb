import {createContext} from 'react';
import PostingType from '../Types/PostingType';

const initPostings: PostingType = {
	id: 'eduegdue',
	body: 'Content of the posting',
	comments: [{
		id: 'eduegdue1',
		body: 'Content of the comment 1',
		comments: []
	}]
}

export const PostingsContext = createContext<PostingType[]>([initPostings]);
