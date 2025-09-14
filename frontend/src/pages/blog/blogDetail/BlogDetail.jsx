import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BackBtn } from "../../../components/backBtn/BackBtn";
import "./blogDetail.css";

export const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:2209/api/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="blog-detail-container">
      <BackBtn />
      <h1>{blog.title}</h1>
      <img
        src={blog.img ? `http://localhost:2209${blog.img}` : "https://via.placeholder.com/300"}
        alt={blog.title}
        className="blog-detail-img"
      />
      <p className="blog-detail-text">{blog.content}</p>
      <p className="blog-detail-author">✍️ Written by {blog.author}</p>
    </div>
  );
};