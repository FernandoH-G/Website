import Alert from "react-bootstrap/Alert"

const Loading = (props) => {
    return (
        <Alert variant={props.color} className="loading-style">
            <Alert.Heading>{props.message}</Alert.Heading>
        </Alert>
    )
}

export default Loading