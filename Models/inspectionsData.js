const mongoose = require("mongoose");

const inspectionsSchema = mongoose.Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
}, { collection: 'inspectionsData' });

module.exports = mongoose.model("Inspections", inspectionsSchema);
