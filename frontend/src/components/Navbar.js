import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/"></Link>
        <h1>Cake Shop</h1>
      </div>
    </header>
  );
};

export default Navbar;
