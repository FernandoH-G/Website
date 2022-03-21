import { useQuery } from '@apollo/client'
import Loading from "./../Component/Loading"
import { GET_REPO_COMMITS } from "../Util/query"

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
    return (
        <div >
            {/* Commit Cards */}
            <p>
                Commits Cards
            </p>
        </div>
    )
}

export default Commits