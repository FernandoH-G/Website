import { useEffect, useState } from "react"
import { Card, ButtonGroup, ToggleButton } from "react-bootstrap"
import { useQuery } from '@apollo/client'

import Loading from "../Component/Loading"
import { GET_PINNED_REPOS } from "../Util/query"
import { parseDate, chooseIMG} from "./../Util/helpers"

function RepoCards(props) {
	const { loading, error, data } = useQuery(GET_PINNED_REPOS);
	const [radioValue, setRadioValue] = useState("");

	if (loading) return (
		<Loading
			message="Fetching pinned repositories..."
			color="secondary" />
	)
	if (error) return (
		<Loading
			message="Error fetching pinned repositories."
			color="danger" />
	)
	const pinEdges = data.user.pinnedItems.edges

	return (
		pinEdges.map((pin, idx) => (
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
							console.log(`${idx} clicked!`)
							props.setRepoInfo(
								{
									name: pin.node.name,
									owner: pin.node.owner.login
								})
							// props.setClicked( !clicked)
							if (radioValue === pin.node.name) {
								props.setClicked(prevVal => !prevVal)
							} else {props.setClicked(true)}
						}}>
						Last Update:{' '}
						{parseDate(pin.node.pushedAt)}
					</ToggleButton>
				</ButtonGroup>
			</Card>
		))
	)
}

export default RepoCards