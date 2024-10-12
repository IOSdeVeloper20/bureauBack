const mainSchema = require("../Models/mainData");
const aboutSchema = require("../Models/aboutData");
const inspectionsSchema = require("../Models/inspectionsData");
const trainingSchema = require("../Models/trainingData");

const getData = async (req, res) => {
  const fileKey = req.params.file;
  let query = {};
  let schemaName;

  switch (fileKey) {
    case "mainData":
      schemaName = mainSchema;
      break;
    case "aboutData":
      schemaName = aboutSchema;
      break;
    case "inspectionsData":
      schemaName = inspectionsSchema;
      break;
    case "trainingData":
      schemaName = trainingSchema;
      break;

    default:
      return res.status(404).json({ message: "File not found!" });
  }

  try {
    const data = await schemaName.find(query);

    if (!data) {
      return res.status(404).json({ message: "Data not found!" });
    }

    res.json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error getting data from Database!" });
  }
};

module.exports = { getData };
