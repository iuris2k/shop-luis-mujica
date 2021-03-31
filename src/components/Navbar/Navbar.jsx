import React from "react";
import CartWidget from "../CartWidget";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink to="/" activeClassName="active" className="navbar-brand">
        Iuris-Tech
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            to="/Home"
            activeClassName="active"
            className="nav-item nav-link"
          >
            Home
          </NavLink>
          <NavLink
            to="/Computers"
            activeClassName="active"
            className="nav-item nav-link"
          >
            Computers
          </NavLink>
          <NavLink
            to="/Phones"
            activeClassName="active"
            className="nav-item nav-link"
          >
            Phones
          </NavLink>
        </div>
      </div>
      <CartWidget />

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
    </nav>
  );
};

export default Navbar;
