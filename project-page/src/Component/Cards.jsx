import { Card} from "react-bootstrap"

function Cards(props) {
    return props.edges.map(pin => (
        <Card key={pin.node.name}>
            <Card.Body>
                {/* <Card.Img variant="top" src={props.cardImg} /> */}
                <Card.Title> {pin.node.name}</Card.Title>
                <Card.Text>
                    {pin.node.description}
                </Card.Text>
            </Card.Body>
        </Card>
    ));
}

export default Cards