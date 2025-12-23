const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "GET all menu " });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
    res.json({ msg: "GET menu id" });
});

router.post("/", (req,res)=>{
    res.json({ msg: "POST menu " });
})

module.exports = router;
