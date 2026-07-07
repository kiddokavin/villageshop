const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const shopRoutes = require('./routes/shop');
const orderRoutes = require('./routes/order');
const paymentRoutes = require('./routes/payment');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/quickcart', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/auth', authRoutes);
app.use('/shop', shopRoutes);
app.use('/order', orderRoutes);
app.use('/payment', paymentRoutes);

app.listen(5000, () => console.log('Backend running on port 5000'));
