import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET);

router.post("/buy-now", async (req, res) => {
  const { product } = req.body;

  if (!product || !product.name || !product.price) {
    return res.status(400).json({ error: "Invalid product data" });
  }

  const priceInPaise = Math.round(Number(product.price) * 100);
  if (isNaN(priceInPaise) || priceInPaise <= 0) {
    return res.status(400).json({ error: "Invalid price value" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: { name: product.name },
            unit_amount: priceInPaise,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/canceled`,
      metadata: { productName: product.name },
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe BuyNow Error:", err.message);
    res.status(500).json({ error: "Payment failed" });
  }
});

router.post("/create-checkout-session", async (req, res) => {
  const { products } = req.body;

  if (!products || !Array.isArray(products) || products.length === 0) {
    return res.status(400).json({ error: "No products provided" });
  }

  try {
    const line_items = products.map((p) => {
      const priceInPaise = Math.round(Number(p.price) * 100);
      if (isNaN(priceInPaise) || priceInPaise <= 0) {
        throw new Error(`Invalid price for product: ${p.name}`);
      }

      return {
        price_data: {
          currency: "inr",
          product_data: { name: p.name },
          unit_amount: priceInPaise,
        },
        quantity: Number(p.qty) || 1,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/canceled`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe Cart Error:", err.message);
    res.status(500).json({ error: "Cart checkout failed" });
  }
});

router.get("/session/:id", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.id, {
      expand: ["line_items", "line_items.data.price.product", "customer"],
    });

    res.json({
      customer_email: session.customer_details?.email || "—",
      products: session.line_items?.data.map((li) => ({
        name: li.description,
        qty: li.quantity,
        unitPrice: (li.price.unit_amount / 100).toFixed(2),
        total: (li.amount_total / 100).toFixed(2),
      })),
      amount: (session.amount_total / 100).toFixed(2),
    });
  } catch (err) {
    console.error("Stripe Session Error:", err.message);
    res.status(500).json({ error: "Failed to fetch session" });
  }
});

export default router;