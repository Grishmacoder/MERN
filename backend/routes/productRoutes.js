const express = require("express");
const router = express.Router();
const {
  getCakes,
  getCakeById,
  createCake,
  deleteCake,
  updatePrice,
} = require("../controllers/productController");
const upload = require("../middleware/upload");

router.get("/", getCakes);

router.get("/:id", getCakeById);

router.post("/",upload.single('image'), createCake);

router.delete("/:id", deleteCake);

router.patch("/:id",upload.single('image'), updatePrice);

module.exports = router;
