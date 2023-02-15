import { Alert, Spinner } from "react-bootstrap";
import { SingleGalleryMovie } from "./SingleGalleryMovie";
import { useState, useEffect } from "react";

export const CustomGallery = (props) => {
  const [state, setState] = useState({
    films: [],
    isLoading: true,
    error: false,
  });

  const handleFetchError = (err) => {
    setState({ ...state, error: `${err}`, isLoading: false });
  };

  const fetchByQuery = async (query) => {
    try {
      let queryResult = await fetch(process.env.REACT_APP_OMDBBASEURL + `?&s=${query}&apikey=${process.env.REACT_APP_OMDBTOKEN}`);
      let queryJson = await queryResult.json();
      if (queryJson.Response === "False") {
        setState({ ...state, error: queryJson.Error, isLoading: false });
      } else {
        let { Search: films } = await queryJson;
        if (films.length > props.limit) {
          for (let i = 0; props.limit < films.length; i++) {
            films.pop();
          }
        }
        await setState({ ...state, films, isLoading: false });
      }
    } catch (err) {
      handleFetchError(err);
    }
  };

  useEffect(() => {
    fetchByQuery(props.title);
  }, []);

  return (
    <>
      <h4>Perchè hai cercato: {props.title}</h4>
      {state.isLoading && <Spinner animation="grow" variant="danger" className="mt-5" />}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center xscroll">
        {!state.isLoading && state.error && (
          <Alert key={`err-0`} variant={"danger"}>
            {state.error}
          </Alert>
        )}
        {!state.error && !state.isLoading && state.films.map((film) => <SingleGalleryMovie {...film} key={film.imdbID} />)}
      </div>
    </>
  );
};
