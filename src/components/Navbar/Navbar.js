import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="wrapper nav">
      <div className="container">
        <Link to="/">
          <div className="nav_logo">
            <h1 className="Futo">
              <span className="style_F">F</span>uto
            </h1>
          </div>
        </Link>
        <ul className="list nav_items">
          <li className="item active">
            <a href="/">Home</a>
          </li>
          <li className="item">
            <a href="/">F.A.Q</a>
          </li>
          <li className="item">
            <a href="/">Contact Us</a>
          </li>
          <li className="item">
            <a href="/">Other</a>
          </li>
        </ul>
        <ul className="list nav_links">
          <li className="links">
            <Link to="/signup">Register (Icon)</Link>
          </li>
          <li className="links">
            <Link to="/login">Login (Icon)</Link>
          </li>
          <li className="links">
            <a href="/">Search (Icon)</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
