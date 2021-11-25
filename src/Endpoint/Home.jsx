import { useState } from "react"
import { Container } from "react-bootstrap"
import CardDeck from "react-bootstrap/CardDeck"

import CommitCards from "../Component/CommitCards"
import Jumbo from "../Component/Jumbo"
import RepoCards from "../Component/RepoCards"
import Projects from "../Component/Projects"

function Home() {
	const title = "Projects"
	const message = "Projects fetched from Github using their GQL API."
	const [clicked, setClicked] = useState(() => false)
	const [repoInfo, setRepoInfo] = useState(null)

	return (
		<Container>
			<Jumbo title={title} message={message} />
			<div className="flex-area">
				<RepoCards
					clicked={clicked}
					setClicked={setClicked}
					setRepoInfo={setRepoInfo}
				/>
			</div>
			<CardDeck>
				{clicked && <CommitCards repoInfo={repoInfo} />}
			</CardDeck>
		</Container>
	);
}

export default Home;