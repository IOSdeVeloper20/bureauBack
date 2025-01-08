const mongoose = require("mongoose");

const footerSchema = mongoose.Schema(
  {
    id: { type: String, required: true },
    title: {type: String, required: true},
    text: { type: String, required: true },
    fileName: {type: String, required: true},
    orderID: {type: Number, required: true},
    arText: {type: String, required: true},
  },
  { collection: "footerData" }
);

module.exports = mongoose.model("Footer", footerSchema);
