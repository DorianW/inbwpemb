import CommentType from "../../Types/CommentType";

// simply and dirty helper to prevent unwanted stat manipulation effects
export const deepClone = <T>(obj: T): T => {
	return JSON.parse(JSON.stringify(obj)) as T;
};

export const addCommentByParentId = (root: CommentType, targetId: CommentType['id'], newComment: CommentType): boolean => {
	// target id found
	if (root.id === targetId) {
		root.comments = [newComment, ...root.comments];
		return true;
	}

	// recursive search for target
	for (let childComment of root.comments) {
		if (addCommentByParentId(childComment, targetId, newComment)) {
			return true;
		}
	}

	// not found
	return false;
}

export const deleteCommentById = (root: CommentType, targetId: CommentType['id']): boolean => {
	// parent of the target id found
	if (root.comments.some(comment => comment.id === targetId)) {
		root.comments = root.comments.filter(comment => comment.id !== targetId);
		return true;
	}

	// recursive search for target
	for (let childComment of root.comments) {
		if (deleteCommentById(childComment, targetId)) {
			return true;
		}
	}

	// not found
	return false;
}

