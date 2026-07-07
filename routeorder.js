const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

router.post('/place', async (req, res) => {
  const { customerId, shopOwnerId, products, paymentMode } = req.body;
  const order = new Order({ customerId, shopOwnerId, products, paymentMode });
  await order.save();
  res.json({ message: 'Order placed successfully', order });
});

router.post('/cancel', async (req, res) => {
  const { orderId } = req.body;
  const order = await Order.findById(orderId);
  order.status = 'cancelled';
  await order.save();
  res.json({ message: 'Order cancelled successfully' });
});

router.post('/refund', async (req, res) => {
  const { orderId, mode } = req.body;
  const order = await Order.findById(orderId);
  order.status = 'refund';
  await order.save();
  res.json({ message: `Refund initiated via ${mode}` });
});

module.exports = router;
