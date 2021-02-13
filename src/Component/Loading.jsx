import Alert from "react-bootstrap/Alert"

const Loading = (props) => {
    return (
        <Alert variant={props.color}>
            <Alert.Heading>{props.message}</Alert.Heading>
        </Alert>
    )
}

export default Loading