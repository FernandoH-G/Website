import { Col, Row, Image, Container } from "react-bootstrap"

import Jumbo from "../Component/Jumbo"

function About() {
	const title = "Fernando Herrera-Gomez"
	const message = "Software Developer"
	return (
		<Container>
			<Jumbo title={title} message={message} />
			<Row>
				<p>
					I was born in Fresno, CA. My folks moved a lot to follow their seasonal work. Eventually we settled in Bakersfield CA. Going into <a href="https://www.csub.edu/">California State University Bakersfield</a>, I had it as my goal to eventually become a lawyer. In order to fulfill this goal, I studied and eventually graduated as the outstanding graduate in Philosophy for 2014. 
				</p>
				<p>
					I met good classmates and even better professors. One classmate turned me on to a <a href="https://law.ucla.edu/life-ucla-law/diversity-inclusion/outreach">UCLA Law Fellows</a> program where I applied to and eventually was a part of and a professor helped me land an internship in a law firm in Bakersfield. Attending this internship was a pivotal part of my life.
				</p>
				<p>
					After some time with the internship, I started to have doubts as to my motivation to become a lawyer. After much introspection, I decided to no longer pursue a career in Law. Cut to 2016, I saw myself attending CSUB once more, but this time, as a computer science student! I knew that after my first year, programming was what I wanted to devote my life to.
				</p>
			</Row>
		</Container>
	);
}

export default About;
