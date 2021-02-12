import { useState } from "react"
import Jumbo from "../Component/Jumbo"
import RepoCards from "../Component/RepoCards"
import CommitCards from "../Component/CommitCards"
import CardDeck from "react-bootstrap/CardDeck"

import { Container } from "reactstrap"
import { useQuery, gql } from '@apollo/client'

// Returns name and description from Repository.
// Since pinnedItems' node is a union of Gist and Repository, I had to
// explicitly define what to do with each type.
const GET_PINNED_REPOS = gql`
query GetPinned {
  rateLimit {
    cost
    remaining
    resetAt
  }
  user(login: "FernandoH-G") {
    pinnedItems(first: 5) {
      edges {
        node {
          ... on Gist {
            name
          }
          ... on Repository {
            name
            description
            url
            openGraphImageUrl
            pushedAt
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
      }
    }
  }
}
`;

function Home() {
	const title = "Projects"
	const message = "Pinned projects fetched from Github using their GQL API."

	//Temp

	const { loading, error, data } = useQuery(GET_PINNED_REPOS);
	const [value, setRepo] = useState("Website")


	const handleClick = (repoName) => {
		// console.log("Home handleClick repoName: ", repoName)
		setRepo(repoName)
	}

	// Create proper loading component.
	if (loading) return (
		<Container>
			<Jumbo title={title} message={message} />
			<CardDeck>
				<p>Fetching pinned repositories...</p>
			</CardDeck>
		</Container>
	);
	if (error) return (
		<Container>
			<Jumbo title={title} message={message} />
			<CardDeck>
				<p>Error fetching pinned repositories.</p>
			</CardDeck>
		</Container>
	);
	const pinEdges = data.user.pinnedItems.edges
	return (
		<Container >
			<Jumbo title={title} message={message} />
			<CardDeck>
				<RepoCards edges={pinEdges} onClick={handleClick} />
			</CardDeck>
				<CommitCards rName={value} />
		</Container>
	);
}

export default Home;