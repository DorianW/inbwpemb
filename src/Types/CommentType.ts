export type CommentType = {
	id: string;
	body: string;
	comments: CommentType[];
}
export default CommentType;