import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";
import Container from "../container/Container";
import ProgressIndicator from "./ProgressIndicator";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();

  console.log("location", location);

  return (
    <Container>
      <div className="py-5 flex items-center justify-between">
        <Link to="/">
          <img src={logo} className="w-[120px]" alt="" />
        </Link>

        {location.pathname !== "/building-information" && (
          <div className="w-1/2">
            <ProgressIndicator />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Navbar;
