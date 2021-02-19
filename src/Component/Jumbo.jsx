import Jumbotron from "react-bootstrap/Jumbotron";

function Jumbo(props) {
	return (
		<Jumbotron style={{
			backgroundColor: "#282c34",
			color: "white",
			borderRadius: "0 0 5px 5px"
		}}><h1 className="display-3">{props.title}</h1>
			<p className="lead">{props.message}</p>
		</Jumbotron>
	);
}

export default Jumbo;