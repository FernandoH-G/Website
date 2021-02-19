import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom";

import ic_my_pig from "./../Images/ic_my_pig_55x55.png"

function Navigation() {
	return (
			<Navbar sticky="top" bg="dark" >
				<Container>
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
						<NavLink style={{ color: "#d7cebb" }} className="nav-link" to="/about">
							About
            </NavLink>
					</Nav>
				</Navbar.Collapse>
				</Container>
			</Navbar>
	);
}

export default Navigation