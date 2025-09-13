import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BackBtn } from "../../../components/backBtn/BackBtn";

import './successStoryDetail.css';

export const SuccessStoryDetail = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await axios.get(`http://localhost:2209/api/success-stories/${id}`);
        setStory(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStory();
  }, [id]);

  if (!story) return <p>Loading...</p>;

  return (
    <div className="story-detail-container">
      <BackBtn />
      <h1>{story.name}'s Success Story</h1>
      <img
        src={story.img ? `http://localhost:2209${story.img}` : "https://via.placeholder.com/150"}
        alt={story.name}
        className="detail-img"
      />
      <div className="detail-text"><h3>{story.role}</h3>{story.story}</div>
    </div>
  );
};