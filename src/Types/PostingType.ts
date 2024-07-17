import CommentType from "./CommentType";

type PostingType = {
	id: string;
	body: string;
	comments: CommentType[];
}

export default PostingType;