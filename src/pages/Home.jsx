import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";
import Button from "../components/utils/Button";
import Container from "../components/container/Container";

const Home = () => {
	return (
		<Container className="h-max flex flex-col justify-center items-center">
			<div className="mx-auto flex flex-col justify-center items-center">
				<figure className="w-6/12 mx-auto">
					<img src={logo} className="w-full mb-5" alt="" />
				</figure>
				<Link to="/building-information">
					<Button btnTitle="Start" />
				</Link>
				<p className="mt-7 text-center w-7/12">
					The DeCon web tool is one of the DECONSTRUCT research project outcomes
					conducted at SBD Lab, University of Liege in Belgium. The project
					title is A Circularity Evaluation Framework for Office Buildings
					Design in Belgium. The web tool represents an expert system to
					evaluate the disassembly potential of buildings. The web tool allows
					to evaluate of core and shell connections of timber, concrete, steel,
					or hybrid buildings.
				</p>
			</div>
		</Container>
	);
};

export default Home;
