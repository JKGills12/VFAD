import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        VFAD
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/host"
              className={window.location.pathname === "/host" ? "nav-link active" : "nav-link"}
            >
              Host
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
