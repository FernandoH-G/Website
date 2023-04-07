// import { useState, useEffect } from "react"

// Internal Components
import { chooseIMG } from "./../Util/helpers"

// External Library
import Typography from '@mui/material/Typography';

const Info = (props) => {
  return (
    <article style={{ display: "flex" }}>
      {/* This div is needed as a container for the text to wrap around the img. */}
      <div>
        <div>
        <Typography variant="h3" gutterBottom>
          <a
            href={`${props.currentRepo.url}`}
            style={{ textDecoration: "none" }}
            className="repo-title-link"
          >
            {props.currentRepo.name}
          </a>
        </Typography>
        </div>
        <img
          src={chooseIMG(props.currentRepo.name)}
          // src="https://avatars.githubusercontent.com/u/23583398?s=400&v=4"
          alt="default pig"
          width="200px"
          height="200px"
          className="repo-image-style"
        />
        <Typography paragraph style={{ marginRight: "16px" }} >
          {props.currentRepo.description}
        </Typography>
      </div >
    </article>
  )
}

export default Info