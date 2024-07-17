import {useContext} from "react";
import {PostingsContext} from "../Context/Context";
import Posting from "../Components/Posting";

const Postings = () => {
	const postings = useContext(PostingsContext);

	return (
		<>
			{postings.map(posting => (<Posting {...posting} key={posting.id}/>))}
		</>
	);
}

export default Postings;