import { useState } from "react"
import { Container } from "react-bootstrap"
import CardDeck from "react-bootstrap/CardDeck"

import CommitCards from "../Component/CommitCards"
import Jumbo from "../Component/Jumbo"
import RepoCards from "../Component/RepoCards"

function Home() {
	const title = "Projects"
	const message = "Projects fetched from Github using their GQL API."
	const [clicked, setClicked] = useState(() => false)
	const [repoInfo, setRepoInfo] = useState({ name: "Website", owner: "FernandoH-G" })

	return (
		<Container>
			<Jumbo title={title} message={message} />
			<CardDeck>
				<RepoCards setClicked={setClicked} setRepoInfo={setRepoInfo} />
			</CardDeck>
			<br />
			<CardDeck>
				{clicked && <CommitCards repoInfo={repoInfo} />}
			</CardDeck>
		</Container>
	);
}

export default Home;