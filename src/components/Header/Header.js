import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />

      {/* navigation section */}

      <div className="container-fluid mt-3 mx-auto">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
            <div className="container-fluid">
              <a className="navbar-brand" href="/shop">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav pe-5 mb-2 mb-lg-0 mx-auto">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/shop"
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/order_review"
                    >
                      Order Review
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/inventory"
                    >
                      Manage Inventory
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
