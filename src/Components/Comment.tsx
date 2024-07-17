import {useCommentsContext} from "../Context/Comments/Context";
import TextInput from "./TextInput";
import CommentType from "../Types/CommentType";
import React from "react";

const Comment = React.memo(({id, body, comments}: CommentType) => {
	const {dispatch} = useCommentsContext();

	const onSubmitComment = (parentId: string, body: string) => {
		dispatch({type: "ADD", payload: {parentId, body}});
	}

	return (
		<section>
			<div>{body}</div>
			<TextInput onSubmit={(text) => onSubmitComment(id, text)}/>
			<div>
				{comments.map((comment) => (<Comment {...comment} key={`comment_${comment.id}`}/>))}
			</div>
		</section>
	);
})

export default Comment;