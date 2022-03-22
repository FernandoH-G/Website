// import { parseDate, chooseIMG } from "./../Util/helpers"
import { chooseIMG } from "./../Util/helpers"
const Info = (props) => {
  return (
    <article style={{ display: "flex" }}>
      {/* This div is needed as a container for the text to wrap around the img. */}
      <div>
        <img
          src={chooseIMG(props.currentRepo.name)}
          // src="https://avatars.githubusercontent.com/u/23583398?s=400&v=4"
          alt="default pig"
          width="200px"
          height="200px"
          className="repo-image-style"
        />
        <p style={{ textAlign: "justify", }} className="lead" >
          {props.currentRepo.name}
        </p>
        <p style={{ textAlign: "justify", padding: "21.25px" }}>
          {props.currentRepo.description}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ex vel luctus dapibus. Integer tincidunt lectus sit amet nunc consequat, ut euismod ligula congue. Proin ut massa eget urna suscipit sollicitudin nec nec libero. Ut aliquam lorem feugiat massa eleifend feugiat. Donec nec venenatis ipsum, at posuere nulla. Aliquam eget tellus ut purus aliquam faucibus nec eget sem. Nunc porttitor risus at ullamcorper mattis. Quisque cursus aliquet leo, et volutpat lorem tincidunt nec. */}
        </p>
      </div >
    </article>
  )
}

export default Info