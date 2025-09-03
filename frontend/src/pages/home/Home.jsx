import { FaHandHoldingHeart, FaUsers, FaEnvelopeOpenText, FaSpa, FaCut, FaLeaf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './home.css';

export const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className='home-screen'>

                {/* Hero Section */}
                <div className='home-hero-section'>
                    <div className='home-hero-container'>
                        <span className='home-main-heading'>
                            Time to <span className='home-main-heading-highlight'>Change</span>
                        </span>
                        <p className='home-main-subheading'>Your journey to a better self starts here.</p>
                        <span className='home-main-tagline'>Real changes, Real results.</span>
                        <button className='home-hero-btn' onClick={() => navigate("/lets-change")}>Start Your Change</button>
                    </div>

                    <div className='home-img-container'>
                        <div className='icon-wrapper'>
                            <div className="vertical-bar"></div>
                            <FaHandHoldingHeart className="home-change-img" />
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="home-about-section">
                    <div className="home-about-content">
                        <h2 className="about-section-heading">About Us</h2>
                        <p className="about-section-text">
                            We believe change is not just an action, it’s a lifestyle.  
                            Our journey is about inspiring individuals to take that first step 
                            towards personal growth and transformation. With the right guidance 
                            and motivation, anyone can unlock their true potential.
                        </p>
                        <button 
                            className="about-section-btn" 
                            onClick={() => navigate("/about")}
                        >
                            Know More
                        </button>
                    </div>
                    <div className="home-about-icon-container">
                        <FaUsers className="home-about-icon" />
                    </div>
                </div>

                {/* Contact Section */}
                <div className="home-contact-section">
                    <div className="home-contact-icon-container">
                        <FaEnvelopeOpenText className="home-contact-icon" />
                    </div>
                    <div className="home-contact-content">
                        <h2 className="contact-section-heading">Contact Us</h2>
                        <p className="contact-section-text">
                            Have questions, suggestions, or just want to connect?  
                            Our team is here to listen and respond. Reach out today
                            and let’s build something meaningful together.
                        </p>
                        <button 
                            className="contact-section-btn" 
                            onClick={() => navigate("/contact-us")}
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>

                {/* Main Services Section */}
                <div className="home-services-section">
                    <h2 className="services-heading">Our Main Services</h2>
                    <div className="services-cards">
                        <div className="service-card">
                            <FaSpa className="service-icon" />
                            <h3>Facial Care</h3>
                            <p>Rejuvenating treatments for glowing and healthy skin.</p>
                        </div>
                        <div className="service-card">
                            <FaCut className="service-icon" />
                            <h3>Hair Care</h3>
                            <p>Trendy styles and nourishing care for shiny hair.</p>
                        </div>
                        <div className="service-card">
                            <FaLeaf className="service-icon" />
                            <h3>Body Care</h3>
                            <p>Relaxing therapies for complete body wellness.</p>
                        </div>
                    </div>
                    <button 
                        className="explore-btn" 
                        onClick={() => navigate("/lets-change")}
                    >
                        Explore More
                    </button>
                </div>

            </section>
        </>
    )
}