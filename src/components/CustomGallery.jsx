import { Component } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { SingleGalleryMovie } from "./SingleGalleryMovie";

export class CustomGallery extends Component {
  state = {
    films: [],
    isLoading: true,
    error: false,
  };

  handleFetchError = (err) => {
    this.setState({ ...this.state, error: `${err}`, isLoading: false });
  };

  fetchByQuery = async (query) => {
    try {
      let queryResult = await fetch(process.env.REACT_APP_OMDBBASEURL + `?&s=${query}` + `&apikey=${process.env.REACT_APP_OMDBTOKEN}`);
      let queryJson = await queryResult.json();
      if (queryJson.Response === "False") {
        this.setState({ ...this.state, error: queryJson.Error, isLoading: false });
      } else {
        let { Search: films } = await queryJson;
        this.setState({ ...this.state, films, isLoading: false });
      }
    } catch (err) {
      this.handleFetchError(err);
    }
  };

  componentDidMount() {
    this.fetchByQuery(this.props.title);
  }

  render() {
    return (
      <>
        <h4>Perchè hai cercato: {this.props.title}</h4>
        {this.state.isLoading && <Spinner animation="grow" variant="danger" className="mt-5" />}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center xscroll">
          {!this.state.isLoading && this.state.error && (
            <Alert key={`err-0`} variant={"danger"}>
              {this.state.error}
            </Alert>
          )}
          {!this.state.error && !this.state.isLoading && this.state.films.map((film) => <SingleGalleryMovie {...film} key={film.imdbID} />)}
        </div>
      </>
    );
  }
}
