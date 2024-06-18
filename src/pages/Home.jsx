import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";
import Button from "../components/utils/Button";
import Container from "../components/container/Container";

const Home = () => {
	return (
		<Container className="h-screen flex flex-col justify-center items-center">
			<div className="w-[60%] mx-auto flex flex-col justify-center items-center">
				<img src={logo} className="w-full mb-5" alt="" />
				<Link to="/building-information">
					<Button btnTitle="Start" />
				</Link>
			</div>
		</Container>
	);
};

export default Home;
