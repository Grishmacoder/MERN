const product = require("../models/product");
const mongoose = require("mongoose");
const sharp = require("sharp");

//get all products
exports.getCakes = async (req, res) => {
  try {
    const { category } = req.query;
    let filter = {};
    if (category) {
      filter.category = category;
    }
    const cake = await product.find(filter).sort({ createdAt: -1 });
    if (!cake) return res.status(404).json({ message: "cake not found" });

    res.status(200).json(cake);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//get single product
exports.getCakeById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such product" });
    }
    const cake = await product.findById(id).populate("category");
    if (!cake) return res.status(404).json({ message: "cake not found" });
    res.json(cake);
  } catch (err) {
    res.status(400).json({ message: "Invalid Id" });
  }
};

//create product
exports.createCake = async (req, res) => {
  try {
    let imageData = "";
    if (req.file) {
      const buffer = await sharp(req.file.buffer)
        .resize({ width: 500 })
        .jpeg({ quality: 80 })
        .toBuffer();

      imageData = `data:${req.file.mimetype};base64,${buffer.toString(
        "base64"
      )}`;
    }
    const cakeData = {
      ...req.body,
      image: imageData,
    };

    const cake = await product.create(cakeData);
    res.status(201).json(cake);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//update product
exports.updatePrice = async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such product" });
    }
    const updateData = {
      ...req.body,
    };
    if (req.file) {
      const buffer = await sharp(req.file.buffer)
        .resize({ width: 500 })
        .jpeg({ quality: 80 })
        .toBuffer();

      updateData.image = `data:image/jpeg;base64,${buffer.toString("base64")}`;
    }

    const cake = await product.findOneAndUpdate({ _id: id }, updateData, {
      new: true,
    });

    if (!cake) return res.status(404).json({ message: "cake not found" });
    res.json(cake);
  } catch (e) {
    res.json({ error: e.message });
  }
};
//delete product
exports.deleteCake = async (req, res) => {
  try {
    await product.findByIdAndDelete(req.params.id);
    res.json({ message: "cake deleted" });
  } catch (err) {
    res.status(400).json({ message: "Invalid Id" });
  }
};
