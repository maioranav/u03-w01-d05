import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SingleGalleryMovie = (props) => {
  return (
    <>
      <Col className="mb-2 px-1">
        <Link to={`/movie/${props.imdbID}`}>
          <img className="img-fluid" src={props.Poster} alt={props.Title} />
        </Link>
      </Col>
    </>
  );
};
