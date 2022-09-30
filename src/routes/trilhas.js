const express = require("express");
const trilhas = require("../models/trilhas");
const trilhasSchema = require("../models/trilhas")

const router = express.Router();

// create trilha
router.post("/trilhas", (req, res) =>{
  const trilhas = trilhasSchema(req.body);
  trilhas
     .save()
     .then((data) => res.json(data))
     .catch((error) => res.json({ message: error}))
});

// get all trilhas
router.get("/trilhas", (req, res) =>{
    trilhasSchema
       .find()
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error}))
  });

  // get a trilhas
router.get("/trilhas/:id", (req, res) =>{
    const { id } = req.params;
    trilhasSchema
       .findById(id)
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error}))
  });
  
  // update trilha
  router.put("/trilhas/:id", (req, res) =>{
    const { id } = req.params;
    const { name ,description, tip} = req.body;
    trilhasSchema
        .updateOne({_id: id},{ $set: { name, description, tip } })
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error}))
  });
  
  //delete trilha
  router.delete("/trilhas/:id", (req, res) =>{
    const { id } = req.params;
    trilhasSchema
        .deleteOne({_id: id})
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error}))
  });

module.exports = router;