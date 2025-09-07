import { useNavigate } from "react-router-dom";

import {
  FaSpa,
  FaCut,
  FaLeaf,
  FaHeartbeat,
  FaBrain,
  FaRunning,
  FaAppleAlt,
  FaPrayingHands,
  FaBed,
  FaSmile,
  FaSun,
  FaWater,
  FaFire,
  FaDumbbell,
  FaSeedling,
  FaBook,
  FaLightbulb,
  FaHandsHelping,
  FaFeatherAlt,
  FaGrinStars,
  FaUserCheck,
  FaBalanceScale
} from "react-icons/fa";

import "./letsChange.css";

export const LetsChange = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/change/${id}`);
  };

  const startData = [
    { id: 1, icon: <FaSpa className="start-icon" />, title: "Facial Care", desc: "Rejuvenating treatments for glowing and healthy skin." },
    { id: 2, icon: <FaCut className="start-icon" />, title: "Hair Care", desc: "Trendy styles and nourishing care for shiny hair." },
    { id: 3, icon: <FaLeaf className="start-icon" />, title: "Body Care", desc: "Relaxing therapies for complete body wellness." },
    { id: 4, icon: <FaHeartbeat className="start-icon" />, title: "Physical Health", desc: "Exercises and routines for strength and stamina." },
    { id: 5, icon: <FaBrain className="start-icon" />, title: "Mental Wellness", desc: "Mindfulness practices and stress management tips." },
    { id: 6, icon: <FaRunning className="start-icon" />, title: "Lifestyle Change", desc: "Small habits that create a healthier lifestyle." },
    { id: 7, icon: <FaAppleAlt className="start-icon" />, title: "Healthy Diet", desc: "Nutritious meals to fuel your body with energy." },
    { id: 8, icon: <FaPrayingHands className="start-icon" />, title: "Yoga & Meditation", desc: "Balance your mind and body with ancient practices." },
    { id: 9, icon: <FaBed className="start-icon" />, title: "Sleep Care", desc: "Improve sleep quality for better recovery and focus." },
    { id: 10, icon: <FaSmile className="start-icon" />, title: "Stress Relief", desc: "Relaxing activities to keep your mind at peace." },
    { id: 11, icon: <FaSun className="start-icon" />, title: "Skin Glow", desc: "Natural remedies for radiant and fresh skin." },
    { id: 12, icon: <FaWater className="start-icon" />, title: "Hydration", desc: "Daily hydration tips for overall wellness." },
    { id: 13, icon: <FaFire className="start-icon" />, title: "Weight Loss", desc: "Guided plans to achieve sustainable fat loss." },
    { id: 14, icon: <FaDumbbell className="start-icon" />, title: "Fitness Training", desc: "Strength and endurance building workouts." },
    { id: 15, icon: <FaSeedling className="start-icon" />, title: "Ayurveda Care", desc: "Holistic healing with traditional remedies." },
    { id: 16, icon: <FaBook className="start-icon" />, title: "Personal Growth", desc: "Self-development strategies to level up life." },
    { id: 17, icon: <FaLightbulb className="start-icon" />, title: "Mindfulness", desc: "Daily practices to stay calm and present." },
    { id: 18, icon: <FaHandsHelping className="start-icon" />, title: "Community Wellness", desc: "Helping and growing with the community." },
    { id: 19, icon: <FaFeatherAlt className="start-icon" />, title: "Detox Plans", desc: "Cleansing routines for body and mind reset." },
    { id: 20, icon: <FaGrinStars className="start-icon" />, title: "Positivity Boost", desc: "Motivational habits for a happier mindset." },
    { id: 21, icon: <FaUserCheck className="start-icon" />, title: "Confidence Building", desc: "Practical tips to boost self-confidence." },
    { id: 22, icon: <FaBalanceScale className="start-icon" />, title: "Balanced Living", desc: "Achieving harmony between work and life." },
    { id: 23, icon: <FaSpa className="start-icon" />, title: "Detox Therapy", desc: "Natural detox treatments to cleanse your body and refresh energy." },
    { id: 24, icon: <FaBrain className="start-icon" />, title: "Focus Training", desc: "Techniques and exercises to sharpen your mind and improve focus." }
  ];

  return (
    <div className="letsstart-section">
      <h2 className="letsstart-heading">Let’s Start the <span className="lets-start-main-heading-highlight">Change</span></h2>
      <div className="letsstart-cards">
        {startData.map((item) => (
          <div className="start-card" key={item.id} onClick={() => handleCardClick(item.id)}>
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};