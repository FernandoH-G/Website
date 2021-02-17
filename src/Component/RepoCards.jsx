import { useState } from "react"
import { Card, ButtonGroup, ToggleButton } from "react-bootstrap"
import CommitCards from "../Component/CommitCards"
import CardDeck from "react-bootstrap/CardDeck"

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
	const [clicked, setClicked] = useState(false)
	const [repoInfo, setRepoInfo] = useState(
		{ name: "Website", owner: "FernandoH-G" })

	return (
		props.edges.map((pin, idx) => (
			console.log(`repo card: ${idx} rendered`),
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
							setRepoInfo(
								{
									name: pin.node.name,
									owner: pin.node.owner.login
								})
							// console.log(radioValue, pin.node.name);
							// console.log("clicked: ",props.clicked)
							if (radioValue === pin.node.name) {
								setClicked(false)
							}
							else setClicked(true)
						}}>
						Last Update:{' '}
						{parseDate(pin.node.pushedAt)}
					</ToggleButton>
				</ButtonGroup>
				{/* {clicked && pin.node.name === repoInfo.name &&
					// <CommitCards repoInfo={repoInfo} />
					<>
					<p>test</p>
					<p>test</p>
					<p>test</p>
					<p>test</p>
					<p>test</p>
					</>
				} */}
				{clicked && pin.node.name === repoInfo.name &&
					<CommitCards repoInfo={repoInfo} />
				}
			</Card>
		))
	)
	// return props.edges.map(pin => (
	// 	console.log("repo cards rendered"),
	// 	<Card
	// 		key={pin.node.name}
	// 		className="text-center"
	// 		border="light">
	// 		<Card.Body>
	// 			<Card.Header as="h5"> {pin.node.name}</Card.Header>
	// 			<Card.Link href={pin.node.url}>
	// 				<Card.Img variant="top" src={chooseIMG(pin.node.name)} />
	// 			</Card.Link>
	// 			<Card.Text> {pin.node.description}</Card.Text>
	// 		</Card.Body>
	// 		<ButtonGroup toggle>
	// 			<ToggleButton
	// 				key={pin.node.name}
	// 				type="radio"
	// 				variant="outline-secondary"
	// 				name="Button Radio"
	// 				value={pin.node.name}
	// 				checked={radioValue === pin.node.name}
	// 				onChange={(e) => setRadioValue(e.currentTarget.value)}
	// 				onClick={() => {
	// 					setRepoInfo(
	// 						{ name: pin.node.name, 
	// 							owner: pin.node.owner.login })
	// 					// console.log(radioValue, pin.node.name);
	// 					// console.log("clicked: ",props.clicked)
	// 					if (radioValue === pin.node.name) {
	// 						setClicked(false)
	// 					}
	// 					else setClicked(true)
	// 				}}>
	// 				Last Update:{' '}
	// 				{parseDate(pin.node.pushedAt)}
	// 			</ToggleButton>
	// 		</ButtonGroup>
	// 			{clicked && pin.node.name === repoInfo.name &&
	// 				<CommitCards repoInfo={repoInfo} />
	// 			}
	// 	</Card>
	// ));
}

export default RepoCards