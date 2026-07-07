const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  customerId: mongoose.Schema.Types.ObjectId,
  shopOwnerId: mongoose.Schema.Types.ObjectId,
  products: [{ name: String, price: Number, qty: Number }],
  paymentMode: String, // 'online' or 'COD'
  status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Order', OrderSchema);
