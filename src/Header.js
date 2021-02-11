import React from "react";
import { NavLink } from "react-router-dom";
//NavLink uses HTML5 history API to achieve the client-side routing functionality WITHOUT a page refresh

const Header = () => {
  return (
    <ul className="navigation-menu">
      <li>
        <NavLink to="/" activeClassName="active" exact={true}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" activeClassName="active">
          Profile
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
