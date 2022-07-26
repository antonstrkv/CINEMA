import { Link } from "react-router-dom";
import { FC } from "react";

const Notfoundpage: FC = () => {
	return (
		<div>
			This page doesn't exist. Go <Link to="/">Home</Link>
		</div>
	)
}

export { Notfoundpage };