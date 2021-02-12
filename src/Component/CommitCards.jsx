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
	// console.log("CommitTable repoName: ", repoName)
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
	const innerCommits = commits.map(com =>(
		com.node
	))
	console.log("commits: ", innerCommits.map( a => (
		a.message
	)))
	// console.log("CommitTable message: ", data.repository.defaultBranchRef.target.history.edges[0].node.message)

	return(
		<p>{innerCommits.map( a => (
			a.message.length
		))}</p>
	)
	// return innerCommits.map(com => {
	// 	<Card 
	// 	key={com.url}
	// 	border="info">
	// 		<Card.Body>
	// 			<Card.Header as="h4"> {com.pushDate} </Card.Header>
	// 			<Card.Text> {com.message}</Card.Text>
	// 		</Card.Body>
	// 	</Card>
	// })
}

export default CommitCards