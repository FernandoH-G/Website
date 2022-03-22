import Alert from "react-bootstrap/Alert"
import Spinner from 'react-bootstrap/Spinner'

const Loading = (props) => {
    return (
        // <Spinner variant={props.color} className="loading-style">
        //     {props.message}
        // </Spinner>
        <Spinner variant="light" animation="border" role="status" />
    )
}

export default Loading