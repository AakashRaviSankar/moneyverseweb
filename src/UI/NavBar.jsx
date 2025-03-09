import React from "react";
import { Link } from "react-scroll";
import Money from "../assets/MoneyVerse.png";

function Navbar() {
  return (
    <nav className="w-full top-0 left-0 z-50 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="flex items-center text-xl font-bold">
          <img src={Money} width={"11%"} height={"11%"} />
          MoneyVerse
        </div>
        <div className="space-x-6 hidden md:flex">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-400"
          >
            Home
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-400"
          >
            Features
          </Link>
          <Link
            to="how-it-works"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-400"
          >
            How It Works
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
