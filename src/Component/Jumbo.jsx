import Jumbotron from "react-bootstrap/Jumbotron";

function Jumbo(props) {
	return (
		<Jumbotron style={{
			backgroundColor: "#343a40",
			color: "white",
			// color: "#d7cebb",
			borderRadius: "0 35px 0 35px",
			padding: "45px 35px 45px 35px"
		}}
		>
			<h1 className="display-3">{props.title}</h1>
			<p className="lead" style={{color:"rgb(177, 173, 173)"}}>{props.message}</p>
		</Jumbotron>
	);
}

export default Jumbo;