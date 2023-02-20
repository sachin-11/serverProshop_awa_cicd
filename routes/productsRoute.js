const express = require("express");
const router = express.Router();
const {
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware.js");

router.route("/").get(getProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);
router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)

module.exports = router;
