// By destructuring the props here and in the div that should act
// as the button, it should apply all of the props from above down
// to the div element. In this case, it adds the onClick and style props.
function Jumbo({...props}) {
	return (
		<div {...props} >
			I Am a button
		</div>
	)
}

export default Jumbo;