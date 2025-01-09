const mainSchema = require("../Models/mainData");
const aboutSchema = require("../Models/aboutData");
const inspectionsSchema = require("../Models/inspectionsData");
const trainingSchema = require("../Models/trainingData");
const footerSchema = require("../Models/footerData");
const gallerySchema = require("../Models/galleryData");
const contactusSchema = require("../Models/contactusData");
const approvalsSchema = require("../Models/approvalsData");

const models = {
  mainData: mainSchema,
  aboutData: aboutSchema,
  inspectionsData: inspectionsSchema,
  trainingData: trainingSchema,
  approvalsData: approvalsSchema,
  galleryData: gallerySchema,
  contactusData: contactusSchema,
  footerData: footerSchema,
};

const UpdateText = async (req, res) => {
  const { id, file, language } = req.params;
  const { text } = req.body;
  let schemaName = models[file];

  if (!schemaName) {
    return res.status(404).json({ message: "Collection not Found!" });
  }

  if (!language || (language !== "en" && language !== "ar")) {
    return res
      .status(400)
      .json({ message: "Invalid language. Please use 'en' or 'ar'." });
  }

  try {
    const element = await schemaName.findOne({ id: id });

    if (!element) {
      return res.status(404).json({ message: "Element did not update!" });
    }

    // Update the corresponding text field based on the language
    if (language === "en") {
      element.text = text; // Update the English text field
    } else if (language === "ar") {
      element.arText = text; // Update the Arabic text field
    }

    await element.save();

    return res.status(200).json({ message: "Text updated successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Error reading file" });
  }
};

module.exports = {
  UpdateText,
};
