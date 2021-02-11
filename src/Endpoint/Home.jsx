import Jumbo from "../Component/Jumbo"
import Cards from "../Component/Cards"
import { Container } from "reactstrap"
import { useQuery, gql } from '@apollo/client'

import { CardDeck } from "react-bootstrap"

// Returns name and description from Repository.
// Since pinnedItems' node is a union of Gist and Repository, I had to
// explicitly define what to do with each type.
const GET_PINNED_REPOS = gql`
      query GetPinned {
        user(login: "FernandoH-G") {
          pinnedItems( first: 5) {
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
                }
              }
            }
          }
        }
      }
`;

// Query to list the last 5 commit messages for my account.
// const GET_COMMIT_MESSAGES = gql `
// query GetCommitMessages {
// 	user(login: "FernandoH-G") {
// 		comm
// 	}
// }
// `;

// const TEST = gql `
// query {
//   user(login: "FernandoH-G") {
//  		repositoriesContributedTo {
//       edges {
//         node {
//           isEmpty
//         }
//       }
//     }
//   }
// }
// `;

// Query to list the last 5 commit messages for the given repository.

function Home() {
	const title = "Projects"
	const message = "Pinned projects fetched from Github using their GQL API."

	const { loading, error, data } = useQuery(GET_PINNED_REPOS);
	// const { loading2, error2, data2 } = useQuery(TEST);
	// console.log(data2)

	// Create proper loading component.
	if (loading) return (
		<Container>
			<Jumbo title={title} message={message} />
			<CardDeck>
				<p>Loading...</p>
			</CardDeck>
		</Container>
	);
	if (error) return (
		<Container>
			<Jumbo title={title} message={message} />
			<CardDeck>
				<p>Loading...</p>
			</CardDeck>
		</Container>
	);

	const pinEdges = data.user.pinnedItems.edges

	return (

		<Container >
			<Jumbo title={title} message={message} />
			<CardDeck>
				<Cards edges={pinEdges} />
			</CardDeck>
		</Container>
	);
}

export default Home;