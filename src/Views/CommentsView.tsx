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
				<TextInput onSubmit={(text) => onCreatePost(text)}/>
			)}
			{state.length > 0 && state.map(comment => (<Comment key={comment.id} {...comment}/>))}
		</>
	);
}

export default CommentsView;