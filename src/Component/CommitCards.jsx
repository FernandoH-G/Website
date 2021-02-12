import { Card } from "react-bootstrap"
import { useQuery, gql } from '@apollo/client'

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
		<p>Loading...</p>
	);
	if (error) return (
		<p>Error.</p>
	);

	const commits = data.repository.defaultBranchRef.target.history.edges
	return commits.map(com => (
		<Card 
		key={com.node.url}
		border="info">
			<Card.Body>
				<Card.Header as="h4"> {com.node.pushDate} </Card.Header>
				<Card.Text> {com.node.message}</Card.Text>
			</Card.Body>
		</Card>
	))
}

export default CommitCards