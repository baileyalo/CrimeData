import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 rounded-sm bg-grey-dark">
      <div className="flex-1">
        <NavLink
          to="/"
          className="btn btn-default normal-case text-xl text-primary "
          style={({ isActive }) => ({
            color: isActive ? "#ff6392" : "#ffffff",
          })}
        >
          Jamaica's True Crime Statistics Department 
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 text-primary btn btn-default ">
          <li>
            <NavLink
              to="/stat"
              style={({ isActive }) => ({
                color: isActive ? "#ff6392" : "#ffffff",
              })}
            >
              Crime Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mayorcontact"
              style={({ isActive }) => ({
                color: isActive ? "#ff6392" : "#ffffff",
              })}
            >
              Mayor Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#ff6392" : "#ffffff",
              })}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "#ff6392" : "#ffffff",
              })}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
