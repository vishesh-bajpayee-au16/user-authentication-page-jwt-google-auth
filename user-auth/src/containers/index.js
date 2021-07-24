import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../config";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={PATHS.home}>
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={PATHS.home}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={PATHS.login}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={PATHS.signup}>
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </React.Fragment>
  );
};

export default Layout;
