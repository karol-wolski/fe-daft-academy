import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Week2 from './pages/Week2/Week2';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <section className="container">
        <Routes>
          <Route path='/' element={<Week2 />}/>
          <Route path='/week-2' element={<Week2 />}/>
        </Routes>
      </section>
      <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
