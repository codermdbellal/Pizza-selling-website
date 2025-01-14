
// routes/itemRoutes.js
const express = require("express");
const {
  searchItems,
  postProduct,
  orderProduct,
  productShop,
  
} = require("../controllers/itemController.js");

// express router
const router = express.Router();

// Search route
router.get("/search", searchItems);
router.post("/products", postProduct);
router.get("/products", orderProduct);
router.get("/products/:id", productShop);


module.exports = router;
