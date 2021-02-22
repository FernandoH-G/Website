import { useState } from "react"
import { Container } from "react-bootstrap"
import CardDeck from "react-bootstrap/CardDeck"

import CommitCards from "../Component/CommitCards"
import Jumbo from "../Component/Jumbo"
import RepoCards from "../Component/RepoCards"

function Home() {
	const title = "Projects"
	const message = "Projects fetched from Github using their GQL API."
	const [repoInfo, setRepoInfo] = useState(null)

	return (
		<Container>
			<Jumbo title={title} message={message} />
			<CardDeck>
				<RepoCards
					repoInfo={repoInfo}
					setRepoInfo={setRepoInfo} />
			</CardDeck>
			<br />
			<CardDeck>
				{repoInfo && <CommitCards repoInfo={repoInfo} />}
			</CardDeck>
		</Container>
	);
}

export default Home;