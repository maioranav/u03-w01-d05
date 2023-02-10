import { Dropdown } from "react-bootstrap";

export const GenreSelect = () => (
  <Dropdown className="ml-4 mt-1">
    <Dropdown.Toggle
      className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Genres &nbsp;
    </Dropdown.Toggle>
    <Dropdown.Menu className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
      <Dropdown.Item className="dropdown-item text-white bg-dark" href="#">
        Comedy
      </Dropdown.Item>
      <Dropdown.Item className="dropdown-item text-white bg-dark" href="#">
        Drama
      </Dropdown.Item>
      <Dropdown.Item className="dropdown-item text-white bg-dark" href="#">
        Thriller
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);
