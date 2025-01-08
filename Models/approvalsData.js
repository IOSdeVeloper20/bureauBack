const mongoose = require("mongoose");

const approvalsSchema = mongoose.Schema(
  {
    id: { type: String, required: true },
    text: { type: String, required: true },
    fileName: {type: String, required: true},
    arText: {type: String, required: true},
  },
  { collection: "approvalsData" }
);

module.exports = mongoose.model("Approvals", approvalsSchema);
