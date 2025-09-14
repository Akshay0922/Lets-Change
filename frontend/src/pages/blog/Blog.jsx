import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./blog.css";
import { BackBtn } from "../../components/backBtn/BackBtn";

export const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:2209/api/blogs");
        setBlogs(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blog-container">
      <BackBtn />
      <h1 className="blog-title">Our Blog</h1>
      <p className="blog-subtitle">Latest articles and updates</p>

      <button
        className="add-blog-btn"
        onClick={() => navigate("/add-blog")}
      >
        + Add Blog
      </button>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog._id}>
            <img
              src={
                blog.img
                  ? `http://localhost:2209${blog.img}`
                  : "https://via.placeholder.com/250"
              }
              alt={blog.title}
              className="blog-img"
            />
            <h2 className="blog-name">{blog.title}</h2>
            <p className="blog-excerpt">
              {blog.content.length > 100
                ? blog.content.substring(0, 100) + "..."
                : blog.content}
            </p>
            <Link to={`/blog/${blog._id}`} className="blog-read-more">
              Read More
            </Link>

            <div className="blog-actions">
              <Link to={`/blog/edit/${blog._id}`} className="blog-edit-btn">
                Edit
              </Link>
              <button
                className="blog-delete-btn"
                onClick={async () => {
                  if (window.confirm("Delete this blog?")) {
                    await axios.delete(
                      `http://localhost:2209/api/blogs/${blog._id}`
                    );
                    setBlogs(blogs.filter((b) => b._id !== blog._id));
                  }
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};