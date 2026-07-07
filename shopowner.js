const mongoose = require('mongoose');

const ShopOwnerSchema = new mongoose.Schema({
  name: String,
  shopName: String,
  location: String,
  govtId: String,
  products: [{ name: String, price: Number, stock: Number }],
  role: { type: String, default: 'shopOwner' }
});

module.exports = mongoose.model('ShopOwner', ShopOwnerSchema);
