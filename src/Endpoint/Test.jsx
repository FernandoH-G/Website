import { useState } from "react"
import Button from "react-bootstrap/Button"

const Test = () => {
    const [click, setClick] = useState(false)
    return (
        console.log("Test rendering"),
        <>
            <Button onClick={() => { setClick(!click); console.log("Clicked!") }}>
                {!click ? <p>showMessage</p> : <p>hideMessage</p>}
            </Button>
            {
                click && <p>Message</p>
            }
        </>
    )
}

export default Test