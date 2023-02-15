import './App.scss';
import { CustomNav } from './components/CustomNav';
import { CustomFooter } from './components/CustomFooter';
import { Container } from 'react-bootstrap';
import { GalleryHeading } from './components/GalleryHeading';
import { AllTheGalleries } from './components/AllTheGalleries';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SingleMovie } from './components/SingleMovie';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNav />
        <Container fluid={'xs'} className="px-4">
          <GalleryHeading />
          <Routes>
            <Route path="/" element={<h2>Fai qualcosa</h2>} />
            <Route path="/tv-shows" element={<AllTheGalleries />} />
            <Route path="/movie/:movieID" element={<SingleMovie />} />
            <Route path="*" element={<h2>Fai qualcosa</h2>} />
          </Routes>
          <CustomFooter />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
