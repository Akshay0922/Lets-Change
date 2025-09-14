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
import { Success } from "./components/paymentSuccess/Success";

import { SuccessStories } from './pages/successStories/SuccessStories';
import { SuccessStoryDetail } from './pages/successStories/successStoryDetail/SuccessStoryDetail';

import { AddBlog } from './pages/blog/addBlog/AddBlog';
import { Blog } from './pages/blog/Blog';
import { BlogDetail } from './pages/blog/blogDetail/BlogDetail';

import { TipsAndTricks } from './pages/tipsTricks/TipsAndTricks';

import { ScrollToTopBtn } from './components/scrollToTopBtn/ScrollToTopBtn';

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

          <Route path='/success-stories' element={<SuccessStories />} />
          <Route path='/success-stories/:id' element={<SuccessStoryDetail />} />

          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blog/edit/:id" element={<BlogDetail />} />
          <Route path="/blog/delete/:id" element={<BlogDetail />} />

          <Route path="/tips-tricks" element={<TipsAndTricks />} />

        </Routes>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        <ScrollToTopBtn />
      </BrowserRouter>
    </div>
  );
}

export default App;