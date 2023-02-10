import './App.scss';
import { CustomNav } from './components/CustomNav';
import { CustomFooter } from './components/CustomFooter';


function App() {
  return (
    <div className="App">

      <CustomNav />

      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="dropdown ml-4 mt-1">
              <button
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"

              >
                Genres &nbsp;
              </button>
              <div
                className="dropdown-menu bg-dark"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item text-white bg-dark" href="#">Comedy</a>
                <a className="dropdown-item text-white bg-dark" href="#">Drama</a>
                <a className="dropdown-item text-white bg-dark" href="#"
                >Thriller</a
                >
              </div>
            </div>
          </div>
          <div>
            <i className="fa fa-th-large icons"></i>
            <i className="fa fa-th icons"></i>
          </div>
        </div>
        <h4>Trending Now</h4>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center"
        >
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/1.png" alt="movie picture" />
          </div>
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/2.png" alt="movie picture" />
          </div>
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/3.png" alt="movie picture" />
          </div>
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/4.png" alt="movie picture" />
          </div>
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/5.png" alt="movie picture" />
          </div>
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/6.png" alt="movie picture" />
          </div>
        </div>
        <h4>Watch it Again</h4>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center"
        >
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/7.png" alt="movie picture" />
          </div>
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/8.png" alt="movie picture" />
          </div>
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/9.png" alt="movie picture" />
          </div>
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/10.png" alt="movie picture" />
          </div>
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/11.png" alt="movie picture" />
          </div>
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/12.png" alt="movie picture" />
          </div>
        </div>
        <h4>New Releases</h4>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center"
        >
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/13.png" alt="movie picture" />
          </div>
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/14.png" alt="movie picture" />
          </div>
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/15.png" alt="movie picture" />
          </div>
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/16.png" alt="movie picture" />
          </div>
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/17.png" alt="movie picture" />
          </div>
          <div className="col mb-2 px-1">
            <img className="img-fluid" src="assets/18.png" alt="movie picture" />
          </div>
        </div>

        <CustomFooter />

      </div>

    </div>
  );
}

export default App;
