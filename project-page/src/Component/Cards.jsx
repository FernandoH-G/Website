import { Card } from "react-bootstrap"

import ic_gw2items from "./../Images/ic_gw2_items_512x512.png"
import ic_gw2itemsServer from "./../Images/ic_gw2_items_server_512x512.png"
import ic_snipsnap from "./../Images/ic_snipsnap_512x512.png"
import ic_snipsnapServer from "./../Images/ic_snipsnap_server_512x512.png"

function chooseIMG(name) {
    switch (name) {
        case "GW2-Items":
            return ic_gw2items
        case "GW2-Items-Server":
            return ic_gw2itemsServer
        case "SnipSnap-Barber":
            return ic_snipsnap
            case "SnipSnap-Barber-Server":
                return ic_snipsnapServer
        default:
            return "https://avatars.githubusercontent.com/u/23583398?s=400&v=4"
    }
}

function Cards(props) {
    return props.edges.map(pin => (
        <Card key={pin.node.name}>
            <Card.Body>
                <Card.Link href={pin.node.url}>
                    <Card.Img variant="top" src={chooseIMG(pin.node.name)} />
                </Card.Link>
                <Card.Title> {pin.node.name}</Card.Title>
                <Card.Text> {pin.node.description}</Card.Text>
            </Card.Body>
        </Card>
    ));
}

export default Cards