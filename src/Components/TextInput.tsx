import {useState} from "react";

type Props = {
	onSubmit: (text: string) => void;
	placeholder?: string;
	buttonText?: string;
}

const TextInput = ({onSubmit, placeholder = 'Your comment...', buttonText = 'Submit comment'}: Props) => {
	const [text, setText] = useState<string>('');
	const onClick = () => {
		onSubmit(text);
		setText('');
	}
	return (
		<form className="flex flex-col justify-start w-full sm:w-6/12">
			<textarea
				className="p-4 rounded my-2 border-2"
				value={text} onChange={(event) => setText(() => event.target.value)}
				placeholder={placeholder}
			/>
			<button
				className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-small rounded-lg text-sm px-4 py-2.5 me-2 mb-2 focus:outline-none w-full sm:w-1/2 ${!text ? 'cursor-not-allowed opacity-50' : ''}`}
				onClick={onClick}
				disabled={!text}
			>
				{buttonText}
			</button>
		</form>
	);
}

export default TextInput;