import React from "react";
import logo from "../../assets/images/logo.jpeg";
import Container from "../container/Container";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<Container>
			<div className="py-5">
				<Link to="/">
					<img src={logo} className="w-[120px]" alt="" />
				</Link>
			</div>
		</Container>
	);
};

export default Navbar;
