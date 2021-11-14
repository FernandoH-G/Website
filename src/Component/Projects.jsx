import Commits from "../Component/Commits"
import Repos from "../Component/Repos"

function Projects() {
    return (
        <div className="projects-grid">
            <Repos />
            <Commits />
        </div>
    )
}

export default Projects