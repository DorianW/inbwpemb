import {useCommentsContext} from "../Context/Comments/Context";
import TextInput from "./TextInput";
import CommentType from "../Types/CommentType";
import React, {useState} from "react";
import {ChatBubbleLeftRightIcon, XCircleIcon} from '@heroicons/react/24/solid'

const Comment = React.memo(({id, body, comments}: CommentType) => {
	const {dispatch} = useCommentsContext();
	const [inputOpened, setInputOpened] = useState<boolean>(false);

	const onSubmitComment = (parentId: string, body: string) => {
		dispatch({type: "ADD", payload: {parentId, body}});
		onToggleInput();
	}

	const onToggleInput = () => {
		setInputOpened(value => !value);
	}

	return (
		<section className="flex py-4">
			<div className="flex-col grow bg-slate-300 p-2 rounded-xl border border-gray-200">
				<div>
					<span className="block text-base py-4">{body}</span>
				</div>
				<div>
					<button
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"
						type="button"
						onClick={onToggleInput}>
						{!inputOpened && (<ChatBubbleLeftRightIcon className="size-4 text-white"/>)}
						{inputOpened && (<XCircleIcon className="size-4 text-white"/>)}
						<span className="sr-only">Toggle input</span>
					</button>
				</div>
				<div className="py-4">
					{inputOpened && <TextInput onSubmit={(text) => onSubmitComment(id, text)}/>}
				</div>
				<div>
					{comments.map((comment) => (<Comment {...comment} key={`comment_${comment.id}`}/>))}
				</div>
			</div>
		</section>
	);
})

export default Comment;