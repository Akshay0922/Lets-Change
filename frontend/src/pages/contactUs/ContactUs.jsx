import { useState } from "react";
import { toast } from "react-toastify";
import "./contactUs.css";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:2209/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Something went wrong!");

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">
          <span className="contact-us-main-heading-highlight">Contact </span>Us
        </h1>
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
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
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
            <button type="submit" className="contact-btn" disabled={loading}>
              {loading ? (
                <>
                  Sending... <span className="spinner"></span>
                </>
              ) : (
                "Send Message"
              )}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27549.878371368104!2d77.44707738141088!3d30.330060471364547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f1dd67931b413%3A0x697bab25f8a99329!2sBhangera%20Bhangeri%20Bagpat%2C%20Haryana%20135021!5e0!3m2!1sen!2sin!4v1757597736871!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
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