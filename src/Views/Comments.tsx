import {useContext} from "react";
import Comment from "../Components/Comment";
import {CommentsContext} from "../Context/Comments/Context";

const Comments = () => {
	// TODO load state from local memory
	const {state: comments} = useContext(CommentsContext);

	return (
		<Comment {...comments} />
	);
}

export default Comments;