// import ChangeImage from '../../assets/aboutChangeImage.png';
// import './about.css';

// export const About = () => {
//     return (
//         <div className="about-screen">
//             <section>
//                 <h1 className="about-main-heading">
//                     My <span className="about-main-heading-highlight">Journey</span>
//                 </h1>
//                 <p className="about-main-subheading">
//                     A reflection on growth, resilience, and transformation
//                 </p>
//             </section>

//             <section className="about-content">
//                 <div className="about-content-data">
//                     <h2 className="about-content-heading">The Beginning</h2>
//                     <p className="about-content-subheading">
//                         Every journey starts with a spark. For me, it began with curiosity 
//                         and a strong desire to explore new possibilities. What once felt 
//                         like a simple step soon turned into a path of self-discovery and 
//                         determination.
//                     </p>

//                     <h2 className="about-content-heading">The Process</h2>
//                     <p className="about-content-subheading">
//                         Growth didn’t come overnight. It was built through consistent effort, 
//                         embracing challenges, and learning from setbacks. Each obstacle became 
//                         a stepping stone, shaping me into someone stronger, more focused, and 
//                         ready to adapt.
//                     </p>

//                     <h2 className="about-content-heading">The Results</h2>
//                     <p className="about-content-subheading">
//                         Looking back, the transformation is more than just progress—it’s 
//                         a shift in mindset. Today, I stand with greater clarity, confidence, 
//                         and purpose, prepared to face new opportunities and continue this 
//                         journey of lifelong learning.
//                     </p>
//                 </div>

//                 <div className="about-image-container">
//                     <img
//                         src={ChangeImage}
//                         alt="Journey Illustration"
//                         className="about-image"
//                     />
//                 </div>
//             </section>
//         </div>
//     );
// };










import { FaUserCircle, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./about.css";

export const About = () => {
  return (
    <div className="about-screen">
      {/* Heading Section */}
      <section>
        <h1 className="about-main-heading">
          My <span className="about-main-heading-highlight">Journey</span>
        </h1>
        <p className="about-main-subheading">
          A reflection on growth, resilience, and transformation
        </p>
      </section>

      {/* Journey Content Section */}
      <section className="about-content">
        <div className="about-content-data">
          <h2 className="about-content-heading">The Beginning</h2>
          <p className="about-content-subheading">
            Every journey starts with a spark. For me, it began with curiosity
            and a strong desire to explore new possibilities. What once felt
            like a simple step soon turned into a path of self-discovery and
            determination.
          </p>

          <h2 className="about-content-heading">The Process</h2>
          <p className="about-content-subheading">
            Growth didn’t come overnight. It was built through consistent effort,
            embracing challenges, and learning from setbacks. Each obstacle became
            a stepping stone, shaping me into someone stronger, more focused, and
            ready to adapt.
          </p>

          <h2 className="about-content-heading">The Results</h2>
          <p className="about-content-subheading">
            Looking back, the transformation is more than just progress—it’s
            a shift in mindset. Today, I stand with greater clarity, confidence,
            and purpose, prepared to face new opportunities and continue this
            journey of lifelong learning.
          </p>
        </div>

        {/* Icon Instead of Image */}
        <div className="about-icon-container">
          <FaUserCircle className="about-icon" />
        </div>
      </section>

      {/* About Me + Social Links Section */}
      <section className="about-me">
        <h2 className="about-me-heading">About Me</h2>
        <p className="about-me-text">
          Hello! I’m Akshay G, a passionate MCA student who loves coding, learning,
          and exploring new technologies every single day. I believe in growth,
          consistency, and creating meaningful change through dedication and
          curiosity.
        </p>

        <div className="social-links">
          <a href="https://facebook.com/akshayg.0922" target="_blank" rel="noreferrer" className="social-icon fb"><FaFacebookF /></a>
          <a href="https://instagram.com/akshay.o22" target="_blank" rel="noreferrer" className="social-icon insta"><FaInstagram /></a>
          <a href="https://linkedin.com/in/akshay0922" target="_blank" rel="noreferrer" className="social-icon linkedin"><FaLinkedinIn /></a>
          <a href="https://youtube.com/@AkshayRealVlogs" target="_blank" rel="noreferrer" className="social-icon yt"><FaYoutube /></a>
        </div>
      </section>
    </div>
  );
};