const express = require('express');
const ShopOwner = require('../models/ShopOwner');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, shopName, location, govtId } = req.body;
  const shopOwner = new ShopOwner({ name, shopName, location, govtId });
  await shopOwner.save();
  res.json({ message: 'Shop owner registered successfully' });
});

router.post('/add-product', async (req, res) => {
  const { shopId, name, price, stock } = req.body;
  const shopOwner = await ShopOwner.findById(shopId);
  shopOwner.products.push({ name, price, stock });
  await shopOwner.save();
  res.json({ message: 'Product added successfully' });
});

module.exports = router;
