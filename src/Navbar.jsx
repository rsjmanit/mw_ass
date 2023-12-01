import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <NavLink to="/mw_ass/" className="navbar_NavLink">
          Logo
        </NavLink>
        <NavLink to="/mw_ass/Home" className="navbar_NavLink">
          About
        </NavLink>
        <NavLink to="/mw_ass/Form" className="navbar_NavLink">
          Sign Up
        </NavLink>
        <NavLink to="/mw_ass/Signin" className="navbar_NavLink">
          Sign In
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
