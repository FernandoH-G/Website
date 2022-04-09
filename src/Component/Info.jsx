// Internal Components
import { chooseIMG } from "./../Util/helpers"

// External Library
import { Typography } from '@mui/material';

const Info = (props) => {
  return (
    <article style={{ display: "flex" }}>
      {/* This div is needed as a container for the text to wrap around the img. */}
      <div>
        <a href={`${props.currentRepo.url}`} style={{ textDecoration: "none" }}>
          <Typography variant="h3" gutterBottom>
            {props.currentRepo.name}
          </Typography>
        </a>
        <img
          src={chooseIMG(props.currentRepo.name)}
          // src="https://avatars.githubusercontent.com/u/23583398?s=400&v=4"
          alt="default pig"
          width="200px"
          height="200px"
          className="repo-image-style"
        />
        {/* <p style={{ textAlign: "justify", }} className="lead" >
          {props.currentRepo.name}
        </p> */}
        <Typography paragraph >
          {props.currentRepo.description}
        </Typography>
        {/* <p style={{ textAlign: "justify", padding: "21.25px" }}>
          {props.currentRepo.description}
        </p> */}
      </div >
    </article>
  )
}

export default Info