import { useState } from "react";

import "./contactUs.css";

export const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-subtitle">
                    Have questions? We’d love to hear from you!
                </p>

                <div className="contact-content">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit" className="contact-btn">
                            Send Message
                        </button>
                    </form>

                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p>📍 Bhangera, Partapnagar, Yamunanagar, India</p>
                        <p>📞 +91 9896120216</p>
                        <p>✉️ akshayrealvlogs@gmail.com</p>
                        <div className="map">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5255650642377!2d77.3047189!3d30.1374274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390edc4b4e2a3a19%3A0x25b8dfeaddc198df!2sBhangera%2C%20Partap%20Nagar%2C%20Yamuna%20Nagar%2C%20Haryana%20135001!5e0!3m2!1sen!2sin!4v1693656480763!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                style={{ border: "0" }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};