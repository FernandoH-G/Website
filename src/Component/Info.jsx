const Info = () => {
  return (
    <div
      style={{
        display: "flex"
      }}
    >
      < div>
        <img
          src="https://avatars.githubusercontent.com/u/23583398?s=400&v=4"
          alt="default pig"
          width="200px"
          height="200px"
          style={{
            float: "left",
            marginTop: "5px",
            marginRight: "5px",
            borderRadius: "30px"
          }}
        />
        <p style={{
          textAlign: "justify"
        }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat ex vel luctus dapibus. Integer tincidunt lectus sit amet nunc consequat, ut euismod ligula congue. Proin ut massa eget urna suscipit sollicitudin nec nec libero. Ut aliquam lorem feugiat massa eleifend feugiat. Donec nec venenatis ipsum, at posuere nulla. Aliquam eget tellus ut purus aliquam faucibus nec eget sem. Nunc porttitor risus at ullamcorper mattis. Quisque cursus aliquet leo, et volutpat lorem tincidunt nec.
          {/* wrap text */}
        </p>
      </div >
    </div>
  )
}

export default Info