import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className=" bg-[#FFF7ED] p-7 flex justify-between">
      <Link to="/">
        <h1 className=" text-xl font-bold">VANLIFE</h1>
      </Link>
      <div className="flex gap-6">
        <Link to="/about">
          <h3 className=" font-medium text-xl">About</h3>
        </Link>
        <Link to="/vans">
          <h3 className=" font-medium text-xl">Vans</h3>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
