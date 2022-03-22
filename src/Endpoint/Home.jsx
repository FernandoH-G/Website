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

import { parseDate } from "./../Util/helpers"
import Loading from "../Component/Loading"
import { GET_PINNED_REPOS } from "../Util/query"
import { useQuery } from '@apollo/client'


// import Jumbo from"../Component/Jumbo"


function Home(props) {
	const { setHeaderMessage } = props
	const title = "Projects"
	const message = "Projects fetched from Github using their GQL API."
	const {  data } = useQuery(GET_PINNED_REPOS);
	// const [clicked, setClicked] = useState(() => false)
	const [repos, setRepos] = useState(null)
	const [repoIndex, setRepoIndex] = useState(0)
	const [currentRepo, setCurrentRepo] = useState(null)

	function forwardRepo() {
		// const tmpIndex = repoIndex % repos.length
		const tmpIndex = (repoIndex + 1) % repos.length
		const absIndex = Math.abs(tmpIndex)
		const currentRepo = repos[absIndex].node
		setRepoIndex(tmpIndex)
		setCurrentRepo(currentRepo)
	}
	function backwardRepo() {
		const tmpIndex = (repoIndex - 1) % repos.length
		const absIndex = Math.abs(tmpIndex)
		const currentRepo = repos[absIndex].node
		setRepoIndex(tmpIndex)
		setCurrentRepo(currentRepo)

	}

	useEffect(() => {
		setHeaderMessage({ title: title, subtitle: message })
	}, [setHeaderMessage])

	useEffect(() => {
		if (data !== undefined) {
			const pinEdges = data.user.pinnedItems.edges
			// currentRepo contains fields:
			// name, description, openGraphImageUrl, etc.
			const repoArr = pinEdges
			setRepos(repoArr)
			const currentRepo = repoArr[0].node
			setCurrentRepo(currentRepo)
		}
	}, [data])

	if (!currentRepo) return (
		<Container>
			<main className="project-info-style">
				<section className="column-style">
					<Loading />
				</section>
			</main>
		</Container>
	)
	// if (error) return (
	// 	<Container>
	// 		<main className="project-info-style">
	// 			<section className="column-style">
	// 				<Loading
	// 					message="Fetching pinned repositories..."
	// 					color="secondary"
	// 				/>
	// 			</section>
	// 		</main>
	// 	</Container>
	// )

	// const pinEdges = data.user.pinnedItems.edges
	// // currentRepo contains fields:
	// // name, description, openGraphImageUrl, etc.
	// console.log("pinEdges: ", pinEdges)
	// const currentRepo = pinEdges[0].node
	// console.log("currentRepo: ", currentRepo)
	// console.log("repos: ", repos)

	return (
		<Container>
			{/* Outer div to hold info | commits */}
			{/* I'm passing standard props to this test component as if
			this component is a div, p, section etc.*/}
			{/* <Jumbo onClick={() => console.log("hi")} style={{color: "white"}} /> */}
			<main className="project-info-style">
				{/* Info */}
				<section className="column-style" >
					<div>
						<BackIcon
							className="nav-button-style"
							onClick={backwardRepo}
						/>
						<ForwardIcon
							className="nav-button-style"
							onClick={forwardRepo}
						/>
					</div>
					<Info currentRepo={currentRepo} />
				</section>
				{/* Commits */}
				<section className="column-style">
					<p>
						Last Repository Update: {parseDate(currentRepo.pushedAt)}
					</p>
					<Commits currentRepo={currentRepo} />
				</section>
			</main>
		</Container>
	);
}

export default Home;