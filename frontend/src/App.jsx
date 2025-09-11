import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ScrollToTop } from './components/scrollToTop/ScrollToTop';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { ContactUs } from './pages/contactUs/ContactUs';

import { LetsChange } from './pages/letsChange/LetsChange';
import { ChangeDetail } from "./pages/letsChange/changeDetail/ChangeDetail";
import {Success} from "./components/paymentSuccess/Success";

import './App.css';

function App() {
  return (
    <div className="main-app-screen">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/lets-change" element={<LetsChange />} />
          <Route path="/change/:id" element={<ChangeDetail />} />
          <Route path="/success" element={<Success />} />

        </Routes>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      </BrowserRouter>
    </div>
  );
}

export default App;