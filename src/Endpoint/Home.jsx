import { useEffect, useState } from "react"
import { Container } from "reactstrap"
import CardDeck from "react-bootstrap/CardDeck"
import { useQuery } from '@apollo/client'

import Jumbo from "../Component/Jumbo"
import RepoCards from "../Component/RepoCards"
import CommitCards from "../Component/CommitCards"
import Loading from "../Component/Loading"
import { GET_PINNED_REPOS } from "../Util/query"


// Returns name and description from Repository.
// Since pinnedItems' node is a union of Gist and Repository, I had to
// explicitly define what to do with each type.

function Home() {
	const title = "Projects"
	const message = "Pinned projects fetched from Github using their GQL API."

	const { loading, error, data } = useQuery(GET_PINNED_REPOS);
	const [clicked, setClicked] = useState(false)
	const [repoInfo, setRepoInfo] = useState(
		{ name: "Website", owner: "FernandoH-G" })

	useEffect(() => {
		console.log("useEffect() called.")
		// Use this to make a new query?
		return (
			<p>After repo is changed!</p>
		)
	}, [])

	if (loading) return (
		<Container>
			<Jumbo title={title} message={message} />
			<CardDeck>
				<Loading
					message="Fetching pinned repositories..."
					color="secondary" />
			</CardDeck>
		</Container>
	);
	if (error) return (
		<Container>
			<Jumbo title={title} message={message} />
			<CardDeck>
				<Loading
					message="Error fetching pinned repositories."
					color="danger" />
			</CardDeck>
		</Container>
	);
	const pinEdges = data.user.pinnedItems.edges
	return (
		<Container >
			<Jumbo title={title} message={message} />
			<CardDeck>
				<RepoCards
					edges={pinEdges}
					setRepoInfo={setRepoInfo}
					setClicked={setClicked}
				/>
			</CardDeck>
			<br />
			<CardDeck>
				{clicked &&
					<CommitCards repoInfo={repoInfo} />
				}
			</CardDeck>
		</Container>
	);
}

export default Home;