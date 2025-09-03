import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { ContactUs } from './pages/contactUs/ContactUs';

import { LetsChange } from './pages/letsChange/LetsChange';

import './App.css';

function App() {
  return (
    <div className="main-app-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/lets-change" element={<LetsChange />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;