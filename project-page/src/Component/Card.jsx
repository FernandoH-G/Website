import { Card, CardDeck } from "react-bootstrap"

function Cards(props) {
    return (
        <CardDeck>
            <Card>
                <Card.Img 
                variant="top" 
                src={props.cardImg}
                />
                <Card.Body>
                    <Card.Title>GW2 Items</Card.Title>
                    <Card.Text>
                    GW2 Items is intended to facilitate fast and easy item look up for Guild Wars 2. 
                    One use case would be to look at the items rarity, description, and other such information. 
                    Another use case would be to look up the current trading post selling price.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardDeck>
    );
}

export default Cards