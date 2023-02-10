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

  fetchByQuery = async (query) => {
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
    this.fetchByQuery(this.props.filmid);
  }

  render() {
    return (
      <Modal.Body>
        <Row>
          <Col>
            {this.state.isLoading && <Spinner animation="grow" variant="danger" />}
            {!this.state.isLoading && this.state.error && (
              <Alert key={`err-0`} variant={"danger"}>
                {this.state.error}
              </Alert>
            )}
            <img className="img-sheet" src={this.state.filmdata.Poster} alt={this.state.filmdata.Title} />
          </Col>
          <Col></Col>
        </Row>
      </Modal.Body>
    );
  }
}
