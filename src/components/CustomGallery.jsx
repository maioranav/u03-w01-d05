import { Component } from "react";
import { SingleGalleryMovie } from "./SingleGalleryMovie";

export class CustomGallery extends Component {
  state = {
    films: [],
    isLoading: true,
    error: false,
  };

  fetchByQuery = async (query) => {
    try {
      let queryResult = await fetch(process.env.REACT_APP_OMDBBASEURL + `?&s=${query}` + `&apikey=${process.env.REACT_APP_OMDBTOKEN}`);
      let { Search: films } = await queryResult.json();

      this.setState({ ...this.state, films });
    } catch (e) {
      alert(e);
    }
  };

  componentDidMount() {
    this.fetchByQuery(this.props.title);
  }

  render() {
    return (
      <>
        <h4>Perchè hai cercato: {this.props.title}</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center xscroll">
          {this.state.films.map((film) => (
            <SingleGalleryMovie {...film} key={film.imdbID} />
          ))}
        </div>
      </>
    );
  }
}
