const fs = require("fs");
const path = require("path");

const textFiles = {
  mainData: path.join(__dirname, "../DataFiles/MainText.json"),
  aboutData: path.join(__dirname, "../DataFiles/AboutText.json"),
  inspectionsData: path.join(__dirname, "../DataFiles/InspectionsText.json"),
  trainingData: path.join(__dirname, "../DataFiles/TrainingText.json"),
};

const getData = (req, res) => {
  const fileKey = req.params.file;
  const dataPath = textFiles[fileKey];

  if (!dataPath) {
    return res.status(404).json({ message: "File not found" });
  }

  fs.readFile(dataPath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file" });
    }
    res.json(JSON.parse(data));
  });
};

module.exports = { getData };
