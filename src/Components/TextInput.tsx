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
		<div>
			<textarea value={text} onChange={(event) => setText(() => event.target.value)}></textarea>
			<button onClick={onClick} disabled={!text}>
				Add comment
			</button>
		</div>
	);
}

export default TextInput;