import { useState } from "react"
import { Card, ButtonGroup, Button } from "react-bootstrap"
import { useQuery } from '@apollo/client'

import Loading from "../Component/Loading"
import { GET_PINNED_REPOS } from "../Util/query"
import { parseDate, chooseIMG } from "./../Util/helpers"

function RepoCards(props) {
	const { loading, error, data } = useQuery(GET_PINNED_REPOS);

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
				className="text-center">
				<Card.Title as="h2"> {pin.node.name}</Card.Title>
				<Card.Body >
					<Card.Link href={pin.node.url}>
						<Card.Img variant="top" src={chooseIMG(pin.node.name)} />
					</Card.Link>
					<Card.Text> {pin.node.description}</Card.Text>
				</Card.Body>
				<ButtonGroup toggle>
					<Button
						key={pin.node.name}
						variant="outline-secondary"
						onClick={() => {
							const newRepoInfo =
								props.repoInfo && props.repoInfo.name === pin.node.name
									? null
									: {
										name: pin.node.name,
										owner: pin.node.owner.login,
									};
							props.setRepoInfo(newRepoInfo);
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