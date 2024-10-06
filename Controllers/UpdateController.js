const fs = require("fs");
const path = require("path");

const textFiles = {
  mainData: path.join(__dirname, "../DataFiles/MainText.json"),
  aboutData: path.join(__dirname, "../DataFiles/AboutText.json"),
  inspectionsData: path.join(__dirname, "../DataFiles/InspectionsText.json"),
  trainingData: path.join(__dirname, "../DataFiles/TrainingText.json"),
};

const UpdateText = (req, res) => {
  const textID = req.params.id;
  const fileKey = req.params.file;
  const newText = req.body.text;
  const dataPath = textFiles[fileKey];

  if (!dataPath) {
    return res.status(401).json({ message: "File not found" });
  }

  let jsonData;
  try {
    jsonData = JSON.parse(fs.readFileSync(dataPath));
  } catch (err) {
    return res.status(500).json({ message: "Error reading file" });
  }

  const item = jsonData.find((item) => item.id === textID);

  if (item) {
    item.text = newText;
    fs.writeFileSync(dataPath, JSON.stringify(jsonData));
    return res.status(200).json({ message: "Text Updated Successfully" });
  }
  return res.status(401).json({ message: "Item Not Found" });
};

module.exports = {
  UpdateText,
};
