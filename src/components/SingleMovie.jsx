import { Alert, Col, Row, Spinner, Container, Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CommentArea } from "./CommentArea";

export const SingleMovie = (props) => {
  const params = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({
    isLoading: true,
    error: false,
    filmdata: {},
  });

  const handleFetchError = (err) => {
    setState({ ...state, error: `${err}`, isLoading: false });
  };

  const fetchByID = async (query) => {
    try {
      let queryResult = await fetch(process.env.REACT_APP_OMDBBASEURL + `?&i=${query}&apikey=${process.env.REACT_APP_OMDBTOKEN}`);
      let queryJson = await queryResult.json();
      if (queryJson.Response === "False") {
        setState({ ...state, error: queryJson.Error, isLoading: false });
        navigate("/notfound");
      } else {
        setState({ ...state, filmdata: queryJson, isLoading: false });
      }
    } catch (err) {
      handleFetchError(err);
    }
  };

  useEffect(() => {
    fetchByID(params.movieID);
  }, [params.movieID]);

  return (
    <Container className="singleFilm">
      {!state.isLoading && !state.error && (
        <Row>
          <h2 className="text-center w-100 mb-5">
            {state.filmdata.Title} <Badge variant="primary">{state.filmdata.Type}</Badge>
          </h2>
        </Row>
      )}
      <Row>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          {state.isLoading && <Spinner animation="grow" variant="danger" />}
          {!state.isLoading && state.error && (
            <Alert key={`err-0`} variant={"danger"}>
              {state.error}
            </Alert>
          )}
          <img className="img-sheet" src={state.filmdata.Poster} alt={state.filmdata.Title} style={{ width: "100%" }} />
        </Col>
        {!state.isLoading && !state.error && (
          <Col>
            <p>{state.filmdata.Plot}</p>
            <p>
              <strong>Genre: </strong>
              {state.filmdata.Genre}
            </p>
            <p>
              <strong>Duration: </strong>
              {state.filmdata.Runtime}
            </p>
            <p>
              <strong>Director: </strong>
              {state.filmdata.Director}
            </p>
            <p>
              <strong>Actors: </strong>
              {state.filmdata.Actors}
            </p>
            <p>
              <strong>Released: </strong>
              {state.filmdata.Year}
            </p>
            <p>
              <strong>Rated: </strong>
              {state.filmdata.Rated}
            </p>
            {state.filmdata.Awards !== "N/A" && <p className="text-center w-100"> {state.filmdata.Awards}</p>}
          </Col>
        )}
      </Row>
      {!state.isLoading && !state.error && <CommentArea filmid={params.movieID} />}
    </Container>
  );
};
