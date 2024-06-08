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

        <div className="w-1/2">
          <ProgressIndicator />
          {/* <Steps
            className="navbar-steps w-full"
            current={2}
            items={[
              {
                title: (
                  <h2 className="min-w-max">
                    Construction <br /> type
                  </h2>
                ),
              },
              {
                title: (
                  <h2>
                    Co
                    <br />
                    re
                  </h2>
                ),
              },
              {
                title: (
                  <h2>
                    sh
                    <br />
                    ell
                  </h2>
                ),
              },
              {
                title: (
                  <h2>
                    Result & <br /> Report
                  </h2>
                ),
              },
            ]}
          /> */}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
