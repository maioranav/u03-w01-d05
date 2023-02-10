import './App.scss';
import { CustomNav } from './components/CustomNav';
import { CustomFooter } from './components/CustomFooter';
import { Container } from 'react-bootstrap';
import { CustomGallery } from './components/CustomGallery';
import { GalleryHeading } from './components/GalleryHeading';



function App() {
  return (
    <div className="App">
      <CustomNav />
      <Container fluid={'xs'} className="px-4">
        <GalleryHeading />
        <CustomGallery />
        <CustomGallery />
        <CustomGallery />
        <CustomFooter />
      </Container>
    </div>
  );
}

export default App;
