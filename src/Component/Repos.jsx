// import { useState } from "react"
// import { Card, ButtonGroup, ToggleButton } from "react-bootstrap"
import { useQuery } from '@apollo/client'

import Loading from "../Component/Loading"
import { GET_PINNED_REPOS } from "../Util/query"
import { chooseIMG } from "./../Util/helpers"
function Repos() {
  const { loading, error, data } = useQuery(GET_PINNED_REPOS);
  // const [radioValue, setRadioValue] = useState("");

  if (loading) return (
    <Loading
      message="Fetching pinned repositories..."
      color="secondary" />
  )
  if (error) return (
    <Loading
      message="Error fetching pinned repositories."
      color="danger" />
  )
  const pinEdges = data.user.pinnedItems.edges

  // This should be a radio list.
  let repos = pinEdges.map((pin, idx) => (
    <div
      className="repo-grid"
      key={idx}
    >
      {/* Repo Image */}
      <img
      alt="repo"
        height="200"
        src={chooseIMG(pin.node.name)}
        style={{ borderRadius: "45px" }} />
      {/* Repo Info */}
      <div className="repo-info">
        {/* Repo Name */}
        <div className="title-text-color">
          <h2>{pin.node.name}</h2>
        </div >
        {/* Repo Description */}
        <div className="subtitle-text-color">
          <p>{pin.node.description}</p>
        </div>
      </div>
    </div>
  ))
  return (
    <div
      className="repo-flex"
    >
      {/*Have the text be under the image when viewport is small!  */}
      {repos}
    </div>
  )
}

export default Repos