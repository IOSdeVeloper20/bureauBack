const mainSchema = require("../Models/mainData");
const aboutSchema = require("../Models/aboutData");
const inspectionsSchema = require("../Models/inspectionsData");
const trainingSchema = require("../Models/trainingData");

const models = {
  mainData: mainSchema,
  aboutData: aboutSchema,
  inspectionsData: inspectionsSchema,
  trainingData: trainingSchema,
};

const UpdateText = async (req, res) => {
  const { id, file } = req.params;
  const { text } = req.body;
  let schemaName = models[file];

  if (!schemaName) {
    return res.status(404).json({ message: "Collection not Found!" });
  }

  try {
    const element = await schemaName.findOne({id: id});
    
    if (!element) {
      return res.status(404).json({ message: "Element did not update!" });
    }
    element.text = text;
    await element.save();
    console.log("element:", element);

    return res.status(200).json({ message: "Text updated successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Error reading file" });
  }
};

module.exports = {
  UpdateText,
};
