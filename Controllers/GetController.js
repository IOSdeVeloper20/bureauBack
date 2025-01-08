const mainSchema = require("../Models/mainData");
const aboutSchema = require("../Models/aboutData");
const inspectionsSchema = require("../Models/inspectionsData");
const trainingSchema = require("../Models/trainingData");
const footerSchema = require("../Models/footerData");
const gallerySchema = require("../Models/galleryData");
const contactusSchema = require("../Models/contactusData");
const approvalsSchema = require("../Models/approvalsData");

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
    case "approvalsData":
      schemaName = approvalsSchema;
      break;
    case "galleryData":
      schemaName = gallerySchema;
      break;
    case "contactusData":
      schemaName = contactusSchema;
      break;
    case "footerData":
      schemaName = footerSchema;
      break;

    default:
      return res.status(404).json({ message: "File not found!" });
  }

  try {
    const data = await schemaName.find(query).sort({ orderID: 1 });

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
