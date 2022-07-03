// Internal Components
import Loading from "./../Component/Loading"
import { parseText, parseDate } from "./../Util/helpers"
import { GET_REPO_COMMITS } from "../Util/query"

// External Library
import Card from "react-bootstrap/Card"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Typography from '@mui/material/Typography';
import { useQuery } from '@apollo/client'

function Commits(props) {
    const repoName = props.currentRepo.name
    const owner = props.currentRepo.owner.login
    const { loading, error, data } = useQuery(GET_REPO_COMMITS, {
        variables: { name: repoName, owner: owner },
    })

    if (loading) return (
        <Loading message={`Fetching ${repoName} commits...`} color="secondary" />
    );
    if (error) return (
        <Loading message={`Error fetching ${repoName} commits.`} color="danger" />
    );

    const commits = data.repository.defaultBranchRef.target.history.edges
    return commits.map(com => (
        <Card
            key={com.node.url}
            style={{ marginBottom: "15px" }}
        >
            <Card.Header style={{
                display: "flex",
                backgroundColor: "#343a40",
                color: "white"
            }}>
                <Typography>
                    Commit Date: {parseDate(com.node.committedDate)}
                </Typography>
                <Card.Link href={com.node.url}>
                    <OpenInNewIcon htmlColor="white" fontSize="small" />
                </Card.Link>
            </Card.Header>
            <Card.Body style={{
                backgroundColor: "#282c34",
                color: "white"
            }}>
                <Typography>
                    {parseText(com.node.message)}
                </Typography>
            </Card.Body>
        </Card>
    ))
}

export default Commits