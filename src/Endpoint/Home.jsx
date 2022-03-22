// React
import { useState, useEffect } from "react"

// Internal Components
import Commits from "../Component/Commits"
import Info from "../Component/Info"
import Loading from "../Component/Loading"
import { parseDate } from "./../Util/helpers"
import { GET_PINNED_REPOS } from "../Util/query"
import { ReactComponent as BackIcon } from "../Images/arrow_back_black_24dp.svg"
import { ReactComponent as ForwardIcon } from "../Images/arrow_forward_black_24dp.svg"

// External Library
import { Container } from "react-bootstrap"
import { useQuery } from '@apollo/client'

function Home(props) {
	const { setHeaderMessage } = props
	const title = "Projects"
	const message = "Projects fetched from Github using their GQL API."
	const { data } = useQuery(GET_PINNED_REPOS);
	const [repos, setRepos] = useState(null)
	const [repoIndex, setRepoIndex] = useState(0)
	const [currentRepo, setCurrentRepo] = useState(null)

	function forwardRepo() {
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