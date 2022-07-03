import { useState } from "react"
import Card from "react-bootstrap/Card"
import Button from 'reactstrap/Button';
import ButtonGroup from 'reactstrap/ButtonGroup';
import { useQuery } from '@apollo/client'

import Loading from "../Component/Loading"
import { GET_PINNED_REPOS } from "../Util/query"
import { parseDate, chooseIMG } from "./../Util/helpers"

function RepoCards(props) {
	const { loading, error, data } = useQuery(GET_PINNED_REPOS);
	const [rSelected, setRSelected] = useState("");

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
		pinEdges.map(pin => (
			<Card
				key={pin.node.name}
				className="repo-card">
				<Card.Title as="h2"> {pin.node.name}</Card.Title>
				<Card.Body >
					<Card.Link href={pin.node.url}>
						<Card.Img variant="top" src={chooseIMG(pin.node.name)} />
					</Card.Link>
					<Card.Text> {pin.node.description}</Card.Text>
				</Card.Body>
				<ButtonGroup>
					<Button
						key={pin.node.name}
						outline
						color="secondary"
						active={rSelected === pin.node.name}
						onClick={() => {
							setRSelected(pin.node.name)
							props.setRepoInfo({
								name: pin.node.name,
								owner: pin.node.owner.login
							})
							if (rSelected === pin.node.name) {
								setRSelected("")
								props.setClicked(prevVal => !prevVal)
							} else { props.setClicked(true) }
						}}>
						Last Update:{' '}
						{parseDate(pin.node.pushedAt)}
					</Button>
				</ButtonGroup>
			</Card>
		))
	)
}

export default RepoCards