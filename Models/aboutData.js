const mongoose = require("mongoose");

const aboutSchema = mongoose.Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
}, { collection: 'aboutData' });

module.exports = mongoose.model("About", aboutSchema);
