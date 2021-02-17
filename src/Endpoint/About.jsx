import { Col, Row, Image, Container } from "react-bootstrap"

import Jumbo from "../Component/Jumbo"
import me from "./../Images/me.jpg"
import {meet_me}from "./../Text/about.json"

function About() {
	const title = "Fernando Herrera-Gomez"
	const message = "Software Developer"
	return (
		<Container>
			<Jumbo title={title} message={message} />
			<Row>
				<Col md="auto">
					<Image src={me} alt="mypig" />
				</Col>
				<Col>
				{meet_me}
				</Col>
			</Row>
		</Container>
	);
}

export default About;
