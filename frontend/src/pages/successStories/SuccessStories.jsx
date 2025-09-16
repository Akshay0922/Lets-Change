import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { BackBtn } from "../../components/backBtn/BackBtn";
import "./successStories.css";

export const SuccessStories = () => {
    const [stories, setStories] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        story: "",
        imgFile: null,
    });
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const res = await axios.get("http://localhost:2209/api/success-stories");
                setStories(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchStories();
    }, []);

    const handleChange = (e) => {
        if (e.target.name === "imgFile") {
            const file = e.target.files[0];
            setFormData({ ...formData, imgFile: file });
            setPreview(file ? URL.createObjectURL(file) : null);
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append("name", formData.name);
            data.append("role", formData.role);
            data.append("story", formData.story);
            if (formData.imgFile) data.append("img", formData.imgFile);

            const res = await axios.post(
                "http://localhost:2209/api/success-stories",
                data,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            setStories([res.data, ...stories]);
            setFormData({ name: "", role: "", story: "", imgFile: null });
            setPreview(null);
            setShowForm(false);
        } catch (err) {
            if (err.response) {
                console.error("Server Error:", err.response.data);
                alert("Error: " + (err.response.data.error || "Unknown server error"));
            } else if (err.request) {
                console.error("No Response:", err.request);
                alert("No response from server!");
            } else {
                console.error("Error:", err.message);
                alert("Error: " + err.message);
            }
        }

    };

    return (
        <div className="stories-container">
            <BackBtn />
            <h1 className="stories-title">Success Stories</h1>
            <p className="stories-subtitle">Meet our alumni who turned dreams into reality.</p>

            <button className="add-story-btn" onClick={() => setShowForm(true)}>
                + Add Yours
            </button>

            <div className="stories-grid">
                {stories.map((story) => (
                    <Link
                        to={`/success-stories/${story._id}`}
                        key={story._id || story.id}
                        className="story-card"
                    >
                        <img
                            src={story.img ? `http://localhost:2209${story.img}` : "https://via.placeholder.com/100"}
                            alt={story.name}
                            className="story-img"
                        />
                        <h2 className="story-name">{story.name}</h2>
                        <p className="story-text">
                            {story.story.length > 60 ? story.story.slice(0, 66) + "..." : story.story}
                        </p>

                        <div className="story-overlay">Click to Read</div>
                    </Link>
                ))}
            </div>


            {showForm && (
                <div className="form-overlay">
                    <div className="story-form-container">
                        <h2>Add Your Success Story</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="role"
                                placeholder="Your Role / Company"
                                value={formData.role}
                                onChange={handleChange}
                                required
                            />
                            <input type="file" name="imgFile" accept="image/*" onChange={handleChange} />

                            {preview && (
                                <img src={preview} alt="Preview" className="preview-img" />
                            )}

                            <textarea
                                name="story"
                                placeholder="Write your success story..."
                                value={formData.story}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <div className="form-buttons">
                                <button type="submit">Submit</button>
                                <button type="button" onClick={() => { setShowForm(false); setPreview(null); }}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};