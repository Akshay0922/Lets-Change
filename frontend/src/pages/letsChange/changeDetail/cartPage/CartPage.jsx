import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./cartPage.css";

export const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

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

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((it) =>
          it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it
        )
        .filter(Boolean)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((it) => it.id !== id));
  };

  const getTotalAmount = () =>
    cart.reduce((s, it) => s + Number(it.price) * Number(it.qty), 0);

  // Checkout for multiple items
  const handleCartCheckout = async () => {
    if (processing) return;
    if (!cart.length) return alert("Cart is empty");

    setProcessing(true);
    try {
      const token = localStorage.getItem("token");

      const headers = { "Content-Type": "application/json" };
      if (token) headers.Authorization = `Bearer ${token}`;

      const res = await fetch(
        "http://localhost:2209/api/payment/create-checkout-session",
        {
          method: "POST",
          headers,
          body: JSON.stringify({
            products: cart.map((it) => ({
              name: it.name,
              price: Number(it.price) || 0,
              qty: Number(it.qty) || 1,
            })),
          }),
        }
      );

      if (!res.ok) throw new Error("Failed to create checkout session");

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // 🔹 Redirect to Stripe Checkout
      } else {
        throw new Error("Checkout URL not returned");
      }
    } catch (err) {
      console.error(err);
      alert("Checkout failed: " + err.message);
      setProcessing(false);
    }
  };

  return (
    <div className="cart-page">
      <header className="cart-header">
        <button
          className="back-link"
          onClick={() => navigate(-1)}
        >
          Continue Shopping
        </button>
        <h2>Your Cart</h2>
      </header>

      <div className="cart-content">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <button
              className="browse-products"
              onClick={() => navigate(-1)}
            >
              Browse products
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>Price: {item.displayPrice ?? item.price}</p>
                    <div className="qty-controls">
                      <button onClick={() => updateQty(item.id, -1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, +1)}>+</button>
                    </div>
                  </div>
                  <div className="item-actions">
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="cart-summary">
              <h3>Order Summary</h3>

              {cart.length === 0 ? (
                <p>No items in cart.</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.id} className="summary-item">
                      <span className="summary-name">{item.name}</span>
                      <span className="summary-qty">x {item.qty}</span>
                      <span className="summary-price">
                        ₹{(Number(item.price) * Number(item.qty)).toFixed(2)}
                      </span>
                    </div>
                  ))}

                  <div className="summary-divider" />

                  <div className="summary-total">
                    <span>Total:</span>
                    <span>₹{getTotalAmount().toFixed(2)}</span>
                  </div>

                  <button
                    className="checkout-btn"
                    onClick={handleCartCheckout}
                    disabled={processing}
                  >
                    {processing ? "Processing..." : "Checkout"}
                  </button>
                </>
              )}
            </aside>
          </>
        )}
      </div>
    </div>
  );
};