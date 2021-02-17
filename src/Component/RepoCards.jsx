import { useState } from "react"
import { Card, ButtonGroup, ToggleButton } from "react-bootstrap"

import ic_gw2items from "./../Images/ic_gw2_items_512x512.png"
import ic_gw2itemsServer from "./../Images/ic_gw2_items_server_512x512.png"
import ic_snipsnap from "./../Images/ic_snipsnap_512x512.png"
import ic_snipsnapServer from "./../Images/ic_snipsnap_server_512x512.png"
import ic_website from "./../Images/ic_my_pig_512x512.png"

import { parseDate } from "./../Util/helpers"

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
	const [radioValue, setRadioValue] = useState("");

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
			</Card.Body>
			<ButtonGroup toggle>
				<ToggleButton
					key={pin.node.name}
					type="radio"
					variant="outline-secondary"
					name="Button Radio"
					value={pin.node.name}
					checked={radioValue === pin.node.name}
					onChange={(e) => setRadioValue(e.currentTarget.value)}
					onClick={() => {
						props.setRepoInfo(
							{
								name: pin.node.name,
								owner: pin.node.owner.login
							})
						// console.log(radioValue, pin.node.name);
						// console.log("clicked: ",props.clicked)
						if (radioValue === pin.node.name) {
							props.setClicked(false)
						}
						else props.setClicked(true)
					}}>
					Last Update:{' '}
					{parseDate(pin.node.pushedAt)}
				</ToggleButton>
			</ButtonGroup>
		</Card>
	));
}

export default RepoCards