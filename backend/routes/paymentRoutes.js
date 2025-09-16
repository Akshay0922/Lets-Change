// import dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import Stripe from "stripe";

// const router = express.Router();
// const stripe = new Stripe(process.env.STRIPE_SECRET);

// // POST /api/payment/create-checkout-session
// router.post("/create-checkout-session", async (req, res) => {
//   const { product } = req.body;

//   console.log("Received product:", product);

//   if (!product || !product.name || !product.price) {
//     return res.status(400).json({ error: "Invalid product data" });
//   }

//   const priceInPaise = Math.round(Number(product.price) * 100);

//   if (isNaN(priceInPaise) || priceInPaise <= 0) {
//     return res.status(400).json({ error: "Invalid price value" });
//   }

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "inr",
//             product_data: { name: product.name },
//             unit_amount: priceInPaise,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${req.headers.origin}/canceled`,
//     });

//     res.json({ url: session.url });
//   } catch (err) {
//     console.error("Stripe Error:", err.message);
//     res.status(500).json({ error: "Payment failed" });
//   }
// });

// // GET /api/payment/session/:id
// router.get("/session/:id", async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.retrieve(req.params.id, {
//       expand: ["line_items", "customer"],
//     });

//     res.json({
//       customer_email: session.customer_details.email,
//       product: session.line_items.data[0].description,
//       amount: session.amount_total,
//     });
//   } catch (err) {
//     console.error("Stripe Session Error:", err.message);
//     res.status(500).json({ error: "Failed to fetch session" });
//   }
// });

// export default router;


















import dotenv from "dotenv";
dotenv.config();

import express from "express";
import Stripe from "stripe";
import { authMiddleware } from "../middleware/authMiddleware.js"; // ✅ import middleware

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET);

// ✅ Create Checkout Session (Protected)
router.post("/create-checkout-session", authMiddleware, async (req, res) => {
  const { product } = req.body;

  console.log("Received product:", product);

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
      metadata: {
        userId: req.user.id, // ✅ tie session to logged-in user
        email: req.user.email,
      },
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe Error:", err.message);
    res.status(500).json({ error: "Payment failed" });
  }
});

// ✅ Get Session Details (Protected)
router.get("/session/:id", authMiddleware, async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.id, {
      expand: ["line_items", "customer"],
    });

    res.json({
      customer_email: session.customer_details.email,
      product: session.line_items.data[0].description,
      amount: session.amount_total,
      paid_by: req.user.email, // ✅ confirm which logged-in user made request
    });
  } catch (err) {
    console.error("Stripe Session Error:", err.message);
    res.status(500).json({ error: "Failed to fetch session" });
  }
});

export default router;