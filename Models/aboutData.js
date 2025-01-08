const mongoose = require("mongoose");

const aboutSchema = mongoose.Schema(
  {
    id: { type: String, required: true },
    text: { type: String, required: true },
    orderID: {type: Number, required: true},
    fileName: {type: String, required: true},
    arText: {type: String, required: true},
  },
  { collection: "aboutData" }
);

module.exports = mongoose.model("About", aboutSchema);
