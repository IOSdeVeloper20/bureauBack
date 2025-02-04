const mongoose = require("mongoose");

const mainSchema = mongoose.Schema(
  {
    id: { type: String, required: true },
    orderID: {type: Number, required: true},
    text: { type: String, required: true },
    fileName: {type: String, required: true},
    arText: {type: String, required: true},
  },
  { collection: "mainDatas" }
);

module.exports = mongoose.model("Main", mainSchema);
