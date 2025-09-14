import { useNavigate } from "react-router-dom";

import { FaSpa, FaCut, FaBath } from "react-icons/fa";

import "./letsChange.css";

export const LetsChange = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/change/${id}`);
  };

  const startData = [
  { id: 1, icon: <FaSpa className="start-icon" />, title: "Facial Care", desc: "Rejuvenating treatments to keep your skin fresh, glowing, and healthy." },
  { id: 2, icon: <FaCut className="start-icon" />, title: "Hair Care", desc: "Trendy hairstyles, nourishing routines, and tips for strong, shiny hair." },
  { id: 3, icon: <FaBath className="start-icon" />, title: "Body Care", desc: "Relaxing body treatments, scrubs, hydration, and massages for smooth, radiant skin." }
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