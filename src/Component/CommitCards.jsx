import { Card} from "react-bootstrap"
import { useQuery, gql } from '@apollo/client'

import Loading from "./../Component/Loading"
import { parseText, parseDate } from "./../Util/helpers"

const GET_REPO_COMMITS = gql`
query GetRepoCommits($repoName: String!) {
  repository(name: $repoName, owner: "FernandoH-G") {
    defaultBranchRef {
      target {
        ... on Commit {
          history(first: 5) {
            edges {
              node {
                pushedDate
                message
                url
              }
            }
          }
        }
      }
    }
  }
}
`;


const CommitCards = (props) => {
	const repoName = props.rName
	const { loading, error, data } = useQuery(GET_REPO_COMMITS, {
		variables: { repoName },
	});
	if (loading) return (
		<Loading message="Loading commits..." color="secondary" />
	);
	if (error) return (
		<Loading message="Error" color="danger" />
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
					<Card.Header >
						Commit Date:{'\n'}
						{parseDate(com.node.pushedDate)}
					</Card.Header>
				</Card.Link>
				<Card.Text>
					{parseText(com.node.message)}
				</Card.Text>
			</Card.Body>
		</Card>
	))
}

export default CommitCards