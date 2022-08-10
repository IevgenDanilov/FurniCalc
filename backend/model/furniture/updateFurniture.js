const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "furniture.json");

const updateFurniture = async (newFurniture) => {
  await fs.writeFile(filePath, JSON.stringify(newFurniture));
};

module.exports = updateFurniture;
