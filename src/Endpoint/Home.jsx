import { useState } from "react"
import { Container } from "react-bootstrap"
// import CardDeck from "react-bootstrap/CardDeck"

// import CommitCards from "../Component/CommitCards"
// import RepoCards from "../Component/RepoCards"
import Commits from "../Component/Commits"
import Info from "../Component/Info"
import { useEffect } from "react"
import { ReactComponent as BackIcon } from "../Images/arrow_back_black_24dp.svg"
import { ReactComponent as ForwardIcon } from "../Images/arrow_forward_black_24dp.svg"

import Loading from "../Component/Loading"
import { GET_PINNED_REPOS } from "../Util/query"
import { useQuery } from '@apollo/client'

function Home(props) {
	const { setHeaderMessage } = props
	const title = "Projects"
	const message = "Projects fetched from Github using their GQL API."
	const [clicked, setClicked] = useState(() => false)
	const { loading, error, data } = useQuery(GET_PINNED_REPOS);
	// const [repoInfo, setRepoInfo] = useState(null)

	useEffect(() => {
		setHeaderMessage({ title: title, subtitle: message })
	}, [setHeaderMessage])
	if (loading) return (
		<Container>
			<main className="project-info-style">
				<section className="column-style">
					<Loading
						message="Fetching pinned repositories..."
						color="secondary"
					/>
				</section>
			</main>
		</Container>
	)
	if (error) return (
		<Container>
			<main className="project-info-style">
				<section className="column-style">
					<Loading
						message="Fetching pinned repositories..."
						color="secondary"
					/>
				</section>
			</main>
		</Container>
	)
	const pinEdges = data.user.pinnedItems.edges
	console.log("pinEdges: ", pinEdges)
	// currentRepo contains fields:
	// name, description, openGraphImageUrl, etc.
	const currentRepo = pinEdges[0].node
	console.log("currentRepo: ", currentRepo)

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
					<Info currentRepo={currentRepo} />
				</section>
				{/* Commits */}
				<section className="column-style">
					<p>
						Last Updated
					</p>
					<Commits currentRepo={currentRepo} />
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