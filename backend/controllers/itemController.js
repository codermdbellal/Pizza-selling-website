// controllers/itemController.js
const Item = require("../models/item.js");

// Search function
const searchItems = async (req, res) => {
  const query = req.query.q;
  try {
    const items = await Item.find({
      name: { $regex: query, $options: "i" },
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Order product
const orderProduct = async (req, res) => {
  try {
    const products = await Item.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Postproudct
const postProduct = async (req, res) => {
  try {
    const product = new Item(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ProductShopPage
const productShop = async (req, res) => {
  try {
    const product = await Item.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  searchItems,
  postProduct,
  orderProduct,
  productShop,
};
