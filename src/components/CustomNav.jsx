import { faBell, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Navbar } from "react-bootstrap";

export const CustomNav = () => (
  <Navbar expand={"lg"} className="navbar-dark">
    <a className="navbar-brand" href="#" alt="Netflix Homepage">
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
        <Nav.Item>
          <Nav.Link className="font-weight-bold" href="#">
            Home <span className="sr-only">(current)</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="active">
          <Nav.Link className="font-weight-bold" href="#">
            TV Shows
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="font-weight-bold" href="#">
            Movies
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="font-weight-bold" href="#">
            Recently Added
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="font-weight-bold" href="#">
            My List
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <FontAwesomeIcon icon={faSearch} className="icons" />
      <div id="kids">KIDS</div>
      <FontAwesomeIcon icon={faBell} className="icons" />
      <FontAwesomeIcon icon={faUser} className="icons" />
    </Navbar.Collapse>
  </Navbar>
);
