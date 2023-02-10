import './App.scss';
import { CustomNav } from './components/CustomNav';
import { CustomFooter } from './components/CustomFooter';
import { Container } from 'react-bootstrap';
import { GalleryHeading } from './components/GalleryHeading';
import { AllTheGalleries } from './components/AllTheGalleries';



function App() {
  return (
    <div className="App">
      <CustomNav />
      <Container fluid={'xs'} className="px-4">
        <GalleryHeading />
        <AllTheGalleries />
        <CustomFooter />
      </Container>
    </div>
  );
}

export default App;
