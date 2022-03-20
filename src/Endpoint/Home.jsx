import { useState } from "react"
import { Container } from "react-bootstrap"
import CardDeck from "react-bootstrap/CardDeck"

import CommitCards from "../Component/CommitCards"
import RepoCards from "../Component/RepoCards"
import Commits from "../Component/Commits"
import Info from "../Component/Info"
import { useEffect } from "react"
import { ReactComponent as BackIcon } from "../Images/arrow_back_black_24dp.svg"
import { ReactComponent as ForwardIcon } from "../Images/arrow_forward_black_24dp.svg"

function Home(props) {
	const { setHeaderMessage } = props
	const title = "Projects"
	const message = "Projects fetched from Github using their GQL API."
	const [clicked, setClicked] = useState(() => false)
	const [repoInfo, setRepoInfo] = useState(null)

	useEffect(() => {
		setHeaderMessage({ title: title, subtitle: message })
	}, [setHeaderMessage])

	return (
		<Container>
			{/* Outer div to hold info | commits */}
			<main className="project-info-style">
				{/* Info */}
				<section className="column-style">
					<div>
						<BackIcon
							className="nav-button-style"
						/>
						<ForwardIcon
							className="nav-button-style"
						/>
					</div>
					<Info />
				</section>
				{/* Commits */}
				<section className="column-style">
					<p>
						Last Updated
					</p>
					<Commits />
				</section>
			</main>
			{/* <div className="flex-area">
				<RepoCards
					clicked={clicked}
					setClicked={setClicked}
					setRepoInfo={setRepoInfo}
				/>
			</div>
			<CardDeck>
				{clicked && <CommitCards repoInfo={repoInfo} />}
			</CardDeck> */}
		</Container>
	);
}

export default Home;