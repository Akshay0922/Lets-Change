import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ScrollToTop } from './components/scrollToTop/ScrollToTop';

import { LoginForm } from './pages/login/LoginForm';
import { ForgotPassword } from './pages/login/forgotPassword/ForgotPassword';
import { ResetPassword } from './pages/login/resetPassword/ResetPassword';
import { SignupForm } from './pages/signup/SignupForm';
import { EditProfile } from './pages/signup/editProfile/EditProfile';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { ContactUs } from './pages/contactUs/ContactUs';

import { LetsChange } from './pages/letsChange/LetsChange';
import { ChangeDetail } from "./pages/letsChange/changeDetail/ChangeDetail";
import { CartPage } from './pages/letsChange/changeDetail/cartPage/cartPage';
import { Success } from "./components/paymentSuccess/Success";

import { SuccessStories } from './pages/successStories/SuccessStories';
import { SuccessStoryDetail } from './pages/successStories/successStoryDetail/SuccessStoryDetail';

import { AddBlog } from './pages/blog/addBlog/AddBlog';
import { Blog } from './pages/blog/Blog';
import { BlogDetail } from './pages/blog/blogDetail/BlogDetail';
import { EditBlog } from './pages/blog/editBlog/EditBlog';

import { TipsAndTricks } from './pages/tipsTricks/TipsAndTricks';

import { ScrollToTopBtn } from './components/scrollToTopBtn/ScrollToTopBtn';

import { ProtectedRoute } from './components/protectedRoute/ProtectedRoute';

import './App.css';

function App() {
  return (
    <div className="main-app-screen">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/signup" element={<SignupForm />} />

          {/* Protected Routes */}
          <Route
            path="/edit-profile"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact-us"
            element={
              <ProtectedRoute>
                <ContactUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lets-change"
            element={
              <ProtectedRoute>
                <LetsChange />
              </ProtectedRoute>
            }
          />
          <Route
            path="/change/:id"
            element={
              <ProtectedRoute>
                <ChangeDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/success"
            element={
              <ProtectedRoute>
                <Success />
              </ProtectedRoute>
            }
          />
          <Route
            path="/success-stories"
            element={
              <ProtectedRoute>
                <SuccessStories />
              </ProtectedRoute>
            }
          />
          <Route
            path="/success-stories/:id"
            element={
              <ProtectedRoute>
                <SuccessStoryDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-blog"
            element={
              <ProtectedRoute>
                <AddBlog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog"
            element={
              <ProtectedRoute>
                <Blog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <ProtectedRoute>
                <BlogDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/edit/:id"
            element={
              <ProtectedRoute>
                <EditBlog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tips-tricks"
            element={
              <ProtectedRoute>
                <TipsAndTricks />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        <ScrollToTopBtn />
      </BrowserRouter>
    </div>
  );
}

export default App;