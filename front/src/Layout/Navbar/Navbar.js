import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss"
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_list">
        <div className="navbar_logo"></div>
        <div className="navbar_ul">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/add"}>Add</NavLink>
        <NavLink to={"/detail"}>Detail</NavLink>
        <NavLink to={"/"}>About</NavLink>
        <NavLink to={"/"}>Blog</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
