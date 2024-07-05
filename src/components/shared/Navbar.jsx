import Button from "../utils/Button";
import Container from "../container/Container";
import logo from "../../assets/images/logo.jpeg";
import ProgressIndicator from "./ProgressIndicator";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const location = useLocation();

	return (
		<Container>
			<div className="py-5 flex items-center justify-between">
				<Link to="/">
					<img src={logo} className="w-[120px]" alt="" />
				</Link>

				{location?.pathname === "/building-core" && (
					<Button btnTitle="Disassembly Potential of the Building’s core" />
				)}

				{location?.pathname === "/building-shell" && (
					<Button btnTitle="Disassembly Potential of the Building’s shell" />
				)}

				{location.pathname !== "/" && location.pathname !== "/report" && (
					<div className="w-1/2">
						<ProgressIndicator />
					</div>
				)}
			</div>
		</Container>
	);
};

export default Navbar;
