const product = require("../models/product");
const mongoose = require('mongoose')

//get all products
exports.getCakes = async (req, res) => {
  try {
    const cakes = await product.find().populate("category");
    res.json(cakes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//get single product
exports.getCakeById = async (req, res) => {
  try {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error: 'No such product'})
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
    const cake = await product.create(req.body);
    res.status(201).json(cake);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//update product
exports.updatePrice = async(req, res)=>{
  try{
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error: 'No such product'})
    }
    const cake = await product.findOneAndUpdate({_id: id},{
      ...req.body
    })
    if (!cake) return res.status(404).json({ message: "cake not found" });
    res.json(cake);
  }catch(e){
    res.json({error:e.message})
  }
}
//delete product
exports.deleteCake = async (req, res) => {
  try {
    await product.findByIdAndDelete(req.params.id);
    res.json({ message: "cake deleted" });
  } catch (err) {
    res.status(400).json({ message: "Invalid Id" });
  }
};


