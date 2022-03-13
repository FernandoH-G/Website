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
					// margin: "34px 0 34px 0",
					margin: "15px 0 10px 0",
					borderRadius: "0 35px 0 35px",

					// height: "220px",
					// If set height, the contents will spill over since it can't 
					// 'grow' to fill content. minHeight sets a floor,
					// not a ceiling. Element can grow to fit content.
					minHeight: "220px"

					// padding: "45px 35px 45px 35px"
					// padding: "30px"
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
				{/* Title and Subtitle placed inside right of Navigation. */}
				<div style={{
					display: "flex",
					flexDirection: "column",
					color: "white",

					width: "470px",

				}}>
					<h1 className="display-4">
						{props.headerMessage.title}
					</h1>
					<p className="lead" style={{
						color: "rgb(177, 173, 173)"
					}}>
						{props.headerMessage.subtitle}
						{/* Projects fetched from Github using their GQL API. */}
					</p>
				</div>
			</Navbar>
		</Container>
	);
}

const newNavigation = (props) => {
	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "space-between",
				backgroundColor: "green",
				marginTop: "15px",
				borderRadius: "0 35px 0 35px",
				height: "220px",
			}}
		>
			{/* <img
				src={ic_my_pig}
				className="d-inline-block align-top"
				alt="Brand logo"
			/> */}
			{/* <Link className="navbar-brand" to="/"> */}
			<Link to="/">
				<img
					src={ic_my_pig}
					className="d-inline-block align-top"
					alt="Brand logo"
				/>
			</Link>
			<Link to="/about">
				About
			</Link>
			<div style={{
				display: "flex",
				flexDirection: "column",
				color: "white",

				// width: "470px",

			}}>
				<h1 className="display-4">
					{props.headerMessage.title}
				</h1>
				<p className="lead" style={{
					color: "rgb(177, 173, 173)"
				}}>
					{props.headerMessage.subtitle}
					{/* Projects fetched from Github using their GQL API. */}
				</p>
			</div>


		</div>
	)
}

export default Navigation