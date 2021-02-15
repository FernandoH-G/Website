import Jumbo from "../Component/Jumbo"
import { Container } from "reactstrap"
import { Col, Row, Image } from "react-bootstrap"
import myPig from "./../Images/ic_my_pig_512x512.png"

function About() {
	const title = "Fernando Herrera-Gomez"
	const message = "Software Developer"
	return (
		<Container>
			<Jumbo title={title} message={message} />
				<h1>Meet me</h1>
			<Row>
				<Col md="auto">
					<Image src={myPig} alt="mypig"/>
				</Col>
				<Col>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a orci ac massa malesuada tempus. Mauris vulputate turpis lorem, ut scelerisque justo dapibus in. Ut dolor nibh, porta in eros non, fringilla condimentum urna. Vivamus turpis lacus, blandit non sapien et, tempor consectetur nisi. Praesent sed risus eget turpis pharetra rhoncus nec vel felis. Nunc eget porta orci, sed porta nunc. Fusce in mauris nibh. Aenean consequat ex id orci ultricies, eu molestie lacus tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam magna enim, tempus sit amet nibh consequat, finibus sollicitudin neque. Sed commodo elit id felis pulvinar gravida.

				Curabitur tincidunt euismod lorem quis auctor. Aliquam quis ullamcorper neque. Curabitur bibendum leo quis nisl lacinia tincidunt a at lectus. Sed finibus felis lectus, vel varius augue aliquam a. Nulla elit leo, sodales sed suscipit sollicitudin, laoreet a tellus. Sed porta augue nibh, sed molestie metus commodo at. Sed leo dui, placerat ac urna in, semper maximus lacus. In tempus suscipit ligula, nec feugiat massa finibus eget. Suspendisse at venenatis mauris. Proin elementum lacinia lectus, sit amet pharetra mi semper at. Quisque justo nunc, lacinia ut hendrerit et, aliquam a nisl. Morbi et justo dui. Quisque tincidunt ex ac sem accumsan, eu finibus ante imperdiet. Vivamus in eros at augue ornare mollis. Sed pellentesque posuere felis non condimentum. Duis sit amet sagittis neque.
				</Col>
			</Row>
				<h1>My Passions</h1>
			<Row>
				<Col md="auto">
					<Image src={myPig} alt="mypig"/>
				</Col>
				<Col>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a orci ac massa malesuada tempus. Mauris vulputate turpis lorem, ut scelerisque justo dapibus in. Ut dolor nibh, porta in eros non, fringilla condimentum urna. Vivamus turpis lacus, blandit non sapien et, tempor consectetur nisi. Praesent sed risus eget turpis pharetra rhoncus nec vel felis. Nunc eget porta orci, sed porta nunc. Fusce in mauris nibh. Aenean consequat ex id orci ultricies, eu molestie lacus tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam magna enim, tempus sit amet nibh consequat, finibus sollicitudin neque. Sed commodo elit id felis pulvinar gravida.

				Curabitur tincidunt euismod lorem quis auctor. Aliquam quis ullamcorper neque. Curabitur bibendum leo quis nisl lacinia tincidunt a at lectus. Sed finibus felis lectus, vel varius augue aliquam a. Nulla elit leo, sodales sed suscipit sollicitudin, laoreet a tellus. Sed porta augue nibh, sed molestie metus commodo at. Sed leo dui, placerat ac urna in, semper maximus lacus. In tempus suscipit ligula, nec feugiat massa finibus eget. Suspendisse at venenatis mauris. Proin elementum lacinia lectus, sit amet pharetra mi semper at. Quisque justo nunc, lacinia ut hendrerit et, aliquam a nisl. Morbi et justo dui. Quisque tincidunt ex ac sem accumsan, eu finibus ante imperdiet. Vivamus in eros at augue ornare mollis. Sed pellentesque posuere felis non condimentum. Duis sit amet sagittis neque.
				</Col>
			</Row>
		</Container>
	);
}

export default About;
