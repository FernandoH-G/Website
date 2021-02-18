import { Container } from "react-bootstrap"
import CardDeck from "react-bootstrap/CardDeck"
import { useEffect, useState } from "react"

import CommitCards from "../Component/CommitCards"
import Jumbo from "../Component/Jumbo"
import RepoCards from "../Component/RepoCards"

function Home() {
	const title = "Projects"
	const message = "Pinned projects fetched from Github using their GQL API."
	// const [clicked, setClicked] = useState(() => false)
	const [clicked, setClicked] = useState(() => false)
	const [repoInfo, setRepoInfo] = useState({ name: "Website", owner: "FernandoH-G" })

	return (
		console.log("home rendered"),
		<Container>
			<Jumbo title={title} message={message} />
			<CardDeck>
				<RepoCards setClicked={setClicked} setRepoInfo={setRepoInfo} />
			</CardDeck>
			<br/>
			<CardDeck>
				{clicked && <CommitCards repoInfo={repoInfo} />}
			</CardDeck>
		</Container>
	);
}

export default Home;