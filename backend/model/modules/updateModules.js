const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "modules.json");

const updateModules = async (newModules) => {
  await fs.writeFile(filePath, JSON.stringify(newModules));
};

module.exports = updateModules;
