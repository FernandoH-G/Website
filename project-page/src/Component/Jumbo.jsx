import React from "react";
import { Jumbotron } from "reactstrap";

function Jumbo(props) {
    return (
        <Jumbotron>
            <h1 className="display-3">{props.title}</h1>
            <p className="lead">{props.message}</p>
        </Jumbotron>
    );
}

export default Jumbo;