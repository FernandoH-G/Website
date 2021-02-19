import { Card, Image } from "react-bootstrap"
import { useQuery } from '@apollo/client'

import Loading from "./../Component/Loading"
import { parseText, parseDate } from "./../Util/helpers"
import { GET_REPO_COMMITS } from "../Util/query"

import link from ".././Images/ic_external_link_16x16.png"

const CommitCards = (props) => {
	const name = props.repoInfo.name
	const owner = props.repoInfo.owner
	const { loading, error, data } = useQuery(GET_REPO_COMMITS, {
		variables: { name, owner },
	});
	if (loading) return (
		<Loading message={`Fetching ${name} commits...`} color="secondary" />
	);
	if (error) return (
		<Loading message={`Error fetching ${name} commits.`} color="danger" />
	);

	const commits = data.repository.defaultBranchRef.target.history.edges
	return commits.map(com => (
		<Card key={com.node.url}>
			<Card.Header style={{
				backgroundColor: "#343a40",
				color: "#d7cebb"
			}}>Commit Date:<br/>{parseDate(com.node.committedDate)}
				<Card.Link href={com.node.url}>
					<Image src={link} fluid/>
				</Card.Link>
			</Card.Header>
			<Card.Body style={{
				backgroundColor: "#282c34",
				color: "white"
			}}>{parseText(com.node.message)}</Card.Body>
		</Card>
	))
}

export default CommitCards