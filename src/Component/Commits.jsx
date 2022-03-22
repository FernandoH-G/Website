import { Card} from "react-bootstrap"
import { useQuery } from '@apollo/client'
import { parseText, parseDate } from "./../Util/helpers"
// import link from ".././Images/ic_external_link_16x16.png"
import Loading from "./../Component/Loading"
import { GET_REPO_COMMITS } from "../Util/query"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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
    console.log("commits: ", commits)
	return commits.map(com => (
		<Card 
        key={com.node.url}
        style={{marginBottom: "15px"}}
        >
			<Card.Header style={{
				backgroundColor: "#343a40",
				color: "white"
			}}>Commit Date:<br />{parseDate(com.node.committedDate)}
				<Card.Link href={com.node.url}>
					{/* <Image src={link} fluid /> */}
                    <OpenInNewIcon htmlColor="white" fontSize="small" />
				</Card.Link>
			</Card.Header>
			<Card.Body style={{
				backgroundColor: "#282c34",
				color: "white"
			}}>{parseText(com.node.message)}</Card.Body>
		</Card>
	))
}

export default Commits