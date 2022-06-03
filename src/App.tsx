import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/About/About';
import AirTable from './pages/AirTable/AirTable';
import Contact from './pages/Contact/Contact';
import Homepage from './pages/Homepage/Homepage';
import RickAndMorty from './pages/RickAndMorty/RickAndMorty';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <section className="container">
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/ram' element={<RickAndMorty />}/>
          <Route path='/airtable' element={<AirTable />}/>
        </Routes>
      </section>
      <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
