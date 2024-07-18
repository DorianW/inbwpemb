import CommentType from "../../Types/CommentType";

// simply and dirty helper to prevent unwanted stat manipulation effects
export const deepClone = <T>(obj: T): T => {
	return JSON.parse(JSON.stringify(obj)) as T;
};

export const addCommentByParentId = (root: CommentType[], targetId: CommentType['id'], newComment: CommentType): CommentType[] => {
	return root.map((comment: CommentType) => {
		if (comment.id === targetId) {
			comment.comments = [newComment, ...comment.comments];
			return comment;
		}
		comment.comments = addCommentByParentId(comment.comments, targetId, newComment);
		return comment;
	});
}

export const deleteCommentById = (root: CommentType[], targetId: CommentType['id']): CommentType[] => {
	return root.filter((comment: CommentType) => {
		if (comment.id === targetId) return false;

		if (comment.comments.length > 0) {
			comment.comments = deleteCommentById(comment.comments, targetId);
		}
		return true;
	})

}