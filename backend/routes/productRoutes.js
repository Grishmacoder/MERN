const express = require("express");
const router = express.Router();
const{
  getCakes,
  getCakeById,
  createCake,
  deleteCake
} = require('../controllers/productController');


router.get("/", getCakes);

router.get("/:id", getCakeById);

router.post("/", createCake);

router.delete("/:id", deleteCake);

module.exports = router;
