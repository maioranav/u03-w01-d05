import './App.scss';
import { CustomNav } from './components/CustomNav';
import { CustomFooter } from './components/CustomFooter';
import { Container } from 'react-bootstrap';
import { AllTheGalleries } from './components/AllTheGalleries';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SingleMovie } from './components/SingleMovie';
import { NotFound } from './components/NotFound';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNav />
        <Container fluid={'xs'} className="px-4">

          <Routes>
            <Route path="/" element={<AllTheGalleries />} />
            <Route path="/tv-shows" element={<AllTheGalleries />} />
            <Route path="/movie/:movieID" element={<SingleMovie />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CustomFooter />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
