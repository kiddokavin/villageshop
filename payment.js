const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

router.post('/create-order', async (req, res) => {
  const { amount, currency } = req.body;
  const options = { amount: amount * 100, currency: currency || "INR", receipt: "receipt#1" };
  const order = await razorpay.orders.create(options);
  res.json(order);
});

router.post('/verify-payment', (req, res) => {
  const { order_id, payment_id, signature } = req.body;
  const generated_signature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(order_id + "|" + payment_id)
    .digest('hex');
  if (generated_signature === signature) res.json({ success: true });
  else res.status(400).json({ success: false });
});

module.exports = router;
