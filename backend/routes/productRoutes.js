const express = require("express");
const router = express.Router();
const {
  getCakes,
  getCakeById,
  createCake,
  deleteCake,
  updatePrice,
} = require("../controllers/productController");

router.get("/", getCakes);

router.get("/:id", getCakeById);

router.post("/", createCake);

router.delete("/:id", deleteCake);

router.patch("/:id", updatePrice);

module.exports = router;
