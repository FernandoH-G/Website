import { Card, Button } from "react-bootstrap"

import ic_gw2items from "./../Images/ic_gw2_items_512x512.png"
import ic_gw2itemsServer from "./../Images/ic_gw2_items_server_512x512.png"
import ic_snipsnap from "./../Images/ic_snipsnap_512x512.png"
import ic_snipsnapServer from "./../Images/ic_snipsnap_server_512x512.png"
import ic_website from "./../Images/ic_my_pig_512x512.png"

function chooseIMG(name) {
	switch (name) {
		case "GW2-Items":
			return ic_gw2items
		case "GW2-Items-Server":
			return ic_gw2itemsServer
		case "SnipSnap-Barber":
			return ic_snipsnap
		case "SnipSnap-Barber-Server":
			return ic_snipsnapServer
		case "Website":
			return ic_website
		default:
			return "https://avatars.githubusercontent.com/u/23583398?s=400&v=4"
	}
}

function RepoCards(props) {
	function handleClick(name) {
		// console.log("RepoCards handleClick name: ",name)
		props.onClick(name)
	}
	return props.edges.map(pin => (
		<Card
			key={pin.node.name}
			className="text-center"
			border="light">
			<Card.Body>
				<Card.Header as="h5"> {pin.node.name}</Card.Header>
				<Card.Link href={pin.node.url}>
					<Card.Img variant="top" src={chooseIMG(pin.node.name)} />
				</Card.Link>
				<Card.Text> {pin.node.description}</Card.Text>
				<Button size="sm" variant="outline-secondary" onClick={() => handleClick(pin.node.name)} >
					Last Update:{' '}
					{new Intl.DateTimeFormat("en-GB", {
						year: "numeric",
						month: "long",
						day: "2-digit"
					}).format(new Date(pin.node.pushedAt))}
				</Button>
			</Card.Body>
		</Card>
	));
}

export default RepoCards