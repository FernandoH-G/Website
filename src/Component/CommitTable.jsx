import { Table } from "react-bootstrap"

const CommitTable = (props) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Commit Date</th>
                    <th>Commit Message</th>
                    <th>Commit URL</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </Table>
    )
}

export default CommitTable