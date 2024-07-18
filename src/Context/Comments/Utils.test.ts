import {deepClone, addCommentByParentId, deleteCommentById} from "./Utils";
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
		const state: CommentType[] = [{id: "123", body: 'Test body', comments: []}];
		const newComment: CommentType = {id: "345", body: 'Test body 2', comments: []};

		// Act
		const result = addCommentByParentId(state, "unknown ID", newComment);

		// Assert
		expect(result).toHaveLength(1);
		expect(result[0].comments).toHaveLength(0);
	});

	it("should add comment if parentId found", () => {
		// Arrange
		const state: CommentType[] = [
			{
				id: "001",
				body: 'Test body',
				comments: []
			},
			{
				id: "002",
				body: 'Test body 2',
				comments: []
			}];
		const newComment: CommentType = {id: "345", body: 'Test body 2', comments: []};

		// Act
		const result = addCommentByParentId(state, "002", newComment);

		// Assert
		expect(result).toHaveLength(2);
		expect(result[1].comments).toHaveLength(1);
		expect(result[1].comments[0].id).toBe("345");
	});

	it("should add comment if parentId found in nested comment", () => {
		// Arrange
		const state: CommentType[] = [{
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
		}];
		const newComment: CommentType = {id: "1337", body: 'Test body 5', comments: []};

		// Act
		const result = addCommentByParentId(state, "678", newComment);

		// Assert
		expect(result[0].comments[0].comments[0].comments).toHaveLength(2);
		expect(result[0].comments[0].comments[0].comments[0].id).toBe("1337");
		expect(result[0].comments[0].comments[0].comments[1].id).toBe("999");
	});
});

describe("deleteCommentById", () => {
	it("should not delete comment if not found", () => {
		// Arrange
		const state: CommentType[] = [{
			id: "123",
			body: 'Test body',
			comments: [
				{
					id: "345", body: 'Test body 2', comments: []
				}
			]
		}];
		// Act
		const result = deleteCommentById(state, "unknown ID");

		// Assert
		expect(result).toHaveLength(1);
		expect(result[0].comments[0].comments).toHaveLength(0);
	});

	it("should delete comment if found on top level of the array", () => {
		// Arrange
		const state: CommentType[] = [{
			id: "123",
			body: 'Test body',
			comments: [
				{
					id: "345", body: 'Test body 2', comments: []
				}
			]
		}];

		// Act
		const result = deleteCommentById(state, "123");

		// Assert
		expect(result).toHaveLength(0);
	});

	it("should delete comment if found on child comments array", () => {
		// Arrange
		const state: CommentType[] = [{
			id: "123",
			body: 'Test body',
			comments: [
				{
					id: "345", body: 'Test body 2', comments: []
				}
			]
		}];

		// Act
		const result = deleteCommentById(state, "345");

		// Assert
		expect(result[0].comments).toHaveLength(0);
	});

	it("should delete comment if id found in nested comment", () => {
		// Arrange
		const state: CommentType[] = [{
			id: "123",
			body: 'Test body',
			comments: [
				{
					id: "345", body: 'Test body 2', comments: [
						{
							id: "678", body: 'Test body 3', comments: [
								{
									id: "999", body: "Test body 4", comments: []
								},
								{
									id: "1337", body: 'Test body 3', comments: []
								}
							]
						}
					]
				}
			]
		}];

		// Act
		const result = deleteCommentById(state, "999");

		// Assert
		expect(result[0].comments[0].comments[0].comments).toHaveLength(1);
		expect(result[0].comments[0].comments[0].comments[0].id).toBe("1337");
	});
});
