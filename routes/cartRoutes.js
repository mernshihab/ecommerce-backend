const express = require("express");
const CartItem = require("../models/cartItem");
const Product = require("../models/product");
const router = express.Router();

// Add item to cart
router.post("/", async (req, res) => {
  const product = await Product.findById(req.body.productId);
  const cartItem = new CartItem({
    product: product,
    quantity: req.body.quantity,
  });

  try {
    const newCartItem = await cartItem.save();
    res.status(201).json(newCartItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get cart items
router.get("/", async (req, res) => {
  try {
    const cartItems = await CartItem.find().populate("product");
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update cart item quantity
router.patch("/:id", async (req, res) => {
  const { quantity } = req.body;
  try {
    const updatedItem = await CartItem.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true }
    ).populate("product");
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Remove item from cart
router.delete("/:id", async (req, res) => {
  try {
    const deletedItem = await CartItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item successfully removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Remove all items from cart
router.delete("/", async (req, res) => {
  try {
    const deletedItems = await CartItem.deleteMany({});
    if (deletedItems.deletedCount === 0) {
      return res.status(404).json({ message: "Cart is already empty" });
    }
    res
      .status(200)
      .json({ message: "All items successfully removed from cart" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
