import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom";

import ic_my_pig from "./../Images/ic_my_pig_55x55.png"

function Navigation() {
	return (
		<Container >
			<Navbar
				bg="dark"
				style={{
					margin: "5px 0 15px 0",
					borderRadius: "0 35px 0 35px",
					padding: "45px 35px 45px 35px"
				}}
			>
				<Link className="navbar-brand" to="/">
					<Navbar.Brand >
						<img
							src={ic_my_pig}
							className="d-inline-block align-top"
							alt="Brand logo"
						/>
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto" >
						<NavLink className="nav-link" to="/about" style={{
							// color: "#d7cebb"
							color: "white"
						}} >About</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
}

export default Navigation