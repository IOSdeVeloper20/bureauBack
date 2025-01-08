const mongoose = require("mongoose");

const trainingSchema = mongoose.Schema(
  {
    id: { type: String, required: true },
    text: { type: String, required: true },
    fileName: {type: String, required: true},
    orderID: {type: Number, required: true},
    arText: {type: String, required: true},
  },
  { collection: "trainingData" }
);

module.exports = mongoose.model("Training", trainingSchema);