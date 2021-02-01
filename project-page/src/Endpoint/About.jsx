import Jumbo from "../Component/Jumbo"
import { Container } from "reactstrap"

function About() {
  const title = "Fernando H-G"
  const message = "Software Developer"
  return (
    <Container>
      <Jumbo title={title} message={message} />
    </Container>
  );
}

export default About;
