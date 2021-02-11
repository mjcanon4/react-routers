import React from "react";
import { Link } from "react-router-dom";
//Link uses HTML5 history API to achieve the client-side routing functionality WITHOUT a page refresh

const Header = () => {
  return (
    <ul className="navigation-menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Header;
