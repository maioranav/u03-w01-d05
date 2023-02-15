import { faBell, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export const CustomNav = () => {
  const location = useLocation();
  const [searchBar, showSearchbar] = useState(false);

  return (
    <Navbar expand={"lg"} className="navbar-dark">
      <a className="navbar-brand" href alt="Netflix Homepage">
        <img src="assets/logo.png" alt="Logo Neflix" />
      </a>
      <Navbar.Toggle
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>

      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="navbar-nav mr-auto">
          <Nav.Item className={location.pathname === "/" ? "active" : ""}>
            <Link className="nav-link font-weight-bold" to="/">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item className={location.pathname === "/tv-shows" ? "active" : ""}>
            <Link className="nav-link font-weight-bold" to="/tv-shows">
              TV Shows
            </Link>
          </Nav.Item>
          <Nav.Item className={location.pathname.startsWith("/movie") ? "active" : ""}>
            <Link className="nav-link font-weight-bold" to="/movies/857340985734590754">
              Movies
            </Link>
          </Nav.Item>
          <Nav.Item className={location.pathname === "/recent" ? "active" : ""}>
            <Link className="nav-link font-weight-bold" to="/recent">
              Recently Added
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="font-weight-bold">My List</Nav.Link>
          </Nav.Item>
        </Nav>

        <div className={searchBar ? "search active" : "search"}>
          <input type="text" className="input" placeholder={location.pathname === "/tv-shows" ? "Cerca Serie TV" : "Cerca qualcosa..."} />
          <button
            className="btn"
            onClick={() => {
              showSearchbar(!searchBar);
            }}
          >
            <FontAwesomeIcon icon={faSearch} className="icons" />
          </button>
        </div>

        <div id="kids">KIDS</div>
        <FontAwesomeIcon icon={faBell} className="icons" />
        <FontAwesomeIcon icon={faUser} className="icons" />
      </Navbar.Collapse>
    </Navbar>
  );
};
