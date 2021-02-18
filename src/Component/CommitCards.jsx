import { Card } from "react-bootstrap"
import { useQuery } from '@apollo/client'

import Loading from "./../Component/Loading"
import { parseText, parseDate } from "./../Util/helpers"
import { GET_REPO_COMMITS } from "../Util/query"

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
		<Card
			key={com.node.url}
			bg={"dark"}
			style={{ color: "white" }}
			border="info">
			<Card.Body>
				<Card.Link href={com.node.url}>
					Commit Date:{'\n'}
					{parseDate(com.node.pushedDate)}
				</Card.Link>
				<Card.Text>
					{parseText(com.node.message)}
				</Card.Text>
			</Card.Body>
		</Card>
	))
}

export default CommitCards