import PostingType from "../Types/PostingType";
import Comment from "./Comment";

const Posting = ({id, body, comments}: PostingType) => {
	return (
		<section>
			<div>{body}</div>
			<div>
				<textarea></textarea>
				<button>Add comment</button>
			</div>
			<div>
				{comments.map((comment) => (<Comment {...comment} key={`comment_${comment.id}`}/>))}
			</div>
		</section>
	);
}

export default Posting;