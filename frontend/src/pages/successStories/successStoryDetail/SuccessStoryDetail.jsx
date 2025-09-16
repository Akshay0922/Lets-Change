// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { BackBtn } from "../../../components/backBtn/BackBtn";

// import './successStoryDetail.css';

// export const SuccessStoryDetail = () => {
//   const { id } = useParams();
//   const [story, setStory] = useState(null);

//   useEffect(() => {
//     const fetchStory = async () => {
//       try {
//         const res = await axios.get(`http://localhost:2209/api/success-stories/${id}`);
//         setStory(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchStory();
//   }, [id]);

//   if (!story) return <p>Loading...</p>;

//   return (
//     <div className="story-detail-container">
//       <BackBtn />
//       <h1>{story.name}'s Success Story</h1>
//       <img
//         src={story.img ? `http://localhost:2209${story.img}` : "https://via.placeholder.com/150"}
//         alt={story.name}
//         className="detail-img"
//       />
//       <div className="detail-text"><h3>{story.role}</h3>{story.story}</div>
//     </div>
//   );
// };












import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BackBtn } from "../../../components/backBtn/BackBtn";

import './successStoryDetail.css';

export const SuccessStoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [story, setStory] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    story: "",
    imgFile: null
  });
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await axios.get(`http://localhost:2209/api/success-stories/${id}`);
        setStory(res.data);
        setFormData({
          name: res.data.name,
          role: res.data.role,
          story: res.data.story,
          imgFile: null
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchStory();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this story?")) return;
    try {
      await axios.delete(`http://localhost:2209/api/success-stories/${id}`);
      alert("✅ Story deleted");
      navigate("/success-stories");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to delete");
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "imgFile") {
      const file = e.target.files[0];
      setFormData({ ...formData, imgFile: file });
      setPreview(file ? URL.createObjectURL(file) : null);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("role", formData.role);
      data.append("story", formData.story);
      if (formData.imgFile) data.append("img", formData.imgFile);

      const res = await axios.put(
        `http://localhost:2209/api/success-stories/${id}`,
        data
      );

      setStory(res.data);
      setEditMode(false);
      setPreview(null);
      alert("✅ Story updated");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to update");
    }
  };

  if (!story) return <p>Loading...</p>;

  return (
    <div className="story-detail-container">
      <BackBtn />
      {!editMode ? (
        <>
          <h1>{story.name}'s Success Story</h1>
          <img
            src={story.img ? `http://localhost:2209${story.img}` : "https://via.placeholder.com/150"}
            alt={story.name}
            className="detail-img"
          />
          <div className="detail-text">
            <h3>{story.role}</h3>
            {story.story}
          </div>

          <div className="detail-actions">
            <button onClick={() => setEditMode(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      ) : (
        <form onSubmit={handleUpdate} className="edit-story-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />
          <textarea
            name="story"
            value={formData.story}
            onChange={handleChange}
            required
          ></textarea>
          <input type="file" name="imgFile" accept="image/*" onChange={handleChange} />

          {/* Show current or new preview */}
          {preview ? (
            <img src={preview} alt="Preview" className="preview-img" />
          ) : (
            story.img && (
              <img src={`http://localhost:2209${story.img}`} alt="Current" className="preview-img" />
            )
          )}

          <div className="form-buttons">
            <button type="submit">Update</button>
            <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};