import Jumbo from "../Component/Jumbo"
import { Container } from "reactstrap"
import Cards from "../Component/Card"

import ic_gw2Items from "./../Images/ic_gw2_items_512x512.png"

function Home() {
    const title = "Projects"
    const message = "Fetched from Github."
    return (
        <Container>
            <Jumbo title={title} message={message} />
            <Cards cardImg={ic_gw2Items}/>
        </Container>
    );
}

export default Home;