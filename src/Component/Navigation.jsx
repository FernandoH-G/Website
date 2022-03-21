import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, NavLink } from "react-router-dom";

import ic_my_pig from "./../Images/ic_my_pig_55x55.png"

function Navigation(props) {
	return (
		<Container >
			<Navbar
				bg="dark"
				style={{
					display: "flex",
					flexWrap: "wrap",
					margin: "15px 0 15px 0",
					borderRadius: "0 35px 0 35px",
					// If set height, the contents will spill over since it can't 
					// 'grow' to fill content. minHeight sets a floor,
					// not a ceiling. Element can grow to fit content.
					minHeight: "220px",
					// boxShadow: "4px 5px 9px #00818A"
					// Not sure I need padding...
				}}
				// Why is using this css not working?
				// className="header-bar-style"
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
				{/* Title and Subtitle placed inside right of Navigation. */}
				<div style={{
					display: "flex",
					flexDirection: "column",
					width: "470px",
				}}>
					<h1 className="display-4">
						{props.headerMessage.title}
					</h1>
					<p className="lead" >
						{props.headerMessage.subtitle}
					</p>
				</div>
			</Navbar>
		</Container>
	);
}

export default Navigation