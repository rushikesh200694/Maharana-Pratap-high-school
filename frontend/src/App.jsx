import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdmissionPopup from './components/AdmissionPopup';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Infrastructure from './pages/Infrastructure';
import Facilities from './pages/Facilities';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AdmissionPopup />
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
