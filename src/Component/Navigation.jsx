// Internal Components
// It's easier to down size a png if it's big to begin with.
// Doesn't lose quality, at least to my eyes.
import ic_my_pig from "./../Images/ic_my_pig_512x512.png"

// External Library
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from "react-router-dom";
import { Typography } from '@mui/material';

function Navigation(props) {
	return (
		<Container >
			<Navbar
				bg="dark"
				style={{
					display: "flex",
					flexWrap: "wrap",
					margin: "15px 0 15px 0",
					padding: ".5rem 1.5rem",
					borderRadius: "0 35px 0 35px",
					// If set height, the contents will spill over since it can't 
					// 'grow' to fill content. minHeight sets a floor,
					// not a ceiling. Element can grow to fit content.
					minHeight: "200px",
					boxShadow: "4px 5px 9px"
				}}
			// Why is using this css not working?
			// className="header-bar-style"
			>
				<Link className="navbar-brand" to="/">
					<Navbar.Brand >
						<img
							src={ic_my_pig}
							width="100px"
							height="100px"
							// className="d-inline-block align-top"
							alt="FH-G logo"
							style={{ borderRadius: "50px" }}
						/>
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto" >
						<NavLink
							exact
							className="nav-link"
							to="/"
							style={{
								color: "white"
							}}
							activeStyle={{
								color: "#00818A",
								textShadow: "1px 1px 2px #00818A",
							}}
						>
							<Typography
								variant="button"
							>
								Home
							</Typography>
						</NavLink>
						<NavLink
							className="nav-link"
							to="/about"
							style={{
								color: "white"
							}}
							activeStyle={{
								color: "#00818A",
								textShadow: "1px 1px 2px #00818A",
							}}
						>
							<Typography
								variant="button"
							>
								About
							</Typography>
						</NavLink>
					</Nav>
				</Navbar.Collapse>
				{/* Title and Subtitle placed inside right of Navigation. */}
				<div style={{
					display: "flex",
					flexDirection: "column",
					width: "470px",
				}}>
					<Typography
						variant="h2"
					>
						{props.headerMessage.title}
					</Typography>
					{/* <h1 className="display-4">
						{props.headerMessage.title}
					</h1> */}
					<Typography
						variant="subtitle"
						style={{ color: "white" }}
					>
						{props.headerMessage.subtitle}
					</Typography>
					{/* <p className="lead" >
						{props.headerMessage.subtitle}
					</p> */}
				</div>
			</Navbar>
		</Container>
	);
}

export default Navigation