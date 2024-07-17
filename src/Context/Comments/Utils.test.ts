import {deepClone, addCommentByParentId} from "./Utils";
import CommentType from "../../Types/CommentType";

describe("deepClone", () => {
	it("should clone object without changing it", () => {
		// Arrange
		const originObject = {id: 123, name: 'Test', comments: [1]};

		// Act
		const resultObject = deepClone(originObject);

		// Assert
		expect(resultObject).toEqual(originObject);
	});
});

describe("addCommentByParentId", () => {
	it("should not add comment if parentId not found", () => {
		// Arrange
		const state: CommentType = {id: "123", body: 'Test body', comments: []};
		const newComment: CommentType = {id: "345", body: 'Test body 2', comments: []};

		// Act
		addCommentByParentId(state, "unknown ID", newComment);

		// Assert
		expect(state.comments).toHaveLength(0);
	});

	it("should add comment if parentId found", () => {
		// Arrange
		const state: CommentType = {id: "123", body: 'Test body', comments: []};
		const newComment: CommentType = {id: "345", body: 'Test body 2', comments: []};

		// Act
		addCommentByParentId(state, "123", newComment);

		// Assert
		expect(state.comments).toHaveLength(1);
	});

	it("should add comment if parentId found in nested comment", () => {
		// Arrange
		const state: CommentType = {
			id: "123",
			body: 'Test body',
			comments: [
				{
					id: "345", body: 'Test body 2', comments: [
						{
							id: "678", body: 'Test body 3', comments: [
								{id: "999", body: "Test body 4", comments: []}
							]
						}
					]
				}
			]
		};
		const newComment: CommentType = {id: "1337", body: 'Test body 5', comments: []};

		// Act
		addCommentByParentId(state, "678", newComment);

		// Assert
		expect(state.comments[0].comments[0].comments).toHaveLength(2);
		expect(state.comments[0].comments[0].comments[0].id).toBe("1337");
		expect(state.comments[0].comments[0].comments[1].id).toBe("999");
	});
});