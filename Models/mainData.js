const mongoose = require("mongoose");

const mainSchema = mongoose.Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
}, { collection: 'mainDatas' });

module.exports = mongoose.model("Main", mainSchema);
