import CommentType from "../../Types/CommentType";

// simply and dirty helper to prevent unwanted stat manipulation effects
export const deepClone = <T>(obj: T): T => {
	return JSON.parse(JSON.stringify(obj)) as T;
};

export const addCommentByParentId = (root: CommentType, targetId: CommentType['id'], newComment: CommentType): CommentType => {
	// target id found
	if (root.id === targetId) {
		root.comments = [newComment, ...root.comments];
		return root;
	}

	// recursive search for target
	for (let childComment of root.comments) {
		if (addCommentByParentId(childComment, targetId, newComment)) {
			return root;
		}
	}

	// not found, return default input of root
	return root;
}

