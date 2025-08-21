const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  quantity: { type: Number, default: 0 },
  price: { type: Number, required: true },
  category: { type: String },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
