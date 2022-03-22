// React
import { useEffect } from "react"
// External Library
import {
	Container,
	Card,
	CardDeck,
	// ListGroup
} from "react-bootstrap"
import { Typography } from '@mui/material';

import aboutMe from "./../Text/about.json"

function About(props) {
	const { setHeaderMessage } = props
	// const title = "Fernando Herrera-Gomez"
	const title = "Fernando H-G"
	const message = "Software Developer & occassional Philosopher."

	useEffect(() => {
		setHeaderMessage({ title: title, subtitle: message })
	}, [setHeaderMessage])

	return (
		<Container >
			<Typography variant="h3" gutterBottom>
				Bio
			</Typography>
			<Typography paragraph>
				My name is Fernando Herrera-Gomez. I was born in Fresno, CA. My folks moved a lot to follow their seasonal work. Eventually we settled in Bakersfield CA. Going into <a href="https://www.csub.edu/">California State University Bakersfield</a>, I had it as my goal to eventually become a lawyer. In order to fulfill this goal, I studied and eventually graduated as the outstanding graduate in Philosophy for 2014.
			</Typography>
			<Typography paragraph>
				I met good classmates and even better professors. One classmate turned me on to a <a href="https://law.ucla.edu/life-ucla-law/diversity-inclusion/outreach">UCLA Law Fellows</a> program where I applied to and eventually was a part of. Soon after the program, a professor helped me land an internship in a law firm in Bakersfield. Attending this internship was a pivotal part of my life.
			</Typography>
			<Typography paragraph>
				After some time with the internship, I started to have doubts as to my motivation to become a lawyer. After much introspection, I decided to no longer pursue a career in Law. Cut to 2016, I saw myself attending CSUB once more, but this time, as a computer science student! I knew that after my first year, programming was what I wanted to devote my life to.
			</Typography>

			<Typography variant="h3" gutterBottom>
				Interests
			</Typography>
			{/* <CardDeck style={{ marginBottom: "34px" }}> */}
			<CardDeck >
				{aboutMe.hobbies.map(hobby => (
					<Card key={hobby.name}>
						<Card.Header style={{
							backgroundColor: "#343a40",
							color: "white"
						}}
						>
							<Typography>
								{hobby.name}
							</Typography>
						</Card.Header>
						<Card.Body style={{
							backgroundColor: "#282c34",
							color: "white"
						}}
						>
							<Typography paragraph>
								{hobby.description}
							</Typography>
						</Card.Body>
					</Card>
				))}
			</CardDeck>
			<br />
			{/* <h2>Contact</h2>
			<ListGroup horizontal>
				<ListGroup.Item><a href="https://github.com/FernandoH-G">Github</a> </ListGroup.Item>
				<ListGroup.Item><a href="https://www.linkedin.com/in/fernando-herrera-4040/">Linkedin</a> </ListGroup.Item>
			</ListGroup> */}


		</Container>
	);
}

export default About;
