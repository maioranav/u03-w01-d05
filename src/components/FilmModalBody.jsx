import { Component } from "react";
import { Alert, Col, Modal, Row, Spinner } from "react-bootstrap";

export class FilmModalBody extends Component {
  state = {
    isLoading: true,
    error: false,
    filmdata: {},
  };

  handleFetchError = (err) => {
    this.setState({ ...this.state, error: `${err}`, isLoading: false });
  };

  fetchByID = async (query) => {
    try {
      let queryResult = await fetch(process.env.REACT_APP_OMDBBASEURL + `?&i=${query}` + `&apikey=${process.env.REACT_APP_OMDBTOKEN}`);
      let queryJson = await queryResult.json();
      if (queryJson.Response === "False") {
        this.setState({ ...this.state, error: queryJson.Error, isLoading: false });
      } else {
        this.setState({ ...this.state, filmdata: queryJson, isLoading: false });
      }
    } catch (err) {
      this.handleFetchError(err);
    }
  };

  componentDidMount() {
    this.fetchByID(this.props.filmid);
  }

  render() {
    return (
      <Modal.Body>
        <Row>
          <Col xs={12} md={6}>
            {this.state.isLoading && <Spinner animation="grow" variant="danger" />}
            {!this.state.isLoading && this.state.error && (
              <Alert key={`err-0`} variant={"danger"}>
                {this.state.error}
              </Alert>
            )}
            <img className="img-sheet" src={this.state.filmdata.Poster} alt={this.state.filmdata.Title} style={{ width: "100%" }} />
          </Col>
          {!this.state.isLoading && !this.state.error && (
            <Col>
              <p>{this.state.filmdata.Plot}</p>
              <p>
                <strong>Genre:</strong>
                {this.state.filmdata.Genre}
              </p>
              <p>
                <strong>Duration: </strong>
                {this.state.filmdata.Runtime}
              </p>
              <p>
                <strong>Director: </strong>
                {this.state.filmdata.Director}
              </p>
              <p>
                <strong>Actors: </strong>
                {this.state.filmdata.Actors}
              </p>
              <p>
                <strong>Released: </strong>
                {this.state.filmdata.Year}
              </p>
              <p>
                <strong>Rated: </strong>
                {this.state.filmdata.Rated}
              </p>
            </Col>
          )}
        </Row>
        {this.state.filmdata.Awards !== "N/A" && (
          <Row>
            <p className="text-center w-100"> {this.state.filmdata.Awards}</p>
          </Row>
        )}
      </Modal.Body>
    );
  }
}
