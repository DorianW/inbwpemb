import CommentType from "../Types/CommentType";

const Comment = ({id, body, comments}: CommentType) => {
	return (
		<div>
			<div>{body}</div>
			<div>
				{comments.map((comment) => (<Comment {...comment} />))}
			</div>
		</div>
	);
}

export default Comment;