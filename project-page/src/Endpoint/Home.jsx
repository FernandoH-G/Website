import Jumbo from "../Component/Jumbo"
import { Container } from "reactstrap"
import Cards from "../Component/Cards"
import { useQuery, gql } from '@apollo/client'

import ic_gw2Items from "./../Images/ic_gw2_items_512x512.png"
import { CardDeck } from "react-bootstrap"

// Returns name and description from Repository.
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
                }
              }
            }
          }
        }
      }
`;

function Home() {
    const title = "Projects"
    const message = "Pinned projects fetched from Github."

    const { loading, error, data } = useQuery(GET_PINNED_REPOS);

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
        <Container>
            <Jumbo title={title} message={message} />
            <CardDeck>
                <Cards edges={pinEdges} cardImg={ic_gw2Items} />
            </CardDeck>
        </Container>
    );
}

export default Home;

    // console.log(data.user.pinnedItems.edges[0].node.description)
    // console.log( "EG Length: ", EG.length)
    // console.log( "EG[0]: ", EG[0].node.description)

    // EG.forEach(pin=> {
    //     console.log(pin.node.name)
    //     console.log(pin.node.description)
    // });

    // pinEdges.map(pin => (
    //     console.log(pin.node.name)
    // ))

    // if (pinEdges.length > 2) add a CardDeck. 2 rows!