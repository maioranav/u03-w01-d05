import { faBell, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CustomNav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark">
    <a className="navbar-brand" href="#">
      <img src="assets/logo.png" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link font-weight-bold" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link font-weight-bold" href="#">
            TV Shows
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link font-weight-bold" href="#">
            Movies
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link font-weight-bold" href="#">
            Recently Added
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link font-weight-bold" href="#">
            My List
          </a>
        </li>
      </ul>
      <FontAwesomeIcon icon={faSearch} className="icons" />
      <div id="kids">KIDS</div>
      <FontAwesomeIcon icon={faBell} className="icons" />
      <FontAwesomeIcon icon={faUser} className="icons" />
    </div>
  </nav>
);
