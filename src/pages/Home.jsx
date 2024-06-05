import logo from "../assets/images/logo.jpeg";
import Container from "../components/container/Container";
import Button from "../components/utils/Button";

const Home = () => {
	return (
		<Container className="h-screen flex flex-col justify-center items-center">
			<div className="w-[60%] mx-auto flex flex-col justify-center items-center">
				<img src={logo} className="w-full mb-5" alt="" />
				<Button btnTitle="Start" />
			</div>
		</Container>
	);
};

export default Home;
