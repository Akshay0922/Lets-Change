import { useState } from "react";
import { useParams } from "react-router-dom";
import { changeData } from "./ChangeData";

import {BackBtn} from '../../../components/backBtn/BackBtn';

import "./changeDetail.css";

export const ChangeDetail = () => {
  const { id } = useParams();
  const data = changeData[id];
  const [activeTab, setActiveTab] = useState("homeRemedies");
  const [activeCard, setActiveCard] = useState(null);
  const [isPaying, setIsPaying] = useState(false);

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

  const handlePayment = async (product) => {
    if (isPaying) return;
    setIsPaying(true);

    try {
      const res = await fetch("http://localhost:2209/api/payment/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product }),
      });

      if (!res.ok) throw new Error("Failed to create checkout session");

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error(err);
      alert("Payment failed: " + err.message);
      setIsPaying(false);
    }
  };

  const renderProducts = (products) => (
    <div className="section-cards products-grid">
      {products.map((product, idx) => (
        <div className="product-card" key={idx}>
          <img src={product.image} alt={product.name} />
          <span className="product-name">{product.name}</span>
          <span className="price">Price: {product.displayPrice}</span>
          <button className="buy-btn" disabled={isPaying} onClick={() => handlePayment(product)}>
            {isPaying ? "Processing..." : "Buy Now"}
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="change-detail-page">
      <BackBtn />
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

        {data.products && data.products.length > 0 && (
          <button
            className={activeTab === "products" ? "tab active" : "tab"}
            onClick={() => setActiveTab("products")}
          >
            Products
          </button>
        )}

      </nav>

      <main className="tab-content animate-fade">
        {activeTab === "homeRemedies" && (data.homeRemedies.length ? renderCards(data.homeRemedies) : <p>No remedies available</p>)}
        {activeTab === "yoga" && renderCards(data.yoga)}
        {activeTab === "exercises" && renderCards(data.exercises)}
        {activeTab === "products" && renderProducts(data.products)}
      </main>
    </div>
  );
};