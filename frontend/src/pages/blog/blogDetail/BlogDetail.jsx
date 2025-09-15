import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { BackBtn } from "../../../components/backBtn/BackBtn";
import "./blogDetail.css";

export const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const summaryRef = useRef(null);

  const [recs, setRecs] = useState([]);
  const [loadingRecs, setLoadingRecs] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:2209/api/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.error(err);
        setError("⚠️ Failed to load blog.");
      }
    };
    fetchBlog();
  }, [id]);

  const handleSummarize = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post("http://localhost:2209/api/ai/summarize", {
        content: blog.content,
      });
      setSummary(res.data.summary);
    } catch (err) {
      console.error(err);
      setError("❌ Failed to summarize blog. Please try again.");
    }
    setLoading(false);
  };

  const handleRecommendations = async () => {
    setLoadingRecs(true);
    try {
      const res = await axios.post("http://localhost:2209/api/ai/recommend", {
        content: blog.content,
      });
      setRecs(res.data.recommendations.split("\n")); // split if multiple
    } catch (err) {
      console.error(err);
      alert("❌ Failed to fetch recommendations");
    }
    setLoadingRecs(false);
  };

  useEffect(() => {
    if (summary && summaryRef.current) {
      summaryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [summary]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="blog-detail-container">
      <BackBtn />
      <h1>{blog.title}</h1>

      <img
        src={
          blog.img
            ? `http://localhost:2209${blog.img}`
            : "https://via.placeholder.com/300"
        }
        alt={blog.title}
        className="blog-detail-img"
      />

      <p className="blog-detail-text">{blog.content}</p>
      <p className="blog-detail-author">✍️ Written by {blog.author}</p>

      <button
        onClick={handleSummarize}
        className="blog-summarize-btn"
        disabled={loading}
      >
        {loading ? <span className="spinner"></span> : "Summarize with AI"}
      </button>

      {error && <p className="error-message">{error}</p>}

      {summary && (
        <div ref={summaryRef} className="blog-summary-box">
          <h3>📝 AI Summary</h3>
          <p>{summary}</p>
        </div>
      )}

      <button onClick={handleRecommendations} className="blog-recommend-btn">
        {loadingRecs ? "Loading..." : "Get Similar Content"}
      </button>

      {recs.length > 0 && (
        <div className="blog-recommend-box">
          <h3>✨ Recommended for You</h3>
          <ul>
            {recs.map((r, idx) => (
              <li key={idx}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};