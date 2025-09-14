import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BackBtn } from "../../../components/backBtn/BackBtn";
import "./addBlog.css";

export const AddBlog = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [img, setImg] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("content", content);
            formData.append("author", author);
            if (img) formData.append("img", img);

            await axios.post("http://localhost:2209/api/blogs", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            alert("✅ Blog added successfully!");
            navigate("/blog"); // Add blog ke baad list page pe bhej do
        } catch (err) {
            console.error(err);
            alert("❌ Failed to add blog. Please check backend.");
        }
    };

    return (
        <div className="blog-detail-container">
            <BackBtn />
            <h1>Add New Blog</h1>
            <form onSubmit={handleSubmit} className="add-blog-form">
                <input
                    type="text"
                    placeholder="Blog Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Blog Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
                <input
                    type="text"
                    placeholder="Author Name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <input
                    type="file"
                    onChange={(e) => setImg(e.target.files[0])}
                    accept="image/*"
                />
                <button type="submit" className="add-blog-btn">
                    Add Blog
                </button>
            </form>
        </div>
    );
};