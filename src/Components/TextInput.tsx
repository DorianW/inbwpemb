import {useState} from "react";

type Props = {
	onSubmit: (text: string) => void;
}

const TextInput = ({onSubmit}: Props) => {
	const [text, setText] = useState<string>('');
	const onClick = () => {
		onSubmit(text);
		setText('');
	}
	return (
		<form className="flex flex-col justify-start w-1/2">
			<textarea
				className="p-4 rounded my-2"
				value={text} onChange={(event) => setText(() => event.target.value)}
				placeholder="Your comment..."
			/>
			<button className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-small rounded-lg text-sm px-4 py-2.5 me-2 mb-2 focus:outline-none w-1/3 ${!text ? 'cursor-not-allowed opacity-50' : ''}`}
			        onClick={onClick}
			        disabled={!text}
			>
				Add comment
			</button>
		</form>
	);
}

export default TextInput;