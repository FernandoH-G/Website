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


	const navButtonStyle = {
		height: "40px",
		width: "40px"
	}

	const columnStyle = {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		maxWidth: "50%",
	}

	useEffect(() => {
		setHeaderMessage({ title: title, subtitle: message })
	}, [setHeaderMessage])

	return (
		<Container>
			{/* Outer div to hold info | commits */}
			<div style={{
				display: "flex",
				flexWrap: "wrap"
			}}>
				{/* Info */}
				<div style={columnStyle}>
					<div>
						<BackIcon
							style={navButtonStyle}
						/>
						<ForwardIcon
							style={navButtonStyle}
						/>
					</div>
					<Info />
				</div>
				{/* Commits */}
				<div style={columnStyle}>
					<div>
						Last Updated
					</div>
					<Commits />
				</div>
			</div>
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