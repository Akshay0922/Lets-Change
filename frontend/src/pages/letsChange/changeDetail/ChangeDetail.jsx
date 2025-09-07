import { useState } from "react";
import { useParams } from "react-router-dom";
import { changeData } from "./ChangeData";
import "./changeDetail.css";

export const ChangeDetail = () => {
  const { id } = useParams();
  const data = changeData[id];
  const [activeTab, setActiveTab] = useState("homeRemedies");
  const [activeCard, setActiveCard] = useState(null);

  if (!data) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          fontFamily: "'Poppins', sans-serif"
        }}
      >
        <h2
          style={{
            backgroundColor: "#123524",
            textAlign: "center",
            padding: "79px",
            borderRadius: "11px",
            color: "white",
            fontWeight: "600",
            width: "300px",
          }}
        >
          Content Not Found!
        </h2>
      </div>
    );
  }

  const toggleCard = (idx) => {
    setActiveCard(activeCard === idx ? null : idx);
  };

  const renderCards = (section) => (
    <div className="section-cards">
      {section.map((item, idx) => (
        <div
          className={`section-card ${activeCard === idx ? "expanded" : ""}`}
          key={idx}
        >
          {item.image && <img src={item.image} alt={item.step} />}
          <div className="section-content">
            <h4>{item.step}</h4>
            {item.description && <p>{item.description}</p>}
            {item.duration && (
              <p className="duration">
                <strong>Duration:</strong> {item.duration}
              </p>
            )}

            {item.steps && (
              <button className="apply-btn" onClick={() => toggleCard(idx)}>
                {activeCard === idx ? "Hide Steps" : "How to do?"}
              </button>
            )}

            {activeCard === idx && item.steps && (
              <ul className="apply-steps">
                {item.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            )}
          </div>

          {activeCard === idx && item.video && (
            <div className="video-wrapper">
              <iframe
                src={item.video}
                title={item.step}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="change-detail-page">
      <header className="change-header">
        <h1>
          {data.title} <span className="details-icon">{data.icon}</span>
        </h1>
        <p className="subtitle">
          Your complete guide to wellness, balance & lifestyle improvement
        </p>
      </header>

      <nav className="tabs">

        {data.homeRemedies && data.homeRemedies.length > 0 && (
          <button
            className={activeTab === "homeRemedies" ? "tab active" : "tab"}
            onClick={() => setActiveTab("homeRemedies")}
          >
            Home Remedies
          </button>
        )}

        {data.yoga && data.yoga.length > 0 && (
          <button
            className={activeTab === "yoga" ? "tab active" : "tab"}
            onClick={() => setActiveTab("yoga")}
          >
            Yoga & Meditation
          </button>
        )}

        {data.exercises && data.exercises.length > 0 && (
          <button
            className={activeTab === "exercises" ? "tab active" : "tab"}
            onClick={() => setActiveTab("exercises")}
          >
            Exercises
          </button>
        )}
      </nav>

      <main className="tab-content animate-fade">
        {activeTab === "homeRemedies" && renderCards(data.homeRemedies)}
        {activeTab === "yoga" && renderCards(data.yoga)}
        {activeTab === "exercises" && renderCards(data.exercises)}
      </main>
    </div>
  );
};