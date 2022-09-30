const mongoose = require("mongoose");

const trilhasSchema = mongoose.Schema({
 name:{
    type: String,
    required:true
 },
 description:{
    type: String,
    required:true
 },
 tip: {
    type: String,
    required: false
 }
});

module.exports = mongoose.model('Trilhas', trilhasSchema);