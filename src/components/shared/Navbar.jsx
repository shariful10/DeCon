import React from "react";
import logo from "../../assets/images/logo.jpeg";
import Container from "../container/Container";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <div className="px-5 md:px-20 py-5 flex items-center justify-between">
        <Link to="/">
          <img src={logo} className="w-[120px]" alt="" />
        </Link>

        <div>
          <div>
            <label htmlFor=""> Construction type </label>
            <div className="size-9 rounded-full border border-green-600 bg-green-200 text-right !text-white">
              <span className="text-right !text-white text-xl -right-1">✔</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
