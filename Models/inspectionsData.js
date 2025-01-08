const mongoose = require("mongoose");

const inspectionsSchema = mongoose.Schema(
  {
    id: { type: String, required: true },
    text: { type: String, required: true },
    fileName: {type: String, required: true},
    orderID: {type: Number, required: true},
    arText: {type: String, required: true},
  },
  { collection: "inspectionsData" }
);

module.exports = mongoose.model("Inspections", inspectionsSchema);
