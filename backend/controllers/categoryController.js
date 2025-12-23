const Category = require("../models/category");

exports.getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name);
    const category = await Category.create({ name });

    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
