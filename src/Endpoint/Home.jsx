import { useState } from "react"
import Jumbo from "../Component/Jumbo"
import RepoCards from "../Component/RepoCards"
import CommitCards from "../Component/CommitCards"
import Loading from "../Component/Loading"
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

    const { loading, error, data } = useQuery(GET_PINNED_REPOS);
    const [repo, setRepo] = useState("Website")
    const [clicked, setClicked] = useState(false)

    if (loading) return (
        <Container>
            <Jumbo title={title} message={message} />
            <CardDeck>
                <Loading message="Fetching pinned repositories..." color="secondary" />
            </CardDeck>
        </Container>
    );
    if (error) return (
        <Container>
            <Jumbo title={title} message={message} />
            <CardDeck>
                <Loading message="Error fetching pinned repositories." color="danger" />
            </CardDeck>
        </Container>
    );
    const pinEdges = data.user.pinnedItems.edges
    return (
        <Container >
            <Jumbo title={title} message={message} />
            <CardDeck>
                <RepoCards edges={pinEdges} setRepo={setRepo} setClicked={setClicked} />
            </CardDeck>
            <br />
            <CardDeck>
              { clicked && 
                <CommitCards repoName={repo} />
              }
            </CardDeck>
        </Container>
    );
}

export default Home;