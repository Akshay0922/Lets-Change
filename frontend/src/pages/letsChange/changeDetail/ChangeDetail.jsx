import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { changeData } from "./ChangeData";
import { BackBtn } from "../../../components/backBtn/BackBtn";

import "./changeDetail.css";

export const ChangeDetail = () => {
  const { id } = useParams();
  const data = changeData[id];
  const [activeTab, setActiveTab] = useState("homeRemedies");
  const [activeCard, setActiveCard] = useState(null);

  const [payingId, setPayingId] = useState(null);

  const [cart, setCart] = useState([]);

  const [addedItems, setAddedItems] = useState([]);


  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(saved);
      setAddedItems(saved.map(p => p.id));
    } catch {
      setCart([]);
      setAddedItems([]);
    }
  }, []);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(saved);
    } catch {
      setCart([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (!data) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          fontFamily: "'Poppins', sans-serif",
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

  const handlePayment = async (productId, product) => {
    if (payingId !== null) return;
    setPayingId(productId);

    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:2209/api/payment/buy-now", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : undefined,
        },
        body: JSON.stringify({
          product: {
            name: product.name,
            price: Number(product.price),
          },
        }),
      });

      if (!res.ok) throw new Error("Failed to create checkout session");

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Checkout URL not returned");
      }
    } catch (err) {
      console.error(err);
      alert("Payment failed: " + err.message);
      setPayingId(null);
    }
  };

  const addToCart = (productId, product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === productId);
      if (exists) return prev;
      setAddedItems((prevAdded) => [...prevAdded, productId]);
      return [
        ...prev,
        {
          id: productId,
          name: product.name,
          price: Number(product.price),
          displayPrice: product.displayPrice || product.price,
          qty: 1,
          image: product.image,
        },
      ];
    });
  };

  const renderProducts = (products) => (
    <div className="section-cards products-grid">
      {products.map((product, idx) => {
        const pid = product.id ?? idx;
        const isProcessing = payingId === pid;
        return (
          <div className="product-card" key={pid}>
            <img src={product.image} alt={product.name} />
            <span className="product-name">{product.name}</span>
            <span className="price">Price: {product.displayPrice}</span>

            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button
                className="buy-btn"
                disabled={isProcessing}
                onClick={() => handlePayment(pid, product)}
              >
                {isProcessing ? "Processing..." : "Buy Now"}
              </button>

              <button
                className="add-cart-btn"
                disabled={addedItems.includes(pid)}
                onClick={() => addToCart(pid, product)}
              >
                {addedItems.includes(pid) ? "Item Added" : "Add to Cart"}
              </button>

            </div>
          </div>
        );
      })}
    </div>
  );

  const cartCount = cart.reduce((s, it) => s + it.qty, 0);

  return (
    <div className="change-detail-page">
      <BackBtn />
      {cart.length > 0 && (
        <div className="top-actions-row">
          <Link to="/cart" className="cart-link" title="Open Cart">
            <span className="cart-text">Cart</span>
            <div className="cart-count-badge">
              <span className="cart-count">{cartCount}</span>
            </div>
          </Link>
        </div>
      )}

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
        {activeTab === "homeRemedies" &&
          (data.homeRemedies.length
            ? renderCards(data.homeRemedies)
            : <p>No remedies available</p>)}
        {activeTab === "yoga" && renderCards(data.yoga)}
        {activeTab === "exercises" && renderCards(data.exercises)}
        {activeTab === "products" && renderProducts(data.products)}
      </main>
    </div>
  );
};