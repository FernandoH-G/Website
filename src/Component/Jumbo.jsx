import React from "react";
import { Jumbotron } from "reactstrap";
function Jumbo(props) {
	return (
		<Jumbotron style={{ backgroundColor: "#282c34", color: "white" }}>
			<h1 className="display-3">{props.title}</h1>
			<p className="lead">{props.message}</p>
		</Jumbotron>
	);
}

export default Jumbo;