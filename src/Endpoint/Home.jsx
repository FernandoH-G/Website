import { useState } from "react"
import { Container } from "react-bootstrap"
import CardDeck from "react-bootstrap/CardDeck"

import CommitCards from "../Component/CommitCards"
import RepoCards from "../Component/RepoCards"
import { useEffect } from "react"

function Home(props) {
	const { setHeaderMessage } = props
	const title = "Projects"
	const message = "Projects fetched from Github using their GQL API."
	const [clicked, setClicked] = useState(() => false)
	const [repoInfo, setRepoInfo] = useState(null)

	useEffect(() => {
		console.log("Home useEffect")
		setHeaderMessage({ title: title, subtitle: message })
	}, [setHeaderMessage])

	return (
		<Container>
			{/* <Jumbo title={title} message={message} /> */}
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