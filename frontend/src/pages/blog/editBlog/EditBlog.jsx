import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BackBtn } from "../../../components/backBtn/BackBtn";

export const EditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [img, setImg] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:2209/api/blogs/${id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
        setAuthor(res.data.author);
      } catch (err) {
        console.error("Error fetching blog:", err);
      }
    };
    fetchBlog();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("author", author);
      if (img) formData.append("img", img);

      console.log("Sending update:", { title, content, author, img });

      await axios.put(`http://localhost:2209/api/blogs/${id}`, formData);

      alert("✅ Blog updated successfully!");
      navigate("/blog");
    } catch (err) {
      console.error("Update failed:", err);
      alert("❌ Failed to update blog.");
    }
  };

  return (
    <div className="blog-detail-container">
      <BackBtn />
      <h1>Edit Blog</h1>
      <form onSubmit={handleUpdate} className="add-blog-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
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
          Update Blog
        </button>
      </form>
    </div>
  );
};