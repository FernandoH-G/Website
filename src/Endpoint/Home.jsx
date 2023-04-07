// React
import { useState, useEffect } from "react"

// Internal
import Commits from "../Component/Commits"
import Info from "../Component/Info"
import Loading from "../Component/Loading"
import { parseDate } from "./../Util/helpers"
import { GET_PINNED_REPOS } from "../Util/query"
import { ReactComponent as BackIcon } from "../Images/arrow_back_black_24dp.svg"
import { ReactComponent as ForwardIcon } from "../Images/arrow_forward_black_24dp.svg"

// External Library
import Container from "react-bootstrap/Container"
import Typography from '@mui/material/Typography';
import { useQuery } from '@apollo/client'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Home(props) {
	const { setHeaderMessage } = props
	const title = "Projects"
	const message = "Projects fetched from Github using their GQL API."
	const { data } = useQuery(GET_PINNED_REPOS);
	const [repos, setRepos] = useState(null)
	const [repoIndex, setRepoIndex] = useState(0)
	const [currentRepo, setCurrentRepo] = useState(null)
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('md'));

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
				{
					matches
						?
						<section className="carousel-style">
							<div className="nav-button-container">
								<BackIcon
									className="nav-button-style"
									onClick={backwardRepo}
								/>
							</div>
							<Info currentRepo={currentRepo} />
							<section className="column-style">
								<Typography
									style={{ color: "white" }}
									gutterBottom
									variant="overline">
									Last Repository Update: {parseDate(currentRepo.pushedAt)}
								</Typography>
								<Commits currentRepo={currentRepo} />
							</section>
							<div className="nav-button-container">
							<ForwardIcon
								className="nav-button-style"
								onClick={forwardRepo}
							/>
							</div>
						</section>
						:
						<section>
							<section className="column-style" >
								<div style={{ marginBottom: "12px" }}>
									{/* Have Back and Forward icons to the left and right of 
						Home. It should act like carousel buttons! */}
									{/* ONLY WHEN NOT IN MOBILE MODE!!! */}
									<BackIcon
										className="nav-button-style-mobile"
										onClick={backwardRepo}
									/>
									<ForwardIcon
										className="nav-button-style-mobile"
										onClick={forwardRepo}
									/>
								</div>
								<Info currentRepo={currentRepo} />
							</section>
							{/* Commits */}
							<section className="column-style">
								<Typography
									style={{ color: "white" }}
									gutterBottom
									variant="overline">
									Last Repository Update: {parseDate(currentRepo.pushedAt)}
								</Typography>
								<Commits currentRepo={currentRepo} />
							</section>
						</section>
				}
			</main>
		</Container>
	);
}

export default Home;