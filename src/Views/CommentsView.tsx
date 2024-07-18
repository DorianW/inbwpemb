import {useContext} from "react";
import Comment from "../Components/Comment";
import {CommentsContext} from "../Context/Comments/Context";
import TextInput from "../Components/TextInput";

const CommentsView = () => {
	const {state, dispatch} = useContext(CommentsContext);

	const onCreatePost = (body: string) => {
		dispatch({type: "CREATE", payload: {body}});
	}

	return (
		<>
			{state.length === 0 && (
				<>
					<div>There are 0 posts for now. Be the first one and add a new post!</div>
					<TextInput onSubmit={(text) => onCreatePost(text)}
					           placeholder="Add the first post"
					           buttonText="Submit post"/>
				</>
			)}
			{state.length > 0 && state.map(comment => (<Comment key={comment.id} {...comment}/>))}
		</>
	);
}

export default CommentsView;